// console.log(location);
// console.log(document.location.search);
const searchParam = new URLSearchParams(document.location.search);
// console.log(searchParam.get('id'))
const id = searchParam.get('id');
const namepr = document.querySelector('#namepr');
const image = document.querySelector('#image');
const price = document.querySelector('#price');
const quantity = document.querySelector('#quantity');
const updateform = document.querySelector('#formupdate')
fetch("http://localhost:3000/allproducts/"+id)
.then((response) => response.json())
.then((data) => {
    // console.log(data)
    namepr.value = data.namepr;
    image.value = data.image;
    price.value = data.price;
    quantity.value = data.quantity;
})

updateform.addEventListener("submit", (e) => {
    e.preventDefault();
    let updatePr = {
        namepr: namepr.value,
        image: image.value,
        price: price.value,
        quantity: quantity.value
    };
    fetch("http://localhost:3000/allproducts/"+id, {
        method: "PUT",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(updatePr),
    }).then(() => (window.location= "./index.html"));
});