const dogImg = document.querySelector("#dog-img");
const newDoggoButton = document.querySelector("#new-doggo-button");
const doggoUrl = "https://dog.ceo/api/breeds/image/random";

newDoggoButton.addEventListener("click", function () {
  setDogImg();
});

function setDogImg() {
  fetch(doggoUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const imgUrl = data.message;
      dogImg.src = imgUrl;
    });
}
setDogImg();
