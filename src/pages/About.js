// About.js
import React from "react";
import "./About.css";
import Carousel from "../components/Carousel";
import solarPVImage from "../Assets/image1.jpg";

const About = () => {
  const carouselItems = [
    { imagePath: "service02.jpg", title: "1 KW Solar Energy Systems" },
    { imagePath: "service04.jpg", title: "3-30 KW Solar Energy Systems" },
    { imagePath: "service01.jpg", title: "5-50 KW Solar Energy Systems" },
    { imagePath: "service05.jpg", title: "6-10 KW Solar Energy Systems" },
    { imagePath: "service06.jpg", title: "30-500 KW Solar Energy Systems" },
    { imagePath: "serivice07.jpg", title: "10000 KW Solar Energy Systems" },
  ];

  const directors = [
    { name: "Gundappa Keralli", title: "Chief Executive Officer", image: "director1.jpg" },
    { name: "Meenakshi Keralli", title: "Managing Director", image: "director2.jpg" },
  ];

  return (
    <div className="about">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          At Vishwa Solar Systems, we lead the charge towards a sustainable future with
          cutting-edge solar energy solutions. Join us in our mission to transform the energy
          landscape and contribute to a greener world.
        </p>
      </header>

      <section className="carousel-section">
        <h2>Our Solar Systems</h2>
        <Carousel items={carouselItems} />
      </section>

      <section className="our-story">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#2c3e50', marginBottom: '20px' }}>Our Story</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#34495e', marginBottom: '15px' }}>
          Founded with a vision of making renewable energy accessible and affordable, Vishwa Solar Systems began its journey in 2002 with a small team of passionate professionals dedicated to creating a sustainable future.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#34495e', marginBottom: '15px' }}>
          Starting with just a handful of projects, we have achieved significant milestones over the years. Today, we proudly boast over than <strong style={{ color: '#16a085' }}>100+ successful installations</strong>, providing more than <strong style={{ color: '#16a085' }}>100 MW of solar power</strong> across residential, commercial, and industrial sectors.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#34495e', marginBottom: '15px' }}>
          Our unwavering commitment to quality and innovation has earned us the trust of <strong style={{ color: '#16a085' }}>100+ satisfied clients</strong>. We continue to grow and innovate, leading the way in renewable energy solutions that are not only efficient but also environmentally responsible.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#34495e', marginBottom: '15px' }}>
          Join us in our mission to power a greener and more sustainable future, one solar panel at a time.
        </p>
      </section>


      {/* <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Expertise in designing and implementing customized solar solutions</li>
          <li>Commitment to quality with high-performance products</li>
          <li>Eco-friendly and cost-effective energy solutions</li>
          <li>Reliable post-installation support and maintenance</li>
        </ul>
      </section> */}

<section className="why-choose-us">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#2c3e50', marginBottom: '20px' }}>Why Choose Us?</h2>
        <ul style={{ listStyleType: 'none', padding: '0', fontSize: '1.2rem', lineHeight: '1.8', color: '#34495e' }}>
          <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px', color: '#16a085', fontSize: '1.5rem' }}>✓</span>
            Expertise in designing and implementing customized solar solutions tailored to your needs.
          </li>
          <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px', color: '#16a085', fontSize: '1.5rem' }}>✓</span>
            Commitment to quality with high-performance products that ensure durability and efficiency.
          </li>
          <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px', color: '#16a085', fontSize: '1.5rem' }}>✓</span>
            Eco-friendly and cost-effective energy solutions that reduce your carbon footprint.
          </li>
          <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px', color: '#16a085', fontSize: '1.5rem' }}>✓</span>
            Reliable post-installation support and maintenance to ensure long-term satisfaction.
          </li>
        </ul>
      </section>


      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values">
          <div className="value">
            <h3>Innovation</h3>
            <p>
              We embrace innovation to deliver cutting-edge technology that meets our clients'
              evolving energy needs.
            </p>
          </div>
          <div className="value">
            <h3>Sustainability</h3>
            <p>
              Sustainability is at the heart of everything we do, ensuring a greener future for
              generations to come.
            </p>
          </div>
          <div className="value">
            <h3>Integrity</h3>
            <p>
              Integrity drives our relationships with clients, partners, and communities.
            </p>
          </div>
          <div className="value">
            <h3>Customer Focus</h3>
            <p>
              We prioritize our customers' satisfaction by providing exceptional service and support.
            </p>
          </div>
        </div>
      </section>

      <section className="directors-section">
        <h2>Meet Our Leaders</h2>
        <div className="directors">
          {directors.map((director, index) => (
            <div className="director-card" key={index}>
              <img src={director.image} alt={director.name} />
              <h3>{director.name}</h3>
              <p>{director.title}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="about-footer">
        <p>Ready to make the switch to solar energy? Contact us today!</p>
      </footer>
    </div>
  );
};

export default About;