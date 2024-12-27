document.addEventListener("DOMContentLoaded", function () {
    displayCartItems();
});
function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Sizin Sebetiniz bosdur</p>';
        updateCartTotal([]);  
        return;
    }
    cartItems.forEach((item, index) => {
        const cartItemCard = document.createElement('div');
        cartItemCard.classList.add('cart-item');
        cartItemCard.innerHTML = `
          <div class="product-container">
                <img src="${item.image}" alt="${item.name}" width="80">
             <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p> <i class="fa-sharp fa-regular fa-tag"></i>${item.price} AZN</p>
            </div>
            </div>
            <div class="quantity-container">
                <button class="decrease-quantity" data-index="${index}">-</button>
                <span class="quantity" data-index="${index}">${item.quantity || 1}</span>
                <button class="increase-quantity" data-index="${index}">+</button>
            </div>
            <div class="remove-item-container">
                <button class="remove-item" data-index="${index}"><i class="fa-duotone fa-thin fa-trash"></i></button>
            </div>
        `;
        cartContainer.appendChild(cartItemCard);
    });

    addQuantityListeners();
    addRemoveItemListeners();
    updateCartTotal(cartItems);
}
function addQuantityListeners() {
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    const decreaseButtons = document.querySelectorAll('.decrease-quantity');

    increaseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemIndex = this.getAttribute('data-index');
            updateItemQuantity(itemIndex, 1); 
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemIndex = this.getAttribute('data-index');
            updateItemQuantity(itemIndex, -1);
        });
    });
}

function updateItemQuantity(index, change) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (cartItems[index]) {
        cartItems[index].quantity = (cartItems[index].quantity || 1) + change;

        if (cartItems[index].quantity <= 0) {
            cartItems.splice(index, 1);
        }
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayCartItems();
}

function addRemoveItemListeners() {
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemIndex = this.getAttribute('data-index');
            removeItemFromCart(itemIndex);
        });
    });
}

function removeItemFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayCartItems();
}

let isDiscountApplied = false; 
const discountRate = 0.3;
function updateCartTotal(cartItems) {
    let totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) * (item.quantity || 1)), 0);
    if (isDiscountApplied) {
        totalPrice *= (1 - discountRate); 
    }
    document.getElementById("totalPrice").innerText = `${totalPrice.toFixed(2)} AZN`;
}
const promoCodeInput = document.getElementById('promoCode');
const applyPromoBtn = document.getElementById('applyPromoBtn');
const messageElement = document.querySelector('.message');
applyPromoBtn.addEventListener('click', function () {
    const enteredCode = promoCodeInput.value;
    if (enteredCode === "ipek30" && !isDiscountApplied) {
        isDiscountApplied = true; 
        messageElement.textContent = "Endirim tətbiq edildi!";
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        updateCartTotal(cartItems); 
    } else if (isDiscountApplied) {
        messageElement.textContent = "Endirim artıq tətbiq edilib!";
    } else {
        messageElement.textContent = "Yanlış promo kodu!";
    }
});
