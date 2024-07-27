import React from 'react'
import CardBG from '../assets/yoga_bg.png'
import Tag from './Tag';

function Retreat({ id, item }) {

  const dateArr = new Date(item?.date).toString().split(' ');
  const endDate = parseInt(dateArr[2]) + item.duration;
  const formattedDate = dateArr[1] + ' ' + `${dateArr[2]}-${endDate.toString()}` + ', ' + dateArr[3];
  //console.log(formattedDate);

  return (
    <div key={id} className='p-4 bg-amber-50 shadow-lg rounded-xl h-2/3'>
        {/* <div className='w-full h-2/3 border border-black'> */}
            <img src={item?.image} alt="Retreat Image" width={'100%'} className='h-1/3 object-cover'/>
        {/* </div> */}
        <div className='detailContainer mt-5 w-full'>
            <h2 className='text-lg font-bold'> {item.title} </h2>
            <p className='mt-2 overflow-auto'> {item.description} </p>
            <div className='flex flex-row mt-10 justify-between'>
                <div className='flex flex-col'>
                    <span> <label> Date: </label> {formattedDate} </span>
                    <span className='mt-2'> <label> Location: </label> {item.location} </span>
                </div>
                <div className='flex flex-col items-end'>
                    <label> Price </label>
                    <p className='text-2xl font-bold'> ₹{item.price} </p>
                </div>
            </div>
            <div className='flex flex-row mt-6'>
                {
                    item?.tag.map(tagName=> (
                        <Tag tag={tagName}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Retreat