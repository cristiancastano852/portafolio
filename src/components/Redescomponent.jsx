import React from 'react'

const Redescomponent = ({icon, texto, url}) => {
  return (
    <div className='flex flex-row mb-4 sombra-2xl lg:mt-2 '>
        <a className='flex' href={url} target="_blank">{icon}</a>
        <a className='hidden ml-4 md:flex' href={url} target="_blank">{texto}</a>
    </div>
  )
}

export {Redescomponent}