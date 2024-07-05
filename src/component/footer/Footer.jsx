import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { logo} from '../../assets/Image'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="contailner">
        <div className="row">
          <div className="about-section">
            <div className="image-h6">
            <h6>Adventure Awaits </h6>
            <img src={logo}  />
            </div>
            <p className="text-justify">
            Comprehensive guides covering popular tourist spots.
            </p>
          </div>
          <div className="Copyright-section">

          <div className="">
            <ul className="social-icons">
              <li>Contact us And See What's New </li>
              <li><a className="instgram" href="https://www.instagram.com/maat.tours?igsh=MWM5OHEwZnc2N3hldw==" target='_blank' ><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a className="watsapp" href="https://wa.me/+201229867775" target='_blank' ><FontAwesomeIcon icon={faWhatsapp}  /></a></li>

            </ul>
          </div>
          <div className="">
            <p className="copyright-text">
              Copyright &copy; 2024 All Rights Reserved by <a>Ma'at Tours</a>.
            </p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
