import React from 'react'
import "./components/css/containerWhite.css"
import "./components/css/projets.css"

import logoGB from './components/img/logoGB.png'
import nuitinfo19 from './components/img/nuit2info19.png'
import ggleHashCode19 from './components/img/logo_hash_code.jpg'
export default () => {
  return(
    <div id="container">
      <div id="liensVersProjets">
        <a href = "http://51.83.255.96/" target = "_blank" > <img src={nuitinfo19} id="contenu" /> </a>
        <a href ="https://www.tomsguide.fr/le-concours-google-hash-code-est-de-retour/" target="_blank"> <img src={ggleHashCode19} id="contenu" style={{width:'35vw'}}/> </a>
        <img src={logoGB} width='150vw' height='150VH' style={{position:'absolute'}} id="contenu"/>
      </div>
      <div id="explicationsProjet">
        <div id="explication_nuitInfo">
          Je me suis occupé de la version Front (très rapidement) à l'aide de HTML/CSS(Bootstrap)
          et de défis tels que le Gif (entièrement) et le <a href="http://51.83.255.96/ndinfo19/minigame.html" target="_blank">jeux 404</a> (une partie)
        </div>
        <div id="explication_hashCode">
          A venir : Concours de programmation Google <a href ="https://www.tomsguide.fr/le-concours-google-hash-code-est-de-retour/" target="_blank"> Google Hash Code </a>
        </div>
      </div>
    </div>

  )
}
