// // // // import { useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const RestaurantPage = () => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [restaurant, setRestaurant] = useState(null);
// // // //   const [menuItems, setMenuItems] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [showCart, setShowCart] = useState(false);
// // // //   const [cart, setCart] = useState(() => {
// // // //     const saved = localStorage.getItem("cart");
// // // //     return saved ? JSON.parse(saved) : {};
// // // //   });

// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       try {
// // // //         const res = await fetch(`http://localhost:5000/api/restaurants/${id}`);
// // // //         const data = await res.json();
// // // //         setRestaurant(data);

// // // //         const menuRes = await fetch(`http://localhost:5000/api/restaurants/${id}/menu`);
// // // //         const menuData = await menuRes.json();
// // // //         setMenuItems(menuData);
// // // //       } catch (err) {
// // // //         console.error("Failed to fetch data:", err);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchData();
// // // //   }, [id]);

// // // //   useEffect(() => {
// // // //     localStorage.setItem("cart", JSON.stringify(cart));
// // // //   }, [cart]);

// // // //   const addToCart = (item) => {
// // // //     const enrichedItem = {
// // // //       ...item,
// // // //       restaurant_id: restaurant?.id
// // // //     };

// // // //     setCart((prev) => ({
// // // //       ...prev,
// // // //       [enrichedItem.id]: prev[enrichedItem.id]
// // // //         ? { ...enrichedItem, quantity: prev[enrichedItem.id].quantity + 1 }
// // // //         : { ...enrichedItem, quantity: 1 }
// // // //     }));
// // // //   };

// // // //   const increment = (itemId) => {
// // // //     setCart((prev) => ({
// // // //       ...prev,
// // // //       [itemId]: {
// // // //         ...prev[itemId],
// // // //         quantity: prev[itemId].quantity + 1
// // // //       }
// // // //     }));
// // // //   };

// // // //   const decrement = (itemId) => {
// // // //     setCart((prev) => {
// // // //       const currentItem = prev[itemId];
// // // //       if (!currentItem) return prev;

// // // //       const newCart = { ...prev };
// // // //       if (currentItem.quantity === 1) {
// // // //         delete newCart[itemId];
// // // //       } else {
// // // //         newCart[itemId] = {
// // // //           ...currentItem,
// // // //           quantity: currentItem.quantity - 1
// // // //         };
// // // //       }
// // // //       return newCart;
// // // //     });
// // // //   };

// // // //   const getTotal = () =>
// // // //     Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

// // // //   if (loading) return <p>Loading...</p>;
// // // //   if (!restaurant) return <p>Restaurant not found.</p>;

// // // //   return (
// // // //     <div className="p-6">
// // // //       <div className="mb-8">
// // // //         <h1 className="text-3xl font-bold">{restaurant.name}</h1>
// // // //         <p className="text-gray-600">{restaurant.description}</p>
// // // //         <p className="text-sm text-gray-500">{restaurant.address}</p>
// // // //       </div>

// // // //       <h2 className="text-2xl font-semibold mb-4">Menu</h2>
// // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //         {menuItems.map((item) => (
// // // //           <div key={item.id} className="border rounded-xl shadow p-4">
// // // //             {item.image_url && (
// // // //               <img
// // // //                 src={item.image_url}
// // // //                 alt={item.name}
// // // //                 className="h-40 w-full object-cover rounded mb-2"
// // // //               />
// // // //             )}
// // // //             <h3 className="text-lg font-bold">{item.name}</h3>
// // // //             <p className="text-sm text-gray-600">{item.description}</p>
// // // //             <p className="font-semibold mt-1">₹{item.price}</p>
// // // //             <button
// // // //               onClick={() => addToCart(item)}
// // // //               className="mt-2 px-4 py-1 bg-green-500 text-white rounded"
// // // //             >
// // // //               Add to Cart
// // // //             </button>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {Object.keys(cart).length > 0 && (
// // // //         <div className="fixed bottom-6 right-6 z-50">
// // // //           <button
// // // //             onClick={() => setShowCart(true)}
// // // //             className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg"
// // // //           >
// // // //             View Cart ({Object.keys(cart).length})
// // // //           </button>
// // // //         </div>
// // // //       )}

// // // //       <AnimatePresence>
// // // //         {showCart && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
// // // //           >
// // // //             <motion.div
// // // //               initial={{ x: "100%" }}
// // // //               animate={{ x: 0 }}
// // // //               exit={{ x: "100%" }}
// // // //               transition={{ type: "spring", stiffness: 300, damping: 30 }}
// // // //               className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
// // // //             >
// // // //               <div className="flex justify-between items-center mb-4">
// // // //                 <h2 className="text-2xl font-semibold">Your Cart</h2>
// // // //                 <button
// // // //                   onClick={() => setShowCart(false)}
// // // //                   className="text-gray-600 hover:text-black text-xl"
// // // //                 >
// // // //                   ✕
// // // //                 </button>
// // // //               </div>
// // // //               {Object.values(cart).map((item) => (
// // // //                 <div key={item.id} className="flex justify-between items-center border-b py-2">
// // // //                   <div>
// // // //                     <p className="font-medium">{item.name}</p>
// // // //                     <p className="text-sm text-gray-500">
// // // //                       ₹{item.price} x {item.quantity}
// // // //                     </p>
// // // //                   </div>
// // // //                   <div className="flex items-center gap-2">
// // // //                     <button
// // // //                       onClick={() => decrement(item.id)}
// // // //                       className="bg-gray-300 px-2 rounded"
// // // //                     >
// // // //                       -
// // // //                     </button>
// // // //                     <span>{item.quantity}</span>
// // // //                     <button
// // // //                       onClick={() => increment(item.id)}
// // // //                       className="bg-gray-300 px-2 rounded"
// // // //                     >
// // // //                       +
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //               <div className="text-right font-bold text-xl mt-4">
// // // //                 Total: ₹{getTotal().toFixed(2)}
// // // //               </div>
// // // //               <button
// // // //                 onClick={() => {
// // // //                   setShowCart(false);
// // // //                   navigate("/checkout");
// // // //                 }}
// // // //                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
// // // //               >
// // // //                 Proceed to Checkout
// // // //               </button>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default RestaurantPage;


// // // import { useEffect, useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const RestaurantPage = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [restaurant, setRestaurant] = useState(null);
// // //   const [menuItems, setMenuItems] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [showCart, setShowCart] = useState(false);
// // //   const [cart, setCart] = useState(() => {
// // //     const saved = localStorage.getItem("cart");
// // //     return saved ? JSON.parse(saved) : {};
// // //   });

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const res = await fetch(`http://localhost:5000/api/restaurants/${id}`);
// // //         const data = await res.json();
// // //         setRestaurant(data);

// // //         const menuRes = await fetch(`http://localhost:5000/api/restaurants/${id}/menu`);
// // //         const menuData = await menuRes.json();
// // //         setMenuItems(menuData);
// // //       } catch (err) {
// // //         console.error("Failed to fetch data:", err);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, [id]);

// // //   useEffect(() => {
// // //     localStorage.setItem("cart", JSON.stringify(cart));
// // //   }, [cart]);

// // //   const addToCart = (item) => {
// // //     const restaurant_id = parseInt(id); // Ensure it's a number

// // //     const enrichedItem = {
// // //       ...item,
// // //       restaurant_id
// // //     };

// // //     setCart((prev) => ({
// // //       ...prev,
// // //       [enrichedItem.id]: prev[enrichedItem.id]
// // //         ? {
// // //             ...enrichedItem,
// // //             quantity: prev[enrichedItem.id].quantity + 1
// // //           }
// // //         : {
// // //             ...enrichedItem,
// // //             quantity: 1
// // //           }
// // //     }));
// // //   };

// // //   const increment = (itemId) => {
// // //     setCart((prev) => ({
// // //       ...prev,
// // //       [itemId]: {
// // //         ...prev[itemId],
// // //         quantity: prev[itemId].quantity + 1
// // //       }
// // //     }));
// // //   };

// // //   const decrement = (itemId) => {
// // //     setCart((prev) => {
// // //       const currentItem = prev[itemId];
// // //       if (!currentItem) return prev;

// // //       const newCart = { ...prev };
// // //       if (currentItem.quantity === 1) {
// // //         delete newCart[itemId];
// // //       } else {
// // //         newCart[itemId] = {
// // //           ...currentItem,
// // //           quantity: currentItem.quantity - 1
// // //         };
// // //       }
// // //       return newCart;
// // //     });
// // //   };

// // //   const getTotal = () =>
// // //     Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

// // //   if (loading) return <p>Loading...</p>;
// // //   if (!restaurant) return <p>Restaurant not found.</p>;

// // //   return (
// // //     <div className="p-6">
// // //       <div className="mb-8">
// // //         <h1 className="text-3xl font-bold">{restaurant.name}</h1>
// // //         <p className="text-gray-600">{restaurant.description}</p>
// // //         <p className="text-sm text-gray-500">{restaurant.address}</p>
// // //       </div>

// // //       <h2 className="text-2xl font-semibold mb-4">Menu</h2>
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {menuItems.map((item) => (
// // //           <div key={item.id} className="border rounded-xl shadow p-4">
// // //             {item.image_url && (
// // //               <img
// // //                 src={item.image_url}
// // //                 alt={item.name}
// // //                 className="h-40 w-full object-cover rounded mb-2"
// // //               />
// // //             )}
// // //             <h3 className="text-lg font-bold">{item.name}</h3>
// // //             <p className="text-sm text-gray-600">{item.description}</p>
// // //             <p className="font-semibold mt-1">₹{item.price}</p>
// // //             <button
// // //               onClick={() => addToCart(item)}
// // //               className="mt-2 px-4 py-1 bg-green-500 text-white rounded"
// // //             >
// // //               Add to Cart
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {Object.keys(cart).length > 0 && (
// // //         <div className="fixed bottom-6 right-6 z-50">
// // //           <button
// // //             onClick={() => setShowCart(true)}
// // //             className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg"
// // //           >
// // //             View Cart ({Object.keys(cart).length})
// // //           </button>
// // //         </div>
// // //       )}

// // //       <AnimatePresence>
// // //         {showCart && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
// // //           >
// // //             <motion.div
// // //               initial={{ x: "100%" }}
// // //               animate={{ x: 0 }}
// // //               exit={{ x: "100%" }}
// // //               transition={{ type: "spring", stiffness: 300, damping: 30 }}
// // //               className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
// // //             >
// // //               <div className="flex justify-between items-center mb-4">
// // //                 <h2 className="text-2xl font-semibold">Your Cart</h2>
// // //                 <button
// // //                   onClick={() => setShowCart(false)}
// // //                   className="text-gray-600 hover:text-black text-xl"
// // //                 >
// // //                   ✕
// // //                 </button>
// // //               </div>
// // //               {Object.values(cart).map((item) => (
// // //                 <div key={item.id} className="flex justify-between items-center border-b py-2">
// // //                   <div>
// // //                     <p className="font-medium">{item.name}</p>
// // //                     <p className="text-sm text-gray-500">
// // //                       ₹{item.price} x {item.quantity}
// // //                     </p>
// // //                   </div>
// // //                   <div className="flex items-center gap-2">
// // //                     <button
// // //                       onClick={() => decrement(item.id)}
// // //                       className="bg-gray-300 px-2 rounded"
// // //                     >
// // //                       -
// // //                     </button>
// // //                     <span>{item.quantity}</span>
// // //                     <button
// // //                       onClick={() => increment(item.id)}
// // //                       className="bg-gray-300 px-2 rounded"
// // //                     >
// // //                       +
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //               <div className="text-right font-bold text-xl mt-4">
// // //                 Total: ₹{getTotal().toFixed(2)}
// // //               </div>
// // //               <button
// // //                 onClick={() => {
// // //                   setShowCart(false);
// // //                   navigate("/checkout");
// // //                 }}
// // //                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
// // //               >
// // //                 Proceed to Checkout
// // //               </button>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default RestaurantPage;

// // // import { useEffect, useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const RestaurantPage = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [restaurant, setRestaurant] = useState(null);
// // //   const [menuItems, setMenuItems] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [showCart, setShowCart] = useState(false);
// // //   const [cart, setCart] = useState({});

// // //   // Fetch restaurant and menu
// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const res = await fetch(`http://localhost:5000/api/restaurants/${id}`);
// // //         const data = await res.json();
// // //         setRestaurant(data);

// // //         const menuRes = await fetch(`http://localhost:5000/api/restaurants/${id}/menu`);
// // //         const menuData = await menuRes.json();
// // //         setMenuItems(menuData);
// // //       } catch (err) {
// // //         console.error("Failed to fetch data:", err);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, [id]);

// // //   // Restore cart and force-add restaurant_id
// // //   useEffect(() => {
// // //     if (!restaurant) return;
// // //     const saved = localStorage.getItem("cart");
// // //     if (saved) {
// // //       const parsedCart = JSON.parse(saved);
// // //       const updatedCart = {};

// // //       for (const key in parsedCart) {
// // //         updatedCart[key] = {
// // //           ...parsedCart[key],
// // //           restaurant_id: restaurant?.id || parsedCart[key].restaurant_id
// // //         };
// // //       }

// // //       setCart(updatedCart);
// // //     }
// // //   }, [restaurant]);

// // //   useEffect(() => {
// // //     localStorage.setItem("cart", JSON.stringify(cart));
// // //   }, [cart]);

// // //   const addToCart = (item) => {
// // //     const enrichedItem = {
// // //       ...item,
// // //       restaurant_id: restaurant?.id
// // //     };

// // //     setCart((prev) => ({
// // //       ...prev,
// // //       [enrichedItem.id]: prev[enrichedItem.id]
// // //         ? { ...enrichedItem, quantity: prev[enrichedItem.id].quantity + 1 }
// // //         : { ...enrichedItem, quantity: 1 }
// // //     }));
// // //   };

// // //   const increment = (itemId) => {
// // //     setCart((prev) => ({
// // //       ...prev,
// // //       [itemId]: {
// // //         ...prev[itemId],
// // //         quantity: prev[itemId].quantity + 1
// // //       }
// // //     }));
// // //   };

// // //   const decrement = (itemId) => {
// // //     setCart((prev) => {
// // //       const currentItem = prev[itemId];
// // //       if (!currentItem) return prev;

// // //       const newCart = { ...prev };
// // //       if (currentItem.quantity === 1) {
// // //         delete newCart[itemId];
// // //       } else {
// // //         newCart[itemId] = {
// // //           ...currentItem,
// // //           quantity: currentItem.quantity - 1
// // //         };
// // //       }
// // //       return newCart;
// // //     });
// // //   };

// // //   const getTotal = () =>
// // //     Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

// // //   if (loading) return <p>Loading...</p>;
// // //   if (!restaurant) return <p>Restaurant not found.</p>;

// // //   return (
// // //     <div className="p-6">
// // //       <div className="mb-8">
// // //         <h1 className="text-3xl font-bold">{restaurant.name}</h1>
// // //         <p className="text-gray-600">{restaurant.description}</p>
// // //         <p className="text-sm text-gray-500">{restaurant.address}</p>
// // //       </div>

// // //       <h2 className="text-2xl font-semibold mb-4">Menu</h2>
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {menuItems.map((item) => (
// // //           <div key={item.id} className="border rounded-xl shadow p-4">
// // //             {item.image_url && (
// // //               <img
// // //                 src={item.image_url}
// // //                 alt={item.name}
// // //                 className="h-40 w-full object-cover rounded mb-2"
// // //               />
// // //             )}
// // //             <h3 className="text-lg font-bold">{item.name}</h3>
// // //             <p className="text-sm text-gray-600">{item.description}</p>
// // //             <p className="font-semibold mt-1">₹{item.price}</p>
// // //             <button
// // //               onClick={() => addToCart(item)}
// // //               className="mt-2 px-4 py-1 bg-green-500 text-white rounded"
// // //             >
// // //               Add to Cart
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {Object.keys(cart).length > 0 && (
// // //         <div className="fixed bottom-6 right-6 z-50">
// // //           <button
// // //             onClick={() => setShowCart(true)}
// // //             className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg"
// // //           >
// // //             View Cart ({Object.keys(cart).length})
// // //           </button>
// // //         </div>
// // //       )}

// // //       <AnimatePresence>
// // //         {showCart && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
// // //           >
// // //             <motion.div
// // //               initial={{ x: "100%" }}
// // //               animate={{ x: 0 }}
// // //               exit={{ x: "100%" }}
// // //               transition={{ type: "spring", stiffness: 300, damping: 30 }}
// // //               className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
// // //             >
// // //               <div className="flex justify-between items-center mb-4">
// // //                 <h2 className="text-2xl font-semibold">Your Cart</h2>
// // //                 <button
// // //                   onClick={() => setShowCart(false)}
// // //                   className="text-gray-600 hover:text-black text-xl"
// // //                 >
// // //                   ✕
// // //                 </button>
// // //               </div>
// // //               {Object.values(cart).map((item) => (
// // //                 <div key={item.id} className="flex justify-between items-center border-b py-2">
// // //                   <div>
// // //                     <p className="font-medium">{item.name}</p>
// // //                     <p className="text-sm text-gray-500">
// // //                       ₹{item.price} x {item.quantity}
// // //                     </p>
// // //                   </div>
// // //                   <div className="flex items-center gap-2">
// // //                     <button
// // //                       onClick={() => decrement(item.id)}
// // //                       className="bg-gray-300 px-2 rounded"
// // //                     >
// // //                       -
// // //                     </button>
// // //                     <span>{item.quantity}</span>
// // //                     <button
// // //                       onClick={() => increment(item.id)}
// // //                       className="bg-gray-300 px-2 rounded"
// // //                     >
// // //                       +
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //               <div className="text-right font-bold text-xl mt-4">
// // //                 Total: ₹{getTotal().toFixed(2)}
// // //               </div>
// // //               <button
// // //                 onClick={() => {
// // //                   setShowCart(false);
// // //                   navigate("/checkout");
// // //                 }}
// // //                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
// // //               >
// // //                 Proceed to Checkout
// // //               </button>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default RestaurantPage;

// // import { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";

// // const RestaurantPage = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [restaurant, setRestaurant] = useState(null);
// //   const [menuItems, setMenuItems] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [showCart, setShowCart] = useState(false);
// //   const [cart, setCart] = useState({});

// //   // Fetch restaurant and menu
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const res = await fetch(`http://localhost:5000/api/restaurants/${id}`);
// //         const data = await res.json();
// //         setRestaurant(data);

// //         const menuRes = await fetch(`http://localhost:5000/api/restaurants/${id}/menu`);
// //         const menuData = await menuRes.json();
// //         setMenuItems(menuData);
// //       } catch (err) {
// //         console.error("Failed to fetch data:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [id]);

// //   // Restore cart from localStorage
// //   useEffect(() => {
// //     const saved = localStorage.getItem("cart");
// //     if (saved) {
// //       setCart(JSON.parse(saved));
// //     }
// //   }, []);

// //   // Persist cart to localStorage
// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //   }, [cart]);

// //   const addToCart = (item) => {
// //     const enrichedItem = {
// //       ...item,
// //       restaurant_id: restaurant?.id
// //     };

// //     setCart((prev) => ({
// //       ...prev,
// //       [enrichedItem.id]: prev[enrichedItem.id]
// //         ? { ...enrichedItem, quantity: prev[enrichedItem.id].quantity + 1 }
// //         : { ...enrichedItem, quantity: 1 }
// //     }));
// //   };

// //   const increment = (itemId) => {
// //     setCart((prev) => ({
// //       ...prev,
// //       [itemId]: {
// //         ...prev[itemId],
// //         quantity: prev[itemId].quantity + 1
// //       }
// //     }));
// //   };

// //   const decrement = (itemId) => {
// //     setCart((prev) => {
// //       const currentItem = prev[itemId];
// //       if (!currentItem) return prev;

// //       const newCart = { ...prev };
// //       if (currentItem.quantity === 1) {
// //         delete newCart[itemId];
// //       } else {
// //         newCart[itemId] = {
// //           ...currentItem,
// //           quantity: currentItem.quantity - 1
// //         };
// //       }
// //       return newCart;
// //     });
// //   };

// //   const getTotal = () =>
// //     Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

// //   if (loading) return <p>Loading...</p>;
// //   if (!restaurant) return <p>Restaurant not found.</p>;

// //   return (
// //     <div className="p-6">
// //       <div className="mb-8">
// //         <h1 className="text-3xl font-bold">{restaurant.name}</h1>
// //         <p className="text-gray-600">{restaurant.description}</p>
// //         <p className="text-sm text-gray-500">{restaurant.address}</p>
// //       </div>

// //       <h2 className="text-2xl font-semibold mb-4">Menu</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {menuItems.map((item) => (
// //           <div key={item.id} className="border rounded-xl shadow p-4">
// //             {item.image_url && (
// //               <img
// //                 src={item.image_url}
// //                 alt={item.name}
// //                 className="h-40 w-full object-cover rounded mb-2"
// //               />
// //             )}
// //             <h3 className="text-lg font-bold">{item.name}</h3>
// //             <p className="text-sm text-gray-600">{item.description}</p>
// //             <p className="font-semibold mt-1">₹{item.price}</p>
// //             <button
// //               onClick={() => addToCart(item)}
// //               className="mt-2 px-4 py-1 bg-green-500 text-white rounded"
// //             >
// //               Add to Cart
// //             </button>
// //           </div>
// //         ))}
// //       </div>

// //       {Object.keys(cart).length > 0 && (
// //         <div className="fixed bottom-6 right-6 z-50">
// //           <button
// //             onClick={() => setShowCart(true)}
// //             className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg"
// //           >
// //             View Cart ({Object.keys(cart).length})
// //           </button>
// //         </div>
// //       )}

// //       <AnimatePresence>
// //         {showCart && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50"
// //           >
// //             <motion.div
// //               initial={{ x: "100%" }}
// //               animate={{ x: 0 }}
// //               exit={{ x: "100%" }}
// //               transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //               className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
// //             >
// //               <div className="flex justify-between items-center mb-4">
// //                 <h2 className="text-2xl font-semibold">Your Cart</h2>
// //                 <button
// //                   onClick={() => setShowCart(false)}
// //                   className="text-gray-600 hover:text-black text-xl"
// //                 >
// //                   ✕
// //                 </button>
// //               </div>
// //               {Object.values(cart).map((item) => (
// //                 <div key={item.id} className="flex justify-between items-center border-b py-2">
// //                   <div>
// //                     <p className="font-medium">{item.name}</p>
// //                     <p className="text-sm text-gray-500">
// //                       ₹{item.price} x {item.quantity}
// //                     </p>
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <button
// //                       onClick={() => decrement(item.id)}
// //                       className="bg-gray-300 px-2 rounded"
// //                     >
// //                       -
// //                     </button>
// //                     <span>{item.quantity}</span>
// //                     <button
// //                       onClick={() => increment(item.id)}
// //                       className="bg-gray-300 px-2 rounded"
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //               <div className="text-right font-bold text-xl mt-4">
// //                 Total: ₹{getTotal().toFixed(2)}
// //               </div>
// //               <button
// //                 onClick={() => {
// //                   setShowCart(false);
// //                   navigate("/checkout");
// //                 }}
// //                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
// //               >
// //                 Proceed to Checkout
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default RestaurantPage;



// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// const RestaurantPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId");
//   const [restaurant, setRestaurant] = useState(null);
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showCart, setShowCart] = useState(false);
//   const [cart, setCart] = useState([]);

//   // Fetch restaurant and menu
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/restaurants/${id}`);
//         const data = await res.json();
//         setRestaurant(data);

//         const menuRes = await fetch(`http://localhost:5000/api/restaurants/${id}/menu`);
//         const menuData = await menuRes.json();
//         setMenuItems(menuData);
//       } catch (err) {
//         console.error("Failed to fetch data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   // Fetch cart from backend
//   const fetchCart = async () => {
//     if (!userId) return;
//     try {
//       const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//       const data = await res.json();
//       if (res.ok) {
//         setCart(data);
//       } else {
//         console.error("Failed to fetch cart:", data);
//       }
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, [userId]);

//   const addToCart = async (item) => {
//   const userId = localStorage.getItem("userId");

//   if (!userId) {
//     alert("Please log in first.");
//     return;
//   }

//   try {
//     const payload = {
//       customer_id: userId,
//       item_id: item.id,
//       restaurant_id: restaurant.id,
//       quantity: 1,
//     };

//     const res = await fetch("http://localhost:5000/api/cart/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       // Optionally show success or update local cart
//       console.log("✅ Item added to cart:", data);
//       setCart((prev) => ({
//         ...prev,
//         [item.id]: prev[item.id]
//           ? { ...item, quantity: prev[item.id].quantity + 1 }
//           : { ...item, quantity: 1 },
//       }));
//     } else {
//       console.error("❌ Failed to add to cart:", data);
//       alert("Failed to add to cart: " + data.error || data.message);
//     }
//   } catch (err) {
//     console.error("❌ Network error adding to cart:", err);
//     alert("Error adding to cart.");
//   }
// };


//   const increment = async (itemId) => {
//     const item = menuItems.find(i => i.id === itemId);
//     if (item) await addToCart(item);
//   };

//   const decrement = async (itemId) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/cart/${userId}/item/${itemId}`, {
//         method: "DELETE",
//       });

//       if (res.ok) {
//         fetchCart(); // Refresh
//       } else {
//         console.error("Failed to decrement/remove item");
//       }
//     } catch (err) {
//       console.error("❌ Error removing item:", err);
//     }
//   };

//   const getTotal = () =>
//     cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   if (loading) return <p>Loading...</p>;
//   if (!restaurant) return <p>Restaurant not found.</p>;

//   return (
//     <div className="p-6">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold">{restaurant.name}</h1>
//         <p className="text-gray-600">{restaurant.description}</p>
//         <p className="text-sm text-gray-500">{restaurant.address}</p>
//       </div>

//       <h2 className="text-2xl font-semibold mb-4">Menu</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {menuItems.map((item) => (
//           <div key={item.id} className="border rounded-xl shadow p-4">
//             {item.image_url && (
//               <img
//                 src={item.image_url}
//                 alt={item.name}
//                 className="h-40 w-full object-cover rounded mb-2"
//               />
//             )}
//             <h3 className="text-lg font-bold">{item.name}</h3>
//             <p className="text-sm text-gray-600">{item.description}</p>
//             <p className="font-semibold mt-1">₹{item.price}</p>
//             <button
//               onClick={() => addToCart(item)}
//               className="mt-2 px-4 py-1 bg-green-500 text-white rounded"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {cart.length > 0 && (
//         <div className="fixed bottom-6 right-6 z-50">
//           <button
//             onClick={() => setShowCart(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg"
//           >
//             View Cart ({cart.length})
//           </button>
//         </div>
//       )}

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
//               {cart.map((item) => (
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
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => increment(item.id)}
//                       className="bg-gray-300 px-2 rounded"
//                     >
//                       +
//                     </button>
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
// };

// export default RestaurantPage;


// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// const RestaurantPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId");
//   const [restaurant, setRestaurant] = useState(null);
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showCart, setShowCart] = useState(false);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/restaurants/${id}`);
//         const data = await res.json();
//         setRestaurant(data);

//         const menuRes = await fetch(`http://localhost:5000/api/restaurants/${id}/menu`);
//         const menuData = await menuRes.json();
//         setMenuItems(menuData);
//       } catch (err) {
//         console.error("Failed to fetch data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const fetchCart = async () => {
//     if (!userId) return;
//     try {
//       const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
//       const data = await res.json();
//       if (res.ok) {
//         setCart(data);
//       } else {
//         console.error("Failed to fetch cart:", data);
//       }
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, [userId]);

//   const addToCart = async (item) => {
//     if (!userId) {
//       alert("Please log in first.");
//       return;
//     }

//     try {
//       const payload = {
//         customer_id: userId,
//         item_id: item.id,
//         restaurant_id: restaurant.id,
//         quantity: 1,
//       };

//       const res = await fetch("http://localhost:5000/api/cart/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         console.log("✅ Item added to cart:", data);
//         await fetchCart(); // 🔁 Refresh cart after backend update
//       } else {
//         console.error("❌ Failed to add to cart:", data);
//         alert("Failed to add to cart: " + (data.error || data.message));
//       }
//     } catch (err) {
//       console.error("❌ Network error adding to cart:", err);
//       alert("Error adding to cart.");
//     }
//   };

//   const increment = async (itemId) => {
//     const item = menuItems.find((i) => i.id === itemId);
//     if (item) await addToCart(item);
//   };

//   const decrement = async (itemId) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/cart/${userId}/item/${itemId}`, {
//         method: "DELETE",
//       });

//       if (res.ok) {
//         await fetchCart();
//       } else {
//         console.error("Failed to decrement/remove item");
//       }
//     } catch (err) {
//       console.error("❌ Error removing item:", err);
//     }
//   };

//   const getTotal = () =>
//     cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

//   if (loading) return <p>Loading...</p>;
//   if (!restaurant) return <p>Restaurant not found.</p>;

//   return (
//     <div className="p-6">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold">{restaurant.name}</h1>
//         <p className="text-gray-600">{restaurant.description}</p>
//         <p className="text-sm text-gray-500">{restaurant.address}</p>
//       </div>

//       <h2 className="text-2xl font-semibold mb-4">Menu</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {menuItems.map((item) => (
//           <div key={item.id} className="border rounded-xl shadow p-4">
//             {item.image_url && (
//               <img
//                 src={item.image_url}
//                 alt={item.name}
//                 className="h-40 w-full object-cover rounded mb-2"
//               />
//             )}
//             <h3 className="text-lg font-bold">{item.name}</h3>
//             <p className="text-sm text-gray-600">{item.description}</p>
//             <p className="font-semibold mt-1">₹{item.price}</p>
//             <button
//               onClick={() => addToCart(item)}
//               className="mt-2 px-4 py-1 bg-green-500 text-white rounded"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {cart.length > 0 && (
//         <div className="fixed bottom-6 right-6 z-50">
//           <button
//             onClick={() => setShowCart(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg"
//           >
//             View Cart ({totalItems})
//           </button>
//         </div>
//       )}

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
//               {cart.map((item) => (
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
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => increment(item.id)}
//                       className="bg-gray-300 px-2 rounded"
//                     >
//                       +
//                     </button>
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
// };

// export default RestaurantPage;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const RestaurantPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/restaurants/${id}`);
        const data = await res.json();
        setRestaurant(data);

        const menuRes = await fetch(`http://localhost:5000/api/restaurants/${id}/menu`);
        const menuData = await menuRes.json();
        setMenuItems(menuData);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const fetchCart = async () => {
    if (!userId) return;
    try {
      const res = await fetch(`http://localhost:5000/api/cart/${userId}`);
      const data = await res.json();
      if (res.ok) {
        setCart(data);
      } else {
        console.error("Failed to fetch cart:", data);
      }
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [userId]);

  const addToCart = async (item) => {
    if (!userId) {
      alert("Please log in first.");
      return;
    }

    try {
      const payload = {
        customer_id: userId,
        item_id: item.id,
        restaurant_id: restaurant.id,
        quantity: 1,
      };

      const res = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("✅ Item added to cart:", data);
        await fetchCart(); // 🔁 Refresh cart after backend update
      } else {
        console.error("❌ Failed to add to cart:", data);
        alert("Failed to add to cart: " + (data.error || data.message));
      }
    } catch (err) {
      console.error("❌ Network error adding to cart:", err);
      alert("Error adding to cart.");
    }
  };

  const increment = async (itemId) => {
    const item = menuItems.find((i) => i.id === itemId);
    if (item) await addToCart(item);
  };

  const decrement = async (itemId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/cart/${userId}/item/${itemId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        await fetchCart();
      } else {
        console.error("Failed to decrement/remove item");
      }
    } catch (err) {
      console.error("❌ Error removing item:", err);
    }
  };

  const getTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (loading) return <p>Loading...</p>;
  if (!restaurant) return <p>Restaurant not found.</p>;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{restaurant.name}</h1>
        <p className="text-gray-600">{restaurant.description}</p>
        <p className="text-sm text-gray-500">{restaurant.address}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="border rounded-xl shadow p-4">
            {item.image_url && (
              <img
                src={item.image_url}
                alt={item.name}
                className="h-40 w-full object-cover rounded mb-2"
              />
            )}
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="font-semibold mt-1">₹{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 px-4 py-1 bg-green-500 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowCart(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg"
          >
            View Cart ({totalItems})
          </button>
        </div>
      )}

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
              className="w-full max-w-md bg-white p-6 overflow-y-auto h-full shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-black">Your Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-black hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                  <div>
                    <p className="font-medium text-black">{item.name}</p>
                    <p className="text-sm text-black">
                      ₹{item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrement(item.id)}
                      className="bg-gray-300 px-2 rounded text-black"
                    >
                      -
                    </button>
                    <span className="text-black">{item.quantity}</span>
                    <button
                      onClick={() => increment(item.id)}
                      className="bg-gray-300 px-2 rounded text-black"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <div className="text-right font-bold text-xl mt-4 text-black">
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
};

export default RestaurantPage;