import { useEffect, useState } from "react";

import './index.css'
import Header from "../Header";
import MovieCard from "../MovieCard";
import { useSortRating } from "../RatingSort";
import { NoMovies } from "../NoMoviesFound";

const Home = () => {
  
  const [change,setChange] = useState(true)

  const [movies, setMovies] = useState([]);

  const [search,setSearch] = useState('movies') // Defualt search input

  const [currentPage, setCurrentPage] = useState(0);

  const {sortOrder, sortedArray, handleSortChange} = useSortRating(movies,'asc')  

  const itemsPerPage = 5; 
  
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const handleClickPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const startIndex = currentPage * itemsPerPage;

  const endIndex = startIndex + itemsPerPage; 

  const moviesList = change? movies : sortedArray

  const displayedItems = moviesList.slice(startIndex, endIndex);
  console.log(displayedItems)

  const getData = async () => { 
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e8ccc676e299173067a80520c1fee405&query=${search}`
    );
    const data = await response.json();
    console.log(data.results);
    const formattedData = data.results.map((eachItem) => ({
      backdropPath: eachItem.backdrop_path,
      id: eachItem.id,
      overview: eachItem.overview,
      popularity: eachItem.popularity,
      posterPath: eachItem.poster_path,
      releaseDate: eachItem.release_date,
      title: eachItem.title,
      voteAverage: eachItem.vote_average,
      voteCount: eachItem.vote_count,
    }));
    console.log(formattedData);
    setMovies(formattedData);

  
  };

  useEffect(() => {
    getData();
  }, [search]);

  const searchInput = value => {
    getData();
    setSearch(value)
    setChange(true)
  }

  const sortChange = (val) => {
     setChange(val)
  }

  return (
    <>
    <Header searchInput={searchInput} sortOrder={sortOrder} sortedArray={sortedArray} handleSortChange={handleSortChange} sortChange={sortChange}/>
    <div className="bg-container"> 
  <ul>
    {displayedItems.map(eachItem=> <MovieCard eachItem={eachItem} key={eachItem.id} />)}
  </ul>
    {displayedItems.length !==0? <div className="buttons-container">
    <button className="btn btn-outline-primary" aria-label="Previous" onClick={handleClickNext} disabled={currentPage === totalPages - 1}>Descrease</button>
    <button className="btn btn-outline-primary" onClick={handleClickPrevious} disabled={currentPage === 0}>increase</button>
    </div> : <NoMovies/>}
  </div>
  </>
  )
}

export default Home;
