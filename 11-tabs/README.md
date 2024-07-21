## Project Overview

This project is a simple React application that displays a list of job experiences. The application fetches job data from an external API, maintains state to manage the currently selected job, and dynamically renders job details and duties. Users can navigate through different jobs using a set of buttons, each representing a job fetched from the API.

## Figma URL

[Tabs](https://www.figma.com/file/FJC19b9eUWS62HKR8L9Dmn/Tabs?node-id=0%3A1&t=8Rio02EFK1r9ItDW-1)

## Application Flow

1. Use the fetch API in App.jsx to get job information, set up a loading state, and display a message while fetching data.
2. Store fetched data in a state variable using useState.
3. Create a JobInfo component to display the first job using object destructuring.
4. Use the Duties component to render the list of duties.
5. Generate unique IDs with the uuid library for the JobInfo and Duties components.
6. Create a currentItem state variable and pass it to the JobInfo component to display the current job.
7. Set up a BtnContainer component, passing down the necessary props.
8. Create buttons in the BtnContainer for each job and attach the setCurrentItem function to update the currentItem state and render the selected job.
