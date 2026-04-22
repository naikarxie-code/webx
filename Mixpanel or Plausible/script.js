function trackPage(pageName) {
  // total website visits
  let totalVisits = localStorage.getItem("totalVisits");
  totalVisits = totalVisits ? parseInt(totalVisits) : 0;
  totalVisits++;
  localStorage.setItem("totalVisits", totalVisits);

  // track individual page views
  let pageViews = localStorage.getItem(pageName);
  pageViews = pageViews ? parseInt(pageViews) : 0;
  pageViews++;
  localStorage.setItem(pageName, pageViews);
}

function generateReport() {
  document.getElementById("totalVisits").textContent =
    localStorage.getItem("totalVisits") || 0;

  document.getElementById("homeViews").textContent =
    localStorage.getItem("Home") || 0;

  document.getElementById("toolsViews").textContent =
    localStorage.getItem("Tools") || 0;

  document.getElementById("reportsViews").textContent =
    localStorage.getItem("Reports") || 0;
}