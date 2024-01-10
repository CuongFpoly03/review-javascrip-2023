const formadd = document.getElementById("formadd");
const listproducts = document.getElementById("listproducts");
const API = "http://localhost:3000/products";

const fetchProducts = async () => {
  try {
    const response = await fetch(API, {
      method: "GET",
    });
    const data = await response.json();
    listproducts.innerHTML = "";
    data.forEach((products) => {
      const productItem = document.createElement("table");
      productItem.innerHTML = `
                <tr>
                    <th>stt</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình</th>
                    <th>Giá sản phảm</th>
                    <th>Số lượng</th>
                    <th>Hoạt động</th>
                </tr>
                <tr>
                    <td>${products.id }</td>
                    <td>${products.namepr}</td>
                    <td><img src="${products.image}" alt="" /></td>
                    <td>${products.price}đ</td>
                    <td>${products.quantity}</td>
                    <td>xoá/sửa</td>
            </tr>
            `;
      listproducts.appendChild(productItem);
    });
  } catch (error) {
    console.log("error fetch: ", error);
  }
};

fetchProducts();
