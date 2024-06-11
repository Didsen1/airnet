import React from "react";
import TaskUI from "../../../shared/TaskUI";
import ButtonUI from "../../../shared/ButtonUI";
import styles from './TaskManagement.module.scss'
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../app/store/store";
import { deleteTask, markTaskAsDone } from "../../../widgets/calendar/model/calendarSlice";
import { switchTotaskList } from "../../../widgets/modal/model/modalSlice";

function TaskManagement() {
    const dispatch = useAppDispatch();
    const selectedTask = useSelector((state: RootState) => state.modal.selectedTask);


    const handleDoTaskDone = () => {
        if (selectedTask) {
            const taskId = selectedTask.id
            const dayIndex = selectedTask.dayIndex
            dispatch(markTaskAsDone({ taskId, dayIndex }))
            dispatch(switchTotaskList())
        }
    }

    const handleDeleteTask = () => {
        if (selectedTask) {
            const taskId = selectedTask.id
            const dayIndex = selectedTask.dayIndex
            dispatch(deleteTask({ taskId, dayIndex }))
            dispatch(switchTotaskList())
        }
    }

    return (
        <TaskUI
            titleChilds={
                <>
                    <p className={styles.taskManagement__label}>Краткое название задачи</p>
                    <p className={styles.taskManagement__textArea}>{selectedTask?.title ?? ''}</p>
                </>
            }
            descriptionChilds={
                <>
                    <p className={styles.taskManagement__label}>Описание задачи</p>
                    <p className={styles.taskManagement__textArea}>{selectedTask?.description ?? ''}</p>
                </>
            }
            buttonChilds={
                <>
                    <ButtonUI onClick={handleDoTaskDone} className={styles.taskManagement__button} buttonText={`${selectedTask?.status ? 'В работу' : 'Выполнить'}`} />
                    <ButtonUI onClick={handleDeleteTask} className={styles.taskManagement__button} buttonText={'Удалить'} />
                </>

            }
        />
    )
}

export default TaskManagement;