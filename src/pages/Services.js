import React from "react";
import "./Services.css";

const SolarServices = () => {
  return (
    <div className="solar-services">
      <h1>Our Solar Services</h1>
      <p className="services-intro">
  At Vishwa Solar Systems, we specialize in delivering cutting-edge, tailor-made solutions in the solar energy sector. From seamless installations to reliable maintenance, we are committed to empowering you with sustainable energy solutions that maximize efficiency and reduce costs.
</p>

       
    

     {/* Existing Services Section */}
     <div className="services-list">
  <div className="service-item">
    <h3>Solar Pv Systems</h3>
    <p>1.Solar PV - Roof top off-grid system</p>
    <p>2.Solar PV - Roof top on grid system</p>
    <p>3.Solar PV - Home lighting system</p>
    <p>4.Solar PV - Street lighting system</p>
    <p>5.Solar PV - Water pumping system</p>
    <p>6.Solar PV - Power plant</p>
    <p>7.Solar PV - Engineering ( Design)</p>
    <p>8.Solar PV - Commissioning</p>
  </div>
  <div className="service-item">
    <h3>Solar EPC Solutions</h3>
    <p>1.Site survey and proposal</p>
    <p>2.Design and System Engineering</p>
    <p>3.System Integrator</p>
    <p>4.System Installed</p>
    <p>5.Operation and Maintenance</p>
  
  </div>
  <div className="service-item">
  <h3>Solar EPC Steps</h3>
    <p>1.Design</p>
    <p>2.Authorization</p>
    <p>3.Material Supply</p>
    <p>4.Mounting of Structure</p>
    <p>5.Mounting and Wiring of PV panels</p>
    <p>6.Mounting and wiring of Inverter</p>
    <p>7.Testing plant and connection to the grid.</p>
  </div>
</div>
      
      {/* Solar PV Products Section */}
      <div className="solar-pv-products">
        <h2>Solar PV Products</h2>
        <div className="product-grid">
          <div className="product">
            <img src="simplesolarpvsystem.jpg" alt="Solar PV Lighting System" />
            <h4>Solar PV Lighting System</h4>
            <p>Ideal for homes, commercial buildings, educational institutes, and more.</p>
          </div>
          <div className="product">
            <img src="streetlight.jpg" alt="Solar PV Street Light" />
            <h4>Solar PV Street Light</h4>
            <p>Perfect for parks, hospitals, apartments, and educational institutes.</p>
          </div>
          <div className="product">
            <img src="solar-water-pump,jpg.jpg" alt="Solar PV Water Pump" />
            <h4>Solar PV Water Pump</h4>
            <p>Designed for domestic, industrial, and irrigation purposes.</p>
          </div>
          <div className="product">
            <img src="solarmisscelneos2.jpg" alt="Solar PV Miscellaneous" />
            <h4>Solar PV Miscellaneous</h4>
            <p>Solar lanterns, mobile chargers, power banks, and more.</p>
          </div>
          <div className="product">
            <img src="solarmwscale.jpg" alt="Solar Power Plant in MW Scale" />
            <h4>Solar Power Plant (MW Scale)</h4>
            <p>Solar Power Plant For Industrial Area For Large Scale</p>
          </div>
        </div>
      </div>

      

      {/* Solar EPC Solution Section */}
      <div className="solar-epc-solution">
        <h2>Solar EPC Solution</h2>
        <div className="epc-grid">
          <div className="epc-step">
            <img src="Site_Survey.jpg" alt="Site Survey and Proposal" />
            <p>Site Survey And Proposal</p>
          </div>
          <div className="epc-step">
            <img src="design.jpg" alt="Design" />
            <p>Design And System Engg</p>
          </div>
          <div className="epc-step">
            <img src="integration.jpg" alt="Integration" />
            <p>System Integration</p>
          </div>
          <div className="epc-step">
            <img src="installation.jpg" alt="Installation" />
            <p>System Installation</p>
          </div>
          {/* <div className="epc-step">
            <img src="clean.png" alt="Operation and Maintenance" />
            <p>Operation And Maintenance</p>
          </div> */}
        </div>
      </div>
  {/* Existing Services Section */}
  <div className="services-list">
  <div className="service-item">
    <h3>Solar Panel Installation</h3>
    <p>Expertly designed and installed solar panel systems tailored for residential and commercial needs, delivering maximum energy efficiency and cost savings.</p>
  </div>
  <div className="service-item">
    <h3>Maintenance & Repairs</h3>
    <p>Comprehensive maintenance and repair solutions to ensure your solar systems operate at peak performance and deliver uninterrupted energy production.</p>
  </div>
  <div className="service-item">
    <h3>Energy Storage Solutions</h3>
    <p>Innovative energy storage systems designed to harness and store excess solar power, providing reliable backup energy for a seamless power supply.</p>
  </div>
</div> 
      <div className="EPC Steps We Follow">
        <h2>EPC Steps We Follow</h2>
        <div className="epc-grid">
          <div className="epc-step">
            <img src="design.jpg" alt="Site Survey and Proposal" />
            <p>Design</p>
          </div>
          <div className="epc-step">
            <img src="authorization.jpg" alt="Design" />
            <p>Authorizations</p>
          </div>
          <div className="epc-step">
            <img src="supply.jpg" alt="Integration" />
            <p>Material Supply</p>
          </div>
          <div className="epc-step">
            <img src="mounting.jpg" alt="Installation" />
            <p>Mounting Of Structures</p>
          </div>
          {/* <div className="epc-step">
            <img src="wiring.jpg" alt="Operation and Maintenance" />
            <p>Mounting And Wiring Of Pv Panels</p>
          </div> */}
          <div className="epc-step">
            <img src="invertors.jpg" alt="Operation and Maintenance" />
            <p>Mounting And Wiring Of Invertors</p>
          </div>
          {/* <div className="epc-step">
            <img src="connection.jpg" alt="Operation and Maintenance" />
            <p>Testing Plant And Connection To Grid</p>
          </div> */}
         
        </div>
      </div>
      
    </div>
  );
};

export default SolarServices;
