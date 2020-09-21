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

<header>
      <ReactBootStrap.Navbar  expand="lg" bg="dark" variant="dark" fixed="top">
  <ReactBootStrap.Navbar.Brand href="#home"><img id="logo" src="logo.png"></img></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls=" navbar navbar-inverse navbar-fixed-top" />
  <ReactBootStrap.Navbar.Collapse id="navbar navbar-inverse navbar-fixed-top">
    <ReactBootStrap.Nav className="mr-auto">
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link  href="#home">HOME</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link  eventKey={2} href="#services">
        SERVICES
      </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={3} href="#about">
        ABOUT
      </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={4} href="#works">
        WORK
      </ReactBootStrap.Nav.Link> 
      <ReactBootStrap.Nav.Link eventKey={5} href="#solutions">
        SOLUTIONS
      </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={6} href="#contact">
        CONTACTS
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

</header>
<body id="body">
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
