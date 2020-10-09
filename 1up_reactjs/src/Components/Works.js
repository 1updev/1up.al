
import React from 'react';
import "./Works.css";
import { Player,
  ControlBar,
  ReplayControl,
  BigPlayButton,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton } from 'video-react';


const Works = () => {

    return(


 <section id="works">
 <div className="section-inner">
   <div className="title">
     <div className="item-container">
       <a href="#">
         <h2>WORKS</h2>
       </a>
     </div>
   </div>
   <div className="works-items">
     <div className="row-1">
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
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
          <source src="vf_happy.mp4"/>
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
       
             <div className="text-container">
               <span>Vodafone Happy</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
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
   <source src="ti_je_nje_luledielli.m4v"/>
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
             <div className="text-container">
               <span>Vodafone New ID</span>
             </div>
           </div>
         </a>
       </div>
     </div>
     <div className="row-1">
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
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
   <source src="golf_7.mp4"/>
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
             <div className="text-container">
               <span>Policia e Shtetit</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
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
   <source src="vodafone_city_video.mp4"/>
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
             <div className="text-container">
               <span>Vodafone City</span>
             </div>
           </div>
         </a>
       </div>
     </div>
     <div className="row-3">
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
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
   <source src="pepsi_smileys.mp4"/>
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
             <div className="text-container">
               <span>Pepsi</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
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
   <source src="vf_bazar2.mp4"/>
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
             <div className="text-container">
               <span>Vodafone Bazzar</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container" id="testvideo">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
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
   <source src="xmas2.mp4"/>
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
             <div className="text-container">
               <span>Vodafone Christmas Card</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
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
   <source src="vodafone_happy_2.mp4"/>
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
             <div className="text-container">
               <span>Vodafone Happy</span>
             </div>
           </div>
         </a>
       </div>
     </div>
     <div className="row-3">
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
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
   <source src="apple_banak_new_2.mp4"/>
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
             <div className="text-container">
               <span>Strongbow</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
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
   <source src="christmas_lights_2.mp4"/>
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
             <div className="text-container">
               <span>Strongbow</span>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <div className="item">
               <img src="Nata-e-Bardhe375.gif" alt="" />
               <div className="text-container">
                 <span>Nata e bardhë</span>
               </div>
             </div>
           </div>
         </a>
       </div>
       <div className="item-container">
         <a href="#" onclick="if (!window.__cfRLUnblockHandlers) return false; return false">
           <div className="item">
             <div className="item">
               <img src="MyVodafone375.gif" alt="" />
               <div className="text-container">
                 <span>My Vodafone</span>
               </div>
             </div>
           </div>
         </a>
       </div>
     </div>
   </div>
 </div>
</section>
);
}

export default Works;