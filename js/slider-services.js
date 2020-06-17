var buttons = document.querySelectorAll(".slider-btn");
var slides = document.querySelectorAll(".services-slide");

var deliveryBtn = document.querySelector(".delivery-btn");
var warrantyBtn = document.querySelector(".warranty-btn");
var loanBtn = document.querySelector(".loan-btn");
var delivery = document.querySelector(".slide-delivery");
var warranty = document.querySelector(".slide-warranty");
var loan = document.querySelector(".slide-loan");

deliveryBtn.addEventListener("click", function (evt) {
    evt.preventDefault();

    for (let button of buttons) {
      button.classList.remove("button-current");
    };

    for (let slide of slides) {
      slide.classList.remove("show");
    };

    deliveryBtn.classList.add("button-current");
    delivery.classList.add("show");
    warrantyBtn.focus();
});

warrantyBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  for (let button of buttons) {
    button.classList.remove("button-current");
  };

  for (let slide of slides) {
    slide.classList.remove("show");
  };

  warrantyBtn.classList.add("button-current");
  warranty.classList.add("show");
  loanBtn.focus();
});

loanBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  for (let button of buttons) {
    button.classList.remove("button-current");
  };

  for (let slide of slides) {
    slide.classList.remove("show");
  };

  loanBtn.classList.add("button-current");
  loan.classList.add("show");
  deliveryBtn.focus();
});
