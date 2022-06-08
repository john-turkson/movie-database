import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";

import './HeroSlide.scss'

const HeroSlide = (props) => {

    const heroImage_path = props.imagePath;
    return (
        
        <div className="hero-gradient">
              
              <div className="box slide-image"style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage_path})`}}/>
             
        </div>
            
  
    )
}

export default HeroSlide