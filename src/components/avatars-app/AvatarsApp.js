import React from 'react';
import axios from 'axios';
import { useState } from "react";
import AddAvatarBtn from '../add-avatar-btn/AddAvatarBtn';
import Button from '../button/button';
import Modal from '../modal/modal';
import Avatar from '../avatar/Avatar';
import styles from './styles.module.css';
import { ModalContext } from '../../contexts/ModalContext';
import { AvatarContext } from '../../contexts/AvatarContext';


let newAvatars = [];
let avatarsUsed = 0;

function AvatarsApp() {

  const [renderAvatars, setRenderAvatars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('hi there 👋🏻');
  const [avatarState, setAvatarState] = useState(false);

  async function getAvatars() {
    let response = await axios.get('https://tinyfac.es/api/data?limit=50&quality=0')
    return response.data
  }

  async function getNewAvatars(count = 1) {
    const res = [];
    while (count) {
      if (newAvatars.length <= avatarsUsed) {
        newAvatars = await getAvatars();
        avatarsUsed = 0;
      }
      res.push(newAvatars[avatarsUsed++]);
      count--
    }
    return res
  }

  async function addAvatar() {
    try {
      setRenderAvatars(renderAvatars.concat(await getNewAvatars()));
      setAvatarState(true);
      // throw new Error("Something's gone wrong with adding the new tile");
    }
    catch (error) {
      setShowModal(!showModal);
      setModalMessage(`REQUEST for adding a new tile was failed: ${error.message}`);
    }
  }

  async function changeAvatar(e) {
    try {
      e.currentTarget?.childNodes[1]?.setAttribute("src", `${(await getNewAvatars())[0].url}`);
      // throw new Error("Something's gone wrong with changing the tile");
    }
    catch (error) {
      setShowModal(!showModal);
      setModalMessage(`REQUEST for Updating the tile was failed: ${error.message}`);
    }
  }

  async function refresh() {
    if (!renderAvatars.length) {
      setShowModal(!showModal);
      setModalMessage('Please add at least one tile FOR refreshING all tiles');
    }
    setRenderAvatars(await getNewAvatars(renderAvatars.length));
  }

  return (
    <>
      <div className={styles.container} >
        <AvatarContext.Provider value={{ avatarState, setAvatarState }} >
          {renderAvatars.map(a =>
            <Avatar key={a.id} onClickFunction={changeAvatar} avatarUrl={a.url} avatarId={a.id}></Avatar>
          )}
          <AddAvatarBtn disabled={avatarState} onClickFunction={addAvatar}></AddAvatarBtn>
        </AvatarContext.Provider>
        <Button onClick={refresh} buttonText={`refresh all${renderAvatars.length <= 0 ? '' : ` (${renderAvatars.length})`}`} extraClass={styles.fixed}></Button>
      </div>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        <Modal>{modalMessage}</Modal>
      </ModalContext.Provider>
    </>
  );
}

export default AvatarsApp;