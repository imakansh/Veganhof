import React from 'react';
import Contact from './images/contact.jpg'
const ContactUs = () => {
  const containerStyle = {
    padding: '75px'
};
  return (
    <div className="container">
      <div style={containerStyle}></div>
      <div className="row">
        <div className="col-md-6">
          <div>
            
            <form>
            <h1 className='text-left'>Contact Us</h1>
              <div className="form-group text-left">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" />
              </div>

              <div className="form-group text-left">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="form-group text-left">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" id="message"></textarea>
              </div>

              <button type="submit" className="btn btn-primary text-left">Submit</button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <img src={Contact} alt="Image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
