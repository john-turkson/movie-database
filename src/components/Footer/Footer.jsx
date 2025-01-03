import React from 'react'
import './Footer.scss';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h3>Movie Database</h3>

        <p>Movie Database is a online catalog for Movies and TV Shows</p>

        <p>Created by <a href="https://www.johnturksonportfolio.com/">John Turkson</a></p>

        <div className="links">
          <a href=""></a>
        </div>

      </div>

    </div>
  )
}

export default Footer