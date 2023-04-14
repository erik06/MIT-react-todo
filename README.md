# Todo App

This is a simple Todo application built using React. The application allows you to add and remove tasks and keep track of your progress.

## Features

- Add a new todo item
- Remove an existing todo item
- View the timestamp of the todo
- View the list of todos

## Installation

1. Make sure you have Node.js and npm installed on your machine.
2. Clone the repository or download the source code.
3. Run `npm install` to install the required dependencies.

## Usage

1. Run `npm run dev` to start the development server.
2. Open `http://localhost:5173/MIT-react-todo/` in your browser to view the app.

## Components

### App

The main component of the application. It maintains the state of the todo items and handles adding and removing them.

### TodoForm

This component handles the form for adding a new todo item. It takes a callback function `addTodo` as a prop and calls it when a new todo is submitted.

### Todo

This component displays the individual todo item. It takes the `index`, `key`, `todo`, and `remove` as props. The `remove` prop is a callback function that removes the specified todo item from the list.

## Code Structure

- `import TodoForm from "./TodoForm";` - Import the TodoForm component
- `import Todo from "./Todo";` - Import the Todo component
- `import { useState } from "react";` - Import the useState hook from the React library

In the `App` component:

1. Set the initial state of the `todos` array using the `useState` hook
2. Define the `addTodo` function to add a new todo item to the list
3. Define the `removeTodo` function to remove a todo item from the list by its index
4. Render the Todo components for each todo item in the list
5. Render the TodoForm component and pass the `addTodo` function as a prop

Finally, export the `App` component for use in other parts of the application:
