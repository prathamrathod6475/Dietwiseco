const auth = firebase.auth();

// Client Login
function clientLogin() {
  const email = document.getElementById("clientEmail").value;
  const password = document.getElementById("clientPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "client.html"; // only if login succeeds
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
}

// Admin Login
function adminLogin() {
  const email = document.getElementById("adminUser").value;
  const password = document.getElementById("adminPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      // Only allow specific admin email
      if (user.email === "youradminemail@gmail.com") {
        window.location.href = "admin.html";
      } else {
        alert("Access denied. Not an admin.");
        auth.signOut();
      }
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
}
