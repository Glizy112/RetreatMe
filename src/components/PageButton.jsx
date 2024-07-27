import React from 'react'

function PageButton(props) {
  return (
    <button 
      type="submit" 
      onClick={props?.handleClick}
      className={ 
        props.id=="prev" && props.currentPage===1 ? 'mx-3 bg-amber-300 w-32 p-3 rounded-md opacity-50'
        : 'mx-3 bg-amber-300 w-32 p-3 rounded-md'
      }
      disabled={props.currentPage===1 ? true : false}
    >
      <p className='font-medium'>{props.title}</p>
    </button>
  )
}

export default PageButton