
Flight Info Project

The Flight Info Project is a full-stack web application designed to retrieve and display flight information. 
It demonstrates the integration of React (frontend), Node.js (backend), and a MySQL database, with Axios handling API communication. 
This project was bootstrapped using Create React App.


The purpose of this application is to:

Provide flight details based on user input.
Showcase database integration to store and retrieve data dynamically.
Create a fully functional single-page application (SPA) using React.
Demonstrate backend and frontend interaction with RESTful APIs.


Installation & Setup:

Backend
1. Navigate to /Backend
2. Run `npm install`
3. Run `npm run dev`

Frontend
1. Navigate to /flight-info
2. Run `npm install`
3. Run `npm start`

Database:
1. Run mySQL server on localhost port 3306.
2. Run flight_info.sql to setup database schema, tables, and values.


Usage:

To fetch a flight entry from the mySQL database, enter 1, 2, or 3 into the input field and press the "Find Flight" button.
This renders out a new Component showing the formatted database entry. To return to the Home Component, press the "Go Back" button.


Development Details
Technologies Used
Frontend:

React: Used to create dynamic components and manage routing with react-router-dom.
CSS Frameworks: Optionally styled using Bootstrap or W3.css for responsive design.
Axios: For API calls to interact with the backend.

Backend:

Node.js: The primary runtime environment for building the server.
Express.js: Framework for building RESTful APIs.CORS: For enabling secure communication between frontend and backend.

Database:

MySQL: A relational database used to store flight data, accessible via the mysql2 package.

Files and Directory Structure

Backend

server.js: Entry point for the Node.js server, managing API endpoints.

Frontend

src/Components/Home.js: Main entry page where users can check the server response and input a flight ID to fetch data.

src/Components/FlightInfo.js: Displays flight details based on the user's input.

src/App.js: Sets up routes for navigation between Home and FlightInfo.

index.html: Main HTML file that renders the React app.

index.css: Styles for the application.

Configuration

package.json: Dependency and script management for the project.
package-lock.json: Locks dependencies for consistent environments.

Dependencies
Node.js
cors: ^2.8.5
express: ^4.21.2
mysql2: ^3.11.5
nodemon: ^3.1.7 (development dependency)

Frontend
react: ^18.3.1
react-dom: ^18.3.1
react-router-dom: ^6.28.0
axios: ^1.7.9
react-scripts: 5.0.1

Functionality
Frontend (React):

SPA with smooth routing between components.
User input for flight ID, leading to database query results displayed dynamically.
Interactive and responsive design for better user experience.

Backend (Node.js):

RESTful API endpoints for fetching and displaying flight data:
GET /message: Returns a test server message.
GET /api/data/:id: Retrieves flight data based on ID.
Middleware for handling JSON data and CORS.

Database:

MySQL database stores flight data.
Queries to insert and retrieve data based on user input.