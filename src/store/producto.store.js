import { create } from 'zustand';

const useProducto = create(set => ({
  productos: [],
  productoSeleccionado: null,

  agregarProductos : (productos) => {
    console.log('entra acaaa  ')
    return set({productos: productos})
  },

  guardarProductoSeleccionado: (producto) => {
    return set({productoSeleccionado: producto});
  }
}))


export default useProducto;