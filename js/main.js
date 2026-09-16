
const dogDatabase = [
  {
    id: 1,
    name: "American Bulldog",
    price: 1200,
    age: "10 weeks",
    breed: "Bulldog",
    temperament: "Gentle, loyal & strong",
    desc: "American Bulldogs look tough on the outside but have a surprisingly gentle, sensitive nature.",
    img: "images/american-bulldog.webp"
  },
  {
    id: 2,
    name: "American Foxhound",
    price: 950,
    age: "12 weeks",
    breed: "Hound",
    temperament: "Good-natured & easygoing",
    desc: "Athletic, mild-tempered hound dogs with a lean build and a gentle, expressive face.",
    img: "images/American-Foxhound.webp"
  },
  {
    id: 3,
    name: "Staffordshire Terrier",
    price: 1100,
    age: "8 weeks",
    breed: "Terrier",
    temperament: "Muscular, energetic & affectionate",
    desc: "Confident and athletic dogs that love human company and active family lifestyles.",
    img: "images/american-staffordshire-terrier.webp"
  },
  {
    id: 4,
    name: "Australian Cobberdog",
    price: 1500,
    age: "9 weeks",
    breed: "Hybrid",
    temperament: "Gentle, intuitive & low-shedding",
    desc: "Bred specifically for empathy and intelligence, Cobberdogs excel as calm family dogs.",
    img: "images/Australian-Cobberdog.webp"
  },
  {
    id: 5,
    name: "Australian Shepherd",
    price: 1350,
    age: "11 weeks",
    breed: "Herding",
    temperament: "Highly intelligent & active",
    desc: "Work-oriented, agile dogs known for high intelligence and intense focus.",
    img: "images/australian-shepherd.webp"
  },
  {
    id: 6,
    name: "Basenji",
    price: 1000,
    age: "10 weeks",
    breed: "Hound (Barkless)",
    temperament: "Quiet, independent & cat-like",
    desc: "Famous 'barkless dog' of Africa. Expresses itself with a quiet yodel.",
    img: "images/Basenji.webp"
  },
  {
    id: 7,
    name: "Basset Hound",
    price: 900,
    age: "14 weeks",
    breed: "Hound",
    temperament: "Mellow, patient & easygoing",
    desc: "Instantly recognizable with long drooping ears. Exceptionally sweet and calm.",
    img: "images/basset-hound.webp"
  },
  {
    id: 8,
    name: "Beagle",
    price: 850,
    age: "8 weeks",
    breed: "Hound",
    temperament: "Friendly, curious & merry",
    desc: "Small, compact scent hounds with happy, loving personalities.",
    img: "images/Beagle.jpg"
  },
  {
    id: 9,
    name: "Bichon Frise",
    price: 1250,
    age: "12 weeks",
    breed: "Toy",
    temperament: "Cheerful & hypoallergenic",
    desc: "Small powder-puff dogs that love cuddles and bring joyful energy.",
    img: "images/bichon-frise.webp"
  },
  {
    id: 10,
    name: "Boerboel",
    price: 1600,
    age: "10 weeks",
    breed: "Working",
    temperament: "Confident, protective & calm",
    desc: "Large South African mastiff breed that is fearless yet deeply devoted.",
    img: "images/boerboel.webp"
  },
  {
    id: 11,
    name: "Border Collie",
    price: 1400,
    age: "9 weeks",
    breed: "Herding",
    temperament: "Intelligent & athletic",
    desc: "Widely regarded as the smartest dog breed in the world.",
    img: "images/border-collie.webp"
  },
  {
    id: 12,
    name: "Boxer",
    price: 1150,
    age: "10 weeks",
    breed: "Working",
    temperament: "Playful & protective",
    desc: "Fun-loving and loyal guardians that stay youthful throughout life.",
    img: "images/boxer.webp"
  },
  {
    id: 13,
    name: "Bull Arab",
    price: 950,
    age: "11 weeks",
    breed: "Sporting",
    temperament: "Athletic, loyal & calm",
    desc: "Strong Australian working breed that forms tight-knit bonds.",
    img: "images/bull-arab.jpg"
  },
  {
    id: 14,
    name: "Bullmastiff",
    price: 1700,
    age: "9 weeks",
    breed: "Working",
    temperament: "Gentle giant, quiet & reliable",
    desc: "Large and impressive, yet extraordinarily quiet and gentle.",
    img: "images/bullmastiff.webp"
  },
  {
    id: 15,
    name: "Cane Corso",
    price: 1800,
    age: "10 weeks",
    breed: "Working",
    temperament: "Majestic & protective",
    desc: "Ancient Italian guard dog with a powerful presence and deep loyalty.",
    img: "images/cane-corso.webp"
  },
  {
    id: 16,
    name: "Belgian Malinois",
    price: 1500,
    age: "8 weeks",
    breed: "Working",
    temperament: "Alert & hard-working",
    desc: "Premier working and protection dogs with high intelligence.",
    img: "images/Malinois.jpg"
  },
  {
    id: 17,
    name: "Russian Borzoi",
    price: 1900,
    age: "12 weeks",
    breed: "Hound (Quiet)",
    temperament: "Graceful & quiet",
    desc: "Elegant sighthounds famous for their calm, serene nature indoors.",
    img: "images/Russian-borzoi.webp"
  }
];

// LocalStorage Cart Helpers
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function updateBadge() {
  const cart = getCart();
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.innerText = cart.length;
  }
}

function addToCart(title, price, img) {
  let cart = getCart();
  cart.push({ title, price, img });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateBadge();
  alert(`${title} added to cart!`);
}

// Generate HTML Card
function createCard(dog) {
  const safeName = dog.name.replace(/'/g, "\\'");
  return `
    <div class="card">
      <div class="card-img-holder">
        <img src="${dog.img}" alt="${dog.name}" loading="lazy">
      </div>
      <h4>${dog.name}</h4>
      <p class="dog-info"><strong>Breed:</strong> ${dog.breed} | <strong>Age:</strong> ${dog.age}</p>
      <p class="dog-temperament"><em>"${dog.temperament}"</em></p>
      <p class="dog-desc">${dog.desc}</p>
      <p class="price">$${dog.price}</p>
      <button class="btn-green" onclick="addToCart('${safeName}', ${dog.price}, '${dog.img}')">Reserve / Buy Dog</button>
    </div>
  `;
}

// Render Dogs based on current page
function renderDogs() {
  const container = document.getElementById('dog-cards-wrapper');
  if (!container) return;

  const currentPath = window.location.pathname.toLowerCase();
  const isShopPage = currentPath.endsWith('shop.html');

  if (isShopPage) {
    // Show ALL 17 dogs on shop.html
    container.innerHTML = dogDatabase.map(createCard).join('');
  } else {
    // Show top 4 dogs on Homepage or other pages
    container.innerHTML = dogDatabase.slice(0, 4).map(createCard).join('');
  }
}

// Mobile Menu Toggle Setup
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  updateBadge();
  renderDogs();
  setupMobileMenu();
});