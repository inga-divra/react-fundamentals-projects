## Figma URL

[Grocery Bud](https://www.figma.com/file/8rXGl68NoEmAhHpcV7aB5o/Grocery-bud?node-id=0%3A1&t=IMjjwDExGWpXdpQL-1)

## Steps

### 1. State Variable

Set up a state variable items using the useState hook in App.jsx.

### 2. Form Component

Create a Form component with an input field and a submit button.
In the handleSubmit function, prevent default submission with event.preventDefault().
If the form is empty, log a message and return.

### 3. Add Item

On form submission, create a new item object with a name, a completed property (default false), and a unique id.
Add the new item to the items state using setItems.

### 4. Render List

Create Items and SingleItem components.
In Items, iterate over the list and render each item using SingleItem.

### 5. SingleItem

Set up an isChecked state variable in SingleItem.
Render a checkbox and apply text-decoration: line-through based on isChecked.
Toggle isChecked when the checkbox is clicked.

### 6. Remove Item

Create a removeItem function in App.jsx and pass it to SingleItem.
In SingleItem, add a button to remove the item from the list.

### 7. Local Storage

Implement local storage to persist the items list across page reloads.

### 8. Global Edit

Set the completed property globally in the list and save the result in local storage.

### 9. React-Toastify

Use react-toastify to handle alerts for adding items, empty form submissions, and item removals.

### Implementation Outline

State Variable: Initialize items in App.jsx.

Form Component: Add new items to the list via handleSubmit.

Items & SingleItem Components: Render and manage the list.

Local Storage: Persist items list.

React-Toastify: Handle user alerts.

### Local Storage Usage

Store Data: localStorage.setItem('key', JSON.stringify(value))
Retrieve Data: const value = JSON.parse(localStorage.getItem('key'))
