# Focus Flow

Focus Flow is an ADHD-friendly productivity application designed to help users overcome task initiation difficulties by breaking tasks into small, manageable first steps.

The application encourages users to start tasks, track their progress, earn points for taking action, use a focus timer, and search for ADHD-related books and resources.

## Live Project

View the deployed application:

https://lyzettexo.github.io/adhd-productivity-app/#/

## Features

- Create and delete tasks
- Break tasks into a small first step
- Start tasks with encouraging feedback
- Mark tasks as complete or undo completion
- Earn points for starting and completing tasks
- Reset accumulated points
- Track started and completed tasks
- 25-minute focus timer with start, pause, and reset controls
- Save tasks and points using localStorage
- Search for ADHD-related books and resources
- Display API search results three at a time
- Load additional results using a "Show More" button
- Loading animation while API requests are being processed
- Error and "nothing found" states for API requests
- Home and Resource Library routes
- Responsive layout for desktop and mobile devices
- Simulated registration, login, and logout
- Reusable modal components

## Technologies Used

- React
- JavaScript
- JSX
- CSS
- Vite
- React Router
- Fetch API
- Open Library API
- localStorage
- Git

## Third-Party API

Focus Flow uses the Open Library Search API to allow users to search for books and resources related to ADHD.

## Routes

The application contains two main routes:

- `/` — Focus Flow dashboard
- `/resources` — Resource Library/API

## Local Storage

Focus Flow uses browser localStorage to preserve:

- Tasks
- Task status
- First steps
- Points

This allows productivity data to remain available after refreshing the page.

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/1MRL5vXaSJigj2FO2Chuz-rbZmeSCnTj8/view?usp=drive_link), where I describe my project and some challenges I faced while building it.
