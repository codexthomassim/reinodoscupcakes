//Carrinho
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//Abri carrinho
cartIcon.onclick = () => {
  cart.classList.add("active");
};
//Fechar carrinho
closeCart.onclick = () => {
  cart.classList.remove("active");
};
