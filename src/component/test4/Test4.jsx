
import { Link } from "react-router-dom";
import styles from "./test4.module.css";
import React from 'react';

export const Test4 = ({ testWord, setTestWord  }) => {


  const changeState = () => {

    setTestWord("테스트4번 페이지 다녀옴")
  }


  return (
    <>
      <div className={styles.testClass}>

        테스트 4번 페이지 입니다


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

