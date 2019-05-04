import React, { Component } from 'react';
import Blockchain from './badges/Blockchain.png';
import Cognitive from './badges/Cognitive.png';
import DesignThinking1 from './badges/DesignThinking1.png';
import DesignThinking2 from './badges/DesignThinking2.png';
import Docker from './badges/Docker.png';
import Security from './badges/Security.png';
import './Certifications.css';


class Experience extends Component {
  constructor(){
    super();
    this.state={
    }
  }

  render() {
    return (
      <div className='text'>
            <h1>Certifications</h1>
            <a href='https://www.youracclaim.com/badges/c66fce8d-2460-48d0-ad71-b4f2e29a5487/linked_in_profile' target='_blank'><img src={Blockchain} alt="Blockchain badge" className='badge'/></a>
            <a href='https://www.youracclaim.com/badges/e88142be-7f8d-4e10-8dd1-b36721672cf3/linked_in_profile' target='_blank'><img src={Security} alt="Security badge" className='badge'/></a>
            <a href='https://www.youracclaim.com/badges/4a8eadb4-d592-4fb0-afc4-fa20dca240de/linked_in_profile' target='_blank'><img src={Cognitive} alt="Cognitive badge" className='badge'/></a>
            <a href='https://www.youracclaim.com/badges/169c6564-4846-4524-ac62-15b347cd3467/linked_in_profile' target='_blank'><img src={DesignThinking1} alt="Design thinking badge" className='badge'/></a>
            <a href='https://www.youracclaim.com/badges/a69e6ca7-24c6-4428-89e2-6758bb358440/linked_in_profile' target='_blank'><img src={DesignThinking2} alt="Design thinking badge" className='badge'/></a>
            <a href='https://www.youracclaim.com/badges/db1385b0-83e5-4903-9a92-ff9ee5e64b92/linked_in_profile' target='_blank'><img src={Docker} alt="Docker badge" className='badge'/></a>
            <p>
            </p>
        </div>
    );
  }
}

export default Experience;