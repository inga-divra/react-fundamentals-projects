## Reviews https://reviews-ingady.netlify.app/

## Figma URL

[Reviews](https://www.figma.com/file/e8L2QiR4GVTa5cGuRpXtk3/Reviews?node-id=0%3A1&t=gcCYcePiKxnkJ9kH-1)

### Project Overview: Reviews Component

In this project, we create a React component that displays reviews of different people. Users can navigate through the reviews using "Next" and "Previous" buttons, and can also click a "Surprise Me" button to display a random review. Here's a breakdown of what happens in the project:

#### Data Setup:

The data.js file contains an array of objects, where each object represents a review with properties such as name, job, image, and text.

#### State Management:

We use the useState hook to manage the current index of the displayed review.
const [index, setIndex] = useState(0); initializes the state to the first review.

#### Rendering the Review:

We destructure the current review's properties using the index: const { name, job, image, text } = people[index];.
These properties are then used to display the review's image, name, job title, and review text.

#### Index Wrapping Function:

The checkNumber function ensures that the index wraps around correctly if it goes out of bounds (i.e., less than 0 or greater than the length of the array).

#### Navigation Functions:

nextPerson: Increases the index by 1 and updates the state, wrapping around if it exceeds the array length.
prevPerson: Decreases the index by 1 and updates the state, wrapping around if it goes below 0.

#### Random Review Function:

randomPerson: Selects a random index and updates the state to display a random review. It ensures the new random index is different from the current index.

#### User Interface:

The component renders the current review's details.
Navigation buttons ("Next", "Previous", and "Surprise Me") are provided for user interaction.
Each button has an onClick event handler to trigger the corresponding function (nextPerson, prevPerson, or randomPerson).
