import React from "react";
import Task from "../../../entities/task";
import ButtonUI from "../../../shared/ButtonUI";
import styles from './TaskList.module.scss'
import { RootState, useAppDispatch } from "../../../app/store/store";
import { switchToTaskCreation } from "../../../widgets/modal/model/modalSlice";
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
                <div className={styles.TaskList__taskWrapper}>
                    <p className={styles.TaskList__noTaskBanner}>А тут пусто, пора создать задачу ?</p>
                </div>
                :
                <div className={styles.TaskList__taskWrapper}>
                    {
                        tasks.map((task, index) => <Task key={index} task={task} />)
                    }
                </div>

            }
            <ButtonUI onClick={handleCreateTask} className={styles.TaskList__button} buttonText={'Создать'} />

        </>
    )
};

export default TaskList;