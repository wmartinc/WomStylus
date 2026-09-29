import { useState } from "react"
import Spinner from "./Spinner"
import { Star } from "lucide-react"

const Card = ({ producto }) => {
  const [cargada, setCargada] = useState(false)

  const mostrarInformacionProducto = () => {
    
  }

  return (
    <div className="border w-full max-w-60 border-slate-800/5 mt-4 md:w-60 aparicion flex flex-col justify-center shadow-sm rounded transition-transform hover:-translate-y-1">
      <div className="w-[45%] border border-black/10 mt-1 m-auto"></div>
      <div className="w-[90%] border border-black/10 mt-1 m-auto"></div>

      <img loading="eager" src={producto.thumbnail} alt="" className={cargada ? "" : "hidden"} onLoad={() => setCargada(true)} />
      {!cargada && <SkeletonImage />}
      <h2 className="text-center">{producto.title}</h2>
      <div className="p-4 w-full flex flex-col">
        <p className="detalles text-sm text-shadow-sm leading-5 text-descripcion">
          {
            producto.description
          }
        </p>
          <span className="m-auto text-sm text-zinc-600">SKU: {producto.sku}</span>
        <div className="flex justify-between mt-5">
          <span className="text-sm text-cyan-950 font-semibold  ">Precio: ${producto.price}</span>
          <span className="flex items-center gap-2"><Star size={15} className="fill-yellow-300 stroke-yellow-300" /> {producto.rating}</span>
        </div>
        <span className="text-sm text-slate-500">Estado: {producto.availabilityStatus}</span>
        <button className="ml-auto mt-2 underline" onClick={mostrarInformacionProducto}>Ver mas</button>
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
