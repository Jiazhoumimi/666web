# IFN666_25se1 Assessment 02 Submission

**Student name:**  SAI LO

**Student ID:** n11501910 

# Response to marking criteria

## (API) Core: Application architecture (1 mark)

- **One line description:** 
Architecture follows the assessment guideline.

- **Video timestamp:** 7:51
- **Relevant files**
   - `server/server.js` – Express server setup with middleware and routes
   - `server/src/routes/` – 15 REST API endpoints
   - `server/src/controllers/` – Handles route logic (auth, products)
   - `server/src/models/` – MongoDB schemas (e.g., User, Product)
   - `server/src/middleware/` – middleware like JWT auth
   - `server/README.md` – Backend setup instructions
   - `Caddyfile` – Deployment
   - `API-collection.json` – Hoppscotch API test collection
   - `a02-response-to-criteria.md` – Assessment documentation
   - `LICENCE` – Open source license

## (API) Core: Endpoints (2 marks)

- **One line description:** 
Implement 15 endpoints prodcut/users/orders

- **Video timestamp:** 9:12 
- **Relevant files**
   - `server/src/routes/productRoutes.js`
   - `server/src/routes/orderRoutes.js`
   - `server/src/routes/userRoutes.js`

## (API) Core: Data model (3 marks)

- **One line description:** 
I defined Mongoose schemas for Users, Products, and Orders to structure the database models. 

- **Video timestamp:** 10:16
- **Relevant files**
   - `server/src/models/userModel.js`
   - `server/src/models/productModel.js`
   - `server/src/models/orderModel.js`

## (API) Core: Data interface (3 marks)

- **One line description:** 
I used Mongoose models to interact with the MongoDB database in my controller functions.

- **Video timestamp:** 9:47
- **Relevant files**
   - `server/src/controllers/authController.js`
   - `server/src/controllers/productController.js`
   - `server/src/controllers/orderController.js`

## (API) Core: Deployment to web server (3 marks)

- **One line description:**   
I deployed the backend API to a remote web server using Caddy as a reverse proxy with HTTPS.

- **Video timestamp:** 8:01
- **Relevant files**
   - `Caddyfile`
   - `server/server.js`

## (API) Core: API testing with Hoppscotch (3 marks)

- **One line description:** I used Hoppscotch to test login, product CRUD, and pagination endpoints.

- **Video timestamp:** 4:08 / 10:12
- **Relevant files**
   - `API-collection.json`
   - `server/src/routes/` – Where the tested API endpoints are defined

## (API) Additional: Authentication (3 marks)

- **One line description:** I implemented JWT-based authentication to verify users login.

- **Video timestamp:** 9:35
- **Relevant files**
   - `server/src/routes/authRoutes.js`
   - `server/src/middleware/authMiddleware.js`

## (API) Additional: Input validation (3 marks)

- **One line description:** 
I validated user input using `express-validator` in routes and additional checks inside controller functions.

- **Video timestamp:** 9:28
- **Relevant files**
   - `server/src/routes/authRoutes.js`
   - `server/src/controllers/authController.js`


## (API) Additional: Rate limiting (3 marks)

- **One line description:**   
I implemented rate limiting using `express-rate-limit` to restrict excessive requests from a single IP address.

- **Video timestamp:** 8:50
- **Relevant files**
   - `server/server.js`
   - `server/.env`

## (API) Additional: Query filtering (3 marks)

- **One line description:**   
I implemented query filtering to allow users to filter products by category and name using query parameters.

- **Video timestamp:** 9:47
- **Relevant files**
   - `server/src/routes/productRoutes.js`
   - `server/src/controllers/productController.js`

## (API) Additional: Pagination (3 marks)

- **One line description:**   
I implemented server-side pagination using `page` and `limit` query parameters to control product listing.

- **Video timestamp:** 9:50
- **Relevant files**
   - `server/src/routes/productRoutes.js`
   - `server/src/controllers/productController.js`


---


## (Client) Core: Application architecture (3 marks)

- **One line description:** 8:10
Architecture folling the assessment guideline.

- **Video timestamp:** 
- **Relevant files**
   - `client/src/App.jsx` – Main routing setup using React Router
   - `client/src/pages/` – Main views (Login, Register, ProductList, etc.)
   - `client/src/components/` – Reusable UI components for layout 

## (Client) Core: User interface design (3 marks)

- **One line description:** 
I used Mantine UI and custom CSS to design a clean, consistent interface

- **Video timestamp:** 0:24
- **Relevant files**
   - `client/src/pages/` 
   - `client/src/components/` 
   - `client/src/pages/Login.css` – Custom styling for the login/register page


## (Client) Core: React components (3 marks)

- **One line description:** 
I created React components like `ProductCard` and reusable inputs to modularize the UI.

- **Video timestamp:** 0:37 / 8:33
- **Relevant files**
   - `client/src/components/products/ProductCard.jsx`
   - `client/src/components/products/ProductCard2.jsx`
   - `client/src/components/` – Reusable form inputs, buttons

## (Client) Core: State management (3 marks)

- **One line description:** 
I used useState for filters, pagination, and login state.
The login status is displayed in the top-right corner.

- **Video timestamp:** 3:34 /10:23
- **Relevant files**
   - `client/src/pages/ProductList.jsx`
   - `client/src/pages/Login.jsx`
   - `client/src/component/header/header.jsx`


## (Client) Core: API integration (3 marks)

- **One line description:** 2:08
I used `fetch` to connect the frontend to my own REST API for login authentication, product CRUD function.

- **Video timestamp:** 
- **Relevant files**
  - `client/src/pages/ProductList.jsx` – Sends GET request to `/products` 
  - `client/src/pages/CreateProduct.jsx` – Sends POST request to create new products
  - `client/src/pages/EditProduct.jsx` – Sends PUT request to update products
  - `client/src/component/products/`ProductList2.jsx` – Sends DELETE request for product removal

## (Client) Additional: Authentication (3 marks)

- **One line description:** 
Storing the JWT token in localStorage and  rendering views based on login status. 

- **Video timestamp:** 1:59
- **Relevant files**
  - `client/src/pages/Login.jsx` – Sends POST request to `/login` and stores token in local storage.



## (Client) Additional: Input validation (3 marks)

- **One line description:** 
I implemented validation to check for required fields, valid email format, and password length before submission.

- **Video timestamp:** 3:44
- **Relevant files**
   - `client/src/pages/Login.jsx` – Validates email and password before sending login request
   - `client/src/pages/Register.jsx` – Validates name, email format, and password length

## (Client) Additional: Rate limiting (3 marks)

- **One line description:** 
I handled rate limiting responses from the backend by catching 429 errors and showing messages to the user.

- **Video timestamp:** 3:55
- **Relevant files**
   - `client/src/pages/Login.jsx` – Catches 429 errors during login and displays warning
   - `client/src/pages/Register.jsx` – Handles request limit errors from registration

## (Client) Additional: Search and Sort (3 marks)

- **One line description:** 
I implemented category filtering and sorting by price on the frontend.

- **Video timestamp:** 0:49/ 10:25
- **Relevant files**
   - `client/src/pages/ProductList.jsx` – Contains UI controls for category and sort selection, and sends query parameters in fetch request
   - `client/src/components/ProductCard.jsx` – Displays sorted and filtered product data
   - `client/src/pages/ProductList2.jsx`
   - `client/src/components/ProductCard2.jsx`

## (Client) Additional: Pagination (3 marks)

- **One line description:** 
I implemented frontend pagination controls that update the current page and send `page` and `limit` as query parameters to the backend API.

- **Video timestamp:** 1:18/ 10:25
- **Relevant files**
   - `client/src/pages/ProductList.jsx` – Manages current page state and renders pagination buttons
   - `client/src/components/ProductCard.jsx` – Displays paginated product data
   - `client/src/pages/ProductList2.jsx`
   - `client/src/components/ProductCard2.jsx`


