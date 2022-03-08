import React from 'react'
import styles from './work.module.scss'
import { IWork } from '../cvData';

type WorkProps = {
    workItem: IWork;
}

const Work: React.FC<WorkProps> = ({ workItem }) => {
  return (
    <div key={workItem.key} className={styles.workItem}>
        <h3>{workItem.workTitle}</h3>
        <h5>{workItem.workPlace}</h5>
        <p>{workItem.workStart} {' > '} {workItem.workEnd}</p>
    </div>
    )
}

export default Work
