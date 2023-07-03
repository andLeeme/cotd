
import { Link, useNavigate } from "react-router-dom";
import React from 'react';

export const Test2 = () => {

  const nav = useNavigate()


  const nav2 = () => {
    if(false)
    nav('/test4')
  }


  return (
    <>
<Link to={'/'}>
안녕
</Link>

<div onClick={() => { nav2()}}>
  안녕하세요
</div>
    </>
  );
};

