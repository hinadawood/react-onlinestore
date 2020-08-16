# Ecommerce shopping assignment #

## Task outline ##
An order portal application that allows customers to login and view a list of products and add it to a shopping cart

## Important Note ##
##### Login details -
- username: hina
- password: password
##### The online shopping web app is completely responsive and adapts to screen sizes

##### The state management is implemented through Redux.


## Usage
  Prerequisite - Install node, npm and git, if you don't already have it on your system
- https://nodejs.org/en/download/
- https://www.npmjs.com/get-npm
- https://git-scm.com/downloads

  Clone the git repository on your local machine - https://github.com/hinadawood/react-onlinestore.git
  
### Run the server -
- Open a command line window
- cd server
- npm install
- node app
- The server is now running on http://localhost:8080/

### Run the client -
- Open another command line window
- cd client
- npm install
- npm start
- The client is now running on http://localhost:3000/login


## Unit testing
Run `npm test` for unit testing the code.
- cd client
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


