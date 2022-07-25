import React from 'react'

const Imagecomponent = ({image, texto}) => {
  return (
    <div className='snap-start flex-shrink-0'>
        <img src={image} alt="" className='object-cover rounded-t-lg w-40 h-40' />
        <h2 className='bg-cielo bg-opacity-80 rounded-b-lg text-center'>{texto}</h2>
    </div>
  )
}

export {Imagecomponent}