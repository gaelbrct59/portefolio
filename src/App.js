import React, { Component } from 'react';

import photo from './components/img/photo_rond_gael.png'

import Presentation from './components/Presentation.js';
import Background from './components/Background.js'
import TopBar from
'./components/TopBar';


import { merge, hinge, fadeIn, wobble, jello, rollIn, tada, zoomInUp, flipInX, fadeOutDownBig, flash } from 'react-animations';

// const BouncyDiv = styled.div`animation: 5s ${keyframes`${bounce}`} infinite`;
// const FadeInDiv = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;
// const FlipInXDiv = styled.div`animation: 1s ${keyframes`${flipInX}`} infinite`;
// const JelloDiv = styled.div`animation: 1s ${keyframes`${jello}`} 3`;
// const RollInDiv = styled.div`animation: 1s ${keyframes`${rollIn}`} infinite`;
// const TadaDiv = styled.div`animation: 1s ${keyframes`${tada}`} infinite`;
// const ZoomInUpDiv = styled.div`animation: 1s ${keyframes`${zoomInUp}`} 3`;
// const FODownDiv = styled.div`animation: 2s ${keyframes`${fadeOutDownBig}`} infinite`;
// const FlashDiv = styled.div`animation: 2s ${keyframes`${flash}`} infinite`;
// const WobbleDiv = styled.div`animation: 2s ${keyframes`${wobble}`} infinite`;
// const HingeDiv = styled.div`animation:2s ${keyframes`${hinge}`}`;


class Main extends Component{
  
  render(){
    return(
      App()
    )
  }
}



function App() {

  return (
    <div className="App">
      <Background />
      <TopBar />
    </div>
  );
}



export default App;
