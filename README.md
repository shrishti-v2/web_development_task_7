# web_development_task_7
User Data Fetching Project
## Overview
This project is a simple web application that fetches user data from an external API (`https://jsonplaceholder.typicode.com/users`) and displays it on the page. The application handles errors gracefully, applies basic styling using CSS, and includes a reload button to refetch data.

## Features
- Fetch User Data: Uses JavaScript `fetch()` to request and display user details (name, email, and address).
- Error Handling: Displays an error message when the data request fails, ensuring a smooth user experience.
- Responsive UI: Uses CSS for basic styling to make the displayed data visually appealing.
- Reload Functionality: Provides a button to refetch and update the user data dynamically.
- Network Error Handling: Displays a clear error message when the network is unavailable.

## Technologies Used
- HTML: Structure and container for displaying user data.
- CSS: Styling for enhanced presentation.
- JavaScript: Fetching data, handling errors, and dynamic content updates.

## Installation & Usage
1. Clone this repository.
2. Open the index.html file in a browser.
3. Ensure your internet connection is active and watch the data populate.
4. Click the Reload button to fetch new data.

## Handling Network Errors
To test error handling:
- Disconnect from the internet.
- Reload the page.
- Observe the error message displayed.

## Future Enhancements
- Add search functionality to filter users.
- Improve UI design with advanced CSS styling.
- Implement pagination for large data sets.
- Introduce a loading indicator while fetching data.
