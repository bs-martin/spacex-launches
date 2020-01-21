const launchesUrl = "https://api.spacexdata.com/v2/launches"

function fetchLaunches() {
  return fetch(launchesUrl)
    .then(res => res.json())
    .then(data => {
      return data
        .sort(function(a, b) {
          return b.launch_date_unix - a.launch_date_unix
        })
        .map(launch => new Launch(launch))
    })
}

const Launch = launch => {
  return {
    flight_number: launch.flight_number,
    mission_patch_small: launch.links.mission_patch_small,
    rocket_name: launch.rocket.rocket_name,
    rocket_type: launch.rocket.rocket_type,
    launch_date: new Date(launch.launch_date_local).toLocaleDateString(),
    details: launch.details,
    article_link: launch.links.article_link,
    land_success: launch.rocket.first_stage.cores[0].land_success,
    reused: launch.rocket.first_stage.cores[0].reused,
    reddit_launch: launch.links.reddit_launch != null
  }
}

export { fetchLaunches }
