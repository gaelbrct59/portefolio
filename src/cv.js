import React, { Component } from 'react';
import './components/css/cv.css'
import styled, { keyframes } from 'styled-components';
import { BrowserRouter, Match, Link, Route } from 'react-router-dom';
import "./components/css/containerWhite.css"

import { zoomInUp, fadeIn, rollIn } from 'react-animations';

import cdc from "./components/experiences/cdc.pdf"
import vb2018 from "./components/experiences/VB2018.PNG"
import ihmvb2018 from "./components/experiences/IHMVB2018.PNG"
import fondcslg2018 from "./components/experiences/fondCSLG2018.png"
import versionfinale2018 from "./components/experiences/versionFinaleCSLG2018.png"
import html2017 from "./components/experiences/html2017.png"
import cvIMG from "./components/experiences/BRICOUT_GAEL_cv_img2.png"
import cv from "./components/experiences/BRICOUT_GAEL_cv_pdf.pdf"

const ZoomInUpDiv = styled.div`animation: 1s ${keyframes`${zoomInUp}`}`;
const FadeInDiv = styled.div`animation: 1.5s ${keyframes`${fadeIn}`}`;
const RollInDiv = styled.div`animation: 1s ${keyframes`${rollIn}`}`;

class CV extends React.Component{
  constructor () {
    super();
    this.state = {
      div: <Childnull />,
    }
  }
  changeDiv(newDiv) {
    this.setState({div: newDiv});
  }

    render () {
    return (
      <div id="container">
        <div id="separateurButtonContenu">
          <div id="Titres">
            <p><button onClick={() => this.changeDiv(<Formation />)}>FORMATION</button></p>
            <p><button onClick={() => this.changeDiv(<Competences />)}>COMPÉTENCES</button></p>
            <p><button onClick={() => this.changeDiv(<Experiences />)}>EXPÉRIENCES</button></p>
            <p><button onClick={() => this.changeDiv(<Pdf />)}>PDF</button></p>
          </div>
          <div id="Contenu">
          {/*Affiche l'état, ici, affiche le contenu de la div, qui fait appel à la fonction dans "onclick" ci-dessus*/}
            {this.state.div}
          </div>
        </div>
      </div>
    )
}}
const Childnull = () => (<div></div>)
const Formation = () => (
  <div>
    <ZoomInUpDiv id="titreContenu">
        Formation
    </ZoomInUpDiv>
    <RollInDiv id="contenuFormation" style={{animationDelay:'0.8s'}}>
      <span id="date"> 2018 - 2020 </span> <br />
      Licence informatique <br /> <a href="https://www.univ-lille.fr/">Université de Lille</a>
    </RollInDiv>
    <br /><br />
    <RollInDiv id="contenuFormation" style={{animationDelay:'1s'}}>
      <span id="date"> 2016 - 2018 </span> <br />
      BTS Services Informatique aux Organisations <br /> <a href="https://www.gastonberger.fr/"> Lycée Gaston Berger</a>
    </RollInDiv>
    <br /><br />
    <RollInDiv id="contenuFormation" style={{animationDelay:'1.2s'}}>
      <span id="date"> 2012 - 2016 </span> <br />
      Baccalauréat scientifique <br /> <a href="http://charlotteperriand.etab.ac-lille.fr/"> Lycée Charlotte Perriand</a>
    </RollInDiv>

  </div>
)
const Competences = () => (
  <div>
    <ZoomInUpDiv id="titreContenu">
        Compétences
    </ZoomInUpDiv>
    <div>
      <FadeInDiv id="barreProgressionVide">
      <div id="remplissage" class="a75">Confirmé</div>
        <FadeInDiv id="contenuCompetences">Java | Photofiltre | HTML | CSS | ReactJS | Python | SQL</FadeInDiv>
      </FadeInDiv>
      <FadeInDiv id="barreProgressionVide">
        <div id="remplissage" class="a50">Apprenti</div>
        <FadeInDiv id="contenuCompetences">PHP | Visual Basic | C# | JavaScript | Photoshop</FadeInDiv>
      </FadeInDiv>
      <FadeInDiv id="barreProgressionVide">
        <div id="remplissage" class="a25">Notions</div>
        <FadeInDiv id="contenuCompetences">AMPL | C | Haskell | Prolog</FadeInDiv>
      </FadeInDiv>
    </div>
  </div>
)
const Experiences = () => (
  <div>
    <ZoomInUpDiv id="titreContenu">
        Expériences
    </ZoomInUpDiv>
    <RollInDiv id="contenuExperience" style={{animationDelay:'0.8s'}}>
      <span id="date">01/2018</span><br />
        Stage informatique de 7 semaines au centre social lazare garreau
      <br />
      <a href="#modal2018" id="linkExp">Voir le projet</a>
    </RollInDiv>
    <RollInDiv id="contenuExperience" style={{animationDelay:'1s'}}>
      <span id="date">05/2017</span><br />
        Stage informatique de 6 semaines au centre social lazare garreau
      <br />
      <a href="#modal2017" id="linkExp">Voir le projet</a>
    </RollInDiv>
    <br />
    <RollInDiv id="contenuExperience" style={{animationDelay:'1.2s'}}>
        Autres (non informatique)
      <br />
      <a href="#modalAutres" id="linkExp">Voir les projets</a>
    </RollInDiv>

  <div id="modal2018" class="cModal">
      <div>
        <footer class="cf">
          <a href="#fermer" id="linkExp">Fermer</a>
        </footer>
        <header>
          <h2>Stage au centre Social et Culturel Lazare Garreau - 2018</h2>
        </header>
        <div>
          <h3> Developpement d'une borne d'acceuil pour les utilisateurs du centre, et y ajouter des statistiques de clics </h3>
          <p> Voir le cahier des charges : </p>
          <iframe src={cdc} width='100%' height='400' />


          <h3> Solution choisie : </h3>
          <div id="presentationExperience">
            Nous avons choisi de reprendre le code de l'année précédente, que j'ai fait sur Visual Basic, d'une part car :
            <ul>
              <li>Les solutions proposées par ce langages permettent d'effectuer les contraintes du cahier des charges (empêcher l'utilisateurs d'accéder a d'autres sites, et empêcher la possibilité de quitter l'application (avec alt+f4 par exemple))</li>
              <li>C'est le premier langage de programmation appris, et maitrisé suite a nos études</li>
            </ul>
            De plus, nous avons décidé de diviser le problème en deux :
            <ul>
              <li>La solution exécutable, qui va permettre d'obliger l'utilisateur d'accéder aux sites prédéfinis (voir image ci-dessous)</li>
              <li>La solution Front-end, avec HTML/CSS, lié au PHP qui va permettre de compter le nombre de clics sur les sites en questions, afin de proposer a notre tuteur des statistiques d'accès a ces sites</li>
            </ul>
            <br />
            J'ai décidé de procéder de la sorte : Créer une application executable (en VB) qui permettait de controler la navigation (Grace au WebBrowser, un genre de iframe), et un bouton qui permettait de revenir a l'accueil.
            <br />
            Cette application bloque l'accès a la barre de recherche (pas le droit d'accéder a des sites différents de ceux proposés) et l'application ne peut être fermée. De plus, a l'allumage de la machine, l'application se lance directement, et en plein écran.
          </div>
          <h3>Version executable : </h3>
          <img src={vb2018} width='1000' height='400'/>
          <img src={ihmvb2018} width='1000' height='600'/>

          <h3>Version Front-end : </h3>
          <img src={fondcslg2018} width='1000' height='500'/>

          <h3>Version finale et fonctionnelle : </h3>
          <img src={versionfinale2018} width='1000' height='500'/>

        </div>
        <footer class="cf">
          <a href="#fermer" id="linkExp">Fermer</a>
        </footer>
      </div>
  </div>

  <div id="modal2017" class="cModal">
    <div>
      <footer class="cf">
        <a href="#fermer" id="linkExp">Fermer</a>
      </footer>
      <header>
        <h2>Stage au centre Social et Culturel Lazare Garreau - 2017</h2>
      </header>
      <div>
        <h3> Solution de sauvegarde pour l'établissement, et developpement d'une borne d'acceuil pour les utilisateurs du centre</h3>
        <div id="presentationExperience">
          Ma première mission était de proposer une solution de sauvegarde pour le personnel du centre. Pour cela, j'ai eu une machine vierge, sur laquelle j'ai dû installer Linux, ainsi que la solution de sauvegarde demandée. Linux a été choisi pour la sécurité des données.
        </div>
        <h3> Extrait d'un journal de travail : </h3>
        <div id="presentationExperience">
          <h4>JOUR 4</h4>

          Formater sa machine en linux (Debian version serveur)<br />
          <ul>
            <li> Disque dur vierge, l'installation va supprimer les données du disque dur.</li>
            <li> Télécharger une image cd de linux (http://www.ubuntu-fr.org/telechargement).</li>
            <li> Enregistrer</li>
            <li> Vérifier l'intégrité de l'image ISO téléchargée (Télécharger WinMD5)</li>
            <li> Décompressez l'archive téléchargée.</li>
            <li> Exécutez WinMD5 en double cliquant sur le fichier WinMD5.exe.</li>
            <li> Cliquez sur le bouton ….</li>
            <li> Sélectionnez le fichier ubuntu-9.10-desktop-xxx.iso correspondant à l'image ISO du CD
            d'Ubuntu que vous avez téléchargée et cliquez sur le bouton Ouvrir.</li>
            <li> L'empreinte MD5 du fichier est alors calculée et affichée.</li>
            <li> Rendez-vous sur la liste des empreintes MD5 d'Ubuntu en cliquant ici.</li>
            <li> Sélectionnez et copiez (Ctrl + C) l'empreinte correspondant au fichier que vous avez
            téléchargé.</li>
            <li> Si les images sont différentes, il faut réinstaller une image iso</li>
            <li> Graver un CD ou DVD vierge</li>
            <li> Booter sur le CD</li>
            <li> Insérez le CD d'Ubuntu dans votre lecteur.</li>
            <li> Redémarrez votre ordinateur.</li>
            <li> Au démarrage, appuyez sur la touche d'accès au BIOS, généralement Suppr, parfois F1
            ou F2 selon les marques.</li>
            <li> Repérez la section relative à la séquence de démarrage, Hard Disk Boot Priority dans la rubrique Advanced BIOS Features ou Boot par exemple.</li>
            <li> A l'aide des flèches de direction et des touches + et -, placez le lecteur de CD/DVD en
            haut de la liste.</li>
            <li> Enregistrez vos modifications en pressant la touche F10. Validez par Y ou OK. Pressez
            enfin la touche Entrée.</li>
            <li> Votre ordinateur démarre alors sur le CD.</li>
          </ul>
          Pour avoir KDE sous linux (graphique), on peut télécharger Kubuntu, qui nous donnera directement
          le bureau version KDE. Pour le serveur ensuite, il faudra télécharger un logiciel (type MySQL,
          BackupPC, ultra Backup ou autre)<br />
          Sinon, sous debian, il faudra utiliser cette commande :<br />
          apt-get install kde-i18n-fr<br />

          sudo apt-get uptate<br />
          sudo apt-get install kde-plasma-desktop<br />

        </div>
        <h3> Choix de la technologie : </h3>
        <div id="presentationExperience">
          Après étude des besoins et discussion avec le tuteur, j'ai décidé d'utiliser le logiciel BackupPC, voici
          les principales explications :<br />
          BackupPC est un logiciel Open Source écrit en langage PERL qui permet de gérer les sauvegardes
          de différents postes, qu'ils soient sous Linux, Windows ou MacOS.<br />
          BackupPC permet de sauvegarder automatiquement (et manuellement), à des intervalles de temps
          réguliers, des répertoires situés sur des machines du réseau. Il possède une interface Web pour
          lancer des sauvegardes ou restaurer des fichiers.<br />
          De plus, le tuteur de stage souhaite pouvoir être averti en cas de problème lors de la sauvegarde.
          C'est là que BackupPC intervient, puisqu'une notification par email est prévue dans deux cas :
          <ul>
            <li> Si une erreur considérée comme grave par le serveur s'est produite, l'administrateur est
            averti par mail.</li>
            <li> Si un utilisateur n'a pas fait de sauvegarde depuis trop longtemps (paramètre à définir),
            le serveur lui envoie un mail pour l'avertir.</li>
          </ul>
          Principaux avantages de BackupPC :
          <ul>

            <li> Interface Web facile à assimiler</li>
            <li> Disponible sous Linux</li>
            <li> Protocole smb (contrôle a distance) disponible</li>
            <li> Gère différents systèmes d'exploitations</li>
            <li> Préviens si un problème survient.</li>
            <li> Bonne gestion des périodes de Blackout, des délais de sauvegardes complètes</li>
          </ul>
        </div>
        <h2> Développement d'une application de borne d'acceuil pour les utilisateurs du centre </h2>
        <div id="presentationExperience">
          J'ai eu comme seconde mission, de restaurer, et créer une meilleure application pour la borne d'acceuil tactile du centre, a l'entrée, afin de faciliter l'accès aux sites aux utilisateurs.
          <br />
          Pour cela, j'ai utilisé la technologie Visual Basic, car celle-ci permettait de faire ce qu'on me demandait, et que c'est le seul langage de programmation appris a ce moment là.
          <br />
          J'avais a disposition le format HTML/CSS voulu, en fond de l'application.
          <br />
          J'ai décidé de procéder de la sorte : Créer une application executable (en VB) qui permettait de controler la navigation (Grace au WebBrowser, un genre de iframe), et un bouton qui permettait de revenir a l'accueil.
          <br />
          Cette application bloque l'accès a la barre de recherche (pas le droit d'accéder a des sites différents de ceux proposés) et l'application ne peut être fermée. De plus, a l'allumage de la machine, l'application se lance directement, et en plein écran.
        </div>

        <h3> Fond html/css donné : </h3>
        <img src={html2017} width='1000' height='500' />

      </div>
      <footer class="cf">
        <a href="#fermer" id="linkExp">Fermer</a>
      </footer>
    </div>
  </div>

  <div id="modalAutres" class="cModal">
    <div>
    <footer class="cf">
      <a href="#fermer" id="linkExp">Fermer</a>
    </footer>
      <header>
        <h2>Autres types de stages (non informatiques)</h2>
      </header>
      <div>
        <h3>CDD Société Point doc - 2017</h3>
        <div> 1 mois: Opérateur de façonnage et conditionnement </div>

        <h3>CDD Société ADLIS - 2016</h3>
        <div> 1 mois: Opérateur de façonnage et conditionnement </div>

        <h3>CDD Société Point doc - 2015</h3>
        <div>1 mois: Activité de mise sous pli manuelle </div>
      </div>
    <footer class="cf">
      <a href="#fermer" id="linkExp">Fermer</a>
    </footer>
  </div>
</div>



  </div>
)
const Pdf = () => (
  <div>
    <ZoomInUpDiv id="titreContenu">
        Télécharger le CV en PDF
    </ZoomInUpDiv>
    <FadeInDiv id="contenuExperience" style={{animationDelay:'0.8s'}}>
      <a href="#modalvoirPDF" id="linkExp">Voir le PDF</a>
    </FadeInDiv>
    <FadeInDiv id="contenuExperience" style={{animationDelay:'1s', whiteSpace: 'nowrap'}}>
      <a href={cv} id="linkExp" download='BRICOUT_GAEL_CV.pdf'>Télécharger le PDF</a>
    </FadeInDiv>

    <div id="modalvoirPDF" class="cModal">
      <div>
        <footer class="cf">
          <a href="#fermer" id="linkExp">Fermer</a>
        </footer>
        <div>
          <img src={cvIMG} width='100%' height='100%' />
        </div>
        <footer class="cf">
          <a href="#fermer" id="linkExp">Fermer</a>
        </footer>
      </div>
    </div>
  </div>
)



export default CV
