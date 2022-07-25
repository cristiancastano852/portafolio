import React from 'react';

const Spancomponent = ({ icon, texto }) => (
  <span className='flex justify-center bg-gradient-to-l from-cielo  text-blanco font-bold text-20 gap-2 p-1 lg:ml-1'>
    {icon}
    {texto}
  </span>
);

export { Spancomponent };
