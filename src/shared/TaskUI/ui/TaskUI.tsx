import React, { ReactNode } from "react";
import styles from './TaskUI.module.scss'

interface ITaskUIProps {
    titleChilds: ReactNode;
    descriptionChilds: ReactNode;
    buttonChilds: ReactNode;
}

function TaskUI({ titleChilds, descriptionChilds, buttonChilds }: ITaskUIProps) {
    return (
        <div className={styles.taskUI}>
            <div className={`${styles.taskUI__Wrapper} ${styles.taskUI__textArea_title}`}>
                {titleChilds}
            </div>
            <div className={`${styles.taskUI__Wrapper} ${styles.taskUI__textArea_description}`}>
                {descriptionChilds}
            </div>
            <div className={styles.taskUI__buttonWrapper}>
                {buttonChilds}
            </div>
        </div>
    );
}

export default TaskUI