import React from 'react';
import pic from './images/deatials.jpeg'
import Qualitypic from './images/Quality.jpeg'
import mainimg from './images/veganhof.jpeg'
const Details = () => {
    const containerStyle = {
        padding: '75px'
    };
    const imageStyle = {
      maxWidth: '550px',
      height: '350px'
    };

    const mainStyle = {
        maxWidth: '250px',
        height: '350px'
      };
  
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={mainimg} alt="Image" className="img-fluid" style={mainStyle}/>
            </div>
            <div className="col-md-6">
              <h2 className='text-left'>VeganHof</h2>
              <p className='text-left'>Veganhof is a humble initiative that aims to connect Vegan Producers and Vegan Consumers, providing a seamless buying and selling experience for those following a vegan lifestyle. As an Exclusively Vegan One-Stop Multi-Vendor Marketplace, Veganhof brings together a wide range of authentic vegan products, making them easily accessible in one online platform. By facilitating this, Veganhof aligns with its core values, as expressed by PETA: "Animals are not ours to experiment on, eat, wear, use for entertainment, or abuse in any other way. All beings deserve the freedom to live a natural life, honoring their inherent desires and instincts." Veganhof strives to uphold this principle and promote the availability of cruelty-free options for conscious consumers.</p>
              
            </div>
          </div>
        </div>
        <div style={containerStyle}></div>
        <div className='container-fluid bg-secondary text-white p-4'>
        <div className="container " >
          <div className="row">
            <div className="col-md-6">
              <h2 className='text-left'>Quality Check</h2>
              <p className='text-left'> Staying away from preservatives, artificial sweeteners, colors, allergens  - we source the most authentic ingredients from farms across the globe to ensure you get the Clean Nutrition to live an active life.Our complete ecosystem offers more than the products - Free diet consultation digitally and guidance from experts to keep you motivated and to help you on your journey of being better.  </p>
            </div>
            <div className="col-md-6">
              <img src={Qualitypic} alt="Image" className="img-fluid" style={imageStyle} />
            </div>
          </div>
        </div>
        </div>
  
        <div style={containerStyle}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={pic} alt="Image" className="img-fluid" style={imageStyle} />
            </div>
            <div className="col-md-6">
              <h2 className='text-left'>Our Team</h2>
              <p className='text-left'>We have a strong dedication to assisting individuals in their pursuit of personal growth, as we firmly believe that everyone possesses untapped potential. In your ongoing #aBetterYou journey, our goal is to ensure that you attain optimal physical and mental fitness by providing you with high-quality, clean nutrition that your body truly deserves.</p>
            
            </div>
          </div>
        </div>
        <div style={containerStyle}></div>
      </div>
    );
  };
export default Details;




