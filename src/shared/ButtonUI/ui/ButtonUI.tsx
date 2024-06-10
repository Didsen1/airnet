import React, { ReactNode } from "react";
import styles from './ButtonUI.module.scss'

interface ButtonUIProps {
    buttonText: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonUI({ buttonText, className, onClick }: ButtonUIProps) {
    return (
        <button onClick={onClick} aria-label={`кнопка ${buttonText}`} type="button" className={`${styles.ButtonUI} ${className}`}> {buttonText}</button >
    )
}

export default ButtonUI