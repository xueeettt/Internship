import React from 'react';
import ContactBoard from '../../components/contactBoard';
import GoogleMap from '../../components/google-map';
import './style.less';

const Contact = () => {
  return (
    <div className="container">
      <div className="googleMapContainer">
        <GoogleMap apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} />
      </div>
      <div className='contactBoard'>
        <ContactBoard/>
      </div>
    </div>
  );
};

export default Contact;