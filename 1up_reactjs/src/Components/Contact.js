import React from "react";
import "./Contact.css";

const Contact = () => {

    return(
<section id="contact">
<div className="section-inner">
  <div className="title">
    <div className="item-container">
      <h2>GET IN TOUCH</h2>
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-4 text-left">
    <div className="contact-panel">
      <h3><b>Office</b></h3>
      <h4><b>1up Interactive Agency</b></h4>
      <p>Rr. Themistokli Germenji, Nr.1, 1001</p>
      <p>Tirana, Albania</p>
      <p>+355 69 3068000</p>
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-7 col-md-offset-1 col-lg-5 col-lg-offset-2  text-right">
    <br />
  </div>
</div>
</section>
);
}

export default Contact;