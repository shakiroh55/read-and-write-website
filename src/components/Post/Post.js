import React from "react";
import { Link, Outlet } from "react-router-dom";
import Parag from "../Parag/Parag";
import Styles from "./Post.module.css";

function Post() {
  return (
    <>
      <div class={Styles.topCont}>
        <h2>Where does it come from</h2>
      </div>
      <div>
        <Parag />
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

export default Post;
