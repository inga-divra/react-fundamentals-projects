## Cart https://cart-ingady.netlify.app/

This shopping cart project demonstrates the use of the Context API and useReducer for state management. The cart data is stored in a JavaScript Map to ensure efficient lookups and updates.

This project is a part of John Smilga's React course I took. For more information, visit https://johnsmilga.com/

### Figma URL

[Cart](https://www.figma.com/file/5AwKjnWuM6BhRYmxdQFpky/Cart?node-id=0%3A1&t=lfaO4zazTd7nqF1q-1)

### Steps

#### Global Context and useReducer

Set up global context and create a general setup for useReducer:

Create a file for the reducer (e.g., reducer.js).
Create a file for actions (e.g., actions.js).
Cart State Value
In the default state, set the cart as a new Map() instead of an array. This allows for efficient data handling.

#### Functionalities

Implement the following functionalities in the reducer and actions files, and make them available in the global context:

Clear Cart: An action that clears the entire cart.
Remove Item: An action that removes a specific item from the cart.
Increase Amount: An action that increases the quantity of a specific item in the cart.
Decrease Amount: An action that decreases the quantity of a specific item in the cart.
Fetch Data: An action that fetches data from an API and stores it in the cart state.
Calculate Totals
Create a function that calculates the total cost of items in the cart.

#### Fetch Data

Fetch data from the provided URL and store it in the cart state:

const url = 'https://www.course-api.com/react-useReducer-cart-project';

#### Data Structure Options

##### Array

An array can store shopping cart data but may not be the best option for efficient lookups and updates, especially for larger datasets.

##### Object

An object can store shopping cart data but has downsides, such as unintended property overwriting or unexpected behavior when iterating over inherited properties. Objects can only use string keys, which can be limiting if you need to use non-string keys.

##### Map

Using a Map for the cart data allows for efficient lookups and updates based on unique product IDs. It ensures that each item in the cart has a unique identifier and can easily be updated or removed without affecting other items in the cart.
