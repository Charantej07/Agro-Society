/**
 * Footer
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
  const infoLinks = [
    { id: 0, name: 'Contact Us', to: '/contact' },
    { id: 1, name: 'Sell With Us', to: '/sell' },
    { id: 2, name: 'Shipping', to: '/shipping' }
  ];

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer
      className='footer'
      style={{ backgroundColor: 'white', color: 'white' }}
    >
      <Container>
        <div className='footer-content'>
          {/* Customer Service */}
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase' style={{ color: 'white' }}>
                Customer Service
              </h3>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          {/* Links */}
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase' style={{ color: 'white' }}>
                Links
              </h3>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          {/* Newsletter */}
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase' style={{ color: 'white' }}>
                Newsletter
              </h3>
              <Newsletter />
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} MERN Store</span>
        </div>
        <ul className='footer-social-item'>
          <li>
            <a href='/#facebook' rel='noreferrer noopener' target='_blank'>
              <span className='facebook-icon' />
            </a>
          </li>
          <li>
            <a href='/#instagram' rel='noreferrer noopener' target='_blank'>
              <span className='instagram-icon' />
            </a>
          </li>
          <li>
            <a href='/#pinterest' rel='noreferrer noopener' target='_blank'>
              <span className='pinterest-icon' />
            </a>
          </li>
          <li>
            <a href='/#twitter' rel='noreferrer noopener' target='_blank'>
              <span className='twitter-icon' />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
