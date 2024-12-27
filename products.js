function addToCart(name, image, price, event) {
    const product = {
        name: name,
        image: image,
        price: parseFloat(price)
    };
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const isInCart = cartItems.some(item => item.name === product.name);
    if (isInCart) {
        alert("Bu məhsul artıq səbətdədir!");
    } else {
        cartItems.push(product);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
}
function addToFavorites(name, image, price, event) {
    const product = {
        name: name,
        image: image,
        price: parseFloat(price) 
    };
    let favoriteItems = JSON.parse(localStorage.getItem("favoriteItems")) || [];
    const isAlreadyFavorite = favoriteItems.some(item => item.name === product.name);

    if (isAlreadyFavorite) {
        alert("Bu məhsul artıq favoritlərə əlavə olunub!");
        return; 
    }
    favoriteItems.push(product);
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
}
const products = [
    {
        id: 1,
        name: "Silicon Case",
        price: 15,
        images: {
            green: "images/products/phonecases/cardimg/case-green.jpg",
            blue: "images/products/phonecases/cardimg/case-blue.jpg",
            whitesmoke: "images/products/phonecases/cardimg/case-brown.jpg",
        },
        series: ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15"]
    },
    {
        id: 2,
        name: "Rhode Silicon Case",
        price: 25,
        images: {
    
            gray: "images/products/phonecases/cardimg/indir (3).jpg",
            pink: "images/products/phonecases/cardimg/lip case.jpg",
        },
        series: ["iPhone 13 pro", "iPhone 13 pro max ", "iPhone 14 pro", "iPhone 14 pro max "]
    },
    {
        id: 3,
        name: "Toxumalı Dəri Case",
        price: 16,
        images: {
            blue:"images/products/phonecases/cardimg/caseblue.jpg",
            gray: "images/products/phonecases/cardimg/casegray.jpg",
            orange: "images/products/phonecases/cardimg/caseorange.jpg",
            pink: "images/products/phonecases/cardimg/casepink.jpg",
            red:"images/products/phonecases/cardimg/casered.jpg"
        },
        series: ["iPhone 13 pro", "iPhone 13 pro max ", "iPhone 14 pro", "iPhone 14 pro max "]
    },
    {
        id: 4,
        name: "Dəri Case",
        price: 18,
        images: {  
               brown: "images/products/phonecases/cardimg/dcase-brown.jpg",
              green: "images/products/phonecases/cardimg/dcase-green.jpg",
            whitesmoke: "images/products/phonecases/cardimg/dcase-whitesmoke.jpg",
        },
        series: ["iPhone 13 pro", "iPhone 13 pro max ", "iPhone 14 pro", "iPhone 14 pro max "]
    },
    {
        id: 5,
        name: "Zolağlı Silicon Case",
        price: 12,
        images: {
            blue: "images/products/phonecases/cardimg/zcase2.jpg",
            green: "images/products/phonecases/cardimg/zcase3.jpg",
            whitesmoke: "images/products/phonecases/cardimg/zcase1.jpg",
            beige: "images/products/phonecases/cardimg/zcase4.jpg",
        },
        series: ["iPhone 13 pro", "iPhone 13 pro max", "iPhone 14 pro", "iPhone 15 pro"]
    },
    {
        id: 6,
        name: "Cibli Silicon Case",
        price: 17,
        images: {
            black: "images/products/phonecases/cardimg/caseblack.jpg",
            orange: "images/products/phonecases/cart6/caseorange6.jpg",
        },
        series: ["iPhone 13 ", "iPhone 14 ", "iPhone 15 "]
    },
    {
        id: 4,
        name: "Dəri Case",
        price: 18,
        images: {
            green:"images/products/phonecases/cardimg/dcase-green.jpg",
            brown: "images/products/phonecases/cardimg/dcase-brown.jpg",
            whitesmoke: "images/products/phonecases/cardimg/dcase-whitesmoke.jpg",
        },
        series: ["iPhone 13 pro", "iPhone 13 pro max ","iPhone 14 pro", "iPhone 14 pro max "]
    },
    {
        id: 8,
        name: "Puffer Case",
        price:16,
        images: {
            black: "images/products/phonecases/cardimg/puffblack.jpg",
            orange: "images/products/phonecases/cardimg/pufforange.jpg",
            blue: "images/products/phonecases/cardimg/puffblue.jpg",
            gray: "images/products/phonecases/cardimg/puffgray.jpg",
        },
        series: ["iPhone 13pro max ", "iPhone 14pro max ","iPhone 13pro  ", "iPhone 14pro  "]
    },
    {
        id: 9,
        name: "Ulduzlu Silicon Case",
        price:12,
        images: {
            gray:"images/products/phonecases/cardimg/casestargray.jpg" ,
            green:"images/products/phonecases/cardimg/casestargreen.jpg",
        },
        series: ["iPhone 13 pro","iPhone 13 pro max", "iPhone 14 pro  ","iPhone 15 pro"]
    },
    {
        id: 10,
        name: "Dalğalı Silicon Case",
        price:12,
        images: {
            orchid:"images/products/phonecases/cardimg/new1.jpg",
            pink:"images/products/phonecases/cardimg/wave2.jpg",
        },
        series: ["iPhone 13 pro","iPhone 13 pro max", "iPhone 14 pro  ","iPhone 15 pro"]
    },
    {
        id: 11,
        name: "Puff Parlaq Case",
        price:15,
        images: {
            pink:"images/products/phonecases/cardimg/new3.jpg",
            cherry:"images/products/phonecases/cardimg/new4.jpg",
            red:"images/products/phonecases/cardimg/new5.jpg",
        },
        series: ["iPhone 13 pro","iPhone 13 pro max", "iPhone 14 pro  ","iPhone 15 pro"]
    },
    {
        id: 12,
        name: " Şəffaf çiçəkli Case",
        price:9,
        images: {
            purple: "images/products/phonecases/cardimg/new6.jpg",
            pink: "images/products/phonecases/cardimg/new7.jpg",
        
        },
        series: ["iPhone 13pro","iPhone 13pro max ", "iPhone 14pro max "]
    },
    {
        id: 13,
        name: " Deri Case",
        price:15,
        images: {
            green: "images/products/phonecases/cardimg/new10.jpg",
            blue: "images/products/phonecases/cardimg/new9.jpg",
        },
        series: ["iPhone 13pro","iPhone 13pro max ", "iPhone 14pro max "]
    }
];

const airpodsCases=[
    {
        id: 1,
        name: " Sadə silicon airPods case ",
        price: "12 AZN",
        images: {
            pink:"images/airpodscase/acase1.jpg",
            green:"images/airpodscase/acase2.jpg",
        },
        series: ["Air Pods Pro","Air Pods Pro 3","Air Pods Pro 2"]
    },
    {
    id: 2,
    name: "silicon airPods Case ",
    price: "15 AZN",
    images: {
        pink:"images/airpodscase/acase4.jpg",
        gray:"images/airpodscase/acase5.jpg",
    },
    series: ["Air Pods Pro","Air Pods Pro 3","Air Pods Pro 2"]
},
    {
        id: 3,
        name: "Premium silicon airPods Case",
        price: "18 AZN",
        images: {
            brown:"images/airpodscase/acaseb.jpg",
            orange:"images/airpodscase/acaseo.jpg",
            purple:"images/airpodscase/acasep.jpg",
            teal:"images/airpodscase/acaset.jpg"
        },
        series: ["Air Pods Pro","Air Pods Pro 3","Air Pods Pro 2"]
    },
    {
        id: 4,
        name: "Micky Mouse detaylı airPods Case",
        price: "18 AZN",
        images: {
            blue:"images/airpodscase/mcase.jpg",
            beige:"images/airpodscase/mcaseb.jpg",
        },
        series: ["Air Pods Pro","Air Pods Pro 3","Air Pods Pro 2"]
    },
    {
        id: 6,
        name: "Metal AirPods Case",
        price: "12 AZN",
        images: {
            pink:"images/airpodscase/ainew1.jpg",
            gray:"images/airpodscase/ainew3.jpg",
        },
        series: ["Air Pods Pro","Air Pods Pro 2"]
    },
    {
        id: 7,
        name: "Dəri AirPods Case",
        price: "15 AZN",
        images: {
            orange:"images/airpodscase/ainew6.jpg",
            pink:"images/airpodscase/ainew5.jpg",
            orchid:"images/airpodscase/ainew7.jpg",
        },
        series: ["Air Pods Pro","Air Pods Pro "]
    },
    {
        id: 8,
        name: "silicon AirPods Case",
        price: "10 AZN",
        images: {
            black:"images/airpodscase/ainew8.jpg",
            pink:"images/airpodscase/ainew9.jpg",
        },
        series: ["Air Pods Pro","Air Pods Pro "]
    },
    {
        id: 9,
        name: "Puff AirPods Case",
        price: "15 AZN",
        images: {
            pink:"images/airpodscase/ainew10.jpg",
        },
        series: ["Air Pods Pro","Air Pods Pro "]
    },
    {
        id: 10,
        name: "Yumosh AirPods Case",
        price: "15 AZN",
        images: {
            pink:"images/airpodscase/ainew11.jpg",
        },
        series: ["Air Pods Pro","Air Pods"]
    }
]
const productContainer = document.querySelector('.case-container');
const airpodscaseContainer=document.querySelector('.airpods-case-container');
products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    const defaultImage = product.images.green || Object.values(product.images)[0];
    card.innerHTML = `
        <div class="img-container">
            <img class="card-img" src="${defaultImage}" alt="${product.name}" id="product-img-${product.id}">
        </div>
        <div class="card-body">
            <h4 class="card-title">${product.name}</h4>
            <div class="series-selection">
                ${product.series.map(serie => `<span class="series">${serie}</span>`).join(' ')}
            </div>
            <div class="color-options">
                <i class="fa-sharp fa-solid fa-palette">|</i>
                ${Object.keys(product.images).map(color => `  
                    <div 
                        class="color-circle bg-${color}" 
                        data-img="${product.images[color]}" 
                        data-id="${product.id}"></div>
                `).join('')}
            </div>
            <div class="price text-success">
                <i class="fa-sharp fa-regular fa-tag">|</i>
                <h5>${product.price} manat</h5>
            </div>
            <div class="cart-container"> 
            <a class="linkcart" href="cart.html">
                <button  class="cart-btn" onclick="addToCart('${product.name}', '${defaultImage}', ${product.price}, event)">
                    <i class="fa-solid fa-cart-shopping"></i> 
                    <p class="text-btn">Səbətə əlavə et</p>
                </button>
                </a>
            </div>
            <div class="fav-container">
             <a class="linkfav" href="favorite.html">
                <button  class="txt-btn" onclick="addToFavorites('${product.name}', '${defaultImage}', ${product.price}, event)">
                    <i class="fa-sharp fa-regular fa-heart"></i>
                    <p class="text-btn">Sevimlilərə əlavə et</p>
                </button>
                </a>
        </div>
    `;
    productContainer.appendChild(card);
});

airpodsCases.forEach(airpodsCase => {
    const caseCard = document.createElement('div');
    caseCard.className = 'card';
    const defaultImage = Object.values(airpodsCase.images)[0];
    caseCard.innerHTML = `
        <div class="img-container">
            <img class="card-img" src="${defaultImage}" alt="${airpodsCase.name}" id="airpodscase-img-${airpodsCase.id}">
        </div>
        <div class="card-body">
            <h4 class="card-title">${airpodsCase.name}</h4>
            <div class="series-selection">
                ${airpodsCase.series.map(serie => `<span class="series">${serie}</span>`).join(' ')}
            </div>
            <div class="icon-container">
                <div class="color-options">
                    <i class="fa-sharp fa-solid fa-palette">|</i>
                    ${Object.keys(airpodsCase.images).map(color => ` 
                        <div 
                            class="color-circle bg-${color}" 
                            data-img="${airpodsCase.images[color]}" 
                            data-id="${airpodsCase.id}">
                        </div>
                    `).join('')}
                </div>
                <div class="price text-success">
                    <i class="fa-sharp fa-regular fa-tag">|</i>
                    <h5>${airpodsCase.price}</h5>
                </div>
            </div>
               <div class="cart-container"> 
            <a href="cart.html" >
              <button class="cart-btn" onclick="addToCart('${airpodsCase.name}', '${Object.values(airpodsCase.images)[0]}', '${airpodsCase.price}', event)" >
                    <i class="fa-solid fa-cart-shopping"></i> 
                    <p class="text-btn">Səbətə əlavə et</p>
                </button>
                </a>
            </div>
            <div class="fav-container">
            <a href="favorite.html">
                <button  class="txt-btn" onclick="addToFavorites('${airpodsCase.name}', '${Object.values(airpodsCase.images)[0]}', '${airpodsCase.price}', event)" >
                    <i class="fa-sharp fa-regular fa-heart"></i>
                    <p class="text-btn">Sevimlilərə əlavə et</p>
                </button>
                </a>
        </div>
    `;
    airpodscaseContainer.appendChild(caseCard);
});
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-circle')) {
        const imgSrc = e.target.getAttribute('data-img');
        const productId = e.target.getAttribute('data-id');
        const productImg = document.getElementById(`product-img-${productId}`);
        productImg.setAttribute('src', imgSrc); 
        document.querySelectorAll(`.color-circle[data-id="${productId}"]`).forEach(circle => 
            circle.classList.remove('active')
        );
        e.target.classList.add('active');
    }
});
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-circle')) {
        const imgSrc = e.target.getAttribute('data-img');
        const productId = e.target.getAttribute('data-id');
        const productImg = document.getElementById(`airpodscase-img-${productId}`); 
        if (productImg) {
            productImg.setAttribute('src', imgSrc);
        }
        const colorCircles = e.target.closest('.color-options').querySelectorAll('.color-circle');
        colorCircles.forEach(circle => circle.classList.remove('active'));
        e.target.classList.add('active');
    }
});
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase();
    const caseCards = document.querySelectorAll('.case-container .card');
    caseCards.forEach(function (card) {
        const productName = card.querySelector('.card-title').textContent.toLowerCase();
        if (productName.includes(searchText)) {
            card.style.display = ''; 
        } else {
            card.style.display = 'none'; 
        }
    });

    // Eyni şeyi airpods-case-container üçün də edirik
    const airpodCards = document.querySelectorAll('.airpods-case-container .card');
    airpodCards.forEach(function (card) {
        const airpodName = card.querySelector('.card-title').textContent.toLowerCase();
        if (airpodName.includes(searchText)) {
            card.style.display = ''; // Göstər
        } else {
            card.style.display = 'none'; // Gizlət
        }
    });
});
let sortOrder = 'asc'; 
function sortProducts() {
    const caseCards = Array.from(document.querySelectorAll('.case-container .card'));
    const airpodCards = Array.from(document.querySelectorAll('.airpods-case-container .card'));

    const upfilter = document.querySelector("#upSort");
    const downfilter = document.querySelector("#downSort");

    // Qiymətləri müqayisə edirik
    const sortCards = (cards) => {
        return cards.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price h5').textContent.split(' ')[0]);
            const priceB = parseFloat(b.querySelector('.price h5').textContent.split(' ')[0]);

            if (sortOrder === 'asc') {
                return priceA - priceB; // Artan qiymət
            } else {
                return priceB - priceA; // Azalan qiymət
            }
        });
    };

    // Kartları sıralayırıq
    const sortedCaseCards = sortCards(caseCards);
    const sortedAirpodCards = sortCards(airpodCards);
    if (sortOrder === 'asc') {
        upfilter.style.display = 'inline-block';   // Yuxarı oxu gizlət
        downfilter.style.display = 'none'; // Aşağı oxu göstər
    } else {
        upfilter.style.display = 'none';  // Yuxarı oxu göstər
        downfilter.style.display = 'inline-block'; // Aşağı oxu gizlət
    }
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

    // Sıralanmış kartları konteynerə əlavə edirik
    const productContainer = document.querySelector('.case-container');
    sortedCaseCards.forEach(card => productContainer.appendChild(card));

    const airpodscaseContainer = document.querySelector('.airpods-case-container');
    sortedAirpodCards.forEach(card => airpodscaseContainer.appendChild(card));
}

// Yalnız sıralama düymələrinə klikləmə hadisəsi əlavə edirik
document.getElementById('upSort').addEventListener('click', sortProducts);
document.getElementById('downSort').addEventListener('click', sortProducts);
