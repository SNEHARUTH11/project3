document.addEventListener("DOMContentLoaded", () => {
    const petList = document.querySelector(".pet-list");
  
    const pets = [
      { id: 1, name: "Buddy", price: 200, image: "./images/pets/dog1.jpg" },
      { id: 2, name: "Whiskers", price: 150, image: "./images/pets/cat1.jpeg" },
      { id: 3, name: "Tweety", price: 100, image: "./images/pets/bird1.jpeg" },
    ];
  
    // Load pets dynamically
    pets.forEach((pet) => {
      const petItem = document.createElement("div");
      petItem.className = "pet-item";
      petItem.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Price: $${pet.price}</p>
        <button onclick="addToCart(${pet.id}, '${pet.name}', ${pet.price})">Buy Now</button>
      `;
      petList.appendChild(petItem);
    });
  });
  
  let cart = [];
  
  function addToCart(id, name, price) {
    cart.push({ id, name, price });
    alert(`${name} has been added to the cart.`);
    updateCartBadge();
  }
  
  function updateCartBadge() {
    const cartBadge = document.getElementById("cart-badge");
    cartBadge.textContent = cart.length;
  }
  