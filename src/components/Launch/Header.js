import React from "react"
import LaunchRefreshButton from "./RefreshButton"
import LaunchFilter from "./Filter"

const LaunchHeader = ({ onRefreshButtonClick }) => {
  return (
    <div className="LaunchHeader">
      <LaunchRefreshButton
        onRefreshButtonClick={onRefreshButtonClick}
      ></LaunchRefreshButton>

      <LaunchFilter label="With Reddit" filter="reddit"></LaunchFilter>
      <LaunchFilter label="Reused" filter="reused"></LaunchFilter>
      <LaunchFilter label="Land Success" filter="success"></LaunchFilter>
    </div>
  )
}

export default LaunchHeader
