// src/OurServices.js
import React from 'react';
import "./Services.css";

const OurServices = () => {
    const services = [
      { title: 'TITLE', description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. A rhoncus nisi diam elementum amet felis nibh' },
      { title: 'TITLE', description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. A rhoncus nisi diam elementum amet felis nibh' },
      { title: 'TITLE', description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. A rhoncus nisi diam elementum amet felis nibh' },
      { title: 'TITLE', description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. A rhoncus nisi diam elementum amet felis nibh' },
      { title: 'TITLE', description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. A rhoncus nisi diam elementum amet felis nibh' },
      { title: 'TITLE', description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. A rhoncus nisi diam elementum amet felis nibh' },
    ];
  
    return (
      <div className="our-services">
        <h2>OUR SERVICES</h2>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo Tellus Id. Elementum Tempus, Cursus Ac Imperdiet Tellus Ornare Duis Vel. Lacus, Lacus Volutpat Volputate Egestas In. Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default OurServices;