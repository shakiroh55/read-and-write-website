import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Parag2 from "../Parag/Parag2";
import Styles from "./Post.module.css";

function Post2() {
  return (
    <>
      <Header/>
      <div class={Styles.topCont}>
        <h2>A new Post</h2>
      </div>
      <div>
        <Parag2 />
      </div>
      <div class={Styles.editbutton}>
        <Link to="/Adds" className={Styles.Link}>
          <button class={Styles.btn1}>EDIT</button>
        </Link>
        <Link to="/Homes">
          <button class={Styles.btn2}>DELETE</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Post2;
