# Ecommerce shopping assignment #

## Task outline ##
An order portal application that allows customers to login and view a list of products and add it to a shopping cart

## Important Note ##
### Login details -
- username: hina
- password: password
### The online shopping web app is completely responsive and adapts to screen sizes

### The state management is implemented through Redux.


## Usage
### Prerequisite - 

#### Please note you need current node version (14.8.0) as some latest node packages used in the app, installs and runs properly only on latest node.

#### Install node, npm and git from below links, if you don't already have it on your system.
- https://nodejs.org/en/download/current/
- https://www.npmjs.com/get-npm
- https://git-scm.com/downloads

#### Clone the git repository on your local machine - https://github.com/hinadawood/react-onlinestore.git

### Directory structure after you clone the git repository
<pre>
react-onlinestore (folder)
 -client  (folder containing client code)
 -server  (folder containing server code)
 -README.md (file)
</pre>
  
### Run the server -
- Make sure no application is running on port 8080
- Open a command line window
- cd react-onlinestore/server
- npm install
- npm start
- The server is now running on http://localhost:8080/

### Run the client -
- Make sure no application is running on port 3000
- Open another command line window
- cd react-onlinestore/client
- npm install
- npm start
- The client is now running on http://localhost:3000/login


## Unit testing
Run `npm test` for unit testing the code.
- cd react-onlinestore/client
- npm test
#### Have written variety of testcases to test rendering of component, simulation of events, mocking API call, snapshot testing, redux action creators and reducer testing. The tests have been written in file Login.test.js, Cart.test.js, loginReducer.test.js, catalogActions.test.js


## Functionality
- After login, you will come on catalog page
- The login form checks for mandatory fields and displays error message when username/password incorrect.
- If you are unauthorized and try to directly go to the catalog page then you will be redirected to login page
- If the API's return 401 unauthorized on any page, then response interceptor redirects to login page
- Products can be added or removed from the cart on catalog page
- The products which are not in stock are disabled and cannot be added to cart
- You can directly edit the quantity of product to be purchased in the quantity input box
- The quantity input box has no check on max limit but it won't allow non-numbers
- Currently you cannot save the cart or do checkout
- You can remove items from the cart
- When you add or remove items from cart, each items total price and total cart price is updated
- Multiple env files are maintained to pick the server url for local, dev and prod env.
- I have tested the web app in chrome and firefox.


