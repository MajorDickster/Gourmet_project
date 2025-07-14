// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Link } from 'react-router-dom';

// // function CustomerDashboard() {
// //   const email = localStorage.getItem("loggedInEmail");
// //   const [restaurants, setRestaurants] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/restaurants")  // 🔁 Updated URL
// //       .then(res => {
// //         if (!res.ok) throw new Error("Failed to fetch");
// //         return res.json();
// //       })
// //       .then(data => setRestaurants(data))
// //       .catch(err => console.error("Failed to fetch restaurants", err));
// //   }, []);

// //   const goToRestaurant = (id) => {
// //     navigate(`/restaurant/${id}`);
// //   };

// //   return (
// //     <div className="p-6">
// //       {/* Welcome message */}
// //       <div className="text-center mb-6">
// //         <h1 className="text-3xl font-bold">Welcome, Customer!</h1>
// //         <p className="text-gray-600">Logged in as: {email}</p>
// //       </div>
// //       <Link
// //   to="/order-history"
// //   className="mt-2 px-4 py-1 bg-green-500 text-white rounded"
// // >
// //   View Order History
// // </Link>
// //       {/* Restaurant list */}
// //       <h2 className="text-xl font-semibold mb-4">Available Restaurants</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         {restaurants.map(restaurant => (
// //           <div
// //             key={restaurant.id}
// //             className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
// //             onClick={() => goToRestaurant(restaurant.id)}
// //           >
// //             {restaurant.image_url && (
// //               <img
// //                 src={restaurant.image_url}
// //                 alt={restaurant.name}
// //                 className="w-full h-40 object-cover rounded"
// //               />
// //             )}
// //             <h3 className="text-lg font-semibold mt-2">{restaurant.name}</h3>
// //             <p className="text-sm text-gray-600 mt-1">
// //               {restaurant.cuisines && restaurant.cuisines.length > 0
// //                 ? restaurant.cuisines.join(", ")
// //                 : "Cuisines not listed"}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default CustomerDashboard;

// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import AddressManager from './AddressManager'; // ✅ Import the component

// // function CustomerDashboard() {
// //   const email = localStorage.getItem("loggedInEmail");
// //   const [restaurants, setRestaurants] = useState([]);
// //   const [showAddressModal, setShowAddressModal] = useState(false); // ✅ Modal state
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/restaurants")
// //       .then(res => {
// //         if (!res.ok) throw new Error("Failed to fetch");
// //         return res.json();
// //       })
// //       .then(data => setRestaurants(data))
// //       .catch(err => console.error("Failed to fetch restaurants", err));
// //   }, []);

// //   const goToRestaurant = (id) => {
// //     navigate(`/restaurant/${id}`);
// //   };

// //   return (
// //     <div className="p-6 relative">
// //       {/* Welcome */}
// //       <div className="text-center mb-6">
// //         <h1 className="text-3xl font-bold">Welcome, Customer!</h1>
// //         <p className="text-gray-600">Logged in as: {email}</p>
// //       </div>

// //       {/* Actions */}
// //       <div className="flex gap-4 justify-center mb-4">
// //         <Link to="/order-history" className="px-4 py-2 bg-green-500 text-white rounded">
// //           View Order History
// //         </Link>
// //         <button
// //           onClick={() => setShowAddressModal(true)}
// //           className="px-4 py-2 bg-blue-600 text-white rounded"
// //         >
// //           Manage Addresses
// //         </button>
// //       </div>

// //       {/* Restaurant List */}
// //       <h2 className="text-xl font-semibold mb-4">Available Restaurants</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         {restaurants.map(restaurant => (
// //           <div
// //             key={restaurant.id}
// //             className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
// //             onClick={() => goToRestaurant(restaurant.id)}
// //           >
// //             {restaurant.image_url && (
// //               <img
// //                 src={restaurant.image_url}
// //                 alt={restaurant.name}
// //                 className="w-full h-40 object-cover rounded"
// //               />
// //             )}
// //             <h3 className="text-lg font-semibold mt-2">{restaurant.name}</h3>
// //             <p className="text-sm text-gray-600 mt-1">
// //               {restaurant.cuisines && restaurant.cuisines.length > 0
// //                 ? restaurant.cuisines.join(", ")
// //                 : "Cuisines not listed"}
// //             </p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* 🔲 Address Modal */}
// //       {showAddressModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// //           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
// //             <button
// //               className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
// //               onClick={() => setShowAddressModal(false)}
// //             >
// //               ✕
// //             </button>
// //             <AddressManager />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default CustomerDashboard;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AddressManager from './AddressManager';

// function CustomerDashboard() {
//   const email = localStorage.getItem("loggedInEmail");
//   const userId = localStorage.getItem("userId");

//   const [restaurants, setRestaurants] = useState([]);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [addressList, setAddressList] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/restaurants")
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to fetch");
//         return res.json();
//       })
//       .then(data => setRestaurants(data))
//       .catch(err => console.error("Failed to fetch restaurants", err));
//   }, []);

//   // 🆕 Fetch primary address from backend
//   useEffect(() => {
//     if (showAddressModal && userId) {
//       const fetchPrimary = async () => {
//         try {
//           const res = await fetch(`http://localhost:5000/api/user/${userId}/primary-address`);
//           const data = await res.json();
//           if (res.ok && data.address) {
//             setAddressList([data.address]);
//             setSelectedAddress(data.address);
//           } else {
//             setAddressList([]);
//             setSelectedAddress(null);
//           }
//         } catch (err) {
//           console.error("Failed to fetch primary address:", err);
//         }
//       };
//       fetchPrimary();
//     }
//   }, [showAddressModal, userId]);

//   const goToRestaurant = (id) => {
//     navigate(`/restaurant/${id}`);
//   };

//   return (
//     <div className="p-6 relative">
//       {/* Welcome */}
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold">Welcome, Customer!</h1>
//         <p className="text-gray-600">Logged in as: {email}</p>
//       </div>

//       {/* Actions */}
//       <div className="flex gap-4 justify-center mb-4">
//         <Link to="/order-history" className="px-4 py-2 bg-green-500 text-white rounded">
//           View Order History
//         </Link>
//         <button
//           onClick={() => setShowAddressModal(true)}
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//         >
//           Manage Addresses
//         </button>
//       </div>

//       {/* Restaurant List */}
//       <h2 className="text-xl font-semibold mb-4">Available Restaurants</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {restaurants.map(restaurant => (
//           <div
//             key={restaurant.id}
//             className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
//             onClick={() => goToRestaurant(restaurant.id)}
//           >
//             {restaurant.image_url && (
//               <img
//                 src={restaurant.image_url}
//                 alt={restaurant.name}
//                 className="w-full h-40 object-cover rounded"
//               />
//             )}
//             <h3 className="text-lg font-semibold mt-2">{restaurant.name}</h3>
//             <p className="text-sm text-gray-600 mt-1">
//               {restaurant.cuisines?.length > 0
//                 ? restaurant.cuisines.join(", ")
//                 : "Cuisines not listed"}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Address Modal */}
//       {showAddressModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//               onClick={() => setShowAddressModal(false)}
//             >
//               ✕
//             </button>
//             <AddressManager
//               addressList={addressList}
//               setAddressList={setAddressList}
//               selectedAddress={selectedAddress}
//               setSelectedAddress={setSelectedAddress}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CustomerDashboard;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AddressManager from './AddressManager';
// import { motion, AnimatePresence } from 'framer-motion';

// function CustomerDashboard() {
//   const email = localStorage.getItem("loggedInEmail");
//   const userId = localStorage.getItem("userId");

//   const [restaurants, setRestaurants] = useState([]);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [addressList, setAddressList] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const navigate = useNavigate();

//   // Fetch restaurants
//   useEffect(() => {
//     fetch("http://localhost:5000/api/restaurants")
//       .then(res => res.json())
//       .then(setRestaurants)
//       .catch(err => console.error("Failed to fetch restaurants", err));
//   }, []);

//   // Fetch primary address
//   useEffect(() => {
//     if (showAddressModal && userId) {
//       fetch(`http://localhost:5000/api/user/${userId}/primary-address`)
//         .then(res => res.json())
//         .then(data => {
//           if (data?.address) {
//             setAddressList([data.address]);
//             setSelectedAddress(data.address);
//           } else {
//             setAddressList([]);
//             setSelectedAddress(null);
//           }
//         })
//         .catch(err => console.error("Failed to fetch address", err));
//     }
//   }, [showAddressModal, userId]);

//   // Fetch cart from backend
//   useEffect(() => {
//     if (userId) {
//       fetch(`http://localhost:5000/api/cart/${userId}`)
//         .then(res => res.json())
//         .then(setCartItems)
//         .catch(err => console.error("Failed to fetch cart", err));
//     }
//   }, [userId]);

//   const increment = async (itemId) => {
//     await fetch("http://localhost:5000/api/cart/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: 1 }),
//     });
//     // Refresh cart
//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const decrement = async (itemId) => {
//     const item = cartItems.find(i => i.id === itemId);
//     if (item.quantity === 1) {
//       await fetch(`http://localhost:5000/api/cart/${userId}/item/${itemId}`, {
//         method: "DELETE"
//       });
//     } else {
//       await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: -1 }),
//       });
//     }

//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const goToRestaurant = (id) => navigate(`/restaurant/${id}`);

//   const getTotal = () =>
//     cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="p-6 relative">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-3xl font-bold">Welcome, Customer!</h1>
//           <p className="text-gray-600">Logged in as: {email}</p>
//         </div>

//         {/* 🛒 Cart icon */}
//         <div>
//           <button
//             onClick={() => setShowCart(true)}
//             className="relative bg-gray-200 px-3 py-2 rounded-full shadow"
//           >
//             🛒
//             {cartItems.length > 0 && (
//               <span className="absolute top-0 right-0 -mt-1 -mr-1 text-xs bg-red-500 text-white rounded-full px-1">
//                 {cartItems.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="flex gap-4 justify-center mb-4">
//         <Link to="/order-history" className="px-4 py-2 bg-green-500 text-white rounded">
//           View Order History
//         </Link>
//         <button
//           onClick={() => setShowAddressModal(true)}
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//         >
//           Manage Addresses
//         </button>
//       </div>

//       {/* Restaurants */}
//       <h2 className="text-xl font-semibold mb-4">Available Restaurants</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {restaurants.map(restaurant => (
//           <div
//             key={restaurant.id}
//             className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
//             onClick={() => goToRestaurant(restaurant.id)}
//           >
//             {restaurant.image_url && (
//               <img
//                 src={restaurant.image_url}
//                 alt={restaurant.name}
//                 className="w-full h-40 object-cover rounded"
//               />
//             )}
//             <h3 className="text-lg font-semibold mt-2">{restaurant.name}</h3>
//             <p className="text-sm text-gray-600 mt-1">
//               {restaurant.cuisines?.length > 0
//                 ? restaurant.cuisines.join(", ")
//                 : "Cuisines not listed"}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Address Modal */}
//       {showAddressModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//               onClick={() => setShowAddressModal(false)}
//             >
//               ✕
//             </button>
//             <AddressManager
//               addressList={addressList}
//               setAddressList={setAddressList}
//               selectedAddress={selectedAddress}
//               setSelectedAddress={setSelectedAddress}
//             />
//           </div>
//         </div>
//       )}

//       {/* Cart Modal */}
//       <AnimatePresence>
//         {showCart && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
//           >
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-semibold">Your Cart</h2>
//                 <button
//                   onClick={() => setShowCart(false)}
//                   className="text-gray-600 hover:text-black text-xl"
//                 >
//                   ✕
//                 </button>
//               </div>
//               {cartItems.map(item => (
//                 <div key={item.id} className="flex justify-between items-center border-b py-2">
//                   <div>
//                     <p className="font-medium">{item.name}</p>
//                     <p className="text-sm text-gray-500">
//                       ₹{item.price} x {item.quantity}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => decrement(item.id)}
//                       className="bg-gray-300 px-2 rounded"
//                     >-</button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => increment(item.id)}
//                       className="bg-gray-300 px-2 rounded"
//                     >+</button>
//                   </div>
//                 </div>
//               ))}
//               <div className="text-right font-bold text-xl mt-4">
//                 Total: ₹{getTotal().toFixed(2)}
//               </div>
//               <button
//                 onClick={() => {
//                   setShowCart(false);
//                   navigate("/checkout");
//                 }}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
//               >
//                 Proceed to Checkout
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default CustomerDashboard;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AddressManager from './AddressManager';
// import { motion, AnimatePresence } from 'framer-motion';

// function CustomerDashboard() {
//   const email = localStorage.getItem("loggedInEmail");
//   const userId = localStorage.getItem("userId");

//   const [restaurants, setRestaurants] = useState([]);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [addressList, setAddressList] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/restaurants")
//       .then(res => res.json())
//       .then(setRestaurants)
//       .catch(err => console.error("Failed to fetch restaurants", err));
//   }, []);

//   useEffect(() => {
//     if (showAddressModal && userId) {
//       fetch(`http://localhost:5000/api/user/${userId}/primary-address`)
//         .then(res => res.json())
//         .then(data => {
//           if (data?.address) {
//             setAddressList([data.address]);
//             setSelectedAddress(data.address);
//           } else {
//             setAddressList([]);
//             setSelectedAddress(null);
//           }
//         })
//         .catch(err => console.error("Failed to fetch address", err));
//     }
//   }, [showAddressModal, userId]);

//   useEffect(() => {
//     if (userId) {
//       fetch(`http://localhost:5000/api/cart/${userId}`)
//         .then(res => res.json())
//         .then(setCartItems)
//         .catch(err => console.error("Failed to fetch cart", err));
//     }
//   }, [userId]);

//   const increment = async (itemId) => {
//     await fetch("http://localhost:5000/api/cart/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: 1 }),
//     });
//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const decrement = async (itemId) => {
//     const item = cartItems.find(i => i.id === itemId);
//     if (item.quantity === 1) {
//       await fetch(`http://localhost:5000/api/cart/${userId}/item/${itemId}`, {
//         method: "DELETE"
//       });
//     } else {
//       await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: -1 }),
//       });
//     }

//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const goToRestaurant = (id) => navigate(`/restaurant/${id}`);
//   const getTotal = () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 p-6">
//       {/* Navbar */}
//       <div className="flex justify-between items-center mb-6 px-2">
//         <div className="text-sm text-gray-600 font-medium">
//           Logged in as: {email}
//         </div>
//         <h1 className="text-3xl font-bold text-center font-serif text-orange-600">Gourmet</h1>
//         <div>
//           <button
//             onClick={() => setShowCart(true)}
//             className="relative bg-orange-500 text-white px-3 py-2 rounded-full shadow hover:bg-orange-600"
//           >
//             🛒
//             {cartItems.length > 0 && (
//               <span className="absolute top-0 right-0 -mt-1 -mr-1 text-xs bg-red-500 text-white rounded-full px-1">
//                 {cartItems.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Below Navbar Controls */}
//       <div className="flex justify-between items-center mb-6">
//         <button
//           onClick={() => setShowAddressModal(true)}
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//         >
//           Manage Addresses
//         </button>
//         <Link to="/order-history" className="px-4 py-2 bg-green-500 text-white rounded">
//           View Order History
//         </Link>
//       </div>

//       {/* Section Title */}
//       <div className="mb-4">
//         <h2 className="text-2xl font-bold text-gray-800">Welcome, Customer!</h2>
//       </div>

//       {/* Restaurant Cards */}
//       <h2 className="text-xl font-semibold mb-4">Available Restaurants</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {restaurants.map(restaurant => (
//           <div
//             key={restaurant.id}
//             className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow bg-white"
//             onClick={() => goToRestaurant(restaurant.id)}
//           >
//             {restaurant.image_url && (
//               <img
//                 src={restaurant.image_url}
//                 alt={restaurant.name}
//                 className="w-full h-40 object-cover rounded"
//               />
//             )}
//             <h3 className="text-lg font-semibold mt-2">{restaurant.name}</h3>
//             <p className="text-sm text-gray-600 mt-1">
//               {restaurant.cuisines?.length > 0
//                 ? restaurant.cuisines.join(", ")
//                 : "Cuisines not listed"}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Address Modal */}
//       {showAddressModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//               onClick={() => setShowAddressModal(false)}
//             >
//               ✕
//             </button>
//             <AddressManager
//               addressList={addressList}
//               setAddressList={setAddressList}
//               selectedAddress={selectedAddress}
//               setSelectedAddress={setSelectedAddress}
//             />
//           </div>
//         </div>
//       )}

//       {/* Cart Modal */}
//       <AnimatePresence>
//         {showCart && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
//           >
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-semibold">Your Cart</h2>
//                 <button
//                   onClick={() => setShowCart(false)}
//                   className="text-gray-600 hover:text-black text-xl"
//                 >
//                   ✕
//                 </button>
//               </div>
//               {cartItems.map(item => (
//                 <div key={item.id} className="flex justify-between items-center border-b py-2">
//                   <div>
//                     <p className="font-medium">{item.name}</p>
//                     <p className="text-sm text-gray-500">
//                       ₹{item.price} x {item.quantity}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => decrement(item.id)}
//                       className="bg-gray-300 px-2 rounded"
//                     >-</button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => increment(item.id)}
//                       className="bg-gray-300 px-2 rounded"
//                     >+</button>
//                   </div>
//                 </div>
//               ))}
//               <div className="text-right font-bold text-xl mt-4">
//                 Total: ₹{getTotal().toFixed(2)}
//               </div>
//               <button
//                 onClick={() => {
//                   setShowCart(false);
//                   navigate("/checkout");
//                 }}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
//               >
//                 Proceed to Checkout
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default CustomerDashboard;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AddressManager from './AddressManager';
// import { motion, AnimatePresence } from 'framer-motion';

// function CustomerDashboard() {
//   const email = localStorage.getItem("loggedInEmail");
//   const userId = localStorage.getItem("userId");

//   const [restaurants, setRestaurants] = useState([]);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [addressList, setAddressList] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/restaurants")
//       .then(res => res.json())
//       .then(setRestaurants)
//       .catch(err => console.error("Failed to fetch restaurants", err));
//   }, []);

//   useEffect(() => {
//     if (showAddressModal && userId) {
//       fetch(`http://localhost:5000/api/user/${userId}/primary-address`)
//         .then(res => res.json())
//         .then(data => {
//           if (data?.address) {
//             setAddressList([data.address]);
//             setSelectedAddress(data.address);
//           } else {
//             setAddressList([]);
//             setSelectedAddress(null);
//           }
//         })
//         .catch(err => console.error("Failed to fetch address", err));
//     }
//   }, [showAddressModal, userId]);

//   useEffect(() => {
//     if (userId) {
//       fetch(`http://localhost:5000/api/cart/${userId}`)
//         .then(res => res.json())
//         .then(setCartItems)
//         .catch(err => console.error("Failed to fetch cart", err));
//     }
//   }, [userId]);

//   const increment = async (itemId) => {
//     await fetch("http://localhost:5000/api/cart/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: 1 }),
//     });
//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const decrement = async (itemId) => {
//     const item = cartItems.find(i => i.id === itemId);
//     if (item.quantity === 1) {
//       await fetch(`http://localhost:5000/api/cart/${userId}/item/${itemId}`, {
//         method: "DELETE"
//       });
//     } else {
//       await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: -1 }),
//       });
//     }

//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const goToRestaurant = (id) => navigate(`/restaurant/${id}`);
//   const getTotal = () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 p-6">
//       {/* NAVBAR */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="text-gray-700 text-sm">Logged in as: {email}</div>
//         <h1 className="text-3xl font-extrabold font-serif text-orange-600">Gourmet</h1>
//         <button
//           onClick={() => setShowCart(true)}
//           className="relative bg-orange-500 text-white px-3 py-2 rounded shadow hover:bg-orange-600"
//         >
//           🛒
//           {cartItems.length > 0 && (
//             <span className="absolute top-0 right-0 -mt-1 -mr-1 text-xs bg-red-600 text-white rounded-full px-1">
//               {cartItems.length}
//             </span>
//           )}
//         </button>
//       </div>

//       {/* BELOW NAV: Action Buttons */}
//       <div className="flex justify-between items-center mb-6">
//         <button
//           onClick={() => setShowAddressModal(true)}
//           className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
//         >
//           Manage Addresses
//         </button>
//         <Link to="/order-history" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
//           View Order History
//         </Link>
//       </div>

//       {/* WELCOME */}
//       <h2 className="text-2xl font-bold mb-2 text-left">Welcome, Customer!</h2>

//       {/* RESTAURANT LIST */}
//       <h3 className="text-xl font-semibold mb-4 text-left">Available Restaurants</h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {restaurants.map(restaurant => (
//           <div
//             key={restaurant.id}
//             className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow bg-white"
//             onClick={() => goToRestaurant(restaurant.id)}
//           >
//             {restaurant.image_url && (
//               <img
//                 src={restaurant.image_url}
//                 alt={restaurant.name}
//                 className="w-full h-40 object-cover rounded"
//               />
//             )}
//             <h3 className="text-lg font-semibold mt-2">{restaurant.name}</h3>
//             <p className="text-sm text-gray-600 mt-1">
//               {restaurant.cuisines?.length > 0 ? restaurant.cuisines.join(", ") : "Cuisines not listed"}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* ADDRESS MODAL */}
//       {showAddressModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//               onClick={() => setShowAddressModal(false)}
//             >
//               ✕
//             </button>
//             <AddressManager
//               addressList={addressList}
//               setAddressList={setAddressList}
//               selectedAddress={selectedAddress}
//               setSelectedAddress={setSelectedAddress}
//             />
//           </div>
//         </div>
//       )}

//       {/* CART MODAL */}
//       <AnimatePresence>
//         {showCart && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
//           >
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-semibold">Your Cart</h2>
//                 <button
//                   onClick={() => setShowCart(false)}
//                   className="text-gray-600 hover:text-black text-xl"
//                 >
//                   ✕
//                 </button>
//               </div>
//               {cartItems.map(item => (
//                 <div key={item.id} className="flex justify-between items-center border-b py-2">
//                   <div>
//                     <p className="font-medium">{item.name}</p>
//                     <p className="text-sm text-gray-500">
//                       ₹{item.price} x {item.quantity}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => decrement(item.id)}
//                       className="bg-gray-300 px-2 rounded"
//                     >-</button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => increment(item.id)}
//                       className="bg-gray-300 px-2 rounded"
//                     >+</button>
//                   </div>
//                 </div>
//               ))}
//               <div className="text-right font-bold text-xl mt-4">
//                 Total: ₹{getTotal().toFixed(2)}
//               </div>
//               <button
//                 onClick={() => {
//                   setShowCart(false);
//                   navigate("/checkout");
//                 }}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
//               >
//                 Proceed to Checkout
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default CustomerDashboard;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AddressManager from './AddressManager';
// import { motion, AnimatePresence } from 'framer-motion';

// function CustomerDashboard() {
//   const email = localStorage.getItem("loggedInEmail");
//   const userId = localStorage.getItem("userId");

//   const [restaurants, setRestaurants] = useState([]);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [addressList, setAddressList] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/restaurants")
//       .then(res => res.json())
//       .then(setRestaurants)
//       .catch(err => console.error("Failed to fetch restaurants", err));
//   }, []);

//   useEffect(() => {
//     if (showAddressModal && userId) {
//       fetch(`http://localhost:5000/api/user/${userId}/primary-address`)
//         .then(res => res.json())
//         .then(data => {
//           if (data?.address) {
//             setAddressList([data.address]);
//             setSelectedAddress(data.address);
//           } else {
//             setAddressList([]);
//             setSelectedAddress(null);
//           }
//         })
//         .catch(err => console.error("Failed to fetch address", err));
//     }
//   }, [showAddressModal, userId]);

//   useEffect(() => {
//     if (userId) {
//       fetch(`http://localhost:5000/api/cart/${userId}`)
//         .then(res => res.json())
//         .then(setCartItems)
//         .catch(err => console.error("Failed to fetch cart", err));
//     }
//   }, [userId]);

//   const increment = async (itemId) => {
//     await fetch("http://localhost:5000/api/cart/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: 1 }),
//     });
//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const decrement = async (itemId) => {
//     const item = cartItems.find(i => i.id === itemId);
//     if (item.quantity === 1) {
//       await fetch(`http://localhost:5000/api/cart/${userId}/item/${itemId}`, {
//         method: "DELETE"
//       });
//     } else {
//       await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: -1 }),
//       });
//     }

//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const goToRestaurant = (id) => navigate(`/restaurant/${id}`);
//   const getTotal = () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 p-6">
//       {/* NAVBAR */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="text-gray-700 text-sm">Logged in as: {email}</div>
//         <h1 className="text-3xl font-extrabold font-serif text-orange-600">Gourmet</h1>
//         <button
//           onClick={() => setShowCart(true)}
//           className="relative bg-orange-500 text-white px-3 py-2 rounded shadow hover:bg-orange-600"
//         >
//           🛒
//           {cartItems.length > 0 && (
//             <span className="absolute top-0 right-0 -mt-1 -mr-1 text-xs bg-red-600 text-white rounded-full px-1">
//               {cartItems.length}
//             </span>
//           )}
//         </button>
//       </div>

//       {/* BELOW NAV: Action Buttons */}
//       <div className="flex justify-between items-center mb-6">
//         <button
//           onClick={() => setShowAddressModal(true)}
//           className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
//         >
//           Manage Addresses
//         </button>
//         <Link to="/order-history" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
//           View Order History
//         </Link>
//       </div>

//       {/* WELCOME */}
//       <h2 className="text-2xl font-bold mb-2 text-left">Welcome, Customer!</h2>

//       {/* RESTAURANT LIST */}
//       <h3 className="text-xl font-semibold mb-4 text-left">Available Restaurants</h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {restaurants.map(restaurant => (
//           <div
//             key={restaurant.id}
//             className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow bg-white"
//             onClick={() => goToRestaurant(restaurant.id)}
//           >
//             {restaurant.image_url && (
//               <img
//                 src={restaurant.image_url}
//                 alt={restaurant.name}
//                 className="w-full h-40 object-cover rounded"
//               />
//             )}
//             <h3 className="text-lg font-semibold mt-2">{restaurant.name}</h3>
//             <p className="text-sm text-gray-600 mt-1">
//               {restaurant.cuisines?.length > 0 ? restaurant.cuisines.join(", ") : "Cuisines not listed"}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* ADDRESS MODAL */}
//       {showAddressModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//               onClick={() => setShowAddressModal(false)}
//             >
//               ✕
//             </button>
//             <AddressManager
//               addressList={addressList}
//               setAddressList={setAddressList}
//               selectedAddress={selectedAddress}
//               setSelectedAddress={setSelectedAddress}
//             />
//           </div>
//         </div>
//       )}

//       {/* CART MODAL */}
//       <AnimatePresence>
//         {showCart && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
//           >
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-semibold">Your Cart</h2>
//                 <button
//                   onClick={() => setShowCart(false)}
//                   className="text-gray-600 hover:text-black text-xl"
//                 >
//                   ✕
//                 </button>
//               </div>
//               {cartItems.map(item => (
//                 <div key={item.id} className="flex justify-between items-center border-b py-2">
//                   <div>
//                     <p className="font-medium">{item.name}</p>
//                     <p className="text-sm text-gray-500">
//                       ₹{item.price} x {item.quantity}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => decrement(item.id)}
//                       className="bg-gray-300 px-2 rounded"
//                     >-</button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => increment(item.id)}
//                       className="bg-gray-300 px-2 rounded"
//                     >+</button>
//                   </div>
//                 </div>
//               ))}
//               <div className="text-right font-bold text-xl mt-4">
//                 Total: ₹{getTotal().toFixed(2)}
//               </div>
//               <button
//                 onClick={() => {
//                   setShowCart(false);
//                   navigate("/checkout");
//                 }}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
//               >
//                 Proceed to Checkout
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default CustomerDashboard;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AddressManager from './AddressManager';
// import { motion, AnimatePresence } from 'framer-motion';

// function CustomerDashboard() {
//   const email = localStorage.getItem("loggedInEmail");
//   const userId = localStorage.getItem("userId");

//   const [restaurants, setRestaurants] = useState([]);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [addressList, setAddressList] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/restaurants")
//       .then(res => res.json())
//       .then(setRestaurants)
//       .catch(err => console.error("Failed to fetch restaurants", err));
//   }, []);

//   useEffect(() => {
//     if (showAddressModal && userId) {
//       fetch(`http://localhost:5000/api/user/${userId}/primary-address`)
//         .then(res => res.json())
//         .then(data => {
//           if (data?.address) {
//             setAddressList([data.address]);
//             setSelectedAddress(data.address);
//           } else {
//             setAddressList([]);
//             setSelectedAddress(null);
//           }
//         })
//         .catch(err => console.error("Failed to fetch address", err));
//     }
//   }, [showAddressModal, userId]);

//   useEffect(() => {
//     if (userId) {
//       fetch(`http://localhost:5000/api/cart/${userId}`)
//         .then(res => res.json())
//         .then(setCartItems)
//         .catch(err => console.error("Failed to fetch cart", err));
//     }
//   }, [userId]);

//   const increment = async (itemId) => {
//     await fetch("http://localhost:5000/api/cart/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: 1 }),
//     });
//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const decrement = async (itemId) => {
//     const item = cartItems.find(i => i.id === itemId);
//     if (item.quantity === 1) {
//       await fetch(`http://localhost:5000/api/cart/${userId}/item/${itemId}`, {
//         method: "DELETE"
//       });
//     } else {
//       await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: -1 }),
//       });
//     }

//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const goToRestaurant = (id) => navigate(`/restaurant/${id}`);
//   const getTotal = () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="relative min-h-screen">
//       {/* Full gradient background */}
//       <div className="fixed inset-0 z-0 bg-gradient-to-br from-purple-100 via-yellow-200 to-amber-100"></div>

//       {/* Main content */}
//       <div className="relative z-10 p-6">

//         {/* NAVBAR */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="text-gray-700 text-sm">Logged in as: {email}</div>
//           <h1 className="text-3xl font-extrabold font-serif text-orange-600">Gourmet</h1>
//           <button
//             onClick={() => setShowCart(true)}
//             className="relative bg-orange-500 text-white px-3 py-2 rounded shadow hover:bg-orange-600"
//           >
//             🛒
//             {cartItems.length > 0 && (
//               <span className="absolute top-0 right-0 -mt-1 -mr-1 text-xs bg-red-600 text-white rounded-full px-1">
//                 {cartItems.length}
//               </span>
//             )}
//           </button>
//         </div>

//         {/* BELOW NAV: Action Buttons */}
//         <div className="flex justify-between items-center mb-6">
//           <button
//             onClick={() => setShowAddressModal(true)}
//             className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
//           >
//             Manage Addresses
//           </button>
//           <Link to="/order-history" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
//             View Order History
//           </Link>
//         </div>

//         {/* WELCOME */}
//         <h2 className="text-2xl font-bold mb-2 text-left">Welcome, Customer!</h2>

//         {/* RESTAURANT LIST */}
//         <h3 className="text-xl font-semibold mb-4 text-left">Available Restaurants</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {restaurants.map(restaurant => (
//             <div
//               key={restaurant.id}
//               className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-shadow bg-white"
//               onClick={() => goToRestaurant(restaurant.id)}
//             >
//               {restaurant.image_url && (
//                 <img
//                   src={restaurant.image_url}
//                   alt={restaurant.name}
//                   className="w-full h-40 object-cover rounded"
//                 />
//               )}
//               <h3 className="text-lg font-semibold mt-2">{restaurant.name}</h3>
//               <p className="text-sm text-gray-600 mt-1">
//                 {restaurant.cuisines?.length > 0 ? restaurant.cuisines.join(", ") : "Cuisines not listed"}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* ADDRESS MODAL */}
//         {showAddressModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//               <button
//                 className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//                 onClick={() => setShowAddressModal(false)}
//               >
//                 ✕
//               </button>
//               <AddressManager
//                 addressList={addressList}
//                 setAddressList={setAddressList}
//                 selectedAddress={selectedAddress}
//                 setSelectedAddress={setSelectedAddress}
//               />
//             </div>
//           </div>
//         )}

//         {/* CART MODAL */}
//         <AnimatePresence>
//           {showCart && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
//             >
//               <motion.div
//                 initial={{ x: "100%" }}
//                 animate={{ x: 0 }}
//                 exit={{ x: "100%" }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-2xl font-semibold">Your Cart</h2>
//                   <button
//                     onClick={() => setShowCart(false)}
//                     className="text-gray-600 hover:text-black text-xl"
//                   >
//                     ✕
//                   </button>
//                 </div>
//                 {cartItems.map(item => (
//                   <div key={item.id} className="flex justify-between items-center border-b py-2">
//                     <div>
//                       <p className="font-medium">{item.name}</p>
//                       <p className="text-sm text-gray-500">
//                         ₹{item.price} x {item.quantity}
//                       </p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => decrement(item.id)}
//                         className="bg-gray-300 px-2 rounded"
//                       >-</button>
//                       <span>{item.quantity}</span>
//                       <button
//                         onClick={() => increment(item.id)}
//                         className="bg-gray-300 px-2 rounded"
//                       >+</button>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="text-right font-bold text-xl mt-4">
//                   Total: ₹{getTotal().toFixed(2)}
//                 </div>
//                 <button
//                   onClick={() => {
//                     setShowCart(false);
//                     navigate("/checkout");
//                   }}
//                   className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
//                 >
//                   Proceed to Checkout
//                 </button>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// export default CustomerDashboard;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AddressManager from './AddressManager';
// import { motion, AnimatePresence } from 'framer-motion';

// function CustomerDashboard() {
//   const email = localStorage.getItem("loggedInEmail");
//   const userId = localStorage.getItem("userId");

//   const [restaurants, setRestaurants] = useState([]);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [addressList, setAddressList] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/restaurants")
//       .then(res => res.json())
//       .then(setRestaurants)
//       .catch(err => console.error("Failed to fetch restaurants", err));
//   }, []);

//   useEffect(() => {
//     if (showAddressModal && userId) {
//       fetch(`http://localhost:5000/api/user/${userId}/primary-address`)
//         .then(res => res.json())
//         .then(data => {
//           if (data?.address) {
//             setAddressList([data.address]);
//             setSelectedAddress(data.address);
//           } else {
//             setAddressList([]);
//             setSelectedAddress(null);
//           }
//         })
//         .catch(err => console.error("Failed to fetch address", err));
//     }
//   }, [showAddressModal, userId]);

//   useEffect(() => {
//     if (userId) {
//       fetch(`http://localhost:5000/api/cart/${userId}`)
//         .then(res => res.json())
//         .then(setCartItems)
//         .catch(err => console.error("Failed to fetch cart", err));
//     }
//   }, [userId]);

//   const increment = async (itemId) => {
//     await fetch("http://localhost:5000/api/cart/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: 1 }),
//     });
//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const decrement = async (itemId) => {
//     const item = cartItems.find(i => i.id === itemId);
//     if (item.quantity === 1) {
//       await fetch(`http://localhost:5000/api/cart/${userId}/item/${itemId}`, {
//         method: "DELETE"
//       });
//     } else {
//       await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: -1 }),
//       });
//     }
//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const goToRestaurant = (id) => navigate(`/restaurant/${id}`);

//   const getTotal = () =>
//     cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-purple-700 to-yellow-100 text-gray-800 p-6">
//       {/* 🌟 Top Navbar */}
//       <div className="flex items-center justify-between mb-6">
//         <div className="flex flex-col">
//           <p className="text-sm text-white">Logged in as: {email}</p>
//           <button
//             onClick={() => setShowAddressModal(true)}
//             className="mt-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 rounded"
//           >
//             Manage Addresses
//           </button>
//         </div>

//         <h1
//           className="text-4xl font-bold text-center"
//           style={{ fontFamily: "'Sevillana', cursive", color: 'gold' }}
//         >
//           Gourmet
//         </h1>

//         <div>
//           <button
//             onClick={() => setShowCart(true)}
//             className="relative bg-orange-500 px-4 py-2 rounded-full shadow-lg text-white"
//           >
//             🛒
//             {cartItems.length > 0 && (
//               <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1">
//                 {cartItems.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* 🧭 Order History & Welcome */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-bold text-white">Welcome, Customer!</h2>
//         <Link
//           to="/order-history"
//           className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//         >
//           View Order History
//         </Link>
//       </div>

//       {/* 🍽️ Restaurant List */}
//       <h3 className="text-xl text-white font-semibold mb-4">Available Restaurants</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {restaurants.map(restaurant => (
//           <div
//             key={restaurant.id}
//             className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
//             onClick={() => goToRestaurant(restaurant.id)}
//           >
//             {restaurant.image_url && (
//               <img
//                 src={restaurant.image_url}
//                 alt={restaurant.name}
//                 className="w-full h-40 object-cover rounded"
//               />
//             )}
//             <h4 className="text-lg font-semibold mt-3">{restaurant.name}</h4>
//             <p className="text-sm text-gray-600">
//               {restaurant.cuisines?.length > 0
//                 ? restaurant.cuisines.join(", ")
//                 : "Cuisines not listed"}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* 🏠 Address Modal */}
//       {showAddressModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//               onClick={() => setShowAddressModal(false)}
//             >
//               ✕
//             </button>
//             <AddressManager
//               addressList={addressList}
//               setAddressList={setAddressList}
//               selectedAddress={selectedAddress}
//               setSelectedAddress={setSelectedAddress}
//             />
//           </div>
//         </div>
//       )}

//       {/* 🛒 Cart Modal */}
//       <AnimatePresence>
//         {showCart && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
//           >
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-semibold">Your Cart</h2>
//                 <button
//                   onClick={() => setShowCart(false)}
//                   className="text-gray-600 hover:text-black text-xl"
//                 >
//                   ✕
//                 </button>
//               </div>
//               {cartItems.map(item => (
//                 <div key={item.id} className="flex justify-between items-center border-b py-2">
//                   <div>
//                     <p className="font-medium">{item.name}</p>
//                     <p className="text-sm text-gray-500">
//                       ₹{item.price} x {item.quantity}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <button onClick={() => decrement(item.id)} className="bg-gray-300 px-2 rounded">-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => increment(item.id)} className="bg-gray-300 px-2 rounded">+</button>
//                   </div>
//                 </div>
//               ))}
//               <div className="text-right font-bold text-xl mt-4">
//                 Total: ₹{getTotal().toFixed(2)}
//               </div>
//               <button
//                 onClick={() => {
//                   setShowCart(false);
//                   navigate("/checkout");
//                 }}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
//               >
//                 Proceed to Checkout
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default CustomerDashboard;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AddressManager from './AddressManager';
// import { motion, AnimatePresence } from 'framer-motion';

// function CustomerDashboard() {
//   const email = localStorage.getItem("loggedInEmail");
//   const userId = localStorage.getItem("userId");

//   const [restaurants, setRestaurants] = useState([]);
//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [addressList, setAddressList] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/restaurants")
//       .then(res => res.json())
//       .then(setRestaurants)
//       .catch(err => console.error("Failed to fetch restaurants", err));
//   }, []);

//   useEffect(() => {
//     if (showAddressModal && userId) {
//       fetch(`http://localhost:5000/api/user/${userId}/primary-address`)
//         .then(res => res.json())
//         .then(data => {
//           if (data?.address) {
//             setAddressList([data.address]);
//             setSelectedAddress(data.address);
//           } else {
//             setAddressList([]);
//             setSelectedAddress(null);
//           }
//         })
//         .catch(err => console.error("Failed to fetch address", err));
//     }
//   }, [showAddressModal, userId]);

//   useEffect(() => {
//     if (userId) {
//       fetch(`http://localhost:5000/api/cart/${userId}`)
//         .then(res => res.json())
//         .then(setCartItems)
//         .catch(err => console.error("Failed to fetch cart", err));
//     }
//   }, [userId]);

//   const increment = async (itemId) => {
//     await fetch("http://localhost:5000/api/cart/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: 1 }),
//     });
//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const decrement = async (itemId) => {
//     const item = cartItems.find(i => i.id === itemId);
//     if (item.quantity === 1) {
//       await fetch(`http://localhost:5000/api/cart/${userId}/item/${itemId}`, {
//         method: "DELETE"
//       });
//     } else {
//       await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: -1 }),
//       });
//     }
//     const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//     const data = await res.json();
//     setCartItems(data);
//   };

//   const goToRestaurant = (id) => navigate(`/restaurant/${id}`);
//   const getTotal = () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//   <div className="w-full min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-yellow-100 text-gray-900">
//     {/* Top Nav */}
//     <div className="flex justify-between items-center px-10 py-6 relative">
//       <div className="text-white text-sm">Logged in as: {email}</div>
      
//       <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-[Sevillana] text-yellow-300">
//         Gourmet
//       </h1>

//       <button
//         onClick={() => setShowCart(true)}
//         className="relative bg-orange-500 px-3 py-2 rounded shadow"
//       >
//         🛒
//         {cartItems.length > 0 && (
//           <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white rounded-full px-1">
//             {cartItems.length}
//           </span>
//         )}
//       </button>
//     </div>

//     {/* Actions */}
//     <div className="flex justify-between px-10 mb-8">
//   <button
//     onClick={() => setShowAddressModal(true)}
//     className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
//   >
//     Manage Addresses
//   </button>
//   <Link
//     to="/order-history"
//     className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
//   >
//     View Order History
//   </Link>
// </div>


//     {/* Welcome & Restaurant Section */}
//     <div className="px-10 mb-4">
//       <h2 className="text-3xl font-bold text-white">Welcome, Customer!</h2>
//       <h3 className="text-xl mt-2 text-white">Available Restaurants</h3>
//     </div>

//     {/* Restaurants Grid */}
//     <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
//       {restaurants.map((restaurant) => (
//         <div
//           key={restaurant.id}
//           className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-xl transition"
//           onClick={() => goToRestaurant(restaurant.id)}
//         >
//           {restaurant.image_url && (
//             <img
//               src={restaurant.image_url}
//               alt={restaurant.name}
//               className="w-full h-40 object-cover rounded"
//             />
//           )}
//           <h3 className="text-lg font-semibold mt-2">{restaurant.name}</h3>
//           <p className="text-sm text-gray-600">
//             {restaurant.cuisines?.length > 0
//               ? restaurant.cuisines.join(", ")
//               : "Cuisines not listed"}
//           </p>
//         </div>
//       ))}
//     </div>

//     {/* Address Modal */}
//     {showAddressModal && (
//       <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
//           <button
//             className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
//             onClick={() => setShowAddressModal(false)}
//           >
//             ✕
//           </button>
//           <AddressManager
//             addressList={addressList}
//             setAddressList={setAddressList}
//             selectedAddress={selectedAddress}
//             setSelectedAddress={setSelectedAddress}
//           />
//         </div>
//       </div>
//     )}

//     {/* Cart Modal */}
//     <AnimatePresence>
//       {showCart && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
//         >
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
//           >
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-semibold">Your Cart</h2>
//               <button
//                 onClick={() => setShowCart(false)}
//                 className="text-gray-600 hover:text-black text-xl"
//               >
//                 ✕
//               </button>
//             </div>
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center border-b py-2"
//               >
//                 <div>
//                   <p className="font-medium">{item.name}</p>
//                   <p className="text-sm text-gray-500">
//                     ₹{item.price} x {item.quantity}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
                  
//                 </div>
//               </div>
//             ))}
//             <div className="text-right font-bold text-xl mt-4">
//               Total: ₹{getTotal().toFixed(2)}
//             </div>
//             <button
//               onClick={() => {
//                 setShowCart(false);
//                 navigate("/checkout");
//               }}
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
//             >
//               Proceed to Checkout
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </div>
// );

// }

// export default CustomerDashboard;

import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AddressManager from './AddressManager';
import { motion, AnimatePresence } from 'framer-motion';

function CustomerDashboard() {
  const email = localStorage.getItem("loggedInEmail");
  const userId = localStorage.getItem("userId");

  const [restaurants, setRestaurants] = useState([]);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/restaurants")
      .then(res => res.json())
      .then(setRestaurants)
      .catch(err => console.error("Failed to fetch restaurants", err));
  }, []);

  useEffect(() => {
    if (showAddressModal && userId) {
      fetch(`http://localhost:5000/api/user/${userId}/primary-address`)
        .then(res => res.json())
        .then(data => {
          if (data?.address) {
            setAddressList([data.address]);
            setSelectedAddress(data.address);
          } else {
            setAddressList([]);
            setSelectedAddress(null);
          }
        })
        .catch(err => console.error("Failed to fetch address", err));
    }
  }, [showAddressModal, userId]);

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:5000/api/cart/${userId}`)
        .then(res => res.json())
        .then(setCartItems)
        .catch(err => console.error("Failed to fetch cart", err));
    }
  }, [userId]);

  const increment = async (itemId) => {
    await fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: 1 }),
    });
    const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
    const data = await res.json();
    setCartItems(data);
  };

  const decrement = async (itemId) => {
    const item = cartItems.find(i => i.id === itemId);
    if (item.quantity === 1) {
      await fetch(`http://localhost:5000/api/cart/${userId}/item/${itemId}`, {
        method: "DELETE"
      });
    } else {
      await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer_id: userId, item_id: itemId, quantity: -1 }),
      });
    }
    const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
    const data = await res.json();
    setCartItems(data);
  };

  const goToRestaurant = (id) => navigate(`/restaurant/${id}`);
  const getTotal = () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
  <div className="w-full min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-yellow-100 text-white">
    {/* Top Nav */}
    <div className="flex justify-between items-center px-10 py-6 relative">
      <div className="text-white text-sm">Logged in as: {email}</div>
      
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-[Sevillana] text-yellow-300">
        Gourmet
      </h1>

      <button
        onClick={() => setShowCart(true)}
        className="relative bg-orange-500 px-3 py-2 rounded shadow text-white"
      >
        🛒
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 text-xs bg-red-600 text-white rounded-full px-1">
            {cartItems.length}
          </span>
        )}
      </button>
    </div>

    {/* Actions */}
    <div className="flex justify-between px-10 mb-8">
  <button
    onClick={() => setShowAddressModal(true)}
    className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
  >
    Manage Addresses
  </button>
  <Link
    to="/order-history"
    className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
  >
    View Order History
  </Link>
</div>


    {/* Welcome & Restaurant Section */}
    <div className="px-10 mb-4">
      <h2 className="text-3xl font-bold text-white">Welcome, Customer!</h2>
      <h3 className="text-xl mt-2 text-white">Available Restaurants</h3>
    </div>

    {/* Restaurants Grid */}
    <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
      {restaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-xl transition text-gray-900"
          onClick={() => goToRestaurant(restaurant.id)}
        >
          {restaurant.image_url && (
            <img
              src={restaurant.image_url}
              alt={restaurant.name}
              className="w-full h-40 object-cover rounded"
            />
          )}
          <h3 className="text-lg font-semibold mt-2 text-gray-900">{restaurant.name}</h3>
          <p className="text-sm text-gray-600">
            {restaurant.cuisines?.length > 0
              ? restaurant.cuisines.join(", ")
              : "Cuisines not listed"}
          </p>
        </div>
      ))}
    </div>

    {/* Address Modal */}
    {showAddressModal && (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative text-gray-900">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            onClick={() => setShowAddressModal(false)}
          >
            ✕
          </button>
          <AddressManager
            addressList={addressList}
            setAddressList={setAddressList}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />
        </div>
      </div>
    )}

    {/* Cart Modal */}
    <AnimatePresence>
      {showCart && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl text-gray-900"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Your Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  
                </div>
              </div>
            ))}
            <div className="text-right font-bold text-xl mt-4 text-gray-900">
              Total: ₹{getTotal().toFixed(2)}
            </div>
            <button
              onClick={() => {
                setShowCart(false);
                navigate("/checkout");
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
            >
              Proceed to Checkout
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

}

export default CustomerDashboard;