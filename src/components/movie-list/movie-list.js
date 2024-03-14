import React from 'react'
import './movie-list.css'
import MovieListItem from './movie-list-item/movie-list-item'

const MovieList = ({data}) => {
  return (
    <div className='movie-list'>
      {
        data.map((item)=>(
          <MovieListItem {...item}/>
        ))
      }
     
      
    </div>
  )
}

export default MovieList