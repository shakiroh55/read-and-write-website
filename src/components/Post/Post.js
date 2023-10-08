import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Parag from "../Parag/Parag";
import Styles from "./Post.module.css";
import "../Input/InputContributor"



function Post() {
  const [formData, setFormData] = useState({
    title: '',
    message: ''
  })
  const [list, setList] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    setList([...list, formData])
  }
  return (
    <>
      <div class={Styles.topCont}>
      {list.map((item, index) => {
        return (
        <div key={index}>
          <h2>{item.title}</h2>
        </div>
        )
    })}
       
      
      </div>
      <div>
        <Parag />
      </div>
      <div class={Styles.editbutton}>
        <Link to="/Adds" className={Styles.Link}>
          <button class={Styles.btn1} type='submit' onClick={handleSubmit}>EDIT</button>
        </Link>
        <Link to="/Homes">
          <button class={Styles.btn2} type='submit' onClick={handleSubmit}>DELETE</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Post;
