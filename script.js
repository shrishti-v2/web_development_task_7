function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json()) // Parse JSON
        .then(users => {
            const container = document.getElementById("user-container");
            container.innerHTML = ""; // Clear existing data

            users.forEach(user => {  // Loop through users
                const userDiv = document.createElement("div");
                userDiv.className = "user-card";
                userDiv.innerHTML = `
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.city}, ${user.address.street}</p>
                `;
                container.appendChild(userDiv);
            });
        })
        .catch(error => {  // Handle errors
            console.error("Error fetching user data:", error);
            document.getElementById("user-container").innerHTML = '<p class="error-message">Failed to load user data. Check network connection.</p>';
        });
}

//Add event listener for reload button
document.getElementById("reload").addEventListener("click", fetchUsers);

// Initial fetch
fetchUsers();