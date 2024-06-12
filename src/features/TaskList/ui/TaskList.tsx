import React from "react";
import Task from "../../Task";
import ButtonUI from "../../../shared/ButtonUI";
import styles from './TaskList.module.scss'
import { RootState, useAppDispatch } from "../../../app/store/store";
import { switchToTaskCreation } from "../../../widgets/Modal/model/modalSlice";
import { useSelector } from "react-redux";


function TaskList() {
    const dispatch = useAppDispatch();
    const { dayIndex } = useSelector((state: RootState) => state.modal);
    const tasks = useSelector((state: RootState) => {
        const day = state.calendar.days.find(day => day.date === dayIndex);
        return day ? day.tasks : [];
    })

    const handleCreateTask = () => {
        dispatch(switchToTaskCreation())
    }

    return (
        <>
            {tasks.length === 0 ?
                <ul className={styles.taskList__taskWrapper}>
                    <p className={styles.taskList__noTaskBanner}>А тут пусто, пора создать задачу ?</p>
                </ul>
                :
                <ul className={styles.taskList__taskWrapper}>
                    {
                        tasks.map((task, index) => <Task key={index} task={task} />)
                    }
                </ul>

            }
            <ButtonUI onClick={handleCreateTask} className={styles.taskList__button} buttonText={'Создать'} />

        </>
    )
};

export default TaskList;