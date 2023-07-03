
import styles from "./Recipe.module.css";
import React from 'react';


export const Recipe = ({}) => {
    return (
        <div className={styles.background}>
            <div className={styles.photoCase}>
                <div className={styles.photo}>  </div>
                <div className={styles.likes}>♥ 328</div>
            </div>
            <div className={styles.recipeContents}>
                <div className={styles.ingredients}>재료: </div>
                <div className={styles.method}>만드는 법: </div>
            </div>
        </div>
    );
};