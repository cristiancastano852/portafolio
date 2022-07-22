import React from "react"

const Spancomponent = ({icon, texto}) => {
  return (
    <span className='flex justify-center bg-cielo text-blanco text-20 gap-2 p-1'>
         {icon}{texto}
    </span>
  );
};

export {Spancomponent};