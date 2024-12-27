const categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach(item => {
    const main = item.querySelector('.category-main');
    const subcategories = item.querySelector('.subcategory-list');
    const iconDown = item.querySelector('.fa-chevron-down');
    const iconUp = item.querySelector('.fa-chevron-up');
    subcategories.style.display = 'block'; 
    iconDown.style.display = 'none'; 
    iconUp.style.display = 'block'; 
    main.addEventListener('click', () => {
        const isVisible = subcategories.style.display === 'block';
        subcategories.style.display = isVisible ? 'none' : 'block'; 
        iconDown.style.display = isVisible ? 'block' : 'none'; 
        iconUp.style.display = isVisible ? 'none' : 'block'; 
    });
});
const subcategoryLinks = document.querySelectorAll('.subcategory-list a');
subcategoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        subcategoryLinks.forEach(link => link.classList.remove('active-subcategory'));
        e.target.classList.add('active-subcategory');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelector(".fa-bars");
    const menuList = document.querySelector(".menu-list");
    bars.addEventListener("click", function () {
        menuList.classList.toggle("active");
    });
});
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
        description:"",
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
        description:"",
        price: 25,
        images: {
            gray:"images/products/phonecases/cardimg/indir (3).jpg",
            pink: "images/products/phonecases/cardimg/lip case.jpg",
        },
        series: ["iPhone 13 pro", "iPhone 13 pro max ","iPhone 14 pro", "iPhone 14 pro max "]
    },
    {
        id: 3,
        name: " Şəffaf Case",
        price:10,
        images: {
            pink: "images/products/phonecases/cardimg/pinkseffaf.jpg",
            black: "images/products/phonecases/cardimg/blackseffaf.jpg",
            gray: "images/products/phonecases/cardimg/grayseffaf.jpg",
        },
        series: ["iPhone 13pro max ", "iPhone 14pro max ","iPhone 13pro  ", "iPhone 14pro  "]
    },
    {
        id: 4,
        name: " Yazı detaylı Silicon Case",
        price:9,
        images: {
            pink: "images/products/phonecases/cardimg/ypink.jpg",
            black: "images/products/phonecases/cardimg/blackyazili.jpg",
            orange: "images/products/phonecases/cardimg/yorange.jpg",
            blue: "images/products/phonecases/cardimg/yblue.jpg",
            green: "images/products/phonecases/cardimg/ygreen.jpg",
        },
        series: ["iPhone 13pro","iPhone 13pro max ", "iPhone 14pro max "]
    }
];

const screenProtectors = [
    { 
        id:1,
        name: " Ekran Qoruyucu",
        image: "images/screenProtectors/sp1.jpg",
        price: "8 AZN",
        series: ["iPhone 13 pro", "iPhone 13 pro max ","iPhone 14 pro", "iPhone 14 pro max "]
    },
    {
        id:2,
        name: " Ekran Qoruyucu",
        image: "images/screenProtectors/sp5.jpg",
        price: "12 AZN",
        series: ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15"]
    },
    {
        
        id:3,
        name: "Iki qat Ekran Qoruyucu",
        image: "images/screenProtectors/sp6.jpg",
        price: "15 AZN",
        series: ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15"]
    },
    {
       id:4,
        name: "Gorunmez Ekran Qoruyucu",
        image: "images/screenProtectors/sp2.jpg",
        price: "12 AZN",
        series: ["iPhone 13 pro","iPhone 13 pro max", "iPhone 14 pro  ","iPhone 15 pro"]
    }
];
const phoneStands=[
    {
        id: 1,
        name: "Fırlana bilən dayancaq",
        price: "17 AZN",
        images: {
            yellow:"images/phoneStands/st1.jpg",
            purple:"images/phoneStands/st2.jpg",
            red: "images/phoneStands/st3.jpg",
        },
        series: ["iPhone 13 pro", "iPhone 13 pro max ","iPhone 14 pro", "iPhone 14 pro max "]
    },
    {
        id: 2,
        name: "Mini  dayancaq",
        price: "10 AZN",
        images: {
            white:"images/phoneStands/st.1.jpg",
            black:"images/phoneStands/st.2.jpg",
        },
        series:  ["iPhone 13 pro", "iPhone 13 pro max ","iPhone 14 pro", "iPhone 14 pro max "]
    },
    {
        id: 3,
        name: "Yarı hissəli  dayancaq",
        price: "15 AZN",
        images: {
            pink:"images/phoneStands/yst2.jpg",
            red:"images/phoneStands/yst.jpg",
            yellow:"images/phoneStands/yst3.jpg",
        },
        series: ["iPhone 13 pro", "iPhone 13 pro max ","iPhone 14 pro", "iPhone 14 pro max "]
    },
    {
        id: 4,
        name: "Qatlana bilən dayancaq",
        price: "18 AZN",
        images: {
            yellow:"images/phoneStands/dst.jpg",
            green:"images/phoneStands/dst2.jpg",
        },
        series: ["iPhone 13 ", "iPhone 14 ", "iPhone 15 "]
    }
]
const airpodsCases=[
    {
        id: 1,
        name: " Sadə Slicon Case ",
        price: "12 AZN",
        images: {
            pink:"images/airpodscase/acase1.jpg",
            green:"images/airpodscase/acase2.jpg",
        },
        series: ["Air Pods Pro","Air Pods Pro 3","Air Pods Pro 2"]
    },
    {
    id: 2,
    name: "Slicon Case ",
    price: "15 AZN",
    images: {
        pink:"images/airpodscase/acase4.jpg",
        gray:"images/airpodscase/acase5.jpg",
    },
    series: ["Air Pods Pro","Air Pods Pro 3","Air Pods Pro 2"]
},
    {
        id: 3,
        name: "Premium Slicon Case",
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
        name: "Micky Mouse detaylı Case",
        price: "18 AZN",
        images: {
            blue:"images/airpodscase/mcase.jpg",
            beige:"images/airpodscase/mcaseb.jpg",
        },
        series: ["Air Pods Pro","Air Pods Pro 3","Air Pods Pro 2"]
    }
]
    const chargerCases=[  
         {
            id: 1,
            name: "Ivory Qoruyucu ",
            price: "10 AZN",
            images: {
                purple:"images/chargercase/pccase.jpg",
            
            },
            series: ["for All Iphone Charger"]
        },
        {
            id: 2,
            name: "Stikerli Şəffaf Slicon Qoruyucu",
            price: "18 AZN",
            images: {
                brown:"images/chargercase/dbccase.jpg",
            },
            series: ["for All Iphone Charger"]
        },
        {
            id: 3,
            name: "Stikerli Slicon Qoruyucu",
            price: "17 AZN",
            images: {
                brown:"images/chargercase/bccase.jpg"
            },
            series: ["for All Iphone Charger"]
        },
        {
            id: 4,
            name: " Sadə Slicon Qorucu ",
            price: "15 AZN",
            images: {
                white:"images/chargercase/wccase.jpg",
            },
            series: ["for All Iphone Charger"]
        },
    ]
        const caseCombos=[  
            {
               id: 1,
               name: " Çəhrayı oyuncaqlı dəst case ",
               price: "21 AZN",
               images: {
                white:"images/combo/combo6.jpg",
               },
               series: ["İphone 7","Air Pods 2"],
           },
           {
               id: 2,
               name: "Çiçək dəsənli dəst",
               price: "20 AZN",
               images:
               {
               black: "images/combo/casecombo.jpg" },
               series: ["İphone 13 pro","İphone 14 pro","Air Pods 2"]
           },
           {
               id: 3,
               name: "Silikon dəst case",
               price: "18 AZN",
               images: {
                beige:"images/combo/combo3.jpg",
               },
           series: ["İphone 12 ","İphone 11 ","Air Pods 2","Air Pods"]
           },
           {
               id: 4,
               name: "Qırmızı dəst ",
               price: "16 AZN",
               images:{
                red:"images/combo/combo4.jpg",
               },
               series: ["İphone 7","Air Pods 2"]
           },
           {
            id: 5,
            name: "Çəhrayı dəst ",
            price: "18 AZN",
            images:{
                white:"images/combo/combo5.jpg",
            },
            series: ["İphone 11 ","Air Pods 2"]
        },
        {
            id: 6,
            name: " Şəffaf  dəst ",
            price: "18 AZN",
            images:{
white:"images/combo/combo1.jpg",
            },
            series: ["İphone 13 pro","İphone 14 pro","Air Pods 2"]
        },
        {
            id: 7,
            name: " Şəffaf  dəst ",
            price: "16 AZN",
            images:{
white:"images/combo/casecombo3.jpg",
            },
            series: ["İphone 13 pro","İphone 14 pro","Air Pods 2"]
        },
        ]

const caseContainer = document.querySelector('.case-container');
const screenProtectorsContainer = document.querySelector('.screen-protectors-container');
const standsContainer=document.querySelector('.phonestands-container');
const airpodscaseContainer=document.querySelector('.airpods-case-container');
const chargercaseContainer=document.querySelector('.charger-case-container');
const comboContainer = document.querySelector('.combo-container');
const displayProducts = () => {
    products.forEach(product => {
        const firstColor = Object.keys(product.images)[0]; 
        const firstImage = product.images[firstColor];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="img-container">
                <img class="card-img" src="${firstImage}" alt="${product.name}" id="product-img-${product.id}">
            </div>
            <div class="card-body">
                <h4 class="card-title">${product.name}</h4>
                <div class="series-selection">
                    ${product.series.map(serie => `<span class="series">${serie}</span>`).join(' ')}
                </div>
                <div class="icon-container">
                    <div class="color-options">
                        <i class="fa-sharp fa-solid fa-palette">|</i>
                        ${Object.keys(product.images).map(color => `
                            <div 
                                class="color-circle bg-${color}" 
                                data-img="${product.images[color]}" 
                                data-id="${product.id}">
                            </div>
                        `).join('')}
                    </div>
                    <div class="price text-success">
                        <i class="fa-sharp fa-regular fa-tag">|</i>
                        <h5>${product.price} AZN</h5>
                    </div>
                </div>
               <a class="lincart" href="cart.html" id="cartlink" onclick="addToCart('${product.name}', '${(firstImage)}', ${product.price}, event)">
    <div class="cart-container">
        <button class="cart-btn">
            <i class="fa-solid fa-cart-shopping"></i>
            <p class="text-btn">Səbətə əlavə et</p>
        </button>
    </div>
</a>
          <a  class="linkfav" href="favorite.html" onclick="addToFavorites('${product.name}', '${(firstImage)}', ${product.price}, event)">
                <div class="fav-container">
                    <button class="txt-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                             <p class="text-btn">Sevimlilərə əlavə et</p>
                    </button>
                </div>
            </a>
        `;
        caseContainer.appendChild(card);
    });
    
    screenProtectors.forEach(screenProtector => {
        const screenCard = document.createElement('div');
        screenCard.classList.add('card');
        screenCard.innerHTML = `
        <div class="img-container">
            <img class="card-img" src="${screenProtector.image}" alt="${screenProtector.name}">
        </div>
        <div class="card-body">
            <h4 class="card-title">${screenProtector.name}</h4>
            <div class="series-selection">
                ${screenProtector.series.map(serie => `<span class="series">${serie}</span>`).join(' ')}
            </div>
            <div class="price text-success">
                <i class="fa-sharp fa-regular fa-tag">|</i>
                <h5>${screenProtector.price}</h5>
            </div>
            <a class="lincart" href="cart.html" id="cartlink" onclick="addToCart('${screenProtector.name}', '${screenProtector.image}', ${parseFloat(screenProtector.price.replace(' AZN', '').trim())}, event)">
                <div class="cart-container">
                    <button class="cart-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p class="text-btn">Səbətə əlavə et</p>
                    </button>
                </div>
            </a>
              <a  class="linkfav" href="favorite.html" onclick="addToFavorites('${screenProtector.name}', '${screenProtector.image}', ${parseFloat(screenProtector.price.replace(' AZN', '').trim())}, event)">
                <div class="fav-container">
                    <button class="txt-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                             <p class="text-btn">Sevimlilərə əlavə et</p>
                    </button>
                </div>
            </a>
            
           
        </div>
        `;
        screenProtectorsContainer.appendChild(screenCard);
    });
    
    phoneStands.forEach(phoneStand => {
        const standsCard = document.createElement('div');
        standsCard.classList.add('card');
        standsCard.innerHTML = `
            <div class="img-container">
                <img class="card-img" src="${Object.values(phoneStand.images)[0]}" alt="${phoneStand.name}" id="phoneS-img-${phoneStand.id}">
            </div>
            <div class="card-body">
                <h4 class="card-title">${phoneStand.name}</h4>
                <div class="series-selection">
                    ${phoneStand.series.map(serie => `<span class="series">${serie}</span>`).join(' ')}
                </div>
                <div class="icon-container">
                    <div class="color-options">
                        <i class="fa-sharp fa-solid fa-palette">|</i>
                        ${Object.keys(phoneStand.images).map(color => `
                            <div 
                                class="color-circle bg-${color}" 
                                data-img="${phoneStand.images[color]}" 
                                data-id="${phoneStand.id}">
                            </div>
                        `).join('')}
                    </div>
                    <div class="price text-success">
                        <i class="fa-sharp fa-regular fa-tag">|</i>
                        <h5>${phoneStand.price}</h5>
                    </div>
                </div>
                 <a  class="lincart" href="cart.html" id="cartlink" onclick="addToCart('${phoneStand.name}', '${Object.values(phoneStand.images)[0]}', ${parseFloat(phoneStand.price.replace(' AZN', '').trim())}, event)">
                <div class="cart-container">
                    <button class="cart-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p class="text-btn">Səbətə əlavə et</p>
                    </button>
                </div>
            </a>
             <a  class="linkfav" href="favorite.html" id="cartlink" onclick="addToFavorites('${phoneStand.name}', '${Object.values(phoneStand.images)[0]}', ${parseFloat(phoneStand.price.replace(' AZN', '').trim())}, event)">
                <div class="fav-container">
                    <button class="txt-btn">
                      <i class="fa-sharp fa-regular fa-heart"></i>
                        <p class="text-btn">Sevimlilərə əlavə et</p>
                    </button>
                </div>
            </a>
               
        `;
        standsContainer.appendChild(standsCard);
    });
    airpodsCases.forEach(airpodsCase => {
        const caseCard = document.createElement('div');
        caseCard.className = 'card';
        caseCard.innerHTML = `
            <div class="img-container">
                <img class="card-img" src="${Object.values(airpodsCase.images)[0]}" alt="${airpodsCase.name}" id="airpodscase-img-${airpodsCase.id}">
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
                <a class="lincart" href="cart.html" <button class="cart-btn" onclick="addToCart('${airpodsCase.name}', '${Object.values(airpodsCase.images)[0]}', '${airpodsCase.price}', event)" >
                <div class="cart-container">
                    <button class="cart-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p class="text-btn">Səbətə əlavə et</p>
                    </button>
                </div>
            </a>
                 <a  class="linkfav" href="favorite.html" id="cartlink" onclick="addToFavorites('${airpodsCase.name}', '${Object.values(airpodsCase.images)[0]}', '${airpodsCase.price}', event)" ">
                <div class="fav-container">
                    <button class="txt-btn">
                      <i class="fa-sharp fa-regular fa-heart"></i>
                        <p class="text-btn">Sevimlilərə əlavə et</p>
                    </button>
                </div>
            </a>
        `;
        airpodscaseContainer.appendChild(caseCard);
    });
    chargerCases.forEach(chargerCase => {
        const chargerCaseCard = document.createElement('div');
        chargerCaseCard.className = 'card';
        chargerCaseCard.innerHTML = `
            <div class="img-container">
                <img class="card-img" src="${Object.values(chargerCase.images)[0]}" alt="${chargerCase.name}" id="airpodscase-img-${chargerCase.id}">
            </div>
            <div class="card-body">
                <h4 class="card-title">${chargerCase.name}</h4>
                <div class="series-selection">
                    ${chargerCase.series.map(serie => `<span class="series">${serie}</span>`).join(' ')}
                </div>
                <div class="icon-container">
                    <div class="color-options">
                        <i class="fa-sharp fa-solid fa-palette">|</i>
                        ${Object.keys(chargerCase.images).map(color => `
                            <div 
                                class="color-circle bg-${color}" 
                                data-img="${chargerCase.images[color]}" 
                                data-id="${chargerCase.id}">
                            </div>
                        `).join('')}
                    </div>
                    <div class="price text-success">
                        <i class="fa-sharp fa-regular fa-tag">|</i>
                        <h5>${chargerCase.price}</h5>
                    </div>
                </div>
                 <a class="lincart" href="cart.html" <button class="cart-btn" onclick="addToCart('${chargerCase.name}', '${Object.values(chargerCase.images)[0]}', '${chargerCase.price}', event)" >
                <div class="cart-container">
                    <button class="cart-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p class="text-btn">Səbətə əlavə et</p>
                    </button>
                </div>
            </a>
                <a  class="linkfav" href="favorite.html" id="cartlink" onclick="addToFavorites('${chargerCase.name}', '${Object.values(chargerCase.images)[0]}', '${chargerCase.price}', event)">
                <div class="fav-container">
                    <button class="txt-btn">
                      <i class="fa-sharp fa-regular fa-heart"></i>
                        <p class="text-btn">Sevimlilərə əlavə et</p>
                    </button>
                </div>
            </a> 
        `;
        chargercaseContainer.appendChild(chargerCaseCard);
    });
    caseCombos.forEach(caseCombo => {
        const comboCard = document.createElement('div');
        comboCard.className = 'card';
        comboCard.innerHTML = `
              <div class="img-container">
        <img class="card-img"  src="${Object.values(caseCombo.images)[0]}" alt="${caseCombo.name}" id="phoneS-img-${caseCombo.id}">
        </div>
            <div class="card-body">
                <h4 class="card-title">${caseCombo.name}</h4>
                <div class="series-selection">
                    ${caseCombo.series.map(serie => `<span class="series">${serie}</span>`).join(' ')}
                </div>
                <div class="icon-container">
                    <div class="price text-success">
                       <i class="fa-sharp fa-regular fa-tag">|</i>
                        <h5>${caseCombo.price}</h5>
                    </div>
                </div>
            <a  href="cart.html" <button class="cart-btn" onclick="addToCart('${caseCombo.name}', '${Object.values(caseCombo.images)[0]}', '${caseCombo.price}', event)" >
                <div class="cart-container">
                    <button class="cart-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p class="text-btn">Səbətə əlavə et</p>
                    </button>
                </div>
            </a>
                    <a class="lincart" class="linkfav" href="favorite.html" id="cartlink" onclick="addToFavorites('${caseCombo.name}', '${Object.values(caseCombo.images)[0]}', '${caseCombo.price}', event)">
                <div class="fav-container">
                    <button class="txt-btn">
                      <i class="fa-sharp fa-regular fa-heart"></i>
                        <p class="text-btn">Sevimlilərə əlavə et</p>
                    </button>
                </div>
            </a> 
        `;
        comboContainer.appendChild(comboCard);
    });    
    
};
window.onload = function() {
    displayProducts();
};
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-circle')) {
        const imgSrc = e.target.getAttribute('data-img');
        const productId = e.target.getAttribute('data-id');
        const productImg = document.getElementById(`product-img-${productId}`);
        productImg.setAttribute('src', imgSrc); 
        
        document.querySelectorAll('.color-circle').forEach(circle => circle.classList.remove('active'));
        e.target.classList.add('active');
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-circle')) {
        const imgSrc = e.target.getAttribute('data-img');
        const productId = e.target.getAttribute('data-id');
        const productImg = document.getElementById(`phoneS-img-${productId}`); 
        if (productImg) {
            productImg.setAttribute('src', imgSrc);
        }
        const colorCircles = e.target.closest('.color-options').querySelectorAll('.color-circle');
        colorCircles.forEach(circle => circle.classList.remove('active'));
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
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;
rightArrow.addEventListener('click', () => {
    const cards = document.querySelectorAll('.combo-container .card');
    const totalCards = cards.length; 
    
    if (currentIndex < totalCards - 3) { 
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    
    const translateValue = currentIndex * 15; 
    comboContainer.style.transform = `translateX(-${translateValue}%)`; 

});

