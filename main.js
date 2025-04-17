//Carrinho
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//Usuário
let userIcon = document.querySelector("#user-icon");
//Abri carrinho
cartIcon.onclick = () => {
  cart.classList.add("active");
};
//Fechar carrinho
closeCart.onclick = () => {
  cart.classList.remove("active");
};
//Redireciona o usuário para tela de cadastro/login
userIcon.addEventListener("click", () => {
  window.location.href = "auth.html";
});
