import React, {useState, useEffect} from 'react'
import tmdbAPI, {category, movieType, tvType} from '../../api/tmdbAPI';
import clientConfig from '../../api/clientConfig';

import {motion} from 'framer-motion';

import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from "swiper";

import './Itemlist.scss';

// Import Swiper styles
import "swiper/css";

const Itemlist = (props) => {

  //Items pulled from tmdb API
  const [listItems,
    setListItems] = useState([]);

  const getItems = async() => {

    console.log(props);

    if (props.category === category.movie && props.type != undefined) {

      switch (props.type) {

        case movieType.upcoming:

          try {
            const response = await tmdbAPI.getMoviesList(props.type);
            setListItems(response.data.results.slice(0, 20));

          } catch (error) {
            console.log(`Error Occured: ${error}`);
          }

          break;

        case movieType.top_rated:

          try {
            const response = await tmdbAPI.getMoviesList(props.type);
            setListItems(response.data.results.slice(0, 20));

          } catch (error) {
            console.log(`Error Occured: ${error}`);
          }

          break;

        case movieType.now_playing:

          try {
            const response = await tmdbAPI.getMoviesList(props.type);
            setListItems(response.data.results.slice(0, 20));

          } catch (error) {
            console.log(`Error Occured: ${error}`);
          }

          break;

        case movieType.now_playing:

          try {
            const response = await tmdbAPI.getMoviesList(props.type);
            setListItems(response.data.results.slice(0, 20));

          } catch (error) {
            console.log(`Error Occured: ${error}`);
          }

          break;

        default:
          try {
            const response = await tmdbAPI.getMoviesList(movieType.popular);
            setListItems(response.data.results.slice(0, 20));

          } catch (error) {
            console.log(`Error Occured: ${error}`);
          }
          break;
      }

    } else if (props.category === category.tv && props.type != undefined) {

      switch (props.type) {

        case tvType.upcoming:

          try {
            const response = await tmdbAPI.getTvList(props.type);
            setListItems(response.data.results.slice(0, 20));

          } catch (error) {
            console.log(`Error Occured: ${error}`);
          }

          break;

        case tvType.top_rated:

          try {
            const response = await tmdbAPI.getTvList(props.type);
            setListItems(response.data.results.slice(0, 20));

          } catch (error) {
            console.log(`Error Occured: ${error}`);
          }

          break;

        case tvType.on_the_air:

          try {
            const response = await tmdbAPI.getTvList(props.type);
            setListItems(response.data.results.slice(0, 20));

          } catch (error) {
            console.log(`Error Occured: ${error}`);
          }

          break;

        default:
          try {
            const response = await tmdbAPI.getTvList(tvType.popular);
            setListItems(response.data.results.slice(0, 20));

          } catch (error) {
            console.log(`Error Occured: ${error}`);
          }
          break;

      }

    } else if (props.category === category.movie && props.type == undefined) {

      try {
        const response = await tmdbAPI.getTrending(category.movie);
        setListItems(response.data.results.slice(0, 20));

      } catch (error) {
        console.log(`Error Occured: ${error}`);
      }

    } else if (props.category === category.tv && props.type == undefined) {

        try {
            const response = await tmdbAPI.getTrending(category.tv);
            setListItems(response.data.results.slice(0, 20));
    
          } catch (error) {
            console.log(`Error Occured: ${error}`);
          }
    }

  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="app__itemlist-container">
      <div className="app__itemlist-label">
        <h4>{props.label}</h4>
      </div>

      <div className="app__itemlist-list">

        <Swiper
          direction={"horizontal"}
          mousewheel={true}
          spaceBetween={30}
          slidesPerView={'auto'}
          modules={[Mousewheel]}>

          {listItems.map((item, i) => (
            <SwiperSlide key={i}>

              <motion.div className="app__itemlist-item">
                <img src={clientConfig.w500Image(item.poster_path)} alt={item.original_title}/>
                <p>{item.original_title || item.name}</p>
              </motion.div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </div>
  )
}

export default Itemlist