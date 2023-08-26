// create array to store the cart items
export let cart = [];

// function to add a product to the cart
export function addToCart(productId) {
    // variable to store a matching cart item
    let matchingItem;

    // iterate through the cart
    cart.forEach((item) => {
        // store the product if it is in the array
        if (productId === item.productId) {
            matchingItem = item;
        }
    });

    // if the product is in the cart, increase it's quantity by
    if (matchingItem) {
        matchingItem.quantity += 1;
    }
    
    // if the product is not in the cart, add it to the cart
    else {
        cart.push({
            productId: productId,
            quantity: 1 
        })
    }
}

// function to calculate the cart quantity
export function calculateCartQuantity() {
    // create variable to store the cart quantity
    let cartQuantity = 0;

    // iterate through the cart
    cart.forEach((cartItem) => {
        // store the quantity of each cart item
        cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
}