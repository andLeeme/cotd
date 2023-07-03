

import styles from "../Cabinet/Cabinet.module.css";
import React from 'react';
import axios from 'axios';
import { Search } from "./Search"
import { Item } from "./Item"

export const Cabinet = ({ allIngredient, setAllIngredient , ingredient, setIngredient}) => {

 // const [ingredient, setIngredient] = useState([]);
  const user_id = "1";

  // useEffect(() => {
  //   if (user_id !== null) {
  //     axios({
  //       url: "/api/item",
  //       method: 'post',
  //       data: { user_id: user_id }
  //     })
  //       .then(function a(response) {
  //         console.log(response)
  //         setIngredient(response.data)
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // }, [setIngredient]);

  // const additem = {
  //   ingredient_name: "추가된 아이템1",
  //   img_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Empty_set_symbol.svg/123px-Empty_set_symbol.svg.png"
  // };


  // const addItem = () => {

  //   // 깊은 복사하고(...ingredient) 새로 넣어주기
  //   setIngredient([...ingredient, additem])

  // };

  const deleteItem = (name) => {
    setIngredient(ingredient.filter((item) => item.ingredient_name !== name))

  };

  const deleteItemDB = (name) => {

    if (user_id !== null) {
      axios({
        url: "/api/itemDelete",
        method: 'post',
        data: { user_id: user_id, ingredient_name: name }
      })
        .then(function a(response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }



  return (
    <div className={styles.case}>
      <Search ingredient={ingredient} setIngredient = {setIngredient} allIngredient={allIngredient} setAllIngredient={setAllIngredient}/>
      {/* <button onClick={() => { addItem()} }>추가</button> */}

      {/* 추가될 때마다 key(i)도 계속 늘어남 */}
      {ingredient.map((item, i) => {
        return (

          <Item ingredient={item} setIngredient={setIngredient} ingNum={i} deleteItem={deleteItem} deleteItemDB={deleteItemDB} key={i} />
)
      }
      )}
    </div>
  );
};