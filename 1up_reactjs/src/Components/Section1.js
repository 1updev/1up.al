import React from 'react';
import "./Section1.css";
import { Player } from 'video-react';





const Section1 = () => {

    return(
       
            <div className="container">
                 <Player
          
          autoPlay
        >
          <source src="ad_campain_leopard_small.mp4" />
    
        </Player>
                

        
     

          
        </div>
    )
}

export default Section1;