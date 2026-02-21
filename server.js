const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let orders = [];
let tokenNumber = 1;

// Home route
app.get("/", (req, res) => {
    res.send("Canteen Queue Management System Running 🚀");
});

// Place order
app.post("/order", (req, res) => {
    const { name, item } = req.body;

    const newOrder = {
        token: tokenNumber++,
        name,
        item,
        status: "Waiting"
    };

    orders.push(newOrder);
    res.json(newOrder);
});

// Place order with cart (new endpoint)
app.post("/place-order", (req, res) => {
    try {
        const { name, cart, payment } = req.body;

        console.log("Received order request:", { name, cart, payment });

        if (!name || name.trim() === "") {
            return res.status(400).json({ error: "Name is required" });
        }

        if (!cart || cart.length === 0) {
            return res.status(400).json({ error: "Cart is empty" });
        }

        // Create order with all items in cart
        const itemsList = cart.map(item => `${item.name} x${item.quantity}`).join(", ");
        const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        const newOrder = {
            token: tokenNumber++,
            name,
            items: cart,
            itemsList,
            totalAmount,
            payment,
            status: "Waiting",
            readyTime: "15 mins"
        };

        orders.push(newOrder);
        console.log("Order placed successfully:", newOrder);
        res.json(newOrder);
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ error: "Server error: " + error.message });
    }
});

// View all orders
app.get("/orders", (req, res) => {
    res.json(orders);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});