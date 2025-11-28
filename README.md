# Shopping Cart OOP – JavaScript

A simple Object-Oriented Programming (OOP) implementation of a shopping cart system using JavaScript.  
This project walks through the creation of Product, ShoppingCartItem, and ShoppingCart classes, following OOP principles with clarity and structure.



## Features Implemented

### 1. Product Class
Stores:
- `id`
- `name`
- `price`

### 2. ShoppingCartItem Class
Stores:
- `product` (Product instance)
- `quantity`

Also includes:
- `getTotalPrice()` → returns `price × quantity`.

### 3. ShoppingCart Class
Stores:
- An array of ShoppingCartItem instances

Methods:
- `addItem(product, quantity)`
- `removeItem(productId)`
- `getTotalItems()`
- `displayCart()`


## What the Script Demonstrates

- Creating product objects  
- Creating a shopping cart  
- Adding items  
- Displaying cart contents  
- Removing an item  
- Displaying final output  

All the logic is implemented in shopping-cart-oop.js.


## How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/fweshi/SHOPPING-CART-OOP.git
