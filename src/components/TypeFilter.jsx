import React from 'react'

function TypeFilter() {
  return (
    <select
        name="type"
        id="type"
        className='bg-slate-200 text-black p-4 h-14 ml-3 rounded-lg'
    >
        <option value="">Filter by type</option>
        <option value="yoga">Yoga</option>
        <option value="meditation">Meditation</option>
        <option value="detox">Detox</option>
    </select>
  )
}

export default TypeFilter