import { create } from 'zustand';

const useProducto = create(set => ({
  productos: [],

  agregarProductos : (productos) => {
    console.log('entra acaaa  ')
    return set({productos: productos})
  }
  
}))


export default useProducto;