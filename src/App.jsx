import React, { useState, useEffect } from 'react'
import './App.css'
import Banner from './components/Banner'
import Searchbar from './components/Searchbar'
import TypeFilter from './components/TypeFilter'
import DateFilter from './components/DateFilter'
import Retreat from './components/Retreat'
import Button from './components/PageButton'

const baseUrl = 'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats';

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=> {
    fetchItems();
  },[currentPage]);

  const fetchItems =async()=> {
    try {
      const response = await fetch(baseUrl + `?page=${currentPage}&limit=3`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //const data = await response.json();
      if(response.ok) {
        const data = await response.json();
        console.log(data);
        setItems(data);
      } 
    } catch (error) {
        console.error(error);
    }
  }

  const handlePrevClick =()=> {
    if(currentPage > 1) {
      setCurrentPage(prevPage=> prevPage - 1);
    }
  }

  const handleNextClick =()=> {
    setCurrentPage(prevPage=> prevPage + 1);
  }

  return (
    <div className='container'>
      <header className='w-full p-7 bg-black'>
        <h1 className="text-xl font-semibold text-white" onClick={()=> console.log(currentPage)}>
          Wellness Retreats
        </h1>
      </header>

      <div className='heroSection m-8'>
        <Banner/>
        <div className='flex flex-row items-center justify-between'>
          <Searchbar/>
          <div className='ml-8 mb-8 mt-8'>
            <DateFilter/>
            <TypeFilter/>
          </div>
        </div>
      </div>
      <div className='retreatList m-8 grid grid-cols-3 gap-6 h-1/3'>
        {
          items?.map(item=> (
            <Retreat id={item?.id} item={item}/>
          ))
        }
      </div>
      
      <div className='pageButtonContainer mb-10 text-center'>
        <Button id="prev" title="Previous" handleClick={handlePrevClick} currentPage={currentPage}/>
        <Button id="next" title="Next" handleClick={handleNextClick}/>
      </div>
    </div>
  )
}

export default App
