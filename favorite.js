document.addEventListener("DOMContentLoaded", function () {
    displayFavoriteItems();
});
function displayFavoriteItems() {
    let favoriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    const favoriteContainer = document.querySelector('.favorite-items');
    favoriteContainer.innerHTML = '';
    if (favoriteItems.length === 0) {
        favoriteContainer.innerHTML = '<p>Sizin sevimli məhsulunuz yoxdur</p>';
        return;
    }
    favoriteItems.forEach((item, index) => {
        const favoriteItemCard = document.createElement('div');
        favoriteItemCard.classList.add('favorite-item');
        favoriteItemCard.innerHTML = `
            <div class="product-container">
                <img src="${item.image}" alt="${item.name}">
                <div class="favorite-item-details">
                    <h4>${item.name}</h4>
                     <p> <i class="fa-sharp fa-regular fa-tag"></i>${item.price} AZN</p>
                </div>
            </div>
            <div class="remove-favorite-container">
                <button class="remove-favorite" data-index="${index}">Sil</button>
            </div>
        `;
        favoriteContainer.appendChild(favoriteItemCard);
    });

    addRemoveFavoriteListeners();
}

function addRemoveFavoriteListeners() {
    const removeButtons = document.querySelectorAll('.remove-favorite');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const itemIndex = this.getAttribute('data-index');
            removeFavoriteItem(itemIndex);
        });
    });
}
function removeFavoriteItem(index) {
    let favoriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    favoriteItems.splice(index, 1);
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
    displayFavoriteItems();
}
