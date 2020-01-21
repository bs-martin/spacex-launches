import React from "react"
import { useStore } from "../../store"

const LaunchFilter = ({ filter, label }) => {
  const { state, dispatch } = useStore()

  const updateFilter = (filter, isChecked) => {
    dispatch({ type: "SET_FILTER", filter, isChecked })
  }

  return (
    <label className="LaunchToggleFilter">
      <input
        type="checkbox"
        checked={state.filters[filter]}
        onChange={e => updateFilter(filter, e.target.checked)}
      />
      {label}
    </label>
  )
}

export default LaunchFilter
