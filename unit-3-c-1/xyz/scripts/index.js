// Add the coffee to local storage with key "coffee"
const url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

