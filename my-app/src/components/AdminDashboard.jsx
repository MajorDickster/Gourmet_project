import React from 'react';

function AdminDashboard() {
  const email = localStorage.getItem("loggedInEmail");

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Admin Control Panel</h1>
      <p className="text-gray-600">Logged in as: {email}</p>
    </div>
  );
}

export default AdminDashboard;
