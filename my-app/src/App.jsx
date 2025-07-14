import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUpp'; // Make sure this is not `SignUpp`
import CompleteProfile from './components/CompleteProfile';
import Logout from './components/Logout';
import CustomerDashboard from './components/CustomerDashboard';
import VendorDashboard from './components/VendorDashboard';
import RiderDashboard from './components/RiderDashboard';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import RestaurantPage from './components/RestaurantPage';
import CheckoutPage from './components/CheckoutPage';
import OrderSuccess from './components/OrderSuccess';
import OrderHistory from './components/OrderHistory';
import AddressManager from './components/AddressManager';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/customer/dashboard" element={
          <PrivateRoute allowedRole="customer">
            <CustomerDashboard />
          </PrivateRoute>
        } />

        <Route path="/vendor/dashboard" element={
          <PrivateRoute allowedRole="vendor">
            <VendorDashboard />
          </PrivateRoute>
        } />

        <Route path="/rider/dashboard" element={
          <PrivateRoute allowedRole="rider">
            <RiderDashboard />
          </PrivateRoute>
        } />

        <Route path="/admin/dashboard" element={
          <PrivateRoute allowedRole="admin">
            <AdminDashboard />
          </PrivateRoute>
        } />

        <Route path="/restaurant/:id" element={
          <PrivateRoute allowedRole="customer">
            <RestaurantPage />
          </PrivateRoute>
        } />

        <Route path="/checkout" element={<PrivateRoute allowedRole="customer">
            <CheckoutPage />
          </PrivateRoute>} />

        <Route path="/order-success" element={<PrivateRoute allowedRole="customer">
          <OrderSuccess />
        </PrivateRoute>} />

        <Route path="/order-history" element={<PrivateRoute allowedRole="customer">
          <OrderHistory />
        </PrivateRoute>} />

        <Route path="/address-manager" element={<PrivateRoute allowedRole="customer">
          <AddressManager />
        </PrivateRoute>} />


        {/* Fallback route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
