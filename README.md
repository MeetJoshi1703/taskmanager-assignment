# Task Manager

Manage your daily tasks with ease.

## Description

Task Manager is a web application designed to help users efficiently manage their tasks. It provides functionalities such as creating, updating, deleting tasks, and marking tasks as completed or pending. The application offers a user-friendly interface to interact with tasks seamlessly.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Technologies Used](#technologies-used)
- [Development Process](#development-process)

## Installation

To run the Task Manager application locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/MeetJoshi1703/taskmanager-assignment.git
    cd taskmanager-assignment
    ```

2. Set up the server:

    - Navigate to the server directory:

      ```bash
      cd server
      ```

    - Install dependencies:

      ```bash
      npm install
      ```

    - Create a `.env` file in the server directory and add the following environment variables:
    - (note* : providing mongo URI only for submission purpose later I shall disable it)

      ```plaintext
      NODE_ENV=development
      PORT=8000
      MONGO_URI="add your mongo uri connection"
      ```

    - Start the server:

      ```bash
      node server.js
      ```

    This will start the server on port 8000.

3. Set up the client:

    - Navigate to the client directory from the root:

      ```bash
      cd client
      ```

    - Install dependencies:

      ```bash
      npm install
      ```

    - Start the client:

      ```bash
      npm start
      ```

    This will start the client on port 3000.

## Usage

Once the application is running locally, you can access it by navigating to `http://localhost:3000` in your web browser. Here are some key features and actions you can perform:

- **Create Task**: Click on the "Create Task" button to add a new task.
- **View Task Details**: Click on "View Details" button next to each task to see more information.
- **Edit Task**: You can edit task details by clicking on the "Edit" button and updating the title and description.
- **Delete Task**: Remove tasks by clicking on the "Delete" button.
- **Update Task Status**: Change the status of tasks between "Completed" and "Pending" by clicking on the status button.

## API Endpoint

The application uses a RESTful API to interact with tasks. Here are the main endpoints:

- **GET /api/tasks**: Retrieve all tasks.
- **POST /api/tasks**: Create a new task.
- **GET /api/tasks/:id**: Retrieve a specific task by ID.
- **PUT /api/tasks/:id**: Update a task by ID.
- **DELETE /api/tasks/:id**: Delete a task by ID.
- **PUT /api/tasks/:id/togglestatus**: Toggle the status of a task between "Completed" and "Pending".

## Technologies Used

The following technologies and tools were used in the development of Task Manager:

- React.js
- Node.js
- Express.js
- MongoDB
- Bootstrap
- React Bootstrap
- RESTful API
- Postman 

## Development Process

### Backend Development

1. **Folder Structure**: Organized using MVC and RESTful architecture principles.

2. **Model**: Defined MongoDB schema for tasks.

   <img src="https://github.com/MeetJoshi1703/taskmanager-assignment/assets/98758359/7d09e830-cc2e-4384-8d70-adddb2fe868f" width="50%">

3. **Controller**: Implemented CRUD operations for tasks.

   <img src="https://github.com/MeetJoshi1703/taskmanager-assignment/assets/98758359/47fcdce4-d40f-4fa8-a61a-33b76496a0f1" width="50%">

4. **Routes**: Set up API routes for tasks.

   <img src="https://github.com/MeetJoshi1703/taskmanager-assignment/assets/98758359/82fcd5e5-8027-4018-b599-973e138e1d7f" width="50%">

5. **Server Configuration**: Configured Express server and MongoDB connection.

   <img src="https://github.com/MeetJoshi1703/taskmanager-assignment/assets/98758359/140fbce3-2b9e-4fa1-97c9-4408492239a7" width="50%">

### Frontend Development

1. **UI Components**: Designed and built React components for task management.

   <img src="https://github.com/MeetJoshi1703/taskmanager-assignment/assets/98758359/1fdb84e9-e794-4dbd-b32c-50ae9727a507" width="70%">
   <img src="https://github.com/MeetJoshi1703/taskmanager-assignment/assets/98758359/394675ac-1210-4cad-ac42-7f8ac8125804" width="70%">


### Postman Usage

Use Postman for testing API endpoints:

1. **GET All Tasks**:
   
   <img src="https://github.com/MeetJoshi1703/taskmanager-assignment/assets/98758359/00e60375-7e7e-4a94-b81e-8cd978529010" width="50%">

2. **POST Create Task**:
   
   <img src="https://github.com/MeetJoshi1703/taskmanager-assignment/assets/98758359/74ca005b-cb2d-4d7f-872d-798401cd20bf" width="50%">

3. **PUT Update Task**:
   
   <img src="https://github.com/MeetJoshi1703/taskmanager-assignment/assets/98758359/b9e13960-9fed-444d-9989-54efd102864e" width="50%">

4. **DELETE Task**:
   
   <img src="https://github.com/MeetJoshi1703/taskmanager-assignment/assets/98758359/0a81851f-0c9f-4e7e-87a8-f667b25b10b3" width="50%">

5. **PUT Toggle Task Status**:
   
   <img src="https://github.com/MeetJoshi1703/taskmanager-assignment/assets/98758359/6d0f1057-3cb7-4d7c-a848-b89646d1cf76" width="50%">
