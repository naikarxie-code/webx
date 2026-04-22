const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON body
app.use(express.json());

// Temporary product inventory
let products = [
  { id: 1, name: "Laptop", price: 50000, quantity: 10 },
  { id: 2, name: "Mouse", price: 500, quantity: 50 }
];

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET single product by id
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

// POST add new product
app.post("/products", (req, res) => {
  const { name, price, quantity } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    quantity
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    product: newProduct
  });
});

// PUT update existing product
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price, quantity } = req.body;

  product.name = name;
  product.price = price;
  product.quantity = quantity;

  res.json({
    message: "Product updated successfully",
    product
  });
});

// DELETE product
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deleted = products.splice(index, 1);

  res.json({
    message: "Product deleted successfully",
    deletedProduct: deleted[0]
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});