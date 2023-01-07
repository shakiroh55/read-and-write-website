import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Input.module.css"
function Input() {
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
              <textarea class={Styles.input2} >Bacon ipsum dolor amet chicken turducken sausage, jowl shank drumstick spare ribs pig boudin pastrami. Beef kevin tail ribeye bacon jowl bresaola. Strip steak meatioaf bresaola short ribs pork belly doner. Proscuitto t-bone tongue bail tip.Pork ribeye prosciutto bacon short loin sausage cupim shoulder swine beef drumstick frankfurter biltong. Andouille ham porchetta pincanha rumo beef ribs shankle cow cupim hamburger.Flank beef ribs tongue picanha. Beef frankfurter cupim. Shoulder fillet mignon beef ribs leberkas capicola tenderoin ribeye corned beef pastrami ham. Kieibasa pig beef short ioin shoulder sirfoin andouille capicola, jowl fatback chuck ham beef ribs bacon ribeye kevin cupim ground round t-bone meatioaf turkey short loin. Kieibasa doner pork ioin, cupim t-bone salami venison biitong shoulder sirioin short loin tain chislic
              </textarea>
              <h3 class={Styles.inputBottom}>CHARS:0  WORDS:0  POWERED BY:OOU</h3>
          </div>
          <div>
            <Link to="/Posts" className={Styles.Link}><button>Publish</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Input