
import styles from "./Main.module.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Main = ({ testWord, setTestWord }) => {


  const navigate = useNavigate();

  const changeState = () => {

    setTestWord(testWord+1)
  }

  return (
    <>
      <div>
        <button id={styles.test1} onClick={()=>{navigate('/test1')}}>
          클릭! 1
        </button>
      </div>
      <div>
        <button id={styles.test2} onClick={()=>{navigate('/test2')}}>
          클릭! 2
        </button>
      </div>
      <div>
        <button id={styles.test3} onClick={()=>{navigate('/test3')}}>
          클릭! 3
        </button>
      </div>
      <div>
        <button id={styles.test4}  onClick={()=>{navigate('/test4')}}>
          클릭! 4
        </button>
      </div>

      <div>
        <button id={styles.test5}  onClick={()=>{navigate('/liquorCabinet')}}>
          내 술장
        </button>
      </div>

      
      <button onClick={() => { changeState() }}>
        스테이트 갱신
      </button>
      <div>
        스테이트 : {testWord}
      </div>

    </>
  );
};

