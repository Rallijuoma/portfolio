import React from 'react';
import styles from './education.module.scss';
import { IEducation } from '../cvData';

type EducationProps = {
    eduItem: IEducation;
}

const Education: React.FC<EducationProps> = ({ eduItem }) => {
  return (
    <div key={eduItem.key} className={styles.eduItem}>
        <h3>{eduItem.schoolType}</h3>
        <h5>{eduItem.schoolName}</h5>
        <p>{eduItem.eduStart} {' > '} {eduItem.eduEnd}</p>
    </div>
  )
}

export default Education
