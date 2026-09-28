import Productos from "./Productos"
import Spinner from "../shared/Spinner"
import useSWR from 'swr'
import { obtenerTodosProductos } from "../../controllers/producto"

const PRODUCTOS_API = import.meta.env.VITE_API_PRODUCTOS

function Main() {
  const {isLoading, data} = useSWR(PRODUCTOS_API, obtenerTodosProductos)
  // const { error, estado, respuesta, getTodosProductos } = useProductos()

  // useEffect(() => {
  //   getTodosProductos()
  // }, [])

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-wrap gap-5 justify-center">
      {
        (isLoading && data == null) ? <Spinner /> : <Productos productos={data?.products} total={data?.total} />
      }
    </main>
  )
}

export default Main
