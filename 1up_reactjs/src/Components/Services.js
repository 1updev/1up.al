import React from 'react';
import "./Services.css";
import * as ReactBootStrap from "react-bootstrap";


const Services = () => {

    return(


        <section id="services">
        <div className="section-inner">
          <div className="title">
            <div className="item-container">
              <h2>SERVICES</h2>
            </div>
          </div>
          <div className="services-items">
            <div className="item-container">
              <div className="item">
                <img src="socials.jpg" alt="" />
                <div className="text-container">
                  <span>Social Media Campaigns</span>
                </div>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <img src="mobile_app2.jpg" alt="" />
                <div className="text-container">
                  <span>Mobile Apps</span>
                </div>
              </div>
            </div>
            <div className="item-container">
              <div className="item">
                <img src="metrix.jpg" alt="" />
                <div className="text-container">
                  <span>Taylor made Metrix</span>
                </div>
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
        

    
    )}
    export default Services;