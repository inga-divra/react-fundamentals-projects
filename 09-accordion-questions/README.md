## Accordion Questions https://accordion-questions-indagy.netlify.app/

## Figma URL

[Accordion](https://www.figma.com/file/TAwJ3kWOqkw0o8UVtAMOHO/Accordion?node-id=0%3A1&t=1YEti8xBykw69tBH-1)

## Project Overview
This small project is designed to display a list of questions and their answers. Users can toggle the visibility of each answer and ensure that only one question's answer is visible at a time. This project is a part of John Smilga's React course I took. For more information, visit https://johnsmilga.com/

## Steps

#### Examine and Import Data
Import the questions array from data.js into your project.

#### Setup State Value
Use the useState hook to set up the questions array as a state variable.

#### Render Questions
Iterate over the questions array and render a SingleQuestion component for each item.
Each SingleQuestion should display the question text in the header and include a button to toggle the answer text.

#### Toggle Question
In the SingleQuestion component, create a function to toggle a showInfo flag.
When showInfo is true, display the answer text; otherwise, display only the question text.

#### Single Active Question
Modify the state to keep track of the currently selected question index.
Define a function to update the state with the selected question index.
Render only the SingleQuestion component that corresponds to the selected question index.
