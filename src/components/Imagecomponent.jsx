import React from 'react'

const Imagecomponent = ({image, texto}) => {
  return (
    <div>
        <img src={image} alt="" className='object-cover rounded-md w-40 h-40' />
        <h2 className='bg-cielo bg-opacity-50'>{texto}</h2>
    </div>
  )
}

export {Imagecomponent}