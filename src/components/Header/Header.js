import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Header.module.css";

function Header() {
  const name = "Read & Write";
  return (
    <>
      <header className={Styles.headers}>
        <div className={Styles.childHeader}>
          <Link to="/Homes" className={Styles.Link}>
            <div className={Styles.readMe}>
              <h1>{name}</h1>
            </div>
          </Link>
          <div>
            <Link to="/AddsContributor" className={Styles.Link}>
              <button className={Styles.btns}>Be a contributor</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
