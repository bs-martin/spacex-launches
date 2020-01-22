import React from "react"
import LaunchRefreshButton from "./RefreshButton"
import LaunchFilter from "./Filter"

const LaunchHeader = ({ onRefreshButtonClick }) => {
  return (
    <nav className="LaunchHeader">
      <LaunchRefreshButton
        onRefreshButtonClick={onRefreshButtonClick}
      ></LaunchRefreshButton>

      <LaunchFilter label="With Reddit" filter="reddit"></LaunchFilter>
      <LaunchFilter label="Reused" filter="reused"></LaunchFilter>
      <LaunchFilter label="Land Success" filter="success"></LaunchFilter>
    </nav>
  )
}

export default LaunchHeader
