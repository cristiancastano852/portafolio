import React from 'react'

const InterestsComponent = ({titulo, descripcion}) => {
  return (
    <div className="bg-gris h-40 w-40 text-blanco text-center rounded-md p-3">
        <h1 className="text-base font-bold bg-cielo rounded-md">{titulo}</h1>
        <p className='text-xs'>{descripcion}</p>
    </div>
  )
}

export  {InterestsComponent}