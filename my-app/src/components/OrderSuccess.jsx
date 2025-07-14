import { useEffect, useState } from "react";

const OrderSuccess = () => {
  const [address, setAddress] = useState("");

  useEffect(() => {
  const storedAddress = localStorage.getItem("deliveryAddress");
  if (storedAddress) {
    setAddress(storedAddress);
  }
}, []);


  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Thank you!</h1>
      <p className="text-lg mb-2">Your order has been placed successfully.</p>
      <p className="text-md text-gray-700 mb-4">
        <strong>Delivering to:</strong> {address}
      </p>
      <a href="/" className="mt-2 px-4 py-1 bg-green-500 text-white rounded">
        Back to Home
      </a>
    </div>
  );
};

export default OrderSuccess;
