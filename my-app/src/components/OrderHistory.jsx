// import { useEffect, useState } from "react";

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/orders/history")
//       .then(res => res.json())
//       .then(data => setOrders(data))
//       .catch(err => console.error("Failed to load order history:", err));
//   }, []);

//   const handleReorder = (items) => {
//     localStorage.setItem("cart", JSON.stringify(items));
//     window.location.href = "/checkout";
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Order History</h2>
//       {orders.length === 0 ? (
//         <p>No past orders.</p>
//       ) : (
//         orders.map(order => (
//           <div key={order.order_id} className="border p-4 mb-4 rounded shadow">
//             <p className="text-sm text-gray-500">Order #{order.order_id} on {new Date(order.created_at).toLocaleString()}</p>
//             <ul className="mt-2">
//               {order.items.map((item, idx) => (
//                 <li key={idx} className="flex justify-between text-sm">
//                   <span>{item.name} × {item.quantity}</span>
//                   <span>₹{item.price * item.quantity}</span>
//                 </li>
//               ))}
//             </ul>
//             <div className="text-right font-bold mt-2">Total: ₹{order.total}</div>
//             <button
//               onClick={() => handleReorder(order.items)}
//               className="mt-3 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
//             >
//               Reorder
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default OrderHistory;

// import { useEffect, useState } from "react";

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const customerId = localStorage.getItem("userId");

//     if (!customerId) {
//       setError("You must be logged in to view order history.");
//       return;
//     }

//     fetch(`http://localhost:5000/api/orders/history?customer_id=${customerId}`)
//       .then(res => res.json())
//       .then(data => {
//         if (Array.isArray(data)) {
//           setOrders(data);
//         } else {
//           console.error("Unexpected response format:", data);
//           setError("Could not fetch order history.");
//         }
//       })
//       .catch(err => {
//         console.error("Failed to load order history:", err);
//         setError("Failed to load order history.");
//       });
//   }, []);

//   const handleReorder = (items) => {
//     localStorage.setItem("cart", JSON.stringify(items));
//     window.location.href = "/checkout";
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Order History</h2>

//       {error && <p className="text-red-600">{error}</p>}

//       {!error && orders.length === 0 ? (
//         <p>No past orders.</p>
//       ) : (
//         orders.map(order => (
//           <div key={order.order_id} className="border p-4 mb-4 rounded shadow">
//             <p className="text-sm text-gray-500">
//               Order #{order.order_id} on{" "}
//               {new Date(order.created_at).toLocaleString()}
//             </p>
//             <ul className="mt-2">
//               {order.items.map((item, idx) => (
//                 <li key={idx} className="flex justify-between text-sm">
//                   <span>{item.name} × {item.quantity}</span>
//                   <span>₹{item.price * item.quantity}</span>
//                 </li>
//               ))}
//             </ul>
//             <div className="text-right font-bold mt-2">Total: ₹{order.total}</div>
//             <button
//               onClick={() => handleReorder(order.items)}
//               className="mt-3 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
//             >
//               Reorder
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default OrderHistory;

import { useEffect, useState } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const customerId = localStorage.getItem("userId");

    if (!customerId) {
      setError("You must be logged in to view order history.");
      return;
    }

    fetch(`http://localhost:5000/api/orders/history?customer_id=${customerId}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          console.error("Unexpected response format:", data);
          setError("Could not fetch order history.");
        }
      })
      .catch(err => {
        console.error("Failed to load order history:", err);
        setError("Failed to load order history.");
      });
  }, []);

  const handleReorder = (items) => {
    const flatItems = items.flat(); // in case items is array of arrays
    localStorage.setItem("cart", JSON.stringify(flatItems));
    window.location.href = "/checkout";
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>

      {error && <p className="text-red-600">{error}</p>}

      {!error && orders.length === 0 ? (
        <p>No past orders.</p>
      ) : (
        orders.map(order => (
          <div key={order.order_id} className="border p-4 mb-4 rounded shadow">
            <p className="text-sm text-gray-500">
              Order #{order.order_id} on{" "}
              {new Date(order.created_at).toLocaleString()}
            </p>

            {order.sub_orders.map((subOrder, idx) => (
              <div key={idx} className="mt-4">
                <h4 className="font-semibold text-blue-700">
                  {subOrder.restaurant_name}
                </h4>
                <ul className="mt-1">
                  {subOrder.items.map((item, i) => (
                    <li key={i} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-right font-semibold mt-2">
                  Subtotal: ₹{subOrder.total.toFixed(2)}
                </div>
              </div>
            ))}

            <div className="text-right font-bold mt-4">
              Grand Total: ₹{order.total.toFixed(2)}
            </div>

            <button
              onClick={() => {
                const combinedItems = order.sub_orders.flatMap(s => s.items);
                handleReorder(combinedItems);
              }}
              className="mt-3 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
            >
              Reorder
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
