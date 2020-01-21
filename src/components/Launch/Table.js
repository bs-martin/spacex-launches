import React from "react"

const LaunchTable = ({ filters, launches, isLoading }) => {
  let filteredLaunches = launches.filter(launch => {
    if (filters.success && launch.land_success !== true) {
      return false
    }

    if (filters.reused && launch.reused !== true) {
      return false
    }

    if (filters.reddit && !launch.reddit_launch) {
      return false
    }

    return true
  })
  return (
    <div className="table-responsive">
      <table className={isLoading ? "LaunchTable loading" : "LaunchTable"}>
        <thead>
          <tr>
            <th>Badge</th>
            <th>Rocket Name</th>
            <th>Rocket Type</th>
            <th>Launch Date</th>
            <th>Details</th>
            <th>ID</th>
            <th className="article">Article</th>
          </tr>
        </thead>
        <tbody>
          {filteredLaunches.map(launch => (
            <tr key={launch.flight_number}>
              <td>
                <img src={launch.mission_patch_small} alt="Mission patch"></img>
              </td>
              <td>{launch.rocket_name}</td>
              <td>{launch.rocket_type}</td>
              <td>{launch.launch_date}</td>
              <td className="details">{launch.details}</td>
              <td>{launch.flight_number}</td>
              <td className="article">
                {launch.article_link ? (
                  <a
                    href={launch.article_link}
                    target="_blank"
                    className="article"
                  >
                    X
                  </a>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LaunchTable
