// DOM Manipulation

// Declaration and assignment of variables
// Constants for handling the mobile menu
const menuBtn = document.querySelector(".menu-btn");
const navbarMenu = document.querySelector(".menu");
const menuBtnIcon = document.querySelector("#menu-btn-icon");

// Constants for handling the shopping cart
const cartOpenBtn = document.querySelector(".shopping-cart-open-btn");
const cartCloseBtn = document.querySelector(".shopping-cart-close-btn");
const cartOverlay = document.querySelector(".overlay");
const cart = document.querySelector(".shopping-cart");

// Functions

// Function to toggle the 'active' class on the menu and its icon
function toggleActiveMenu() {
  navbarMenu.classList.toggle("active");
  menuBtnIcon.classList.toggle("active");
}

// Function to show or hide the shopping cart and its background overlay
function toggleCart() {
  cartOverlay.classList.toggle("show-cart");
  cart.classList.toggle("show-cart");
}

// Use of the JavaScript method "addEventListener" which allows executing a function
// when the specified event occurs on the obtained HTML element
// The first argument passed to the function is the event, and the second is the function
// that will be executed when that event occurs

// addEventListener to open or close the responsive menu
menuBtn.addEventListener("click", toggleActiveMenu);

// addEventListener to open or close the shopping cart
cartOpenBtn.addEventListener("click", toggleCart);
cartCloseBtn.addEventListener("click", toggleCart);
