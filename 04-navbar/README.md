## Navbar https://ingady-navbar.netlify.app

This small project is a part of John Smilga's React course I took. For more information, visit https://johnsmilga.com/

## Figma URL

[Navbar](https://www.figma.com/file/Se61eLfK50x0JatmdSdLzL/Navbar?node-id=0%3A1&t=iDQ4v9bsLeblAFUK-1)

## Steps

#### Data

Check data.jsx for two arrays: one for links and one for social icons.

Icon Integration: Use icons from react-icons directly in the arrays. Ensure the use of .jsx extension in Vite.

#### Dynamic Approach

Height Calculation: Utilize useRef and getBoundingClientRect() to get the exact height of the links.

#### Application Flow

Create a Navbar component with a showLinks state (boolean).
Import links from data.jsx and render them based on showLinks.
Add a button to toggle showLinks and link visibility.

#### CSS Styling

Hide links by default.
Create a CSS class to display links with a fixed height.
Toggle this class in the Navbar JSX.

#### Responsive Design

Add social links and CSS to render the Navbar appropriately on larger screens.
