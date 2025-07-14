// import React, { useState, useEffect } from "react";

// const AddressManager = () => {
//   const [addresses, setAddresses] = useState([]);
//   const [newAddress, setNewAddress] = useState("");
//   const [defaultId, setDefaultId] = useState(null);
//   const userId = localStorage.getItem("userId");

//   const fetchAddresses = async () => {
//     const res = await fetch(`http://localhost:5000/api/addresses/${userId}`);
//     const data = await res.json();
//     setAddresses(data);
//     const defaultAddr = data.find(addr => addr.is_default);
//     if (defaultAddr) setDefaultId(defaultAddr.id);
//   };

//   useEffect(() => {
//   const userId = localStorage.getItem("userId");

//   const fetchPrimary = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/user/${userId}/primary-address`);
//       const data = await res.json();
//       if (res.ok && data.address) {
//         setAddressList([data.address]); // preload one address
//         setSelectedAddress(data.address);
//       }
//     } catch (err) {
//       console.error("Failed to fetch primary address:", err);
//     }
//   };

//   fetchPrimary();
// }, []);


//   const addAddress = async () => {
//     if (!newAddress.trim()) return;
//     const res = await fetch("http://localhost:5000/api/addresses", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ user_id: userId, address: newAddress, is_default: addresses.length === 0 })
//     });
//     if (res.ok) {
//       setNewAddress("");
//       fetchAddresses();
//     }
//   };

//   const makeDefault = async (id) => {
//     const res = await fetch("http://localhost:5000/api/addresses/default", {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ user_id: userId, address_id: id })
//     });
//     if (res.ok) {
//       setDefaultId(id);
//       fetchAddresses();
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Manage Delivery Addresses</h2>

//       <div className="mb-4">
//         <input
//           value={newAddress}
//           onChange={(e) => setNewAddress(e.target.value)}
//           placeholder="Enter new address"
//           className="w-full p-2 border rounded mb-2"
//         />
//         <button onClick={addAddress} className="bg-blue-600 text-white px-4 py-2 rounded">
//           Add Address
//         </button>
//       </div>

//       <div className="space-y-4">
//         {addresses.map((addr) => (
//           <div key={addr.id} className="border p-3 rounded shadow flex justify-between items-center">
//             <span>{addr.address}</span>
//             <button
//               onClick={() => makeDefault(addr.id)}
//               className={`text-sm px-3 py-1 rounded ${addr.is_default ? "bg-green-500 text-white" : "bg-gray-300"}`}
//             >
//               {addr.is_default ? "Default" : "Set Default"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AddressManager;

import React, { useState, useEffect } from "react";

const AddressManager = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [defaultId, setDefaultId] = useState(null);
  const userId = localStorage.getItem("userId");

  // Fetch all addresses
  const fetchAddresses = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/addresses/${userId}`);
      const data = await res.json();
      setAddresses(data);
      const defaultAddr = data.find(addr => addr.is_default);
      if (defaultAddr) setDefaultId(defaultAddr.id);
    } catch (err) {
      console.error("Failed to fetch addresses", err);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const addAddress = async () => {
    if (!newAddress.trim()) return;
    const res = await fetch("http://localhost:5000/api/addresses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        address: newAddress,
        is_default: addresses.length === 0,
      }),
    });
    if (res.ok) {
      setNewAddress("");
      fetchAddresses();
    }
  };

  const makeDefault = async (id) => {
    const res = await fetch("http://localhost:5000/api/addresses/default", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, address_id: id }),
    });
    if (res.ok) {
      setDefaultId(id);
      fetchAddresses();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Delivery Addresses</h2>

      <div className="mb-4">
        <input
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          placeholder="Enter new address"
          className="w-full p-2 border rounded mb-2"
        />
        <button onClick={addAddress} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Address
        </button>
      </div>

      <div className="space-y-4">
        {addresses.map((addr) => (
          <div key={addr.id} className="border p-3 rounded shadow flex justify-between items-center">
            <span>{addr.address}</span>
            <button
              onClick={() => makeDefault(addr.id)}
              className={`text-sm px-3 py-1 rounded ${addr.is_default ? "bg-green-500 text-white" : "bg-gray-300"}`}
            >
              {addr.is_default ? "Default" : "Set Default"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressManager;
