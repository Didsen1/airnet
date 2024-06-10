import React, { ReactNode } from "react";
import styles from './TaskUI.module.scss'

interface ITaskUIProps {
    titleChilds: ReactNode;
    descriptionChilds: ReactNode;
    buttonChilds: ReactNode;
}

function TaskUI({ titleChilds, descriptionChilds, buttonChilds }: ITaskUIProps) {
    return (
        <div className={styles.TaskManagement}>
            <div className={`${styles.TaskManagement__Wrapper} ${styles.TaskManagement__textArea_title}`}>
                {titleChilds}
            </div>
            <div className={`${styles.TaskManagement__Wrapper} ${styles.TaskManagement__textArea_description}`}>
                {descriptionChilds}
            </div>
            <div className={styles.TaskManagement__buttonWrapper}>
                {buttonChilds}
            </div>
        </div>
    );
}

export default TaskUI