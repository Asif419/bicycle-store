# Bicycle-Store API

Welcome to the **Bicycle-Store API**, a RESTful API for managing bicycle products and orders. This API is designed to support functionalities such as creating, updating, deleting, and searching bicycles, as well as managing customer orders and calculating revenue.

## Live Deployment

The API is live and deployed at:

[bicycle-store-v2.vercel.app](https://bicycle-store-v2.vercel.app)

You can access and test the API endpoints using tools like Postman or directly from your frontend application.
¨

---

## Description

The **Bicycle-Store API** is a RESTful API built with **Express.js** and **MongoDB** to manage bicycle products and orders for an online bicycle store. The API allows users to create, update, delete, and search bicycle products, as well as track orders and calculate revenue. The API is built using **TypeScript** for type safety, and it integrates several useful libraries such as **Zod** for validation and **Cors** for cross-origin resource sharing.

## Technologies Used

- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database for storing bicycle and order data
- **Mongoose** – ODM (Object Data Modeling) library for MongoDB
- **TypeScript** – Typed superset of JavaScript
- **Cors** – Package for enabling Cross-Origin Resource Sharing
- **Zod** – TypeScript-first schema declaration and validation library
- **Dotenv** – Environment variable management
- **ESLint** – Linter for JavaScript and TypeScript
- **Prettier** – Code formatter for consistent code style

¨

---

## DATASET

The database consists of two main collections: **bicycles** and **orders**.

### Bicycles

Each bicycle document in the `bicycles` collection contains the following fields:

- **name**: Name of the bicycle
- **brand**: Brand of the bicycle
- **price**: Price of the bicycle
- **type**: Type of the bicycle (e.g., mountain, road, hybrid)
- **description**: A brief description of the bicycle
- **quantity**: Number of bicycles available
- **inStock**: Boolean indicating if the bicycle is in stock
- **createdAt** (Optional): Timestamp of when the bicycle was created
- **updatedAt** (Optional): Timestamp of when the bicycle was last updated
- **isDeleted** (Optional): Boolean indicating if the bicycle is deleted

### Orders

Each order document in the `orders` collection contains:

- **email**: Email of the customer placing the order
- **product**: The bicycle product ordered
- **quantity**: Quantity of the product ordered
- **totalPrice**: Total price of the order (calculated as `quantity * price`)
- **createdAt** (Optional): Timestamp of when the order was created
- **updatedAt** (Optional): Timestamp of when the order was last updated

¨

---

## API Endpoints

### 1. **Create a Product (Bicycle)**

- **Method**: `POST`
- **Endpoint**: `/api/products/`
- **Description**: Creates a new bicycle entry in the `bicycles` collection.

  **Request Body**:

  ```json
  {
    "name": "Trek Mountain 5000",
    "brand": "Trek",
    "price": 499.99,
    "type": "Mountain",
    "description": "A high-performance mountain bike.",
    "quantity": 10,
    "inStock": true
  }
  ```

### 2. **Search Products by Name, Brand, or Type**

- **Method**: `GET`
- **Endpoint**: `/api/products?searchTerm=Trek`
- **Description**: Creates a new bicycle entry in the `bicycles` collection.

### 3. **Update a Product**

- **Method**: `PUT`
- **Endpoint**: `/api/products/:productID`
- **Description**: Updates the details of a bicycle in the `bicycles` collection..

### 4. **Create a Product (Bicycle)**

- **Method**: `POST`
- **Endpoint**: `/api/products/`
- **Description**: Creates a new bicycle entry in the `bicycles` collection.

  **Request Body**:

  ```json
  {
    "name": "Trek Mountain 5000",
    "brand": "Trek",
    "price": 499.99,
    "type": "Mountain",
    "description": "An updated description for the Trek Mountain 5000.",
    "quantity": 15,
    "inStock": true
  }
  ```

### 5. **Delete a Product**

- **Method**: `DELETE`
- **Endpoint**: `/api/products/:productID`
- **Description**: Deletes a bicycle from the bicycles collection `bicycles` collection.

  **Request Body**:

  ```json
  {
    "name": "Trek Mountain 5000",
    "brand": "Trek",
    "price": 499.99,
    "type": "Mountain",
    "description": "A high-performance mountain bike.",
    "quantity": 10,
    "inStock": true
  }
  ```

### 6. **Create an Order**

- **Method**: `POST`
- **Endpoint**: `/api/orders/`
- **Description**: Creates a new order in the `orders` collection.

  **Request Body**:

  ```json
  {
    "email": "customer@example.com",
    "product": "Trek Mountain 5000",
    "quantity": 2,
    "totalPrice": 999.98
  }
  ```

### 7. **Get Revenue**

- **Method**: `GET`
- **Endpoint**: `/api/orders/revenue`
- **Description**: Calculates and returns the total revenue from all orders..

  **Request Body**:

  ```json
  {
    "name": "Trek Mountain 5000",
    "brand": "Trek",
    "price": 499.99,
    "type": "Mountain",
    "description": "A high-performance mountain bike.",
    "quantity": 10,
    "inStock": true
  }
  ```

¨

---

## Installation Instructions

To set up and run this project locally, follow these steps:

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (or MongoDB Atlas for a cloud-based database)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Asif419/bicycle-store.git

   ```

2. **Navigate to the project directory:**

   ```bash
      cd bicycle-store
   ```

3. **Install dependencies:**

   ```bash
      npm install
   ```

4. **Create a `.env` file in the root directory of your project and add your environment variables:**

   ```makefile
     PORT =
     DATABASE_URL =
     NODE_ENV = development
   ```

5. **Run the application**

   ```bash
     npm start
   ```

¨

---

## License

This project is licensed under the Programming Hero License.

## Contact

To connect with me, you can email me at asshah419@gmail.com.
