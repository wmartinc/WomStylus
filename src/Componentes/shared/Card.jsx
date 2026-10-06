import { useState } from "react"
import Spinner from "./Spinner"
import { Star } from "lucide-react"

const Card = ({ producto }) => {
  const [cargada, setCargada] = useState(false)

  const mostrarInformacionProducto = () => {

  }

  return (
    <div className="tarjeta size-full m-auto p-4 transition-transform hover:-translate-y-1 border border-slate-800/5 mt-4 aparicion flex flex-col justify-center shadow-sm rounded">
      <div className="w-[45%] border border-black/10 mt-1 m-auto"></div>
      <div className="w-[90%] border border-black/10 mt-1 m-auto"></div>
      <img loading="eager" src={producto.thumbnail} alt="" className={cargada ? "w-30 m-auto" : "hidden"} onLoad={() => setCargada(true)} />
      {!cargada && <SkeletonImage />}
      <h2 className="text-center p-4 font-semibold text-sm">{producto.title}</h2>
      <div className="w-full flex-col hidden md:flex">
      <span className="text-sm text-cyan-950 font-semibold  ">Precio: ${producto.price}</span>
        <span className="text-sm text-zinc-600">SKU: {producto.sku}</span>
        <div className="flex justify-between mt-5">
          <span className="flex items-center gap-2 text-sm"><Star size={15} className="fill-yellow-300 stroke-yellow-300" /> {producto.rating}</span>
        </div>
      </div>
      <span className="text-sm text-slate-500">Estado: {producto.availabilityStatus}</span>
      <button className="ml-auto mt-2 underline text-sm" onClick={mostrarInformacionProducto}>Ver mas</button>
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
