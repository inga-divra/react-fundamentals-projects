## Menu App https://menu-ingady.netlify.app/

## Project Overview

This small project is a menu application that displays a list of menu items, allows users to filter items by category, and dynamically updates the displayed items based on user selection. The application will have a title, menu items, and category buttons for filtering. This project is a part of John Smilga's React course I took. For more information, visit https://johnsmilga.com/

## Figma URL

[Menu](https://www.figma.com/file/PwlnSJXCuo4qD2o6EJiuj9/Menu?node-id=0%3A1&t=oaKVwYVqc9Oon2Ts-1)

## Steps

### Title Component

Create Title Component:
A simple function returning a heading element with the app title.

### Explore and Import Data

Import menu items from data.js.
State Value
Set State:
Use useState in App.jsx to set menu items data as a state variable.

### Render Items

#### Pass State to Menu Component:

Pass menu items state to Menu.jsx.

#### Render Menu Items:

In Menu.jsx, iterate over menu items with map and render MenuItem components.

#### MenuItem Component:

Render image, title, price, and description using menu items data.

### Unique Categories

Extract Unique Categories:
In App.jsx, extract unique categories from menu items data using new Set().
Add an "all" category.

### State Value and Render Categories

Set Categories State:
Use useState in App.jsx for categories array.
Categories Component:
Create Categories component, pass categories state, and render buttons for each category.

### Filter Functionality

Filter Function:
Define a function in App.jsx to filter menu items by category.
Attach Filter Function:
Pass the filter function to Categories component and attach it to category buttons.
