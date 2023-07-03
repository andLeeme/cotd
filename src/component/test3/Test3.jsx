
import { Link } from "react-router-dom";
import styles from "./test3.module.css";
import React, { useEffect } from 'react';
import axios from 'axios';

export const Test3 = ({ testWord, setTestWord }) => {


  const changeState = () => {

    setTestWord(testWord+1)
  }


  //npm install axios


  //get 
  useEffect(() => {
    axios.get("/api/main").then((data) => {
      console.log(data)
    });
  }, []);


    //post
  useEffect(() => {

      axios({
        url: "/api/cartList",
        method: 'post',
        data: { userid : 'rarara773' }
      })
        .then(function a(response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });


    }, []);


  return (
    <>
      <div className={styles.testClass}>

        테스트 3번 페이지 입니다


      </div>
      <div>
      스테이트 : {testWord}
      </div>


      <button onClick={() => { changeState() }}>
        스테이트 갱신
      </button>



      <Link to="/" testWord = { testWord }>
        <button>
          메인으로 돌아가기
        </button>
      </Link>

    </>
  );
};

