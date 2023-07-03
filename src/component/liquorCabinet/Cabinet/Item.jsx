
import styles from "../Cabinet/Item.module.css";
import React from 'react';


export const Item = ({ ingredient, setIngredient, ingNum, deleteItem, deleteItemDB }) => {


    return (
        <>
            <div className={styles.itemBackground} >
                <div className={styles.name}>{ingredient.ingredient_name}</div>
                <div className={styles.photoDiv}>
                    <img src={ingredient.img_path} className={styles.photo} alt={ingredient.ingredient_name}></img>
                </div>
                <button className={styles.deleteBtn} onClick={() => { deleteItem(ingredient.ingredient_name); deleteItemDB(ingredient.ingredient_name);  } }> 삭제
                 </button>
            </div>

        </>
    );
};