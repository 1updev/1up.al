import React from 'react';
import "./Section1.css";
import { Player,
  ControlBar,
  ReplayControl,
  BigPlayButton,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton } from 'video-react';


const Section1 = () => {

    return(
       
                 <Player
                 id="player"
          muted={true}
          playing
          loop={50}
          autoPlay
          fluid={false}
          width="100%"
          height = "auto"
         

          >

          <source src="ad_campain_leopard_small.mp4" width="100%" />


        
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
       

                

        
     

          
      
    )
}

export default Section1;