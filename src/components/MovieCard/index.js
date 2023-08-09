
import { BiSolidStar} from 'react-icons/bi';

import {BsCalendar2DateFill,BsPen } from 'react-icons/bs';


import './index.css'


const MovieCard = (props) => {

    const {eachItem} = props 

    const {overview,title,releaseDate,voteAverage} = eachItem 

    return (
        <li>  
            <div className='poster-img-container'>
            <img className='poster-img' src='https://res.cloudinary.com/dictkn10p/image/upload/v1691557577/Screenshot_from_2023-08-09_10-28-14_ztxhbc.png' alt={title}/>
            </div>
            <div className='movie-card-container'>
            <h1 className='title-header'>{title}</h1>
            <p className='release-date'><BsCalendar2DateFill className='icon' color='red'/>RELEASE DATE:  <span>{releaseDate}</span></p>
            <p className='release-date'><BiSolidStar className='icon'  color='#FFCB2E'/>RATING:  <span>{voteAverage}</span></p>
            <p><BsPen/> {overview}</p>
            </div>
        </li>
    )
}


export default MovieCard