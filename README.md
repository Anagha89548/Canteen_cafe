# 🍽️ Canteen Cafe Management System

A modern **Canteen & Cafe Management System** designed to simplify food ordering and canteen management.  
This system allows users to browse menu items, add items to cart, and place orders online, reducing waiting time and improving efficiency.

---

## 📌 Project Description

Canteen Cafe is a web-based application that digitizes the traditional canteen ordering process.  
It helps manage food items, customer orders, and overall cafe operations in an organized and efficient way.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Package Manager:** npm  
- **Version Control:** Git & GitHub  

---

## ✨ Features

- ✅ Responsive & Modern UI Design
- ✅ Browse Menu Items with Images
- ✅ Add to Cart Functionality
- ✅ Place Orders with Customer Details
- ✅ Live Queue Status Tracking
- ✅ Order Management System
- ✅ Payment Method Selection (Cash/Online)
- ✅ Real-time Order Updates
- ✅ Beautiful Hover Animations & Transitions
- ✅ Mobile-Friendly Interface

---

## 📂 Project Structure

```
canteen-system/
├── public/
│   ├── index.html          # Main HTML file with navigation, menu, and order form
│   ├── style.css           # Modern CSS with responsive design and animations
│   └── script.js           # JavaScript for cart management and order handling
├── server.js               # Node.js/Express server with API endpoints
├── package.json            # Project dependencies and metadata
├── package-lock.json       # Locked dependency versions
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/Anagha89548/Canteen_cafe.git
cd Canteen_cafe
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start the Server**
```bash
node server.js
```

4. **Open in Browser**
Navigate to `http://localhost:3000`

---

## 📖 Usage

### For Customers:
1. **Browse Menu** - Click on "Menu" to see available items with prices
2. **Add Items** - Select quantity and click "Add to Cart"
3. **Checkout** - Enter your name and payment method, then place order
4. **Track Order** - View live queue to see order status and estimated ready time

### For Developers:
- Modify menu items in `public/script.js`
- Customize styling in `public/style.css`
- Add new endpoints in `server.js`

---

## 🔌 API Endpoints

### Base URL: `http://localhost:3000`

#### 1. Place Order
```
POST /place-order
Content-Type: application/json

Body:
{
  "name": "John Doe",
  "cart": [
    { "name": "Burger", "price": 80, "quantity": 1 },
    { "name": "Coffee", "price": 30, "quantity": 2 }
  ],
  "payment": "Cash"
}

Response:
{
  "token": 1,
  "name": "John Doe",
  "items": [...],
  "itemsList": "Burger x1, Coffee x2",
  "totalAmount": 140,
  "payment": "Cash",
  "status": "Waiting",
  "readyTime": "15 mins"
}
```

#### 2. Get All Orders
```
GET /orders

Response:
[
  {
    "token": 1,
    "name": "John Doe",
    "items": [...],
    "status": "Waiting",
    "readyTime": "15 mins"
  }
]
```

---

## 🎨 UI Features

- **Navigation Bar** - Sticky navbar with Home, Menu, and Queue buttons
- **Hero Section** - Eye-catching banner with call-to-action
- **Featured Items** - Popular items showcase with circular images
- **Menu Cards** - Product cards with images, prices, quantity selector, and badges
- **Order Form** - Clean checkout form with validation
- **Queue Display** - Real-time order status with token numbers
- **Responsive Design** - Works on desktop, tablet, and mobile devices

---

## 📝 Menu Items

### Current Menu:
1. **Burger** - ₹80 (Popular)
2. **Dosa** - ₹50 (New)
3. **Coffee** - ₹30

---

## 🔒 Security & Validation

- Form validation for customer name
- Cart validation before order placement
- Error handling with user-friendly messages
- Server-side validation for all requests

---

## 🐛 Known Issues & Future Enhancements

- [ ] Database integration (MongoDB/MySQL)
- [ ] User authentication system
- [ ] Admin dashboard for order management
- [ ] Payment gateway integration
- [ ] Email/SMS notifications
- [ ] Order history for customers
- [ ] Customer feedback & ratings
- [ ] Multi-language support

---

## 👨‍💻 Author

**Akhil**
- GitHub: [Anagha89548](https://github.com/Anagha89548)

---

## 📄 License

This project is open source and available under the ISC License.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Made with ❤️ for Campus Delight Canteen**
