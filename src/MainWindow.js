import React, { Component } from 'react';
import './MainWindow.css';
import AboutMe from './AboutMe.js';
import Certifications from './Certifications.js';
import Contact from './Contact.js';

class MainWindow extends Component {
  constructor(){
    super();
    this.state={
      heightAbout: 0,
      heightCertifications: 0,
      heightContact: 0
    }
  }

  render() {
    return (
        <div>
            <h1 className='name'>PABLO LOPEZ</h1>
            <h1 className='title'>SOFTWARE DEVELOPER</h1>
        <div className="parallelogram"></div>
        <div className="rectangle">
        <div className='goDown'
          onClick={
            () => window.scroll({
                top: 100 * window.innerHeight/100, 
                left: 0, 
                behavior: 'smooth'
                })
              }><i className="down"></i>
            </div>
        </div>
        <div className='pageContainer' id='aboutMe'>
        <div className='goUp'
          onClick={
            () => window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })
          }
        ><i className='up'></i></div>
            <AboutMe/>
        <div className='goDownInside'
          onClick={
            () => window.scroll({
                top: document.getElementById('aboutMe').clientHeight+100 * window.innerHeight/100, 
                left: 0, 
                behavior: 'smooth'
                })
              }><i class="down"></i>
        </div>
            </div>
        <div className='pageContainer' id='certifications'>
        <div className='goUp'
          onClick={
            () => window.scroll({
              top: 100 * window.innerHeight/100,
              left: 0,
              behavior: 'smooth'
            })
          }
        ><i className='up'></i>
        </div>
            <Certifications/>
            <div className='goDownInside'
          onClick={
            () => window.scroll({
                top: document.getElementById('aboutMe').clientHeight + document.getElementById('certifications').clientHeight +  100 * window.innerHeight/100, 
                left: 0, 
                behavior: 'smooth'
                })
              }><i class="down"></i>
        </div>  
        </div>
        <div className='pageContainer'>
        <div className='goUp'
          onClick={
            () => window.scroll({
              top: document.getElementById('aboutMe').clientHeight+100 * window.innerHeight/100,
              left: 0,
              behavior: 'smooth'
            })
          }
        ><i className='up'></i>
        </div>
            <Contact/>
        </div>
        </div>
    );
  }
}

export default MainWindow;