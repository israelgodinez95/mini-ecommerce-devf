import { createContext, useState, useEffect } from 'react'

// Paso 1: Crear el contexto
const ItemContext = createContext()

// Paso 2: Crear el proveedor del contexto
// El proovedor maneja de donde se obtiene la informacion y como se comparte
// El proveedor es un COMPONENTE que envuelve a los componentes que usaran el contexto

function ItemProvider (props) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState({}) // Item seleccionado

  useEffect(() => {
    fetch('https://mini-ecommerce-devf.onrender.com/items')
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setLoading(false)
      })
      .catch(error => console.error(error))
  }
  , [])

  // Crear un objeto con la informacion que va a tener el contexto
  const data = {
    items,
    loading,
    selectedItem,
    setSelectedItem
  }

  return (
    <ItemContext.Provider value={data}>
      {props.children}
    </ItemContext.Provider>
  )
}

// Exportar las funciones para que puedan ser accedidas
export {
  ItemContext,
  ItemProvider
}

// USO DE CONTEXT
// Paso 4: Ahora debo ir a un componente de orden superior (Home.jsx) y envolverlo con el proovedor del contexto con la etiqueta ItemProvider
