## Birthday Reminder App
This project is a part of John Smilga's React course I took. For more information, visit https://johnsmilga.com/

## Figma URL
[Birthday Buddy](https://www.figma.com/file/e2vsLe9DMnXZIygNHkwGL1/Birthday-buddy?node-id=0%3A1&t=AGNWdO5QQGOoNCfD-1)

## Overview
The Birthday Reminder App is a simple React application designed to display a list of people and their birthdays. It shows how many birthdays are today and provides a clean interface to manage and clear this information.

## Steps to Build
Import Data: Import an array of objects from data.js, where each object represents a person with properties like name, age, and image.

Setup State Variable: Use the useState hook to set up the imported data as a state variable in App.jsx.

Iterate and Render:

Display the total number of birthdays using the length property of the state variable.
Use the map method to iterate over the data array and render each person's details.
Create a List component to hold and render the list of people.
Create a Person component to display individual person's details (image, name, age).
Clear List: Add a button in App.jsx to clear the list by resetting the state variable to an empty array.

## Summary
The flow of the application involves importing data, setting up state, mapping through the data to render components, and providing a functionality
