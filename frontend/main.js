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

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  //Seleciona todos os elementos com a classe
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    //Adicionar um event listener que chama a função removeCartItem
    button.addEventListener("click", removeCartItem);
  }
}

//Função removeCartItem
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

//Função updateTotal
function updateTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartContent.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("R$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;

    document.getElementsByClassName("total-price")[0].innerText = "R$" + total;
  }
}
