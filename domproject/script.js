// script.js

// Ajuste la quantité et le prix total
document.querySelectorAll(".quantity-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const item = this.closest(".cart-item");
      const quantityElem = item.querySelector(".quantity");
      let quantity = parseInt(quantityElem.innerText);
  
      if (this.classList.contains("increase")) {
        quantity += 1;
      } else if (this.classList.contains("decrease") && quantity > 1) {
        quantity -= 1;
      }
  
      quantityElem.innerText = quantity;
      updateTotal();
    });
  });
  
  // Supprime un article
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const item = this.closest(".cart-item");
      item.remove();
      updateTotal();
    });
  });
  
  // Ajoute un article en favori
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      this.classList.toggle("liked");
    });
  });
  
  // Met à jour le prix total
  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
      const price = parseFloat(item.getAttribute("data-price"));
      const quantity = parseInt(item.querySelector(".quantity").innerText);
      total += price * quantity;
    });
    document.querySelector("#total-price").innerText = total.toFixed(2) + "€";
  }
  
  // Initialise le prix total au chargement de la page
  updateTotal();
  