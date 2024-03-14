import React from 'react';
import './movie-list-item.css';

const MovieListItem = ({name,viewers,favourite}) => {
  let ClassName='list-group-item d-flex justify-content-between '
  if(favourite){
    ClassName+=' favourite'
  }
  return (
    <ul className={ClassName}>
        <span className='list-group-item-label'>{name}</span>
        <input type="number" className='list-group-item-input' defaultValue={viewers} />
        <div className="d-flex justify-content-center align-items-center" >
            <button type='button' className='btn-cookie btn-sm'>
            <i class="fa-solid fa-cookie"></i>
            </button>
            <button type='button' className='btn-trash btn-sm'>
            <i class="fa-solid fa-trash"></i>
            </button>
            <i class="fa-solid fa-star"></i>
        </div>
    </ul>
  )
}
export default MovieListItem