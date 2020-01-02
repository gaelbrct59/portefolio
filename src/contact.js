import React from 'react'
import './components/css/containerWhite.css'
import './components/css/contact.css'

import imgLinkedin from "./components/img/logoLinkedin.png"
import imgMail from "./components/img/logomail.png"
export default function (){
    return(
      <div id="container">
        <div id="containerGrow">
          <img src={imgLinkedin} width='180vw' height='160vw' id='img' />
          <a href="https://www.linkedin.com/in/ga%C3%ABl-bricout-1b6957187/" id="linkContact">Gaël Bricout</a>
        </div>
        <div id="containerGrowMail">
          <img src={imgMail} width='180vw' height='160vw' id='img' />
          <a id="mail">gael.bricout@laposte.net</a>
        </div>
      </div>
    )


}
