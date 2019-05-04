import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
  constructor(){
    super();
    this.state={
    }
  }

  render() {
    return (
        <div className='text'>
            <h1 id='aboutMe'>About me</h1>
            <p>Hi! Welcome to my page. </p>
            <p>I'm a 3rd year <u>Software Engineering</u> student at <b>Edinburgh Napier University</b>, and a <u>Software Developer</u> for <b>IBM</b>.</p>
            <p>During my time in IBM I have experienced and worked with some of the latest technologies, such as containerization with <u>Docker and Kubernetes</u>, <u>full-stack</u> development and testing, <u>React</u> and <u>NodeJS</u>.
            </p>
        </div>
    );
  }
}

export default AboutMe;