// Попап формы обратной связи

var writeUs = document.querySelector(".write-us");
var formPopup = document.querySelector(".form-popup");
var popupClose = document.querySelector(".button-close");
var formTextarea = document.querySelector(".form-textarea");
var writeUsForm = document.querySelector(".write-us-form");
var writeUsUsername = document.querySelector(".write-us-username");
var writeUsEmail = document.querySelector(".write-us-email");

var isStorageSupport = true;
var storage = "";

if (writeUs) {
  try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }

  writeUs.addEventListener("click", function (evt) {
    evt.preventDefault ();
    formPopup.classList.add("popup-show");

    if (storage) {
      writeUsUsername.value = storage;
      writeUsEmail.focus()
    } else {
      writeUsUsername.focus()
    }
  });

  popupClose.addEventListener("click", function (evt) {
    evt.preventDefault ();
    formPopup.classList.remove("popup-show");
    formPopup.classList.remove("popup-error");
  });

  writeUsForm.addEventListener("submit", function (evt) {
    if (!writeUsUsername.value || !writeUsEmail.value) {
      evt.preventDefault ();
      formPopup.classList.remove("popup-error");
      formPopup.offsetWidth = formPopup.offsetWidth;
      formPopup.classList.add("popup-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", writeUsUsername.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt)  {
    if (evt.keyCode === 27) {
      if (formPopup.classList.contains("popup-show")) {
        evt.preventDefault();
        formPopup.classList.remove("popup-show");
        formPopup.classList.remove("popup-error");
      }
    }
  });

}
// Попап Корзина

var purchaseButtons = document.querySelectorAll(".item-purchase-btn");
var popupBasket = document.querySelector(".popup-basket");
var basketClose = document.querySelector(".basket-close");

if (popupBasket) {
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

};

// Попап карта

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".map-popup");
var mapClose = document.querySelector(".map-close");

if (mapPopup) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("popup-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("popup-show");
      }
    }
  });

};


// Слайдер Сервисы
var servicesSlider =document.querySelector(".services-slider");
var buttons = document.querySelectorAll(".slider-btn");
var slides = document.querySelectorAll(".services-slide");

var deliveryBtn = document.querySelector(".delivery-btn");
var warrantyBtn = document.querySelector(".warranty-btn");
var loanBtn = document.querySelector(".loan-btn");
var delivery = document.querySelector(".slide-delivery");
var warranty = document.querySelector(".slide-warranty");
var loan = document.querySelector(".slide-loan");

if (servicesSlider) {

deliveryBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  document.querySelector(".button-current").classList.remove("button-current");
  document.querySelector(".show").classList.remove("show");

  deliveryBtn.classList.add("button-current");
  delivery.classList.add("show");
  warrantyBtn.focus();
});

warrantyBtn.addEventListener("click", function (evt) {
evt.preventDefault();

document.querySelector(".button-current").classList.remove("button-current");
document.querySelector(".show").classList.remove("show");

warrantyBtn.classList.add("button-current");
warranty.classList.add("show");
loanBtn.focus();
});

loanBtn.addEventListener("click", function (evt) {
evt.preventDefault();

document.querySelector(".button-current").classList.remove("button-current");
document.querySelector(".show").classList.remove("show");

loanBtn.classList.add("button-current");
loan.classList.add("show");
deliveryBtn.focus();
});

};

// Промо слайдер
var promoSlider = document.querySelector(".promo-slider");

var slides = document.querySelectorAll(".slide");
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");

var arrowPrev = document.querySelector(".slider-arrow-prev");
var arrowNext = document.querySelector(".slider-arrow-next");
var bullets = document.querySelectorAll(".slider-bullet");
var bullet1 = document.querySelector(".bullet-1");
var bullet2 = document.querySelector(".bullet-2");

var current = 1;

if (promoSlider) {

slides[current].classList.add("slide-current");
bullets[current].classList.add("bullet-current");

arrowPrev.onclick = function(){
  arrowNext.style.display = "block";
  if (current -1 == -1) {
     arrowPrev.style.display = "none";
  } else {
      current--;
  };
  document.querySelector(".slide-current").classList.remove("slide-current");
  document.querySelector(".bullet-current").classList.remove("bullet-current");

slides[current].classList.add("slide-current");
bullets[current].classList.add("bullet-current");
};

arrowNext.onclick = function(){
  arrowPrev.style.display = "block";
  if (current +1 == slides.length){
    arrowNext.style.display = "none";
  } else {
      current++;
  }
  document.querySelector(".slide-current").classList.remove("slide-current");
  document.querySelector(".bullet-current").classList.remove("bullet-current");

slides[current].classList.add("slide-current");
bullets[current].classList.add("bullet-current");
};

bullet1.addEventListener("click", function (evt) {
  evt.preventDefault();

  document.querySelector(".slide-current").classList.remove("slide-current");
  slide1.classList.add("slide-current");
  document.querySelector(".bullet-current").classList.remove("bullet-current");
  bullet1.classList.add("bullet-current");

  arrowNext.style.display = "block";
});

bullet2.addEventListener("click", function (evt) {
  evt.preventDefault();

  document.querySelector(".slide-current").classList.remove("slide-current");
  slide2.classList.add("slide-current");
  document.querySelector(".bullet-current").classList.remove("bullet-current");
  bullet2.classList.add("bullet-current");

  arrowPrev.style.display = "block";
});

};



