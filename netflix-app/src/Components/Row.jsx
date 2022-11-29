import axios from 'axios';
import React, { useState } from 'react';
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([]);

    axios.get(fetchURL).then((response)=>{
        setMovies(response.data.results)
    },[fetchURL])
    // console.log(movies)

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    };
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    };

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft
            onClick={slideLeft}
            className='bg-white left-0 rounded-full opacity-50 absolute hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' 
            size={40} 
        />
        <div id={'slider'} className='w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide'>
            {movies.map((item, id)=>(
                <Movie key={id} item={item} />
            ))}
        </div>
        <MdChevronRight
            onClick={slideRight}
            className='bg-white right-0 rounded-full opacity-50 absolute hover:opacity-100 cursor-pointer z-10 hidden group-hover:block ' 
            size={40} 
        />
    </div>
    </>
  )
}

export default Row;