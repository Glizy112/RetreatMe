import React from 'react'

function Tag({ tag }) {
  return (
    <div className='px-4 py-3 rounded-3xl mr-2 bg-black'>
        <p className='text-sm font-normal text-white'> {tag} </p>
    </div>
  )
}

export default Tag