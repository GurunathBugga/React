import React from 'react';
import './BodySection.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.webp';
import img4 from './images/img4.jpg';
import img5 from './images/img5.webp';


function BodyContent() {
  return (
    <>
      <div className="body">
        <div className="body-content">
          <div className="text">
            <h2>Welcome to Our Travel Adventures</h2>
            <p>Explore the beauty of the world with us. Whether you're seeking the tranquility of</p>
            <p>pristine beaches, the excitement of remote adventures, or the richness of cultural experiences,</p>
            <p>we've got it all covered.</p>
            <p>Our expert guides and carefully curated destinations ensure that your journey is filled with</p>
            <p>unforgettable moments. Discover the hidden gems and iconic landmarks that make each trip special.</p>
            <p>Scroll down to see some of the incredible destinations we offer:</p>
          </div>
          <div className="image-container">
            <img src={img1} alt="Img1" className="img1" style={{ borderRadius: '20px' }} />
          </div>
        </div>

        <div className="body-content">
          <div className="text">
          <h2>Eugene</h2>
            <p>Welcome to the enchanting island of Santorini, Greece. With its iconic white-washed buildings</p>
            <p>crystal-clear waters, and breathtaking sunsets, Santorini is a dream destination for travelers </p>
            <p>seeking romance and natural beauty. Explore charming villages, savor exquisite</p>
            <p>Mediterranean cuisine, and witness the world-famous sunset over the caldera. Santorini</p>
            <p>promises an unforgettable experience for those in search of serenity and allure.</p>
          </div>
          <div className="img2">
            <img src={img2} alt="img2" className="img2" style={{ borderRadius: '20px' }} />
          </div>
        </div>
        <div className="body-content">
          <div className="text">
          <h2>Geneva, Switzerland</h2>
            <p>Welcome to the enchanting island of Santorini, Greece. With its iconic white-washed buildings</p>
            <p>crystal-clear waters, and breathtaking sunsets, Santorini is a dream destination for travelers </p>
            <p>seeking romance and natural beauty. Explore charming villages, savor exquisite</p>
            <p>Mediterranean cuisine, and witness the world-famous sunset over the caldera. Santorini</p>
            <p>promises an unforgettable experience for those in search of serenity and allure.</p>
          </div>
          <div className="img2">
            <img src={img4} alt="img2" className="img2" style={{ borderRadius: '20px' }} />
          </div>
        </div>
        <div className="body-content">
          <div className="text">
          <h2>Alexandria</h2>
            <p>Welcome to the enchanting island of Santorini, Greece. With its iconic white-washed buildings</p>
            <p>crystal-clear waters, and breathtaking sunsets, Santorini is a dream destination for travelers </p>
            <p>seeking romance and natural beauty. Explore charming villages, savor exquisite</p>
            <p>Mediterranean cuisine, and witness the world-famous sunset over the caldera. Santorini</p>
            <p>promises an unforgettable experience for those in search of serenity and allure.</p>
          </div>
          <div className="img2">
            <img src={img5} alt="img2" className="img2" style={{ borderRadius: '20px' }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyContent;
