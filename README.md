# Bicycle-Store API

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
