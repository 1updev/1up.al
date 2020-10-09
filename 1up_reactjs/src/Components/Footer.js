import React from 'react';
import "./Footer.css";

const Footer = () => {

    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1*/ }
                    <div className="col">
                        <h6 className="info">info@1up.al</h6>
                    </div>
                    {/* Column 2*/ }
                    <div className="col">
                        <h6 className="copyright">Copyright 2020 by 1UP Interactive</h6>
                    </div>
                    {/* Column 3*/ }
                    <div className="col">
                        
                        <div className="social">
                           <a href="https://www.facebook.com/1UPinteractive"> <img src="fb.jpg"></img></a>
                            <a href="https://www.linkedin.com/company/1up-interactive-services"><img src="in.jpg"></img></a>
                            <img src="you.jpg"></img>
                            </div>
                      
                    </div>
                </div>
            </div>

          
        </div>
    )
}

export default Footer;