import React from 'react'
import './movies-add-form.css'
export const MoviesAddForm = () => {
  return (
    <div className='movies-add-form'>
        <h3>Yangi kino qoshish</h3>
        <form action="s" className='add-form d-flex'>
            <input type="text" className='form-control new-post-label' placeholder='Qanday kino ?' />
            <input type="number" className='form-control new-post-label' placeholder='Necha marotaba korilgan ?'/>
            <button type='submit' className='btn btn-outline-dark'>Qoshish</button>
        </form>
    </div>
  )
}
