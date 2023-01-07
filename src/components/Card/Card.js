import React from "react";
import Styles from "./Card.module.css"
function Card() {
  return (
    <div className={Styles.first}>
      <h3 class={Styles.origin}>Where does it come from</h3>
      <p class={Styles.lorem}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown.
      </p>
      <h4 class={Styles.aug}>17 Aug, 2021</h4>
    </div>
  );
}

export default Card;
