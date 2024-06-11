import React from "react";
import styles from './Task.module.scss'
import { ITask } from "../model/type/ITask";
import { useAppDispatch } from "../../../app/store/store";
import { switchToTaskManagement } from "../../../widgets/modal/model/modalSlice";
interface ITaskProps {
    task: ITask;
}

function Task({ task }: ITaskProps) {
    const dispatch = useAppDispatch()

    const handleTaskManagement = () => {
        dispatch(switchToTaskManagement(task));
    }

    return (
        <li onClick={handleTaskManagement} className={styles.task}>
            <p className={`${styles.task__text} ${task.status ? `${styles.task__text_done}` : ''}`}>{task.title}</p>
        </li >
    )
}

export default Task;