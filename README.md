### Employee Review System


## Description
This is a simple employee review system that allows the user to add, view, and update employees, roles, and departments.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)


## Installation instructions

1. To install necessary dependencies, run the following command:
```md
npm install
```
2. Start the server by running the following command:
```md
nodemon index.js
```
Note: If you are facing issue with connecting to the database, then please change the value of the Mongoose.connect url to `mongodb://localhost:27017/employee_review_system` and then run the above command again.(But in this case you have to create a new user with isAdmin value set to true in the userController.js file)

3. Open your browser and go to http://localhost:8000/

4. Login to the App using the credentials below.(or u can create your own admin by changing the isAdmin value to true in the userController.js file for the first user you create)

Admin Login:
Email: `yuvrajbhatiya57@gmail.com`
Password: `111`
You can see the admin dashboard and add, view, and update employees.

Employee Login:admin
5. You can register new employees by clicking on the register when logged in as admin.


## Usage
This app is used to manage employees, and set any employee to gave review to any other employee.

## Technologies Used
* Node.js
* Express.js
* Ejs
* Mongoose
