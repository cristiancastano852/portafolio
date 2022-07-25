import React from 'react';

const Redescomponent = ({ icon, texto, url }) => (
  <div className='flex flex-row mb-4 sombra-2xl lg:mt-2 '>
    <a className='flex' href={url} target='_blank' rel='noreferrer'>
      {icon}
    </a>
    <a
      className='hidden ml-4 md:flex'
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      {texto}
    </a>
  </div>
);

export { Redescomponent };
