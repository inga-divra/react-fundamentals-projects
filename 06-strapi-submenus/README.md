## Strapi Submenus https://strapi-submenus-ingady.netlify.app
This project is a part of John Smilga's React course I took. For more information, visit https://johnsmilga.com/

## Figma URL

[Strapi Submenus](https://www.figma.com/file/rXeU2gYTyKL2FrYmUNgv4r/Strapi-Submenus?node-id=0%3A1&t=Nx5H36ryj9ArZCI6-1)

## Steps

#### Data and Global Context

Explore data.jsx.

Understand the structure and content of the data file.

#### Set up Global Context

Create a new context.
Create a provider component that includes isSidebarOpen state.
Implement functions to open and close the sidebar.
Make the state and functions available throughout the application.

#### Components

Create Four Components:
Navbar, Hero, Sidebar, Submenu.

### Navbar

Set up Navbar:
Create a Navbar component with a logo and a button to open the sidebar.
Use the openSidebar function from the global context.
Optionally, set up an icon from react-icons for the toggle button.

### Hero

Set up Hero Component:
Create a Hero component to display the main content or introduction section.

### Sidebar

Set up Sidebar Component:
Import sublinks from data.jsx.
Iterate over the sublinks array and render the links in the sidebar.
Use isSidebarOpen and closeSidebar functions from the global context to control the sidebar visibility.

### NavLinks

Set up NavLinks in Navbar:
Create a NavLinks component.
Import sublinks and iterate over them to render links in the Navbar.

### Submenu

Set up Submenu Component:

Create a Submenu component.
Global Context Setup:

Add pageId state in the global context and set a default value.
Make pageId and its setter function available in the context.
Use Global Context in NavLinks:

In the NavLinks component, set pageId on mouse over of a link.
Use Global Context in Submenu:

In the Submenu component, fetch the specific page based on pageId from the global context and render it.

#### Edge Cases

Fix Multiple Edge Cases:
Ensure the sidebar closes when a link is clicked.
Handle cases where pageId is null.
Manage responsive behavior for the submenu and sidebar.
