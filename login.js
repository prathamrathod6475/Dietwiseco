// Simple login validation (demo only)
function clientLogin() {
  const email = document.getElementById("clientEmail").value;
  const password = document.getElementById("clientPassword").value;

  if (email && password) {
    // Redirect to client dashboard
    window.location.href = "client.html";
  } else {
    alert("Please enter email and password.");
  }
}

function adminLogin() {
  const username = document.getElementById("adminUser").value;
  const password = document.getElementById("adminPassword").value;

  if (username === "admin" && password === "admin123") {
    // Redirect to admin dashboard
    window.location.href = "admin.html";
  } else {
    alert("Invalid admin credentials.");
  }
}
