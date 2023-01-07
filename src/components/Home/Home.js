import React from "react";
import { Link, Outlet } from "react-router-dom";
import Styles from "./Home.module.css";
import Card from "../Card/Card";

function Home() {
  return (
    <>
      <div class={Styles.topCont}>
        <h2>Top Stories</h2>
      </div>
      <div className={Styles.TopHome}>
        <div className={Styles.Home}>
          <div>
            <Link to="/Post2" className={Styles.Link}>
              <Card />
            </Link>
          </div>
          <div>
            <Link to="/Post2" className={Styles.Link}>
              <Card />
            </Link>
          </div>
          <div>
            <Link to="/Post2" className={Styles.Link}>
              <Card />
            </Link>
          </div>
          <div>
            <Link to="/Post2" className={Styles.Link}>
              <Card />
            </Link>
          </div>
        </div>
        <div className={Styles.Home2}>
          <div>
            <Link to="/Post2" className={Styles.Link}>
              <Card />
            </Link>
          </div>
          <div>
            <Link to="/Post2" className={Styles.Link}>
              <Card />
            </Link>
          </div>
          <div>
            <Link to="/Post2" className={Styles.Link}>
              <Card />
            </Link>
          </div>
          <div>
            <Link to="/Post2" className={Styles.Link}>
              <Card />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
