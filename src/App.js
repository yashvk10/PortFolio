import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import { useState } from 'react';
import Sidebar from './Sidebar';
import About from './About';
import Home from './Home';
import Resume from './Resume';
import { Element } from 'react-scroll';
import Footer from './Footer';
function App() {

  const [activeComponent, setActiveComponent] = useState("home");

  const handleNavClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <div className="App">
      {/* {activeComponent !== 'home' && <Sidebar handleNavClick={handleNavClick} />} */}

     {/* <div>
        {activeComponent === 'about' && <About />}
        {activeComponent === 'home' && <Home />}
      </div> */}
     <div>
      <Sidebar />
      <Element name="home" className="element">
        <Home />
      </Element>
      
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="resume" className="element">
        <Resume />
      </Element>
     
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
