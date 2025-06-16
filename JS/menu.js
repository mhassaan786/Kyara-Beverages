
// menus
const menu = {
    shake: [
        {name: "Chocolate Fudge Shake", price: 2500, src: "./Assets/items/Chocolate Fudge Shake.jpg"},
        {name: "Banana Nutella Shake", price: 2200, src: "./Assets/items/Banana Nutella Shake.jpg"},
        {name: "Strawberry Cream Shake", price: 2550, src: "./Assets/items/Strawberry Cream Shake.jpg"},
    ],
    juices: [
        {name: "Fresh Lime Soda", price: 2000, src: "./Assets/items/Fresh Lime Soda.jpg"},
        {name: "Orange Juice", price: 1800, src: "./Assets/items/Orange_juice.jpg"},
        {name: "Mint Lemonade", price: 1800, src: "./Assets/items/Mint Lemonade.jpg"},
    ],
    cofee: [
        {name: "Classic Cold Brew", price: 1200, src: "./Assets/items/Classic Cold Brew.jpg"},
        {name: "Iced Caramel Latte", price: 1600, src: "./Assets/items/Iced Caramel Latte.jpg"},
        {name: "Espresso Macchiato", price: 1550, src: "./Assets/items/Espresso Macchiato.jpg"},
    ]  
}

const shakes = document.getElementsByClassName("mts shakes")[0];
const juices = document.getElementsByClassName("mts juices")[0];
const cofees = document.getElementsByClassName("mts cofee")[0];
const simp = document.getElementsByClassName("mts simple")[0];

// shakes
shakes.innerHTML = `
<h1>Shakes</h1>
<div class="mt_items">
${menu.shake.map(item => `
<div class="item">
    <img src="${item.src}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>Price: ${item.price} Rs</p>
</div>
`   ).join('')}
</div>
`;

// juices
juices.innerHTML = `
<h1>Juices</h1>
<div class="mt_items">
${menu.juices.map(item => `
<div class="item">
    <img src="${item.src}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>Price: ${item.price} Rs</p>
</div>
`   ).join('')}
</div>
`;

// cofees
cofees.innerHTML = `
<h1>Coffee</h1>
<div class="mt_items">
${menu.cofee.map(item => `
<div class="item">
    <img src="${item.src}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>Price: ${item.price} Rs</p>
</div>
`).join('')}
</div>
`;
