import React from 'react';
import "./Home.css";
import { Player,
  ControlBar,
  ReplayControl,
  BigPlayButton,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton } from 'video-react';


const Home = () => {

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

          <source src="ad_campain_leopard_small.mp4"/>


        
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
       

                

        
     

          
      
    )
}

export default Home;