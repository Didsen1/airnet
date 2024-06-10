import React, { useEffect } from "react";
import TaskList from "../../../features/TaskList";
import TaskCreation from "../../../features/TaskCreation";
import TaskManagement from "../../../features/TaskManagement";
import styles from './Modal.module.scss'
import { RootState, useAppDispatch } from "../../../app/store/store";
import { closeModal, switchTotaskList } from "../model/modalSlice";
import { useSelector } from "react-redux";

function Modal() {
    const { isOpen, viewMode } = useSelector((state: RootState) => state.modal)
    const dispatch = useAppDispatch();

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    const handleBackButton = () => {
        dispatch(switchTotaskList())
    }

    const views = {
        'TaskList': <TaskList />,
        'TaskCreation': <TaskCreation />,
        'TaskManagement': <TaskManagement />
    }

    return (
        <section className={`${styles.modal} ${isOpen ? ` ${styles.modal_open}` : ``}`}>
            <div className={`${styles.modal__container} ${isOpen ? `${styles.modal__container_open}` : ``}`}>
                <div className={styles.modal__buttonWrapper}>
                    <button onClick={handleBackButton} aria-label='Кнопка назад' type="button"
                        className={`${styles.modal__BackButton} ${styles.modal__button} ${viewMode === 'TaskList' ? `${styles.modal__BackButton_Off}` : ``}`}></button>
                    <button onClick={handleCloseModal} aria-label='кнопка закрыть' type="button" className={`${styles.modal__CloseButton} ${styles.modal__button}`}></button>
                </div>
                {views[viewMode]}
            </div>
        </section >
    )
}

export default Modal;