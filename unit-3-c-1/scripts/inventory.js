//call the products key and appending it to div using .map()

var products = JSON.parse(localStorage.getItem("products")) || [];

products.map(function (elem) {
  var box = document.createElement("div");
  box.id = "box";
  var type = document.createElement("p");
  type.innerText = elem.type;
  var desc = document.createElement("p");
  desc.innerText = elem.desc;
  var price = document.createElement("p");
  price.innerText = elem.price;
  var image = document.createElement("img");
  image.src = elem.image;
  var button = document.createElement("button");
  button.id = "remove_product";
  button.innerText = "Remove";
  box.append(image, type, desc, price, button);

  document.querySelector("#all_products").append(box);
});

// document.querySelector("#remove_product").addEventListener("Click", removeFunc);

// function removeFunc(elem, index) {
//   products.splice(elem, index);
//   localStorage.setItem("products", JSON.stringify(products));
//   window.location.reload();
// }
