import React, {useState, useEffect} from 'react'
import tmdbAPI, {movieType} from '../../api/tmdbAPI';
import clientConfig from '../../api/clientConfig';

import HeroSlide from '../../components/HeroSlide/HeroSlide';

import {motion} from 'framer-motion';

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay} from "swiper";

import './Hero.scss'

const Hero = () => {

  const [movieItems,
    setMovieItems] = useState([]);

  const getMovies = async() => {

    try {
      const response = await tmdbAPI.getMoviesList(movieType.popular);
      setMovieItems(response.data.results.slice(0, 7));

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="hero-slide">
      <Swiper
        spaceBetween={30}
        grabCursor={true}
        slidesPerView={1}
        autoplay={{
        delay: 7000,
        disableOnInteraction: true
      }}
        modules={[Autoplay]}>

        {movieItems.map((movie, i) => (

          <SwiperSlide className="container" key={i}>

            <HeroSlide className="box"
              imagePath={clientConfig.originalImage(movie.backdrop_path)}
              title={movie.original_title}
              overview={movie.overview}
              posterPath={clientConfig.w500Image(movie.poster_path)}/>

            <motion.div className="box app__hero-content">
  
                <div className="app__hero-info">
  
                  <motion.h2 whileInView={{y: [-100, 0], opacity: [0, 1], delayChildren: 0.5 }} transition={{duration: 0.625}}>{movie.original_title}</motion.h2>
  
                  <motion.div whileInView={{y: [-100, 0], opacity: [0, 1]}}>{movie.overview}</motion.div>
  
                  <motion.button whileInView={{y: [100, 0], opacity: [0, 1]}} whileHover={{ scale: 1.15}} >More Details</motion.button>
  
                </div>
                
                <div className="app__hero-poster">
                  <motion.img src={clientConfig.w500Image(movie.poster_path)} alt={movie.original_title} />
                </div>
  
              </motion.div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero;
