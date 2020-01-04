import React from 'react';
import Sky from 'react-sky';
import logo from './img/logo.png';
import souris from './img/souris.png';
export default function (){
  return(

    <Sky
        images={{
          /* FORMAT AS FOLLOWS */
          // 0: "https://linkToYourImage0",  /* You can pass as many images as you want */
          0: logo, /* you can pass images in any form: link, imported via webpack... */
          1: souris,
          /* 3: your other image... */
          /* 4: your other image... */
          /* 5: your other image... */
          /* ... */
        }}
        how={100} /* Pass the number of images Sky will render chosing randomly */
        time={10} /* time of animation */
        size={'5vw'} /* size of the rendered images */
        background={'linear-gradient(to right,#121B34, #000080)'}
      />
  )
}
