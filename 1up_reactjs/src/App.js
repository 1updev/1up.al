import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Works from "./Components/Works";
import Contact from "./Components/Contact";

import * as ReactBootStrap from "react-bootstrap";
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <div className="App">

<body>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home"><img id="logo" src="logo.png"></img></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets">HOME</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        SERVICES
      </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={3} href="#memes">
        ABOUT
      </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={3} href="#memes">
        WORK
      </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={3} href="#memes">
        SOLUTIONS
      </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={3} href="#memes">
        CONTACTS
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

<Home/>
<Services/>
<About/>
<Works/>
<Contact/>

    
    
      </body>
      
      <Footer />
    </div>
  );
}

export default App;
