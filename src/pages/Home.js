import React from "react";
import "./Home.css";
import Carousel from "../components/Carousel";

const Home = () => {
  const carouselItems = [
    {
      imagePath: "image3.jpg",
      title: "Residential Solar Systems",
      description: "Empowering homes with sustainable solar energy solutions.",
    },
    {
      imagePath: "image2.jpg",
      title: "Commercial Solar Systems",
      description: "Providing cost-effective solar power for businesses.",
    },
    {
      imagePath: "image1.jpg",
      title: "Industrial Solar Solutions",
      description: "Reliable solar energy for large-scale industrial needs.",
    },
    {
      imagePath: "image3.jpg",
      title: "Residential Solar Systems",
      description: "Empowering homes with sustainable solar energy solutions.",
    },
    {
      imagePath: "image2.jpg",
      title: "Commercial Solar Systems",
      description: "Providing cost-effective solar power for businesses.",
    },
    {
      imagePath: "image1.jpg",
      title: "Industrial Solar Solutions",
      description: "Reliable solar energy for large-scale industrial needs.",
    },
    {
      imagePath: "image3.jpg",
      title: "Residential Solar Systems",
      description: "Empowering homes with sustainable solar energy solutions.",
    },
    {
      imagePath: "image2.jpg",
      title: "Commercial Solar Systems",
      description: "Providing cost-effective solar power for businesses.",
    },
    {
      imagePath: "image1.jpg",
      title: "Industrial Solar Solutions",
      description: "Reliable solar energy for large-scale industrial needs.",
    },
  ];

  const faqs = [
    {
      question: "What are the benefits of installing a solar system?",
      answer: "Solar systems help reduce electricity bills, minimize carbon footprint, and increase property value while providing reliable energy."
    },
    {
      question: "How long does it take to install a solar system?",
      answer: "The installation process typically takes 1-3 days, depending on the system size and complexity."
    },
    {
      question: "What maintenance does a solar system require?",
      answer: "Solar systems require minimal maintenance, such as cleaning panels and checking for obstructions like dirt or leaves."
    },
    {
      question: "Does a solar system work during cloudy days?",
      answer: "Yes, solar systems can generate power during cloudy days, though at reduced efficiency compared to sunny conditions."
    },
    {
      question: "Is financing available for solar systems?",
      answer: "Yes, we offer various financing options to make solar installations affordable for everyone."
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Vishwa Solar Systems</h1>
        <p>Your trusted partner for sustainable energy solutions.</p>
        <button className="cta-button">Making Greener at Every Step</button>
      </section>

      {/* Carousel Section */}
      <Carousel items={carouselItems} />

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>High Efficiency</h3>
            <p>Maximizing energy production with advanced technology.</p>
          </div>
          <div className="feature-card">
            <h3>Affordable Pricing</h3>
            <p>Cost-effective solar solutions for everyone.</p>
          </div>
          <div className="feature-card">
            <h3>Eco-Friendly</h3>
            <p>Contributing to a cleaner, sustainable planet.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <h2>Our Achievements</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3>10MW+</h3>
            <p>Solar Installed</p>
          </div>
          <div className="stat-card">
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <blockquote>
            "Vishwa Solar made the process seamless. Highly recommend their services!"
            <cite>- John Doe</cite>
          </blockquote>
          <blockquote>
            "Affordable pricing and excellent support. Great experience!"
            <cite>- Jane Smith</cite>
          </blockquote>
          <blockquote>
            "Switched to solar with their help. Our bills are significantly lower now!"
            <cite>- Alex Johnson</cite>
          </blockquote>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <h2>How It Works</h2>
        <div className="process-steps">
          <div className="step">
            <h3>1. Consultation</h3>
            <p>Discuss your needs and get a tailored plan.</p>
          </div>
          <div className="step">
            <h3>2. Installation</h3>
            <p>Expert installation by our certified team.</p>
          </div>
          <div className="step">
            <h3>3. Savings</h3>
            <p>Start saving with renewable energy solutions.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;



// // src/pages/Home.js
// import React from "react";
// import "./Home.css";
// import Carousel from "../components/Carousel";

// const Home = () => {
//   const carouselItems = [
//     {
//       imagePath: "image1.jpg",
//       title: "Residential Solar Systems",
//       description: "Empowering homes with sustainable solar energy solutions."
//     },
//     {
//       imagePath: "image2.jpg",
//       title: "Commercial Solar Systems",
//       description: "Providing cost-effective solar power for businesses."
//     },
//     {
//       imagePath: "image3.jpg",
//       title: "Industrial Solar Solutions",
//       description: "Reliable solar energy for large-scale industrial needs."
//     },
//     {
//       imagePath: "image3.jpg",
//       title: "Residential Solar Systems",
//       description: "Empowering homes with sustainable solar energy solutions."
//     },
//     {
//       imagePath: "image1.jpg",
//       title: "Commercial Solar Systems",
//       description: "Providing cost-effective solar power for businesses."
//     },
//     {
//       imagePath: "image6.jpg",
//       title: "Industrial Solar Solutions",
//       description: "Reliable solar energy for large-scale industrial needs."
//     },
//   ];

//   return (
//     <div className="home">
//       {/* Hero Section */}
//       <section className="hero">
//         <h1>Welcome to Vishwa Solar Systems</h1>
//         <p>Your trusted partner for sustainable energy solutions.</p>
//         <button className="cta-button">Making Greener At Every Step</button>
//       </section>

//       {/* Carousel Section */}
//       <Carousel items={carouselItems} />

//       {/* About Us Section */}
//       <section className="about-us">
//         <h2>About Vishwa Solar Systems</h2>
//         <p>
//           Vishwa Solar Systems specializes in the design and installation of solar
//           energy solutions for residential, commercial, and industrial applications.
//           With cutting-edge technology and a commitment to sustainability, we empower
//           our customers to embrace clean energy and contribute to a greener planet.
//         </p>
//       </section>

//       {/* Services Section */}
//       <section className="services">
//         <h2>Our Services</h2>
//         <div className="services-grid">
//           <div className="service-card">
//             <img src="residential.jpg" alt="Residential Solar" />
//             <h3>Residential Solar</h3>
//             <p>Customized solar systems tailored for homes, maximizing energy efficiency and savings.</p>
//           </div>
//           <div className="service-card">
//             <img src="commercial.jpg" alt="Commercial Solar" />
//             <h3>Commercial Solar</h3>
//             <p>Cost-effective solar installations designed to meet the needs of businesses of all sizes.</p>
//           </div>
//           <div className="service-card">
//             <img src="industrial.jpg" alt="Industrial Solar" />
//             <h3>Industrial Solar</h3>
//             <p>Reliable and scalable solar solutions for large-scale industrial energy requirements.</p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="why-choose-us">
//         <h2>Why Choose Us?</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <h3>High Efficiency</h3>
//             <p>
//               Our solar systems maximize energy output, reducing your carbon footprint
//               while delivering optimal performance.
//             </p>
//           </div>
//           <div className="feature-card">
//             <h3>Affordable Pricing</h3>
//             <p>
//               We provide cost-effective solutions without compromising on quality,
//               ensuring great value for every installation.
//             </p>
//           </div>
//           <div className="feature-card">
//             <h3>Eco-Friendly</h3>
//             <p>
//               Transition to renewable energy with our systems, which prioritize
//               sustainability and environmental conservation.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials">
//         <h2>What Our Clients Say</h2>
//         <div className="testimonial-slider">
//           <div className="testimonial">
//             <p>"Vishwa Solar transformed our home energy setup, and our bills have dropped significantly!"</p>
//             <h4>- John D.</h4>
//           </div>
//           <div className="testimonial">
//             <p>"Reliable service and exceptional support. Our business runs smoothly with their solar solutions."</p>
//             <h4>- GreenTech Solutions</h4>
//           </div>
//           <div className="testimonial">
//             <p>"Professional and efficient team. Highly recommend for industrial solar installations."</p>
//             <h4>- Future Industries</h4>
//           </div>
//         </div>
//       </section>

//       {/* Contact Us Section */}
//       <section className="contact-us">
//         <h2>Get in Touch</h2>
//         <p>
//           Ready to switch to solar? Contact us today for a free consultation!
//         </p>
//         <button className="cta-button">Contact Us</button>
//       </section>
//     </div>
//   );
// };

// export default Home;
