# Custom Dropdown Menu

A beginner-friendly, lightweight dropdown menu component that's easy to use and customize. Features smart positioning, smooth animations, and style isolation.

![NPM Version](https://img.shields.io/npm/v/@pd200x/custom-dropdown-menu)
![License](https://img.shields.io/npm/l/@pd200x/custom-dropdown-menu)

## Demo

![Dropdown Menu Demo](./demo/recording.gif)

**[Live Demo](https://whatisaprocoder.github.io/custom-dropdown-menu/)** - See the component in action!

## Installation

First, install the package in your project:

```bash
npm install @pd200x/custom-dropdown-menu
```

### Manual Installation (Without npm)

If you're not using npm, you can manually download and include these two essential files:

1. `drop_down_menu.js` - The main component JavaScript file
2. `component.css` - The required CSS styles

You can find these files:

- From the GitHub repo:
  - `src/js/components/drop_down_menu.js`
  - `src/css/component.css`

Then include them in your HTML:

```html
<link rel="stylesheet" href="path/to/component.css" />
<script src="path/to/drop_down_menu.js"></script>
```

## Getting Started (Beginner-Friendly Guide)

### Step 1: Add a button or trigger element in your HTML

```html
<button id="menu-trigger">Click Me</button>
```

### Step 2: Import and use the component in your JavaScript

```javascript
// Import the component
import { CustomDropDownMenu, ActionItem } from "@pd200x/custom-dropdown-menu";

// Create menu items (what happens when each item is clicked)
const menuItems = [
  new ActionItem("Save", () => alert("Save clicked")),
  new ActionItem("Delete", () => alert("Delete clicked")),
  new ActionItem("Share", () => alert("Share clicked")),
];

// Create the dropdown menu
const menu = new CustomDropDownMenu({
  menuTitle: "My Menu", // Title at the top of the dropdown
  triggerElementID: "menu-trigger", // ID of your button from Step 1
  actionItemArray: menuItems, // Menu items from above
  height: "200px", // Height of the dropdown
  width: "180px", // Width of the dropdown
  logEvent: false, // Set to true to see debug logs
});

// IMPORTANT: Always call this to activate the menu
menu.setEventListeners();
```

That's it! Your dropdown menu is ready to use.

## Features You'll Love

- 🎯 **Smart Positioning** - Menu automatically stays within the screen
- ✨ **Smooth Animations** - Nice fade-in/fade-out effects
- 🛡️ **Style Isolation** - Won't conflict with your existing styles
- 📱 **Works Everywhere** - Responsive on all screen sizes
- 🖱️ **Click Outside to Close** - Automatically closes when clicking elsewhere
- 📜 **Scrollable Menus** - Handles long menus with smooth scrolling
- 🎨 **Easy to Customize** - Simple to style with your own CSS

## How to Customize the Look

You can easily change how the dropdown menu looks by targeting these CSS classes:

### Main Classes You Can Style

- `.mycdm-menu-card` - The entire dropdown box
- `.mycdm-menu-title` - The title bar at the top
- `.mycdm-action-group` - The container that holds all menu options (scrollable area)
- `.mycdm-action-item` - Each clickable menu item

### Example: Custom Styling

```css
/* Make the dropdown more stylish */
.mycdm-menu-card {
  border-radius: 8px !important; /* Rounded corners */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important; /* Better shadow */
}

/* Give the title a colored background */
.mycdm-menu-title {
  background-color: #4a5568 !important;
  color: white !important;
  font-weight: bold !important;
}

/* Style the container for all menu options */
.mycdm-action-group {
  padding: 0 4px !important; /* Add some padding */
  background-color: #fafafa !important; /* Light background */
}

/* Make the menu items more interactive */
.mycdm-action-item {
  padding: 12px 16px !important;
  transition: background-color 0.2s !important;
}

.mycdm-action-item:hover {
  background-color: #f7fafc !important;
  cursor: pointer !important;
}
```

### Important Note about Styling

**You need to use `!important` in your CSS rules** when customizing the component styles. This is because the component uses its own styles internally, and `!important` ensures your custom styles take priority.

## Don't Forget to Activate Your Menu!

### The Critical Step: `setEventListeners()`

After creating your menu, you **must** call the `setEventListeners()` method to make it work:

```javascript
// Create your menu
const menu = new CustomDropDownMenu({
  // ...your options here
});

// ALWAYS do this or your menu won't work!
menu.setEventListeners();
```

This step is essential because it:

- Connects your trigger button to the menu
- Sets up the click-outside-to-close functionality
- Enables all the interactive features

Without this step, your menu will be created but won't respond to any user interaction.

## Common Examples

### Example 1: Simple Settings Menu

```javascript
import { CustomDropDownMenu, ActionItem } from "@pd200x/custom-dropdown-menu";

// Create and activate a settings menu
const settingsMenu = new CustomDropDownMenu({
  menuTitle: "Settings",
  triggerElementID: "settings-button",
  actionItemArray: [
    new ActionItem("Profile", () => openProfilePage()),
    new ActionItem("Preferences", () => showPreferences()),
    new ActionItem("Logout", () => logoutUser()),
  ],
  height: "180px",
  width: "160px",
});

// Don't forget this step!
settingsMenu.setEventListeners();
```

### Example 2: Using Multiple Menus

```javascript
// First menu - Document options
const documentMenu = new CustomDropDownMenu({
  menuTitle: "Document",
  triggerElementID: "doc-menu-button",
  actionItemArray: [
    new ActionItem("New", () => createNewDoc()),
    new ActionItem("Open", () => openDocDialog()),
    new ActionItem("Save", () => saveCurrentDoc()),
    new ActionItem("Print", () => printDoc()),
  ],
  height: "200px",
  width: "150px",
});
documentMenu.setEventListeners();

// Second menu - User options
const userMenu = new CustomDropDownMenu({
  menuTitle: "User",
  triggerElementID: "user-menu-button",
  actionItemArray: [
    new ActionItem("View Profile", () => viewProfile()),
    new ActionItem("Settings", () => openSettings()),
    new ActionItem("Sign Out", () => signOut()),
  ],
  height: "160px",
  width: "160px",
});
userMenu.setEventListeners();
```

## API Reference (For Advanced Users)

### CustomDropDownMenu Options

| Option             | Type         | Required | Description                                |
| ------------------ | ------------ | -------- | ------------------------------------------ |
| `menuTitle`        | string       | Yes      | Title shown at the top of the menu         |
| `triggerElementID` | string       | Yes      | ID of the HTML element that opens the menu |
| `actionItemArray`  | ActionItem[] | Yes      | Array of menu items                        |
| `height`           | string       | Yes      | Height of the menu (e.g., "200px")         |
| `width`            | string       | Yes      | Width of the menu (e.g., "180px")          |
| `logEvent`         | boolean      | No       | Set to true to see events in console       |

### Important Methods

| Method                | What it does                                         |
| --------------------- | ---------------------------------------------------- |
| `setEventListeners()` | **Required**: Activates the menu (always call this!) |
| `close()`             | Manually close the menu (rarely needed)              |

## Dependencies

This component uses [Smooth Scrollbar](https://github.com/idiotWu/smooth-scrollbar) for better scrolling in long menus.

## Browser Support

Works in all modern browsers including:

- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Android Chrome)

## License

ISC © [Pritam Debnath](https://github.com/whatisaProCoder)
