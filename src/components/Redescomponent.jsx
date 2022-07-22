import React from 'react'

const Redescomponent = ({icon, texto, url}) => {
  return (
    <div className='flex flex-row'>
        <a className='flex flex-row space-x-2' href={url} target="_blank">{icon}{texto}</a>
    </div>
  )
}

export {Redescomponent}