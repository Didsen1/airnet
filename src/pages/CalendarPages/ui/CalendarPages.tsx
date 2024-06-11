import React from "react";
import Calendar from "../../../widgets/calendar";
import styles from './CalendarPages.module.scss'
import Modal from "../../../widgets/modal";

function CalendarPages() {
    return (
        <>
            <Modal />
            <main className={styles.calendarPages__main}>
                <Calendar />
            </main>
        </>
    );
}

export default CalendarPages;