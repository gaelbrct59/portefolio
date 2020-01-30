import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import MyCV from '../cv.js';
import Contact from '../contact';
import Notes from '../notesConcept';
import Presentation from './Presentation';
import Jeux from '../projets';
import './css/styleTopBar.css'

export class TopBar extends Component{

  render(){

    return(
      <BrowserRouter>
        <div>
          <div style={topBarStyle}>

            <p></p>
            <p><Link to="/" id='link'>Accueil</Link></p>
            <p></p>
            <p><Link to="/CV" id='link'>CV</Link></p>
            <ul id="menu-deroulant">
              <li>Autres
                <ul>
            			<li><Link to="/projets">Projets</Link></li>
            			<li><Link to="/readme">README.md</Link></li>
            		</ul>
                </li>
            </ul>
            <p><Link to="/contact" id='link'>Contact</Link></p>
            <p></p>
          </div>
        </div>
        <div className="main-route-place">
          <Route exact path="/" component={Presentation}/>
          <Route path="/CV" component={MyCV} />
          <Route path="/readme" component={Notes} />
          <Route path="/projets" component={Jeux} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    )}}

const topBarStyle = {

    position: "fixed",
    top: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: '#0A0E1B',
    padding: "0px 2vw",
    boxSizing: "border-box",
    opacity:'85%',
    fontFamily:'Courier, monospace',
    zIndex:"5",
    height:"50px"
};





export default TopBar
