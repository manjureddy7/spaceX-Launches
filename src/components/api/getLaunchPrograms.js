const DATA_URL = "https://api.spacexdata.com/v3/launches?limit=100";

const getLaunchPrograms = async (land_success, launch_success, launch_year) => {
  let SPACEX_API_URL = DATA_URL;
  let url = new URL(SPACEX_API_URL);

  // Based on params alter URL
  if (launch_year) url.searchParams.set("launch_year", launch_year);
  if (land_success) {
    if (land_success === "true") {
      url.searchParams.set("land_success", true);
    } else {
      url.searchParams.set("land_success", false);
    }
  }
  if (launch_success) {
    if (launch_success === "true") {
      url.searchParams.set("launch_success", true);
    } else {
      url.searchParams.set("launch_success", false);
    }
  }

  const jsonData = await fetch(url);
  const response = await jsonData.json();
  return response;
};

export default getLaunchPrograms;
