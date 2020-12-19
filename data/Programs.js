const DATA_URL = "https://api.spacexdata.com/v3/launches?limit=100";

export const getLaunchPrograms = async (landing, launch, year) => {
  let SPACEX_API_URL = DATA_URL;
  let url = new URL(SPACEX_API_URL);

  // Based on params alter URL
  if (year) url.searchParams.set("launch_year", year);
  if (landing) {
    if (landing === "True") {
      url.searchParams.set("land_success", true);
    } else {
      url.searchParams.set("land_success", false);
    }
  }
  if (launch) {
    if (launch === "True") {
      url.searchParams.set("launch_success", true);
    } else {
      url.searchParams.set("launch_success", false);
    }
  }

  const jsonData = await fetch(url);
  const response = await jsonData.json();
  return response;
};
