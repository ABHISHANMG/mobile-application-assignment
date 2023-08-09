import React from 'react'


import { BiSearchAlt} from 'react-icons/bi';


export const NoMovies = () => {
  return (
    <div className='not-found-container'>
        <BiSearchAlt size={250}/>
        <p>Try to search other movies...</p>
    </div>
  )
}
