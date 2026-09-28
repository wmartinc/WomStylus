const obtenerTodosProductos = async (url) => {
  try {
    const estadoRespuesta = await fetch(url);
    const respuesta = await estadoRespuesta.json()
    return respuesta
  } catch {
    throw new Error()
  }
}

export  {
  obtenerTodosProductos
}