import React from 'react'
import "./components/css/containerWhite.css"
import "./components/css/projets.css"
import "./ii2d/ii2d_primitive.js"
import "./ii2d/ii2d_particle.js"
import "./ii2d/ii2d_engine.js"
import "./ii2d/ii2d_main.js"
import "./ii2d/ii2d_obstacle.js"
import logoGB from './components/img/logoGB.png'
import nuitinfo19 from './components/img/nuit2info19.png'
export default () => {
  return(
    <div id="container">
      <div id="liensVersProjets">
        <a href = "http://51.83.255.96/" target = "_blank" > <img src={nuitinfo19} id="contenu" /> </a>
        <img src={logoGB} width='150vw' height='150VH' style={{position:'absolute'}} id="contenu"/>
      </div>
      <div id="explicationsProjet">
        <div id="explication_nuitInfo">
          Je me suis occupé de la version Front (très rapidement) à l'aide de HTML/CSS(Bootstrap)
          et de défis tels que le Gif (entièrement) et le <a href="http://51.83.255.96/ndinfo19/minigame.html" target="_blank">jeux 404</a> (une partie)
        </div>

      </div>
    </div>

  )
}
