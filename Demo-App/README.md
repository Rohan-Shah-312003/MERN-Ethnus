Author: Rohan Shah
Purpose: CRUD based Demo App

Steps For Backend:

- Initiating package.json file using (npm init -y)

- Creating the entry point of backend by creating "index.js" file

- Installing dependencies:

  - mongoose (for connecting with MongoDB)\
  - Express (for creating our own localhosts)
  - nodemon (for autoupdating and restarting of the server)

- Create a database in MongoDB Atlas

  - Project Name: AppDeploymentEthnusDemo
  - Database Name: schooldb
  - Collection Name: students
  - Document Fields: {
    name:"String"
    email:"String"
    regNo:INT32
    }

- Connected DB to VSCode

- Connecting the application to the router

- Displaying the database schema by connecting the application to the schema model

- Implementing CRUD application by performing POST, GET, PUT, DEL --- in the server (router)

- Install cors and body-parser modules

Steps for frontend:

  - Creating a frontend react app

  - Installing required modules:
    - Axios
    - Bootstrap
    - react-router-dom

  - Clearing off App.js and removing strict mode from index.js

  - 
  