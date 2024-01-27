import React, { ReactNode } from 'react'
import style from "./task.module.css";

type Props = {
    children: ReactNode
}

const Tasks = ({ children }: Props) => {
    return (
        <div
            className={`${style.task} p-4 w-full h-full bg-colorBg2 dark:bg-colorBg2Dark border border-borderColor2 rounded-md overflow-y-auto`}
        >{children}</div>
    )
}

export default Tasks