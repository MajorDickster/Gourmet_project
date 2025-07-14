// // // import { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // const CheckoutPage = () => {
// // //   const [cart, setCart] = useState({});
// // //   const [address, setAddress] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     try {
// // //       const saved = localStorage.getItem("cart");
// // //       if (saved) setCart(JSON.parse(saved));
// // //     } catch (err) {
// // //       console.error("Invalid cart data in localStorage", err);
// // //       setCart({});
// // //     }
// // //   }, []);

// // //   const getTotal = () =>
// // //     Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

// // //   const handleOrder = async () => {
// // //     const savedCart = JSON.parse(localStorage.getItem("cart") || "{}");
// // //     const customer_id = localStorage.getItem("userId");
// // //     const firstItem = savedCart[Object.keys(savedCart)[0]];
// // //     const restaurant_id = firstItem?.restaurant_id;

// // //     const payload = {
// // //       restaurant_id,
// // //       items: Object.values(savedCart),
// // //       address,
// // //       customer_id,
// // //     };

// // //     console.log("Sending order payload:", payload);

// // //     try {
// // //       const res = await fetch("http://localhost:5000/api/orders", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(payload),
// // //       });

// // //       const data = await res.json();
// // //       if (res.ok) {
// // //         alert(`Order Successful! Your order ID is #${data.order_id}`);
// // //         localStorage.removeItem("cart");
// // //         localStorage.setItem("deliveryAddress", address);
// // //         navigate("/order-success");
// // //       } else {
// // //         console.error("Order failed:", data);
// // //         alert("Failed to place order.");
// // //       }
// // //     } catch (err) {
// // //       alert("Error placing order: " + err.message);
// // //     }
// // //   };

// // //   const launchRazorpay = () => {
// // //     if (!address.trim()) {
// // //       alert("Please enter a delivery address.");
// // //       return;
// // //     }

// // //     const total = getTotal();
// // //     const customerEmail = localStorage.getItem("loggedInEmail");

// // //     const options = {
// // //       key: "rzp_test_1DP5mmOlF5G5ag", // Replace with your Razorpay test key
// // //       amount: total * 100,
// // //       currency: "INR",
// // //       name: "Gourmet Delivery",
// // //       description: "Demo Order",
// // //       handler: function (response) {
// // //         console.log("Payment success:", response);
// // //         handleOrder(); // Only submit order after successful payment
// // //       },
// // //       prefill: {
// // //         email: customerEmail,
// // //         name: "Test User",
// // //       },
// // //       theme: {
// // //         color: "#10B981",
// // //       },
// // //     };

// // //     const rzp = new window.Razorpay(options);
// // //     rzp.open();
// // //   };

// // //   if (Object.keys(cart).length === 0) {
// // //     return <div className="p-6 text-center text-red-500">Cart is empty.</div>;
// // //   }

// // //   return (
// // //     <div className="max-w-2xl mx-auto p-6">
// // //       <h1 className="text-3xl font-bold mb-4">Checkout</h1>

// // //       {/* 🏠 Address Input */}
// // //       <div className="mb-4">
// // //         <label htmlFor="address" className="block font-medium mb-1">
// // //           Delivery Address
// // //         </label>
// // //         <input
// // //           id="address"
// // //           type="text"
// // //           value={address}
// // //           onChange={(e) => setAddress(e.target.value)}
// // //           placeholder="Enter your delivery address"
// // //           className="w-full border rounded p-2"
// // //         />
// // //       </div>

// // //       {/* Cart Summary */}
// // //       {Object.values(cart).map((item) => (
// // //         <div key={item.id} className="flex justify-between py-2 border-b">
// // //           <div>
// // //             <p className="font-semibold">{item.name}</p>
// // //             <p className="text-sm text-gray-600">
// // //               ₹{item.price} × {item.quantity}
// // //             </p>
// // //           </div>
// // //           <p className="font-bold">₹{item.price * item.quantity}</p>
// // //         </div>
// // //       ))}

// // //       <div className="text-right text-xl font-bold mt-4">
// // //         Total: ₹{getTotal().toFixed(2)}
// // //       </div>

// // //       <button
// // //         onClick={launchRazorpay}
// // //         className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
// // //       >
// // //         Pay & Place Order
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default CheckoutPage;

// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const CheckoutPage = () => {
// //   const [cart, setCart] = useState({});
// //   const [address, setAddress] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     try {
// //       const saved = localStorage.getItem("cart");
// //       if (saved) setCart(JSON.parse(saved));
// //     } catch (err) {
// //       console.error("Invalid cart data in localStorage", err);
// //       setCart({});
// //     }
// //   }, []);

// //   const getTotal = () =>
// //     Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

// //   const handleOrder = async () => {
// //     const savedCart = JSON.parse(localStorage.getItem("cart") || "{}");
// //     const customer_id = localStorage.getItem("userId");
// //     const firstItem = savedCart[Object.keys(savedCart)[0]];
// //     const restaurant_id = firstItem?.restaurant_id;

// //     if (!restaurant_id) {
// //       alert("⚠️ restaurant_id is missing in cart items. Cannot place order.");
// //       console.error("Missing restaurant_id in cart item:", firstItem);
// //       return;
// //     }

// //     if (!customer_id) {
// //       alert("Please log in before placing an order.");
// //       return;
// //     }

// //     const payload = {
// //       restaurant_id,
// //       items: Object.values(savedCart),
// //       address,
// //       customer_id,
// //     };

// //     console.log("✅ Sending order payload:", payload);

// //     try {
// //       const res = await fetch("http://localhost:5000/api/orders", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(payload),
// //       });

// //       const data = await res.json();
// //       if (res.ok) {
// //         alert(`Order Successful! Your order ID is #${data.order_id}`);
// //         localStorage.removeItem("cart");
// //         localStorage.setItem("deliveryAddress", address);
// //         navigate("/order-success");
// //       } else {
// //         console.error("❌ Order failed:", data);
// //         alert("Failed to place order. " + (data.message || ""));
// //       }
// //     } catch (err) {
// //       alert("❌ Error placing order: " + err.message);
// //     }
// //   };

// //   const launchRazorpay = () => {
// //     if (!address.trim()) {
// //       alert("Please enter a delivery address.");
// //       return;
// //     }

// //     const total = getTotal();
// //     const customerEmail = localStorage.getItem("loggedInEmail");

// //     const options = {
// //       key: "rzp_test_1DP5mmOlF5G5ag",
// //       amount: total * 100,
// //       currency: "INR",
// //       name: "Gourmet Delivery",
// //       description: "Demo Order",
// //       handler: function (response) {
// //         console.log("✅ Payment success:", response);
// //         handleOrder();
// //       },
// //       prefill: {
// //         email: customerEmail,
// //         name: "Test User",
// //       },
// //       theme: {
// //         color: "#10B981",
// //       },
// //     };

// //     const rzp = new window.Razorpay(options);
// //     rzp.open();
// //   };

// //   if (Object.keys(cart).length === 0) {
// //     return <div className="p-6 text-center text-red-500">Cart is empty.</div>;
// //   }

// //   return (
// //     <div className="max-w-2xl mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-4">Checkout</h1>

// //       <div className="mb-4">
// //         <label htmlFor="address" className="block font-medium mb-1">
// //           Delivery Address
// //         </label>
// //         <input
// //           id="address"
// //           type="text"
// //           value={address}
// //           onChange={(e) => setAddress(e.target.value)}
// //           placeholder="Enter your delivery address"
// //           className="w-full border rounded p-2"
// //         />
// //       </div>

// //       {Object.values(cart).map((item) => (
// //         <div key={item.id} className="flex justify-between py-2 border-b">
// //           <div>
// //             <p className="font-semibold">{item.name}</p>
// //             <p className="text-sm text-gray-600">
// //               ₹{item.price} × {item.quantity}
// //             </p>
// //           </div>
// //           <p className="font-bold">₹{item.price * item.quantity}</p>
// //         </div>
// //       ))}

// //       <div className="text-right text-xl font-bold mt-4">
// //         Total: ₹{getTotal().toFixed(2)}
// //       </div>

// //       <button
// //         onClick={launchRazorpay}
// //         className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
// //       >
// //         Pay & Place Order
// //       </button>
// //     </div>
// //   );
// // };

// // export default CheckoutPage;

// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const CheckoutPage = () => {
// //   const [cart, setCart] = useState({});
// //   const [address, setAddress] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     try {
// //       const saved = localStorage.getItem("cart");
// //       if (saved) setCart(JSON.parse(saved));
// //     } catch (err) {
// //       console.error("Invalid cart data in localStorage", err);
// //       setCart({});
// //     }
// //   }, []);

// //   const getTotal = () =>
// //     Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

// //   const handleOrder = async () => {
// //     const savedCart = JSON.parse(localStorage.getItem("cart") || "{}");
// //     const customer_id = localStorage.getItem("userId");
// //     const firstItem = savedCart[Object.keys(savedCart)[0]];
// //     const restaurant_id = firstItem?.restaurant_id;

// //     if (!restaurant_id) {
// //       alert("⚠️ restaurant_id is missing in cart items. Cannot place order.");
// //       console.error("Missing restaurant_id in cart item:", firstItem);
// //       return;
// //     }

// //     if (!customer_id) {
// //       alert("Please log in before placing an order.");
// //       return;
// //     }

// //     const payload = {
// //       restaurant_id,
// //       items: Object.values(savedCart),
// //       address,
// //       customer_id,
// //     };

// //     console.log("✅ Sending order payload:", payload);

// //     try {
// //       const res = await fetch("http://localhost:5000/api/orders", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(payload),
// //       });

// //       const data = await res.json();
// //       if (res.ok) {
// //         alert(`Order Successful! Your order ID is #${data.order_id}`);
// //         localStorage.setItem("deliveryAddress", address);
// //         navigate("/order-success");
// //       } else {
// //         console.error("❌ Order failed:", data);
// //         alert("Failed to place order. " + (data.message || ""));
// //       }
// //     } catch (err) {
// //       alert("❌ Error placing order: " + err.message);
// //     }
// //   };

// //   const launchRazorpay = () => {
// //     if (!address.trim()) {
// //       alert("Please enter a delivery address.");
// //       return;
// //     }

// //     const total = getTotal();
// //     const customerEmail = localStorage.getItem("loggedInEmail");

// //     const options = {
// //       key: "rzp_test_1DP5mmOlF5G5ag",
// //       amount: total * 100,
// //       currency: "INR",
// //       name: "Gourmet Delivery",
// //       description: "Demo Order",
// //       handler: function (response) {
// //         console.log("✅ Payment success:", response);
// //         handleOrder();
// //       },
// //       prefill: {
// //         email: customerEmail,
// //         name: "Test User",
// //       },
// //       theme: {
// //         color: "#10B981",
// //       },
// //     };

// //     const rzp = new window.Razorpay(options);
// //     rzp.open();
// //   };

// //   if (Object.keys(cart).length === 0) {
// //     return <div className="p-6 text-center text-red-500">Cart is empty.</div>;
// //   }

// //   return (
// //     <div className="max-w-2xl mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-4">Checkout</h1>

// //       <div className="mb-4">
// //         <label htmlFor="address" className="block font-medium mb-1">
// //           Delivery Address
// //         </label>
// //         <input
// //           id="address"
// //           type="text"
// //           value={address}
// //           onChange={(e) => setAddress(e.target.value)}
// //           placeholder="Enter your delivery address"
// //           className="w-full border rounded p-2"
// //         />
// //       </div>

// //       {Object.values(cart).map((item) => (
// //         <div key={item.id} className="flex justify-between py-2 border-b">
// //           <div>
// //             <p className="font-semibold">{item.name}</p>
// //             <p className="text-sm text-gray-600">
// //               ₹{item.price} × {item.quantity}
// //             </p>
// //           </div>
// //           <p className="font-bold">₹{item.price * item.quantity}</p>
// //         </div>
// //       ))}

// //       <div className="text-right text-xl font-bold mt-4">
// //         Total: ₹{getTotal().toFixed(2)}
// //       </div>

// //       <button
// //         onClick={launchRazorpay}
// //         className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
// //       >
// //         Pay & Place Order
// //       </button>
// //     </div>
// //   );
// // };

// // export default CheckoutPage;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   const customer_id = localStorage.getItem("userId");
//   const customerEmail = localStorage.getItem("loggedInEmail");

//   useEffect(() => {
//     if (!customer_id) return;

//     fetch(`http://localhost:5000/api/cart/${customer_id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch cart");
//         return res.json();
//       })
//       .then((data) => setCartItems(data))
//       .catch((err) => {
//         console.error("❌ Error fetching cart:", err);
//         setCartItems([]);
//       });
//   }, [customer_id]);

//   const getTotal = () =>
//     cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handleOrder = async () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     const payload = {
//       customer_id,
//       address,
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert(`✅ Order Successful! Your order ID is #${data.order_id}`);
//         localStorage.setItem("deliveryAddress", address);
//         navigate("/order-success");
//       } else {
//         console.error("❌ Order failed:", data);
//         alert("Failed to place order. " + (data.message || ""));
//       }
//     } catch (err) {
//       alert("❌ Error placing order: " + err.message);
//     }
//   };

//   const launchRazorpay = () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     const total = getTotal();

//     const options = {
//       key: "rzp_test_1DP5mmOlF5G5ag",
//       amount: total * 100,
//       currency: "INR",
//       name: "Gourmet Delivery",
//       description: "Demo Order",
//       handler: function (response) {
//         console.log("✅ Payment success:", response);
//         handleOrder();
//       },
//       prefill: {
//         email: customerEmail,
//         name: "Test User",
//       },
//       theme: {
//         color: "#10B981",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   if (cartItems.length === 0) {
//     return <div className="p-6 text-center text-red-500">🛒 Cart is empty.</div>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Checkout</h1>

//       <div className="mb-4">
//         <label htmlFor="address" className="block font-medium mb-1">
//           Delivery Address
//         </label>
//         <input
//           id="address"
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Enter your delivery address"
//           className="w-full border rounded p-2"
//         />
//       </div>

//       {cartItems.map((item) => (
//         <div key={item.id} className="flex justify-between py-2 border-b">
//           <div>
//             <p className="font-semibold">{item.name}</p>
//             <p className="text-sm text-gray-600">
//               ₹{item.price} × {item.quantity}
//             </p>
//           </div>
//           <p className="font-bold">₹{item.price * item.quantity}</p>
//         </div>
//       ))}

//       <div className="text-right text-xl font-bold mt-4">
//         Total: ₹{getTotal().toFixed(2)}
//       </div>

//       <button
//         onClick={launchRazorpay}
//         className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//       >
//         Pay & Place Order
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   const customer_id = localStorage.getItem("userId");
//   const customerEmail = localStorage.getItem("loggedInEmail");

//   useEffect(() => {
//     if (!customer_id) return;

//     fetch(`http://localhost:5000/api/cart/${customer_id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch cart");
//         return res.json();
//       })
//       .then((data) => setCartItems(data))
//       .catch((err) => {
//         console.error("❌ Error fetching cart:", err);
//         setCartItems([]);
//       });
//   }, [customer_id]);

//   const getTotal = () =>
//     cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handleOrder = async () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     if (!cartItems.length) {
//       alert("Your cart is empty.");
//       return;
//     }

//     const payload = {
//       customer_id,
//       address,
//       restaurant_id: cartItems[0].restaurant_id, // ✅ required by backend
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert(`✅ Order Successful! Your order ID is #${data.order_id}`);
//         localStorage.setItem("deliveryAddress", address);
//         navigate("/order-success");
//       } else {
//         console.error("❌ Order failed:", data);
//         alert("Failed to place order. " + (data.message || ""));
//       }
//     } catch (err) {
//       alert("❌ Error placing order: " + err.message);
//     }
//   };

//   const launchRazorpay = () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     const total = getTotal();

//     const options = {
//       key: "rzp_test_1DP5mmOlF5G5ag", // Replace with your actual Razorpay key
//       amount: total * 100,
//       currency: "INR",
//       name: "Gourmet Delivery",
//       description: "Demo Order",
//       handler: function (response) {
//         console.log("✅ Payment success:", response);
//         handleOrder(); // Only place order on successful payment
//       },
//       prefill: {
//         email: customerEmail,
//         name: "Test User",
//       },
//       theme: {
//         color: "#10B981",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   if (cartItems.length === 0) {
//     return <div className="p-6 text-center text-red-500">🛒 Cart is empty.</div>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Checkout</h1>

//       <div className="mb-4">
//         <label htmlFor="address" className="block font-medium mb-1">
//           Delivery Address
//         </label>
//         <input
//           id="address"
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Enter your delivery address"
//           className="w-full border rounded p-2"
//         />
//       </div>

//       {cartItems.map((item) => (
//         <div key={item.id} className="flex justify-between py-2 border-b">
//           <div>
//             <p className="font-semibold">{item.name}</p>
//             <p className="text-sm text-gray-600">
//               ₹{item.price} × {item.quantity}
//             </p>
//           </div>
//           <p className="font-bold">₹{item.price * item.quantity}</p>
//         </div>
//       ))}

//       <div className="text-right text-xl font-bold mt-4">
//         Total: ₹{getTotal().toFixed(2)}
//       </div>

//       <button
//         onClick={launchRazorpay}
//         className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//       >
//         Pay & Place Order
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   const customer_id = localStorage.getItem("userId");
//   const customerEmail = localStorage.getItem("loggedInEmail");

//   useEffect(() => {
//     if (!customer_id) return;

//     fetch(`http://localhost:5000/api/cart/${customer_id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch cart");
//         return res.json();
//       })
//       .then((data) => setCartItems(data))
//       .catch((err) => {
//         console.error("❌ Error fetching cart:", err);
//         setCartItems([]);
//       });
//   }, [customer_id]);

//   const getTotal = () =>
//     cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

//   const handleOrder = async () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     if (!cartItems.length) {
//       alert("Your cart is empty.");
//       return;
//     }

//     const restaurant_id = cartItems[0]?.restaurant_id;
//     if (!restaurant_id) {
//       alert("Restaurant ID is missing from cart items.");
//       return;
//     }

//     const payload = {
//       customer_id,
//       address,
//       restaurant_id
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert(`✅ Order Successful! Your order ID is #${data.order_id}`);
//         localStorage.setItem("deliveryAddress", address);
//         navigate("/order-success");
//       } else {
//         console.error("❌ Order failed:", data);
//         alert("Failed to place order. " + (data.message || ""));
//       }
//     } catch (err) {
//       alert("❌ Error placing order: " + err.message);
//     }
//   };

//   const launchRazorpay = () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     const total = getTotal();

//     const options = {
//       key: "rzp_test_1DP5mmOlF5G5ag", // ✅ Replace with your actual key
//       amount: total * 100,
//       currency: "INR",
//       name: "Gourmet Delivery",
//       description: "Order Payment",
//       handler: function (response) {
//         console.log("✅ Payment success:", response);
//         handleOrder(); // ✅ Place order only after payment
//       },
//       prefill: {
//         email: customerEmail || "",
//         name: "Test User",
//       },
//       theme: {
//         color: "#10B981",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   if (!customer_id) {
//     return (
//       <div className="p-6 text-center text-red-600">
//         Please log in to continue to checkout.
//       </div>
//     );
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div className="p-6 text-center text-red-500">
//         🛒 Your cart is empty.
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Checkout</h1>

//       <div className="mb-4">
//         <label htmlFor="address" className="block font-medium mb-1">
//           Delivery Address
//         </label>
//         <input
//           id="address"
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Enter your delivery address"
//           className="w-full border rounded p-2"
//         />
//       </div>

//       {cartItems.map((item) => (
//         <div key={item.id} className="flex justify-between py-2 border-b">
//           <div>
//             <p className="font-semibold">{item.name}</p>
//             <p className="text-sm text-gray-600">
//               ₹{parseFloat(item.price)} × {item.quantity}
//             </p>
//           </div>
//           <p className="font-bold">
//             ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
//           </p>
//         </div>
//       ))}

//       <div className="text-right text-xl font-bold mt-4">
//         Total: ₹{getTotal().toFixed(2)}
//       </div>

//       <button
//         onClick={launchRazorpay}
//         className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//       >
//         Pay & Place Order
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   const customer_id = localStorage.getItem("userId");
//   const customerEmail = localStorage.getItem("loggedInEmail");

//   useEffect(() => {
//     if (!customer_id) return;

//     fetch(`http://localhost:5000/api/cart/${customer_id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch cart");
//         return res.json();
//       })
//       .then((data) => setCartItems(data))
//       .catch((err) => {
//         console.error("❌ Error fetching cart:", err);
//         setCartItems([]);
//       });
//   }, [customer_id]);

//   const getTotal = () =>
//     cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

//   const handleOrder = async () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     if (!cartItems.length) {
//       alert("Your cart is empty.");
//       return;
//     }

//     const restaurant_id = cartItems[0]?.restaurant_id;
//     if (!restaurant_id) {
//       alert("Restaurant ID is missing from cart items.");
//       return;
//     }

//     const payload = {
//       customer_id,
//       address,
//       restaurant_id
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert(`✅ Order Successful! Your order ID is #${data.order_id}`);
//         localStorage.setItem("deliveryAddress", address);
//         navigate("/order-success");
//       } else {
//         console.error("❌ Order failed:", data);
//         alert("Failed to place order. " + (data.message || ""));
//       }
//     } catch (err) {
//       alert("❌ Error placing order: " + err.message);
//     }
//   };

//   const launchRazorpay = () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     const total = getTotal();

//     const options = {
//       key: "rzp_test_1DP5mmOlF5G5ag", // ✅ Replace with your actual key
//       amount: total * 100,
//       currency: "INR",
//       name: "Gourmet Delivery",
//       description: "Order Payment",
//       handler: function (response) {
//         console.log("✅ Payment success:", response);
//         handleOrder(); // ✅ Place order only after payment
//       },
//       prefill: {
//         email: customerEmail || "",
//         name: "Test User",
//       },
//       theme: {
//         color: "#10B981",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   if (!customer_id) {
//     return (
//       <div className="p-6 text-center text-red-600">
//         Please log in to continue to checkout.
//       </div>
//     );
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div className="p-6 text-center text-red-500">
//         🛒 Your cart is empty.
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Checkout</h1>

//       <div className="mb-4">
//         <label htmlFor="address" className="block font-medium mb-1">
//           Delivery Address
//         </label>
//         <input
//           id="address"
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Enter your delivery address"
//           className="w-full border rounded p-2"
//         />
//       </div>

//       {cartItems.map((item) => (
//         <div key={item.id} className="flex justify-between py-2 border-b">
//           <div>
//             <p className="font-semibold">{item.name}</p>
//             <p className="text-sm text-gray-600">
//               ₹{parseFloat(item.price)} × {item.quantity}
//             </p>
//           </div>
//           <p className="font-bold">
//             ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
//           </p>
//         </div>
//       ))}

//       <div className="text-right text-xl font-bold mt-4">
//         Total: ₹{getTotal().toFixed(2)}
//       </div>

//       <button
//         onClick={launchRazorpay}
//         className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//       >
//         Pay & Place Order
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   const customer_id = localStorage.getItem("userId");
//   const customerEmail = localStorage.getItem("loggedInEmail");

//   useEffect(() => {
//     if (!customer_id) return;

//     fetch(`http://localhost:5000/api/cart/${customer_id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch cart");
//         return res.json();
//       })
//       .then((data) => setCartItems(data))
//       .catch((err) => {
//         console.error("❌ Error fetching cart:", err);
//         setCartItems([]);
//       });
//   }, [customer_id]);

//   const getTotal = () =>
//     cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

//   const handleOrder = async () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     if (!cartItems.length) {
//       alert("Your cart is empty.");
//       return;
//     }

//     const payload = {
//       customer_id,
//       address
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert(`✅ Order Successful! Your order ID is #${data.parent_order_id}`);
//         localStorage.setItem("deliveryAddress", address);
//         navigate("/order-success");
//       } else {
//         console.error("❌ Order failed:", data);
//         alert("Failed to place order. " + (data.message || ""));
//       }
//     } catch (err) {
//       alert("❌ Error placing order: " + err.message);
//     }
//   };

//   const launchRazorpay = () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     const total = getTotal();

//     const options = {
//       key: "rzp_test_1DP5mmOlF5G5ag", // ✅ Replace with your actual key
//       amount: total * 100,
//       currency: "INR",
//       name: "Gourmet Delivery",
//       description: "Order Payment",
//       handler: function (response) {
//         console.log("✅ Payment success:", response);
//         handleOrder(); // ✅ Place order only after payment
//       },
//       prefill: {
//         email: customerEmail || "",
//         name: "Test User",
//       },
//       theme: {
//         color: "#10B981",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   if (!customer_id) {
//     return (
//       <div className="p-6 text-center text-red-600">
//         Please log in to continue to checkout.
//       </div>
//     );
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div className="p-6 text-center text-red-500">
//         🛒 Your cart is empty.
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Checkout</h1>

//       <div className="mb-4">
//         <label htmlFor="address" className="block font-medium mb-1">
//           Delivery Address
//         </label>
//         <input
//           id="address"
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Enter your delivery address"
//           className="w-full border rounded p-2"
//         />
//       </div>

//       {cartItems.map((item) => (
//         <div key={item.id} className="flex justify-between py-2 border-b">
//           <div>
//             <p className="font-semibold">{item.name}</p>
//             <p className="text-sm text-gray-600">
//               ₹{parseFloat(item.price)} × {item.quantity}
//             </p>
//           </div>
//           <p className="font-bold">
//             ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
//           </p>
//         </div>
//       ))}

//       <div className="text-right text-xl font-bold mt-4">
//         Total: ₹{getTotal().toFixed(2)}
//       </div>

//       <button
//         onClick={launchRazorpay}
//         className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//       >
//         Pay & Place Order
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   const customer_id = localStorage.getItem("userId");
//   const customerEmail = localStorage.getItem("loggedInEmail");

//   useEffect(() => {
//     if (!customer_id) return;

//     fetch(`http://localhost:5000/api/cart/${customer_id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch cart");
//         return res.json();
//       })
//       .then((data) => setCartItems(data))
//       .catch((err) => {
//         console.error("❌ Error fetching cart:", err);
//         setCartItems([]);
//       });
//   }, [customer_id]);

//   const getTotal = () =>
//     cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

//   const handleOrder = async () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     if (!cartItems.length) {
//       alert("Your cart is empty.");
//       return;
//     }

//     const payload = {
//       customer_id,
//       address
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert(`✅ Order Successful! Your order ID is #${data.parent_order_id}`);
//         localStorage.setItem("deliveryAddress", address);
//         navigate("/order-success");
//       } else {
//         console.error("❌ Order failed:", data);
//         alert("Failed to place order. " + (data.message || ""));
//       }
//     } catch (err) {
//       alert("❌ Error placing order: " + err.message);
//     }
//   };

//   const launchRazorpay = () => {
//     if (!address.trim()) {
//       alert("Please enter a delivery address.");
//       return;
//     }

//     const total = getTotal();

//     const options = {
//       key: "rzp_test_1DP5mmOlF5G5ag", // ✅ Replace with your actual key
//       amount: total * 100,
//       currency: "INR",
//       name: "Gourmet Delivery",
//       description: "Order Payment",
//       handler: function (response) {
//         console.log("✅ Payment success:", response);
//         handleOrder(); // ✅ Place order only after payment
//       },
//       prefill: {
//         email: customerEmail || "",
//         name: "Test User",
//       },
//       theme: {
//         color: "#10B981",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   if (!customer_id) {
//     return (
//       <div className="p-6 text-center text-red-600">
//         Please log in to continue to checkout.
//       </div>
//     );
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div className="p-6 text-center text-red-500">
//         🛒 Your cart is empty.
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">Checkout</h1>

//       <div className="mb-4">
//         <label htmlFor="address" className="block font-medium mb-1">
//           Delivery Address
//         </label>
//         <input
//           id="address"
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Enter your delivery address"
//           className="w-full border rounded p-2"
//         />
//       </div>

//       {cartItems.map((item) => (
//         <div key={item.id} className="flex justify-between py-2 border-b">
//           <div>
//             <p className="font-semibold">{item.name}</p>
//             <p className="text-sm text-gray-600">
//               ₹{parseFloat(item.price)} × {item.quantity}
//             </p>
//           </div>
//           <p className="font-bold">
//             ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
//           </p>
//         </div>
//       ))}

//       <div className="text-right text-xl font-bold mt-4">
//         Total: ₹{getTotal().toFixed(2)}
//       </div>

//       <button
//         onClick={launchRazorpay}
//         className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//       >
//         Pay & Place Order
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const customer_id = localStorage.getItem("userId");
  const customerEmail = localStorage.getItem("loggedInEmail");

  useEffect(() => {
    if (!customer_id) return;

    fetch(`http://localhost:5000/api/cart/${customer_id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cart");
        return res.json();
      })
      .then((data) => setCartItems(data))
      .catch((err) => {
        console.error("❌ Error fetching cart:", err);
        setCartItems([]);
      });
  }, [customer_id]);

  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

  const handleOrder = async () => {
    if (!address.trim()) {
      alert("Please enter a delivery address.");
      return;
    }

    if (!cartItems.length) {
      alert("Your cart is empty.");
      return;
    }

    const payload = {
      customer_id,
      address
    };

    const token = localStorage.getItem("token"); // 🛡️ JWT token

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` // 🔐 Include JWT token
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        alert(`✅ Order Successful! Your order ID is #${data.parent_order_id}`);
        localStorage.setItem("deliveryAddress", address);
        navigate("/order-success");
      } else {
        console.error("❌ Order failed:", data);
        alert("Failed to place order. " + (data.message || ""));
      }
    } catch (err) {
      alert("❌ Error placing order: " + err.message);
    }
  };

  const launchRazorpay = () => {
    if (!address.trim()) {
      alert("Please enter a delivery address.");
      return;
    }

    const total = getTotal();

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // ✅ Replace with your actual key
      amount: total * 100,
      currency: "INR",
      name: "Gourmet Delivery",
      description: "Order Payment",
      handler: function (response) {
        console.log("✅ Payment success:", response);
        handleOrder(); // ✅ Place order only after payment
      },
      prefill: {
        email: customerEmail || "",
        name: "Test User",
      },
      theme: {
        color: "#10B981",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!customer_id) {
    return (
      <div className="p-6 text-center text-red-600">
        Please log in to continue to checkout.
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center text-red-500">
        🛒 Your cart is empty.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      <div className="mb-4">
        <label htmlFor="address" className="block font-medium mb-1">
          Delivery Address
        </label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your delivery address"
          className="w-full border rounded p-2"
        />
      </div>

      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between py-2 border-b">
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">
              ₹{parseFloat(item.price)} × {item.quantity}
            </p>
          </div>
          <p className="font-bold">
            ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}

      <div className="text-right text-xl font-bold mt-4">
        Total: ₹{getTotal().toFixed(2)}
      </div>

      <button
        onClick={launchRazorpay}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Pay & Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
