import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer-box">
      <div className="contact-info">
        <a href="tel:+689-247-7666">
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a href="mailto:cfinn7789@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/cfinn7789">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/chelsey-finn-05ab71270/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}

export default Footer;