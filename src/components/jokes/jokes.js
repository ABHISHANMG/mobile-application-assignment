import React, { useState, useEffect } from 'react';
import './index.css'
import { Header } from '../Header';


const categoryList = ['Programming','Pun','Misc','Dark']

const JokesPage = () => {
    const [jokes,setJokes] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('Programming');

    useEffect(() => {
        getJokesList();
    }, []);

    const getJokesList = async () => {
        const url =
            'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10';
        const response = await fetch(url);
        const data = await response.json();
        const jokesList = data.jokes;
        
        console.log(jokesList)
        setJokes(jokesList)
    };

    const filteredJokes = jokes.filter((each) => each.category === selectedCategory);
    console.log(filteredJokes)


    const changeCategory = (eachItem) => {
        setSelectedCategory(eachItem);
      }
      
      return (
        <>
          <Header/>
          <div className="main-bg">
            <ul className='cat-unrules'>
              {categoryList.map((eachItem, index)=> {
                return (
                  <li key={eachItem}  className='list-cat' onClick={() => changeCategory(eachItem)}>
                    <p className={eachItem===selectedCategory? 'active-tab':''}>{eachItem}</p>
                  </li>
                )
              })}
            </ul>
            <div className='jokes-container'>
                <ul className='jokes-unordered-container'>
                {filteredJokes.map((joke, index) => {
                            return (
                                <li key={index} className='joke-list'>
                                    <div class="card" Style="width: 18rem;">
                                    <div class="card-body">
                                        
                                        <p className="card-text" ><span>Joke : </span>{joke.joke}</p>  
                                    </div>
                        </div>
                                </li>
                            )
                    }
                        
                    )}
                </ul>
            </div>
        </div>
        </>
    );
};

export default JokesPage;