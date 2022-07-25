
const Studycomponent = ({titulo, lugar, tiempo}) => {
  return (
    <div className='snap-start h-40 w-40 flex-shrink-0 items-center text-center bg-gris rounded-md p-3'>
        <h1 className="text-base font-bold p-2">{titulo}</h1>
        <p className="text-xs pw-1">{lugar}</p>
        <h4 className="rounded-md bg-cielo text-xs m-2 p-2">{tiempo}</h4>
    </div>
   )
}

export {Studycomponent}