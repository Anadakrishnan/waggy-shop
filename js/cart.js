
function getCartItems() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}


function saveCartItems(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}


function removeItem(index) {
  let cart = getCartItems();
  cart.splice(index, 1);
  saveCartItems(cart);
  renderCart();
  if (typeof updateBadge === 'function') {
    updateBadge();
  }
}


function renderCart() {
  const container = document.getElementById('cart-items');
  const totalElem = document.getElementById('cart-total');
  
  if (!container) return;

  const cart = getCartItems();

  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align: center; font-size: 1.2rem; color: #718096; padding: 2rem 0;">Your cart is currently empty.</p>`;
    if (totalElem) totalElem.innerText = "0.00";
    return;
  }

  let total = 0;
  let html = '';

  cart.forEach((item, index) => {
    total += Number(item.price) || 0;
    html += `
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding: 1rem 0;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <img src="${item.img}" alt="${item.title}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
          <div>
            <h4 style="margin: 0 0 0.25rem 0; font-size: 1.1rem; color: #2d3748;">${item.title}</h4>
            <p style="margin: 0; font-weight: bold; color: #2f855a;">$${item.price}</p>
          </div>
        </div>
        <button onclick="removeItem(${index})" style="background-color: #e53e3e; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">Remove</button>
      </div>
    `;
  });

  container.innerHTML = html;
  if (totalElem) {
    totalElem.innerText = total.toFixed(2);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});