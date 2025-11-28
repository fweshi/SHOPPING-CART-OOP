// 1. Product Class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // 2. Shopping Cart Item Class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // 3. Calculate total price of this item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // 4. Shopping Cart Class
  class ShoppingCart {
    constructor() {
      this.items = []; // array of ShoppingCartItem instances
    }
  
    // 5a. Get total number of items in cart
    getTotalItems() {
      return this.items.length;
    }
  
    // 5b. Add item
    addItem(product, quantity) {
      // check if already exists
      const existing = this.items.find(item => item.product.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // 5c. Remove item
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // 5d. Display cart items
    displayCart() {
      if (this.items.length === 0) {
        console.log("Cart is empty.");
        return;
      }
  
      console.log("=== SHOPPING CART ITEMS ===");
      this.items.forEach((item, index) => {
        console.log(
          `${index + 1}. ${item.product.name} - ₦${item.product.price} × ${item.quantity} = ₦${item.getTotalPrice()}`
        );
      });
    }
  }
  
  // 6. TESTING OUR OBJECTS
  
  // Create products
  const product1 = new Product(1, "Laptop", 350000);
  const product2 = new Product(2, "Wireless Mouse", 8000);
  const product3 = new Product(3, "Keyboard", 12000);
  
  // Create shopping cart
  const cart = new ShoppingCart();
  
  // Add items
  cart.addItem(product1, 1);
  cart.addItem(product2, 2);
  cart.addItem(product3, 1);
  
  // Display cart
  cart.displayCart();
  
  // Remove an item (e.g., remove mouse)
  cart.removeItem(2);
  
  // Display cart after removal
  console.log("\nAfter removing Mouse:");
  cart.displayCart();
  