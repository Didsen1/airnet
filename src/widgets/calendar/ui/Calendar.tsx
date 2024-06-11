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

    const monthsName: { [key: string]: string } = {
        '1': 'Январь',
        '2': 'Февраль',
        '3': 'Март',
        '4': 'Апрель',
        '5': 'Май',
        '6': 'Июнь',
        '7': 'Июль',
        '8': 'Август',
        '9': 'Сентябрь',
        '10': 'Октябрь',
        '11': 'Ноябрь',
        '12': 'Декабрь'
    };

    const currentMonth = (): string => {
        let number = new Date().getMonth() + 1;
        return monthsName[number.toString()] + " " + new Date().getFullYear();
    }

    useEffect(() => {
        dispatch(initializeMonth());
    }, [dispatch])

    return (
        <>
            <header className={styles.calendarTitle}>{currentMonth()}</header>
            <section className={styles.calendar}>

                {days.map(day => (
                    <Day key={day.date} dayIndex={day.date} isDayOff={day.isDayOff} />
                ))}
            </section>
        </>
    );
}

export default Calendar;