import axiosClient from './axiosConfig'

export const category = {
  movie: 'movie',
  tv: 'tv',
  trending: 'trending',
  all: 'all'
}

export const movieType = {
  popular: 'popular',
  top_rated: 'top_rated',
  upcoming: 'upcoming',
  now_playing: 'now_playing'
}

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air'
}

const tmdbAPI = {

  getMoviesList: (type) => {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url);
  },

  getTvList: (type) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url);
  },

  getTrending: (cate) => {
    const url = 'trending/' + category[cate] + '/week';
    return axiosClient.get(url);
  }
}
export default tmdbAPI;