const apiEndpoint = "https://oasi55hqkb.execute-api.us-west-2.amazonaws.com";

async function updateVisitorCount() {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    document.getElementById("visitor-count").innerText = data.views;
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    document.getElementById("visitor-count").innerText = "N/A";
  }
}

updateVisitorCount();