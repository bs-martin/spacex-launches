import React, { useEffect } from "react"
import { useStore } from "./store"
import { fetchLaunches } from "./api/endpoints"

import LaunchTable from "./components/Launch/Table"
import LaunchHeader from "./components/Launch/Header"

import "./scss/styles.css"

const App = () => {
  const { state, dispatch } = useStore()

  // Load launch data into state
  const getData = async () => {
    dispatch({ type: "SET_LOADING", isLoading: true })
    let launches = await fetchLaunches()
    dispatch({ type: "SET_LAUNCHES", launches })
    dispatch({ type: "SET_LOADING", isLoading: false })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div id="app" className="page-wrapper">
      <header>
        <h1>SpaceX Launches</h1>
      </header>

      <React.StrictMode>
        <LaunchHeader onRefreshButtonClick={() => getData()}></LaunchHeader>
        <main>
          {state.launches.length ? (
            <LaunchTable
              filters={state.filters}
              launches={state.launches}
              isLoading={state.isLoading}
            ></LaunchTable>
          ) : (
            <h2>Loading SpaceX Launches...</h2>
          )}
        </main>
      </React.StrictMode>
    </div>
  )
}

export default App
