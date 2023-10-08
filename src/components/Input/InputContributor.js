import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Input.module.css"



function InputContributor() {
  const [formData, setFormData] = useState({
    title: '',
    message: ''
  })
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setList([...list, formData])
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }



  return (
    <div>
      <div class={Styles.topCont}>
        <h2>New Post</h2>
      </div>
      <div class={Styles.titleCont}>
        <div>
          <h4>Title</h4>
          <form action="">

            <input type="text" onChange={handleChange} value={formData.title} name="title" id="" class={Styles.input1} />
          </form>
        </div>
        <div>
          <h4>Article</h4>
          <h3 class={Styles.inputTop}>B   S   %   $</h3>
          <form action="">
            <textarea name="message" class={Styles.input2} onChange={handleChange} value={formData.message}  id="" cols="30" rows="10">Start Writing</textarea>
          </form>
          <h3 class={Styles.inputBottom}>CHARS:0  WORDS:0  POWERED BY:OOU</h3>
        </div>
        <div>
          <Link to="/Posts" className={Styles.Link}><button type='submit' onClick={handleSubmit} >Publish</button></Link>
        </div>
      </div>
    </div>
  )
}

export default InputContributor