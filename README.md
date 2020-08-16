# Ecommerce shopping assignment #

## Task outline ##
An order portal application that allows customers to login and view a list of products and add it to a shopping cart

## Important Note ##
Login details -
username: hina
password: password


## Requirements ##
- 1. Setup a mock server and create a REST API to traverse the data between client and server.
- 2. Use auth guard to check the authentication and redirect the unauthenticated user to `page not found` page (A page with just a title is enough)
- 3. The product catalogue should display in a grid for desktop and stack vertically per product in mobile
- 4. The products should use a re-usable component
- 5. Out of stock products should be greyed out and cannot be added to the cart.
- 6. The cart should be part of the header and display the summary when clicked.
- 7. Use a state management tool or React Context to manage the cart state.
- 8. The customer login credential is a hard-coded value in the mock server.
- 9. All the pages should be responsive. Feel free to use bootstrap library to achieve this.
- 10. Apply UI design and styles of your choice. The application should be visually pleasing. Feel free to add any designs that you feel will enhance the look and feel. i.e. Out of stock label across product image etc.
- 11. Add basic unit tests
- 12. Provide instructions to build and run the application (including the hardcode credentials) and comment on any libraries, tools or interesting features used.


## Usage
Prerequisite - Install node, npm and git, if you don't already have it on your system
- https://nodejs.org/en/download/
- https://www.npmjs.com/get-npm
- https://git-scm.com/downloads
Clone the git repository on your local machine - https://github.com/hinadawood/react-onlinestore.git
Run the server -
- 1) Open a command line window
- 2) cd server
- 3) npm install
- 4) node app
- 5) The server is now running on http://localhost:8080/

Run the client -
- 6) Open another command line window
- 7) cd client
- 8) npm install
- 9) npm start
- 10) The client is now running on http://localhost:3000/login


## Unit testing
Run `npm test` for unit testing the code. 
