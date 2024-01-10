const listproducts = document.querySelector("#listproducts");
const show = () => {
  fetch(" http://localhost:3000/allproducts")
    .then((response) => response.json())
    .then((data) => {
      listproducts.innerHTML = data
        .map((item, index) => {
          return `
            <tr>
                <td>${index + 1}</td>
                <td>${item.namepr}</td>
                <td><img src="${item.image}"></td>
                <td>${item.price}đ</td>
                <td>${item.quantity}</td>
                <td>
                  <a href="./update.html?id=${item.id}"><button>Sửa</button></a>
                    <button class="delete" data-id="${item.id}">Xoá</button>
                </td>
            </tr>
            `;
        })
        .join("");
    })
    .then(() => {
      const btnDelete = document.querySelectorAll(".delete");
      // console.log(deletes);
      for (let btn of btnDelete) {
        btn.addEventListener("click", () => {
          // console.log(btn.dataset.id);
          let id = btn.dataset.id;
          fetch("http://localhost:3000/allproducts/" + id, {
            method: "DELETE",
          });
        });
      }
    });
};
show();
