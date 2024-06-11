import React, { useEffect, useState } from "react";
import TaskUI from "../../../shared/TaskUI";
import ButtonUI from "../../../shared/ButtonUI";
import styles from './TaskCreation.module.scss'
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../app/store/store";
import { addTask } from "../../../widgets/calendar/model/calendarSlice";
import { switchTotaskList } from "../../../widgets/modal/model/modalSlice";

function TaskCreation() {
    const { dayIndex } = useSelector((state: RootState) => state.modal)
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleCreateTask = () => {
        const newTask = {
            id: `${dayIndex}` + Date.now().toString(),
            title,
            description,
            status: false,
            dayIndex: `${dayIndex}`,
        }
        dispatch(addTask({ dayIndex, task: newTask }))
        dispatch(switchTotaskList())
    }


    return (
        <TaskUI
            titleChilds={
                <>
                    <textarea onChange={(e) => setTitle(e.target.value)} placeholder="Название задачи" aria-label="Название задачи" className={`${styles.taskCreation__textArea} ${styles.taskCreation__textArea_title}`}></textarea>
                </>
            }
            descriptionChilds={
                <>
                    <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Опишите задачу" aria-label="Описание задачи" className={`${styles.taskCreation__textArea} ${styles.taskCreation__textArea_depiction}`}></textarea>
                </>
            }
            buttonChilds={
                <>
                    <ButtonUI onClick={handleCreateTask} className={styles.taskCreation__button} buttonText={'Создать'} />
                </>

            }
        />
    )
}

export default TaskCreation;