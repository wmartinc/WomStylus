import { useState } from "react";
import { obtenerTodosProductos } from "../controllers/producto";

const useProductos = () => {
  const [estado, setEstado] = useState("")
  const [error, setError] = useState(null)
  const [respuesta, setRespuesta] = useState(null)

  const getTodosProductos = async () => {
    try {
      setEstado("cargando")
      const respuestaApi = await obtenerTodosProductos();
      setRespuesta(respuestaApi)
    } catch {
      setError("Ago salio mal")
    } finally {
      setEstado("")
    }
  }

  return {
    estado, error, respuesta,
    getTodosProductos
  }

}


export default useProductos;