import React, { Component } from 'react';
import './Contact.css';
class Projects extends Component {
  constructor(){
    super();
    this.state={
    }
  }

  componentDidMount() {
      const script = document.createElement("script");
  
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
  
      document.body.appendChild(script);
  }

  render() {
    return (
      <div className='text'>
          <h1>Contact</h1>
          <div className='linkedin' class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="es_ES" data-type="horizontal" data-theme="dark" data-vanity="lopezrpablo"><a class="LI-simple-link" href='https://uk.linkedin.com/in/lopezrpablo?trk=profile-badge'>Pablo L.</a></div>
          <iframe className='cv' src="https://docs.google.com/document/d/e/2PACX-1vTPsxQh_lbp6jWfgVjK9G4J4uYgEos-frFhfYmmHUTfw4JhslEtTjUVMQiFup3VFa9-NJxIg5EhjoeG/pub?embedded=true"></iframe>
          </div>
    );
  }
}

export default Projects;