console.log("JS Loaded");

// Store multiple selected items
let cart = [];

/* ===== SECTION CONTROL ===== */
function hideAll() {
  document.getElementById("home").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("proceed").style.display = "none";
  document.getElementById("queueSection").style.display = "none";
}

function updateNavigation(activeBtn) {
  // Remove active class from all buttons
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  // Add active class to current button
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
}

function showHome() {
  hideAll();
  document.getElementById("home").style.display = "block";
  updateNavigation(document.getElementById("home-btn"));
}

function showMenu() {
  hideAll();
  document.getElementById("menu").style.display = "block";
  updateNavigation(document.getElementById("menu-btn"));
}

function showProceed() {
  hideAll();
  document.getElementById("proceed").style.display = "block";
}

function showQueue() {
  hideAll();
  document.getElementById("queueSection").style.display = "block";
  updateNavigation(document.getElementById("queue-btn"));
  loadQueue();
}

/* ===== SELECT ITEM ===== */
function selectItem(item, price, qtyId) {
  const quantity = parseInt(document.getElementById(qtyId).value);

  // Check if item already exists in cart
  const existing = cart.find(i => i.name === item);
  if (existing) {
    existing.quantity += quantity; // add quantity if same item
  } else {
    cart.push({ name: item, price: price, quantity: quantity });
  }

  // Update confirm section
  showProceed();
  updateOrderDetails();
}

/* ===== UPDATE ORDER DETAILS ===== */
function updateOrderDetails() {
  const orderDetails = document.getElementById("orderDetails");
  let html = "";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    html += `${item.name} x ${item.quantity} = ₹${itemTotal}<br>`;
    total += itemTotal;
  });

  html += `<strong>Total Amount: ₹${total}</strong>`;
  orderDetails.innerHTML = html;
}

/* ===== PLACE ORDER ===== */
function placeOrder() {
  const name = document.getElementById("name").value;
  const payment = document.getElementById("payment").value;

  if (!name) {
    alert("Please enter your name");
    return;
  }

  if (!cart || cart.length === 0) {
    alert("Please select items from the menu first!");
    return;
  }

  console.log("Placing order with cart:", cart);

  // Send each item in cart as separate orders (or merge to backend if you want)
  fetch("/place-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, cart, payment })
  })
  .then(res => {
    console.log("Response status:", res.status);
    return res.json();
  })
  .then(data => {
    console.log("Order response:", data);
    if (data.error) {
      document.getElementById("result").innerHTML = `<strong>❌ Error: ${data.error}</strong>`;
      return;
    }
    document.getElementById("result").innerHTML =
      `<strong>✅ Order Placed! Your Token Number: <span style="color: #ff6b6b; font-size: 24px;">${data.token}</span></strong>`;
    cart = []; // clear cart after placing order
    document.getElementById("name").value = "";
    // Reset quantity inputs
    document.getElementById("burgerQty").value = "1";
    document.getElementById("dosaQty").value = "1";
    document.getElementById("coffeeQty").value = "1";
  })
  .catch(error => {
    console.error("Fetch Error:", error);
    document.getElementById("result").innerHTML = `<strong>❌ Error: ${error.message}</strong>`;
  });
}

/* ===== LOAD QUEUE ===== */
function loadQueue() {
  fetch("/orders")
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      const container = document.getElementById("queue");
      container.innerHTML = "";

      if (!Array.isArray(data) || data.length === 0) {
        container.innerHTML = "<p style='text-align: center; padding: 40px; font-size: 18px; color: #718096;'>No orders yet 📋</p>";
        return;
      }

      data.forEach(order => {
        const card = document.createElement("div");
        card.className = "queue-card";
        const displayItem = order.itemsList || order.item || "Order";
        card.innerHTML = `
          <h3>🎫 Token ${order.token}</h3>
          <p><strong>${displayItem}</strong></p>
          <p><strong style="color: #48bb78;">₹${order.totalAmount || 0}</strong></p>
          <p>👤 ${order.name}</p>
          <p>Status: <strong>${order.status}</strong></p>
          <p>⏱️ Ready at: ${order.readyTime || '15 mins'}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading queue:", error);
      document.getElementById("queue").innerHTML = "<p style='text-align: center; padding: 40px; color: #718096;'>Queue loading...</p>";
    });
}

/* ===== START WITH HOME ===== */
showHome();