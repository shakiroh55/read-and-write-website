import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Input.module.css"

function InputContributor() {
  return (
    <div>
        <div class={Styles.topCont}>
          <h2>New Post</h2>
        </div>
        <div class={Styles.titleCont}>
          <div>
              <h4>Title</h4>
              <input type="text" class={Styles.input1} />
          </div>
          <div>
              <h4>Article</h4>
              <h3 class={Styles.inputTop}>B   S   %   $</h3>
              <textarea class={Styles.input2} >Start Writing</textarea>
              <h3 class={Styles.inputBottom}>CHARS:0  WORDS:0  POWERED BY:OOU</h3>
          </div>
          <div>
            <Link to="/Posts" className={Styles.Link}><button>Publish</button></Link>
          </div>
        </div>
    </div>
  )
}

export default InputContributor