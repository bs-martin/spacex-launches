// store.js
import React, { createContext, useContext, useReducer } from "react"

const StoreContext = createContext()
const initialState = {
  filters: {
    success: false,
    reused: false,
    reddit: false
  },
  launches: [],
  isLoading: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LAUNCHES":
      return { ...state, launches: action.launches }
    case "SET_FILTER":
      return {
        ...state,
        filters: { ...state.filters, [action.filter]: action.isChecked }
      }
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
