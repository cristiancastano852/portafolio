import React from 'react';

const InterestsComponent = ({ titulo, descripcion }) => (
  <div className='h-40 w-40 snap-start flex-shrink-0 flex flex-col justify-center bg-gris  text-blanco text-center rounded-md p-3'>
    <h1 className='text-base font-bold bg-cielo rounded-md m-3'>{titulo}</h1>
    <p className='text-xs'>{descripcion}</p>
  </div>
);

export { InterestsComponent };
