import axios from 'axios';
import React, { useState } from 'react';
import Movie from './Movie'

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([]);

    axios.get(fetchURL).then((response)=>{
        setMovies(response.data.results)
    },[fetchURL])
    // console.log(movies)
  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center'>
        <div id={'slider'} className='w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide'>
            {movies.map((item, id)=>(
                <Movie key={id} item={item} />
            ))}
        </div>
    </div>
    </>
  )
}

export default Row;