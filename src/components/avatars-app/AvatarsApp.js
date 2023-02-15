import React from "react";
import { useState } from "react";
import AddAvatarBtn from "../add-avatar-btn/AddAvatarBtn";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import Avatar from "../avatar/Avatar";
import styles from "./styles.module.css";
import { ModalContext } from "../../contexts/ModalContext";
import { AvatarContext } from "../../contexts/AvatarContext";
import AvatarService from "../../services/AvatarService";

const avatarService = new AvatarService();

function AvatarsApp() {
  const [renderAvatars, setRenderAvatars] = useState([]);
  const [showModal, setShowModal] = useState({
    isShowModal: false,
    modalText: "hi there 👋🏻",
  });
  const [avatarState, setAvatarState] = useState(false);

  async function showErrorModal(errorText) {
    setShowModal({
      isShowModal: true,
      modalText: errorText,
    });
  }

  async function addAvatar() {
    try {
      setRenderAvatars(
        renderAvatars.concat(await avatarService.getNewAvatars())
      );
      setAvatarState(true);
    } catch (error) {
      showErrorModal(
        `REQUEST for adding a new tile was failed: ${error.message}`
      );
    }
  }

  async function changeAvatar(e) {
    try {
      e.currentTarget?.childNodes[1]?.setAttribute(
        "src",
        `${(await avatarService.getNewAvatars())[0].url}`
      );
    } catch (error) {
      showErrorModal(
        `REQUEST for updating the tile was failed: ${error.message}`
      );
    }
  }

  async function refreshAllAvatars() {
    if (!renderAvatars.length) {
      showErrorModal("Please add at least one tile FOR refreshing all tiles");
    }
    try {
      setRenderAvatars(await avatarService.getNewAvatars(renderAvatars.length));
    } catch (error) {
      showErrorModal(
        `REQUEST for refreshing the tiles was failed: ${error.message}`
      );
    }
  }

  return (
    <>
      <div className={styles.container}>
        <AvatarContext.Provider value={{ avatarState, setAvatarState }}>
          {renderAvatars.map((a) => (
            <Avatar
              key={a.id}
              onClickFunction={changeAvatar}
              avatarUrl={a.url}
              avatarId={a.id}
            ></Avatar>
          ))}
          <AddAvatarBtn
            disabled={avatarState}
            onClickFunction={addAvatar}
          ></AddAvatarBtn>
        </AvatarContext.Provider>
        <Button
          onClick={refreshAllAvatars}
          buttonText={`refresh all${
            renderAvatars.length <= 0 ? "" : ` (${renderAvatars.length})`
          }`}
          extraClass={styles.fixed}
        ></Button>
      </div>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        <Modal>{showModal.modalText}</Modal>
      </ModalContext.Provider>
    </>
  );
}

export default AvatarsApp;
