//store the products array in localstorage as "products"

function addProducts() {
  event.preventDefault();

  //   Each product should be stored in an array and this array will be stored in local storage.

  var products = JSON.parse(localStorage.getItem("products")) || [];

  var products_obj = {
    type: document.querySelector("#type").value,
    desc: document.querySelector("#desc").value,
    price: document.querySelector("#price").value,
    image: document.querySelector("#image").value,
  };

  products.push(products_obj);

  //   The products will be stored in local storage with key “products”.

  localStorage.setItem("products", JSON.stringify(products));

  //All the input fields should become empty after submitting the form

  document.querySelector("#type").value = null;
  document.querySelector("#desc").value = null;
  document.querySelector("#price").value = null;
  document.querySelector("#image").value = null;
}
