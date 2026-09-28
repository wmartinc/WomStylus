import { useState } from "react"
import Spinner from "./Spinner"

const Card = ({ imagen, descripcion, titulo }) => {
  const [cargada, setCargada] = useState(false)
  
  return (
    <div className="border w-full max-w-100 border-slate-800/5 mt-4 md:w-60 aparicion shadow-sm rounded transition-transform hover:-translate-y-1">
      <div className="w-[45%] border border-black/10 mt-1 m-auto"></div>
      <div className="w-[90%] border border-black/10 mt-1 m-auto"></div>
      
      <img src={imagen} alt="" className={cargada ? "" : "hidden"} onLoad={() => setCargada(true)} />
      {!cargada && <SkeletonImage />}
      
      <h2>{titulo}</h2>
      <div className="p-4 w-full flex flex-col">
        <p className="detalles text-sm text-shadow-sm">
          {
            descripcion
          }
        </p>
        <button className="ml-auto mt-2 underline">Ver mas</button>
      </div>
      
    </div>
  )
}

const SkeletonImage = () => {
  return (
    <div className="w-full h-52 flex-center">
      <Spinner size={18} />
    </div>
  )
}

export default Card
