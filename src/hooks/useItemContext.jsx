// CUSTOM HOOKS
// Empiezan con la palabra use
// Son funciones
// Deben usar otros hooks de react
import { useContext } from 'react'
import { ItemContext } from '../context/ItemContext'

// Paso 3: Crear un custom hook para usar el contexto
export const useItemContext = () => {
  const context = useContext(ItemContext)
  if (!context) {
    throw new Error('useItemContext debe usarse dentro de ItemProvider')
  }
  return context
}
