import React, { useContext } from "react";
import styles from './styles.module.css';
import ReactDOM from 'react-dom';
import Button from "../button/button";
import { ModalContext } from "../../contexts/ModalContext";


const modalPlaceholder = document.getElementById('modal-root');

const Backdrop = (props) => {
    const { showModal, setShowModal } = useContext(ModalContext);

    return (
        <div className={`${styles.backdrop} ${showModal ? '' : `${styles.isHidden}`}`} onClick={() => setShowModal(!showModal)}>{props.children}</div>
    )
}

const ModalOverlay = (props) => {
    const { showModal } = useContext(ModalContext);

    return (
        <div className={`${styles.modal} ${showModal ? '' : `${styles.isHidden}`}`}>
            <span className={styles.message}>{props.message}</span>
            {props.children}</div>
    )
}

export default function Modal(props) {
    const { showModal, setShowModal } = useContext(ModalContext);

    return (
        <>
            {ReactDOM.createPortal(
                <>
                    <Backdrop />
                    <ModalOverlay isActive={showModal} message={props.children}>
                        <Button onClick={() => setShowModal(!showModal)} buttonText={'close'}></Button>
                    </ModalOverlay>
                </>
                ,
                modalPlaceholder
            )}
        </>
    )
}