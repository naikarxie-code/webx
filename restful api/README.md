# RESTful API with Express.js

A simple RESTful API built using Node.js and Express to manage a product inventory.

## Prerequisites

- Node.js installed
- Postman (for testing)

## Installation

1. Initialize npm:
   ```bash
   npm init -y
   ```

2. Install Express:
   ```bash
   npm install express
   ```

## Running the Server

Start the server using Node:
```bash
node server.js
```
The server will run at `http://localhost:3000`.

## API Endpoints & Testing (Postman)

### 1. GET All Products
- **Method:** `GET`
- **URL:** `http://localhost:3000/products`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Laptop",
      "price": 50000,
      "quantity": 10
    },
    {
      "id": 2,
      "name": "Mouse",
      "price": 500,
      "quantity": 50
    }
  ]
  ```

### 2. GET Single Product
- **Method:** `GET`
- **URL:** `http://localhost:3000/products/1`

### 3. POST Add Product
- **Method:** `POST`
- **URL:** `http://localhost:3000/products`
- **Body:** `raw` -> `JSON`
  ```json
  {
    "name": "Keyboard",
    "price": 1200,
    "quantity": 20
  }
  ```

### 4. PUT Update Product
- **Method:** `PUT`
- **URL:** `http://localhost:3000/products/2`
- **Body:** `raw` -> `JSON`
  ```json
  {
    "name": "Wireless Mouse",
    "price": 800,
    "quantity": 40
  }
  ```

### 5. DELETE Product
- **Method:** `DELETE`
- **URL:** `http://localhost:3000/products/1`
