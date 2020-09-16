import React from 'react';
import "./About.css";
import { Player,
    ControlBar,
    ReplayControl,
    BigPlayButton,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton } from 'video-react';

const About = () => {

    return(
        <section id="about">
        <div className="section-inner">
          <div className="title">
            <div className="item-container">
              <h2>ABOUT</h2>
            </div>
          </div>
          <div className="about-sentence-container">
            <div className="title">
              <h3>WHO WE ARE</h3>
            </div>
            <div className="content">
              <p>1UP is an Albanian owned and operating company that was founded in 2010 in Tirana, Albania, by an energetic young team, keen on internet and technological innovations. Since then, 1UP has rapidly positioned itself as an innovative leader that partners with organizations seeking growth through online communications and technology.</p>
              <br />
              <p>1UP exclusively manages the first Ad-Serving &amp; Ad-Management digital platform in the country providing media agencies and clients full-service online advertising campaigns.</p>
              <p>Our mission is to provide strategic marketing thinking spiced up with innovative engaging activations with the ultimate goal of providing measurable results and satisfying ROI.</p>
            </div>
          </div>
          <div className="about-items">
            <div className="item-container">
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

          <source src="shaolin_all_1.mp4"/>


        
          <ControlBar disabled/>
          <BigPlayButton disabled/>
      
        </Player>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <img src="cgi.jpg" alt="" />
                <div className="text-container">
                  <span>CGI / Motion Graphics</span>
                </div>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <img src="crm.jpg" alt="" />
                <div className="text-container">
                  <span>CRM management systems</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sentence">
            <h3><span>1UP brings together a multidisciplinary team, across strategy, design and cutting edge technology,</span>
              <br />
              <span>with an intelligent approach to digital.</span>
            </h3>
          </div>
        </div>
      </section>

          
     
    )
}

export default About;