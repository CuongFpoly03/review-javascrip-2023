const namepr = document.querySelector('#namepr');
const image = document.querySelector('#image');
const price = document.querySelector('#price');
const quantity = document.querySelector('#quantity');
const addform = document.querySelector('#formadd')
addform.addEventListener("submit", (e) => {
    e.preventDefault();
    let allproducts = {
        namepr: namepr.value,
        image: image.value,
        price: price.value,
        quantity: quantity.value
    };
    fetch("http://localhost:3000/allproducts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(allproducts),
    }).then(() => (window.location = "./index.html"));
});
