import Productos from "./Productos"
import Spinner from "../shared/Spinner"
import useSWR from 'swr'
import { obtenerTodosProductos } from "../../controllers/producto"
import useProducto from "../../store/producto.store"

const PRODUCTOS_API = import.meta.env.VITE_API_PRODUCTOS



function Main() {
  const guardarDatos = useProducto(state => state.agregarProductos)
  const data = useProducto(state => state.productos)
  const {isLoading} = useSWR(PRODUCTOS_API, obtenerTodosProductos, { onSuccess: guardarDatos})
  
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-wrap gap-5 justify-center">
      {
          (isLoading && data == null) ? <Spinner /> : <Productos productos={data?.products} total={data?.total} />
      }
    </main>
  )
}

export default Main
