

import Card from "../shared/Card"

function Productos({ productos, total }) {
  return (
    <div className="size-full flex flex-col">
      <span className="text-slate-700 font-semibold aparicion">Se obtuvieron {total} productos!</span>
      <div className="contenedor-tarjetas">
        {
          productos?.map((producto) => (
            <Card key={producto.id}
              producto={producto}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Productos
