import React from 'react';

function VendorDashboard() {
  const email = localStorage.getItem("loggedInEmail");

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Vendor Dashboard</h1>
      <p className="text-gray-600">Logged in as: {email}</p>
    </div>
  );
}

export default VendorDashboard;
