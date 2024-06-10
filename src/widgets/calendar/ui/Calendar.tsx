import React, { useEffect } from "react";
import styles from './Calendar.module.scss'
import { useAppDispatch } from "../../../app/store/store";
import { useSelector } from "react-redux";
import { selectDats } from "../model/calendarSlice";
import { initializeMonth } from "../model/calendarSlice";
import Day from "../../../features/Day";

function Calendar() {
    const dispatch = useAppDispatch();
    const days = useSelector(selectDats)

    useEffect(() => {
        dispatch(initializeMonth());
    }, [dispatch])

    return (
        <div className={styles.Calendar}>

            {days.map(day => (
                <Day key={day.date} dayIndex={day.date} isDayOff={day.isDayOff}/>
            ))}
        </div>
    );
}

export default Calendar;