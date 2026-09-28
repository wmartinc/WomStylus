

import Card from "../shared/Card"

function Productos({ productos, total }) {
  return (
    <div className="size-full flex flex-col">
      <span className="text-slate-700 font-semibold aparicion">Se obtuvieron {total} productos!</span>
      <div className="flex flex-wrap justify-between gap-2">
        {
          productos?.map((producto) => (
            <Card key={producto.id}
              imagen={producto?.thumbnail}
              descripcion={producto.description}
              titulo={producto.tittle}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Productos
