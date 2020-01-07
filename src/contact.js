import React from 'react'
import './components/css/containerWhite.css'
import './components/css/contact.css'

import imgLinkedin from "./components/img/logoLinkedin.png"
import imgMail from "./components/img/logomail.png"
import imgGit from "./components/img/logoGit.png"
export default function (){
    return(
      <div id="container">
        <div id="containerAligner">
          <div id="containerGrow">
            <img src={imgLinkedin} id='img' />
            <a href="https://www.linkedin.com/in/ga%C3%ABl-bricout-1b6957187/" id="linkContact">Gaël Bricout</a>
          </div>
          <div id="containerGrowGIT">
            <img src={imgGit} width='160vw' height="160vw" id="imgGit"/>
            <a href="https://github.com/gaelbrct59/" id="gitLinkToAppear"> gaelbrct59 </a>
          </div>
          <div id="containerGrowMail">
            <img src={imgMail} id='img' />
            <a id="mail">gael.bricout@laposte.net</a>
          </div>
        </div>
      </div>
    )


}
