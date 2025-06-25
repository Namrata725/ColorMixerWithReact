# Color Mixer Mini Project With React

A beginner-friendly mini project built with **React** and **Vite**. This app allows users to mix colors by adjusting RGB values using sliders. It offers a live preview of the color and stores the selected combination using the browser's `localStorage` API so users can revisit their chosen shade later.

---

## Project Highlights

- Built with modern React best practices (Hooks & functional components)
- Interactive UI to mix Red, Green, and Blue channels
- Save color state locally with `localStorage`
- Live color preview area
- Custom CSS styling with a clean and responsive design

---

## Tech Stack

| Technology   | Description                          |
| ------------ | ------------------------------------ |
| React        | Frontend library for UI              |
| Vite         | Fast development & bundling tool     |
| JavaScript   | Application logic & state management |
| CSS          | Styling the app                      |
| localStorage | Save user data in the browser        |

---

## How It Works

- The user adjusts the sliders labeled **Red**, **Green**, and **Blue**
- The background of the preview box updates instantly using `rgb(r, g, b)`
- When the user clicks **Save Color Combination**, the values are stored in localStorage
- On reload, the saved color reappears and the sliders are pre-filled with saved values

---

## Getting Started

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/color-mixer-react.git

# 2. Navigate to the project directory
cd color-mixer-react

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

> Navigate to `http://localhost:5173` to view the app.

---

## Folder Structure

```
color-mixer-react/
├── public/
├── src/
│   ├── App.jsx         # Main React component
│   ├── index.css       # Global styles
│   └── main.jsx        # React app entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## What I Learned

- Implementing interactive UI elements in React.
- Working with component-level state using `useState`.
- Saving and retrieving data with `localStorage`.
- Writing reusable and clean CSS.
- Structuring a small React project effectively.

---

## Acknowledgements

Thanks to open-source tools like React and Vite that made this mini project possible!

---
