// Class representing a Product
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Class representing an Item in the Shopping Cart
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of this cart item (product price * quantity)
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Class representing the Shopping Cart
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to add an item to the cart
    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
        this.updateCartDisplay();
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        this.updateCartDisplay();
    }

    // Method to calculate the total price of the cart
    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Method to display the cart contents
    updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';  // Clear current list
        this.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.product.name} - $${item.product.price} x ${item.quantity} = $${item.getTotalPrice()} <button class="remove-item" data-id="${item.product.id}">Remove</button>`;
            cartItemsContainer.appendChild(listItem);
        });
        document.getElementById('total-price').textContent = this.getTotal();

        // Add event listeners for remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = parseInt(event.target.getAttribute('data-id'));
                this.removeItem(productId);
            });
        });
    }
}

// Initialize the shopping cart
const cart = new ShoppingCart();

// Create products
const product1 = new Product(1, 'Product 1', 100);
const product2 = new Product(2, 'Product 2', 150);
const product3 = new Product(3, 'Product 3', 200);

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.closest('.product').id.split('-')[1]; // Get the product ID
        let product;

        // Select the correct product
        switch (productId) {
            case '1': product = product1; break;
            case '2': product = product2; break;
            case '3': product = product3; break;
        }

        // Add product to cart
        cart.addItem(product, 1); // Adding 1 of the selected product
    });
});

// Add event listeners for "Like" buttons
document.querySelectorAll('.like').forEach(button => {
    button.addEventListener('click', (event) => {
        const heart = event.target.closest('.like').querySelector('.heart');
        // Toggle the "like" status (change heart color)
        heart.style.color = heart.style.color === 'red' ? 'black' : 'red';
    });
});
