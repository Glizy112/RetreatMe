import React, { useState } from 'react'

function Searchbar(props) {

  const [text, setText] = useState('');

  const handleChange =(e)=> {
    e.preventDefault();
    console.log(e.target.value);
    setText(e.target.value);
  }

  const handleKeyDown =(e)=> {
    if(e.key === 'Enter') {
      console.log('Enter key pressed');
      //props.searchItems(text);
    }
  }

  return (
    <input
        placeholder='Search retreats by title'
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className='flex flex-auto bg-slate-200 p-4 rounded-lg text-black placeholder-gray-700'
    />
  )
}

export default Searchbar