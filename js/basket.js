var purchaseButtons = document.querySelectorAll(".item-purchase-btn");
var popupBasket = document.querySelector(".popup-basket");
var basketClose = document.querySelector(".basket-close");

for (let purchaseButton of purchaseButtons) {
  purchaseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.add("popup-show");
  })
};

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBasket.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupBasket.classList.contains("popup-show")) {
      evt.preventDefault();
      popupBasket.classList.remove("popup-show");
    }
  }
});
