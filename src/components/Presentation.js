import React from 'react';
import { Spring } from 'react-spring/renderprops';
import photo from './img/photo_rond_gael.png'
import { rollIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const RollInDiv = styled.div`animation: 3s ${keyframes`${rollIn}`} 1`;

export default function Presentation(){
  return(


        <div>
          <h1 style={presentationTitreStyle}>Qui suis-je ?</h1>
            <div style={presentationStyle}>
              <RollInDiv><img src={photo} alt="Photo" id="pic" style={imageStyle} /></RollInDiv>



              <p>Je m’appelle Gaël BRICOUT et je suis un étudiant de 22ans en troisième année de Licence informatique à l’université de Lille. </p>
  						<p>Passionné par l'informatique, et plus particulièrement, depuis quelques années, par le développement, j'aimerais orienter mon avenir dans les métiers du E-services (le Front-end, les IHM, le développement mobile) et développeur full-stack.</p>
  						<p>Je suis quelqu'un de créatif, passionné et déterminé. J'aime mener mes projets à terme, jusqu'à obtenir le résultat le plus parfait et abouti, possible.</p>
              <p>Je suis à la recherche d'un stage (entre 3 et 5 mois) à compter de début Avril.</p>
            </div>
        </div>
      )}





const presentationStyle = {
  textAlign:'center',
  padding:'0.5vw',
  marginLeft:'auto',
  marginRight:'auto',
  width:'60vw',
  fontFamily:'Trebuchet MS',
  fontSize:'20px',
  boxShadow: '10px 1px 15px #555',
  borderRadius:'6px',
  backgroundColor:'rgba(2000,2000,2000,0.92)',
  height:'26em',
  overflow:'scroll',
  overflowX: 'auto'
};
const imageStyle = {
  width:'14vw',
  display:'block',
  float: 'initial',
  marginLeft:'auto',
  marginRight:'auto',
  postion:'static',
  padding:'0.5vw'
}

const presentationTitreStyle = {
  fontSize:'50px',
  marginTop:'50px',
  marginLeft:'5vw',
  textShadow:'0 0 20px #00FFFC,2px 3px 3px #141414, 0 0 100px #00D4D1',
  color:'#00FFFC'
}
