import React from "react"
import refreshIcon from "../../assets/images/refresh.svg"

const LaunchRefreshButton = ({ onRefreshButtonClick, fill }) => {
  return (
    <div className="LaunchRefreshButton">
      <a onClick={onRefreshButtonClick}>
        <img src={refreshIcon} />
      </a>
    </div>
  )
}

export default LaunchRefreshButton
