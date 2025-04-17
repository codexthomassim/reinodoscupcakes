document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const forms = document.querySelectorAll(".form");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      forms.forEach((f) => f.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
    });
  });

  // Simula envio de dados (pode adaptar com localStorage ou backend)
  document.getElementById("signup").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Conta criada com sucesso!");
    e.target.reset();
  });

  document.getElementById("login").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login efetuado com sucesso!");
    e.target.reset();
  });
});
