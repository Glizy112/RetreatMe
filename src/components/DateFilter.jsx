import React, { useState } from 'react'

function DateFilter() {

  const [text, setText] = useState('');

  const handleChange =(e)=> {
    //e.preventDefault();
    console.log(e.target.value);
    setText(new Date(e.target.value));
  }

  return (
    <input
      type='date'
      name="dateFilter"
      placeholder="Filter by Date"
      //value={text}
      onChange={handleChange}
      className='bg-slate-200 text-black p-4 h-14 rounded-lg'
    />
  )
}

export default DateFilter