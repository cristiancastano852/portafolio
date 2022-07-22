
const Studycomponent = ({titulo, lugar, tiempo}) => {
console.log(titulo)
  return (
    <div className="bg-gris h-32 w-32 text-blanco text-center rounded-md p-3">
        <h1 className="text-base font-bold">{titulo}</h1>
        <p className="text-xs">{lugar}</p>
        <h4 className="rounded-md bg-cielo text-xs">{tiempo}</h4>
    </div>
  )
}

export {Studycomponent}