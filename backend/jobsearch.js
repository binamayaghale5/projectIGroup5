
const searchInput = document.querySelector(".search");
        const jobCards = document.querySelectorAll(".job-card");
        const jobGrid = document.querySelector(".job-grid");

        // Create a "No jobs found" message element
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No jobs found ←";
        noResultsMessage.style.textAlign = "center";
        noResultsMessage.style.width = "100%";
        noResultsMessage.style.fontSize = "18px";
        noResultsMessage.style.padding = "20px";
        noResultsMessage.style.display = "none"; // hidden initially
        jobGrid.parentNode.appendChild(noResultsMessage); // add after .job-grid

        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase();
            let matchCount = 0;

            jobCards.forEach(card => {
                const title = card.querySelector("h3").textContent.toLowerCase();
                const company = card.querySelectorAll("p")[0].textContent.toLowerCase();
                const location = card.querySelectorAll("p")[1].textContent.toLowerCase();

                const match = title.includes(query) || company.includes(query) || location.includes(query);

                card.style.display = match ? "block" : "none";

                if (match) matchCount++;
            });

            // Show or hide "no results" message
            noResultsMessage.style.display = matchCount === 0 ? "block" : "none";

              window.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const username = localStorage.getItem("currentUser");
    const navSection = document.getElementById("navUserSection");

    if (isLoggedIn && username) {
      navSection.innerHTML = `
        <div class="user-profile">
          👤 <strong>${username}</strong>
          <button id="logoutBtn" style="margin-left:10px; padding:5px;">Logout</button>
        </div>
      `;

      document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("currentUser");
        window.location.reload();
      });
    } else {
      navSection.innerHTML = `
        <a href="/pages/login.html" class="signbutton">Sign Up here</a>
      `;
    }
  });

        });