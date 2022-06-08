import React from 'react'
import Hero from '../../containers/Hero/Hero';
import Itemlist from '../../components/Itemlist/Itemlist';
import tmdbAPI, {category, movieType, tvType} from '../../api/tmdbAPI'

import './Home.scss'

const Home = () => {
  return (
    <div className="home">

      <Hero/>

      <h3 className="header-title">Movies</h3>

      <div className="app_home-movie-lists">

        <Itemlist label="Trending Movies" category={category.movie}/>

        <Itemlist
          label="Upcoming Movies"
          type={movieType.upcoming}
          category={category.movie}/>

      </div>

      <h3 className="header-title">Tv Shows</h3>

      <div className="app_home-tv-lists">

        <Itemlist label="Trending TV Shows" category={category.tv}/>

        <Itemlist
          label="TV Shows On the Air"
          type={tvType.on_the_air}
          category={category.tv}/>

      </div>

    </div>
  )
}

export default Home