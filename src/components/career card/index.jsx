import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';

const CareerCard = ({ cargo, area, workspace }) => { //Props passadas ao componente para que se adeque a cada Card
    return (
        <Link href={'/form'}><article className={styles.article}>
            <div className={styles.center}>
                <h1 className={styles.title}>{cargo}</h1>
                <div className={styles.tags}>
                    <div className={styles.area}>{area}</div>
                    <div className={styles.workspace}>{workspace}</div>
                </div>
            </div>
        </article>
        </Link>
    );
}

export default CareerCard;