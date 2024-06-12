import React from "react";
import { RootState, useAppDispatch } from "../../../app/store/store";
import styles from './Day.module.scss'
import { openModal } from "../../../widgets/Modal/model/modalSlice";
import { useSelector } from "react-redux";
import { selectTasksByDate } from "../../../widgets/Calendar/model/calendarSlice";

interface IDayProps {
    dayIndex: string;
    isDayOff: boolean;
}

function Day({ dayIndex, isDayOff }: IDayProps) {
    const tasks = useSelector((state: RootState) => selectTasksByDate(state, dayIndex))
    const dispatch = useAppDispatch();

    const handleOpenModal = () => {
        dispatch(openModal({ tasks, dayIndex }))
    }

    const formDate = (dayIndex: string) => {
        return dayIndex.slice(6, 8)
    }

    return (
        <div className={styles.day} onClick={handleOpenModal}>
            <p className={isDayOff ? `${styles.day__date} ${styles.day__date_dayOff}` : styles.day__date}>{formDate(dayIndex)}</p>
            {
                tasks.length > 0 ? <p className={styles.day__taskCounter}>{`Задач: ${tasks.length}`}</p> : ''
            }
        </div>
    );
}

export default Day;