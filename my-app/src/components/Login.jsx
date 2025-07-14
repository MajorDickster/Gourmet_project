// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [status, setStatus] = useState({ message: '', isError: false });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ message: '', isError: false });

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ message: data.message, isError: false });
//         console.log("Login successful", data);

//         // ✅ Save to localStorage
//         localStorage.setItem("loggedInEmail", data.email);
//         localStorage.setItem("userRole", data.role);
//         localStorage.setItem("userId", data.user_id);


//         // ✅ Redirect based on role
//         if (data.role === 'customer') {
//           navigate('/customer/dashboard');
//         } else if (data.role === 'vendor') {
//           navigate('/vendor/dashboard');
//         } else if (data.role === 'rider') {
//           navigate('/rider/dashboard');
//         } else if (data.role === 'admin') {
//           navigate('/admin/dashboard');
//         } else {
//           navigate('/');
//         }

//       } else {
//         setStatus({ message: data.error || 'Login failed', isError: true });
//       }
//     } catch (err) {
//       setStatus({ message: 'Server error', isError: true });
//     }
//   };

//   return (
//     <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to your account</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
//           Login
//         </button>
//       </form>
//       {status.message && (
//         <p className={`mt-4 text-center text-sm ${status.isError ? 'text-red-600' : 'text-green-600'}`}>
//           {status.message}
//         </p>
//       )}
//       <p className="mt-4 text-center text-sm text-gray-600">
//         Don’t have an account?{" "}
//         <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
//       </p>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [status, setStatus] = useState({ message: '', isError: false });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ message: '', isError: false });

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ message: data.message, isError: false });
//         console.log("Login successful", data);

//         // ✅ Save to localStorage
//         localStorage.setItem("loggedInEmail", data.email);
//         localStorage.setItem("userRole", data.role);
//         localStorage.setItem("userId", data.user_id);

//         // ✅ Clear cart on login
//         localStorage.removeItem("cart");

//         // ✅ Redirect based on role
//         if (data.role === 'customer') {
//           navigate('/customer/dashboard');
//         } else if (data.role === 'vendor') {
//           navigate('/vendor/dashboard');
//         } else if (data.role === 'rider') {
//           navigate('/rider/dashboard');
//         } else if (data.role === 'admin') {
//           navigate('/admin/dashboard');
//         } else {
//           navigate('/');
//         }

//       } else {
//         setStatus({ message: data.error || 'Login failed', isError: true });
//       }
//     } catch (err) {
//       setStatus({ message: 'Server error', isError: true });
//     }
//   };

//   return (
//     <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to your account</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
//           Login
//         </button>
//       </form>
//       {status.message && (
//         <p className={`mt-4 text-center text-sm ${status.isError ? 'text-red-600' : 'text-green-600'}`}>
//           {status.message}
//         </p>
//       )}
//       <p className="mt-4 text-center text-sm text-gray-600">
//         Don’t have an account?{" "}
//         <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
//       </p>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [status, setStatus] = useState({ message: '', isError: false });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ message: '', isError: false });

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ message: data.message, isError: false });
//         console.log("✅ Login successful", data);

//         // ✅ Save to localStorage
//         localStorage.setItem("loggedInEmail", data.email);
//         localStorage.setItem("userId", data.user_id);
//         localStorage.setItem("userRole", data.role);

//         // ✅ Clear cart on login
//         localStorage.removeItem("cart");

//         // ✅ Redirect based on role
//         const roleRoutes = {
//           customer: '/customer/dashboard',
//           vendor: '/vendor/dashboard',
//           rider: '/rider/dashboard',
//           admin: '/admin/dashboard'
//         };

//         const redirectPath = roleRoutes[data.role];
//         if (redirectPath) {
//           navigate(redirectPath);
//         } else {
//           alert(`⚠️ Unknown role: ${data.role}`);
//           navigate('/');
//         }

//       } else {
//         setStatus({ message: data.error || 'Login failed', isError: true });
//       }
//     } catch (err) {
//       console.error("❌ Login error:", err);
//       setStatus({ message: 'Server error', isError: true });
//     }
//   };

//   return (
//     <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to your account</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//         >
//           Login
//         </button>
//       </form>

//       {status.message && (
//         <p className={`mt-4 text-center text-sm ${status.isError ? 'text-red-600' : 'text-green-600'}`}>
//           {status.message}
//         </p>
//       )}

//       <p className="mt-4 text-center text-sm text-gray-600">
//         Don’t have an account?{" "}
//         <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
//       </p>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [status, setStatus] = useState({ message: '', isError: false });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ message: '', isError: false });

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ message: data.message, isError: false });
//         console.log("✅ Login successful", data);

//         localStorage.setItem("loggedInEmail", data.email);
//         localStorage.setItem("userId", data.user_id);
//         localStorage.setItem("userRole", data.role);
//         localStorage.removeItem("cart");

//         const roleRoutes = {
//           customer: '/customer/dashboard',
//           vendor: '/vendor/dashboard',
//           rider: '/rider/dashboard',
//           admin: '/admin/dashboard'
//         };

//         const redirectPath = roleRoutes[data.role];
//         if (redirectPath) {
//           navigate(redirectPath);
//         } else {
//           alert(`⚠️ Unknown role: ${data.role}`);
//           navigate('/');
//         }

//       } else {
//         setStatus({ message: data.error || 'Login failed', isError: true });
//       }
//     } catch (err) {
//       console.error("❌ Login error:", err);
//       setStatus({ message: 'Server error', isError: true });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 via-white to-green-50">
//       <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-xl">
//         <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 p-2.5 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md font-semibold hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         {status.message && (
//           <p className={`mt-4 text-center text-sm ${status.isError ? 'text-red-600' : 'text-green-600'}`}>
//             {status.message}
//           </p>
//         )}

//         <p className="mt-6 text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-blue-500 hover:underline font-medium">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [status, setStatus] = useState({ message: '', isError: false });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ message: '', isError: false });

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ message: data.message, isError: false });

//         localStorage.setItem("loggedInEmail", data.email);
//         localStorage.setItem("userId", data.user_id);
//         localStorage.setItem("userRole", data.role);
//         localStorage.removeItem("cart");

//         const roleRoutes = {
//           customer: '/customer/dashboard',
//           vendor: '/vendor/dashboard',
//           rider: '/rider/dashboard',
//           admin: '/admin/dashboard'
//         };

//         const redirectPath = roleRoutes[data.role];
//         if (redirectPath) {
//           navigate(redirectPath);
//         } else {
//           alert(`⚠️ Unknown role: ${data.role}`);
//           navigate('/');
//         }

//       } else {
//         setStatus({ message: data.error || 'Login failed', isError: true });
//       }
//     } catch (err) {
//       console.error("❌ Login error:", err);
//       setStatus({ message: 'Server error', isError: true });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-cyan-200 to-green-100 px-4">
//       <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to your account</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         {status.message && (
//           <p className={`mt-4 text-center text-sm ${status.isError ? 'text-red-600' : 'text-green-600'}`}>
//             {status.message}
//           </p>
//         )}

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [status, setStatus] = useState({ message: '', isError: false });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ message: '', isError: false });

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ message: data.message, isError: false });

//         localStorage.setItem("loggedInEmail", data.email);
//         localStorage.setItem("userId", data.user_id);
//         localStorage.setItem("userRole", data.role);
//         localStorage.removeItem("cart");

//         const roleRoutes = {
//           customer: '/customer/dashboard',
//           vendor: '/vendor/dashboard',
//           rider: '/rider/dashboard',
//           admin: '/admin/dashboard'
//         };

//         const redirectPath = roleRoutes[data.role];
//         if (redirectPath) {
//           navigate(redirectPath);
//         } else {
//           alert(`⚠️ Unknown role: ${data.role}`);
//           navigate('/');
//         }

//       } else {
//         setStatus({ message: data.error || 'Login failed', isError: true });
//       }
//     } catch (err) {
//       console.error("❌ Login error:", err);
//       setStatus({ message: 'Server error', isError: true });
//     }
//   };

//   return (
//   <div className="min-h-screen bg-gradient-to-br from-blue-200 via-cyan-100 to-green-100 flex items-center justify-center">
//     <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-xl">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to your account</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
//         >
//           Login
//         </button>
//       </form>

//       {status.message && (
//         <p className={`mt-4 text-center text-sm ${status.isError ? 'text-red-600' : 'text-green-600'}`}>
//           {status.message}
//         </p>
//       )}

//       <p className="mt-4 text-center text-sm text-gray-600">
//         Don’t have an account?{" "}
//         <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
//       </p>
//     </div>
//   </div>
// );

// }

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [status, setStatus] = useState({ message: '', isError: false });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ message: '', isError: false });

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ message: data.message, isError: false });

//         localStorage.setItem("loggedInEmail", data.email);
//         localStorage.setItem("userId", data.user_id);
//         localStorage.setItem("userRole", data.role);
//         localStorage.removeItem("cart");

//         const roleRoutes = {
//           customer: '/customer/dashboard',
//           vendor: '/vendor/dashboard',
//           rider: '/rider/dashboard',
//           admin: '/admin/dashboard'
//         };

//         const redirectPath = roleRoutes[data.role];
//         if (redirectPath) {
//           navigate(redirectPath);
//         } else {
//           alert(`⚠️ Unknown role: ${data.role}`);
//           navigate('/');
//         }

//       } else {
//         setStatus({ message: data.error || 'Login failed', isError: true });
//       }
//     } catch (err) {
//       console.error("❌ Login error:", err);
//       setStatus({ message: 'Server error', isError: true });
//     }
//   };

//   return (
//     <div className="h-screen w-screen bg-gradient-to-br from-blue-300 via-cyan-100 to-green-100 flex items-center justify-center">
//       <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-xl">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to your account</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
//           >
//             Login
//           </button>
//         </form>

//         {status.message && (
//           <p className={`mt-4 text-center text-sm ${status.isError ? 'text-red-600' : 'text-green-600'}`}>
//             {status.message}
//           </p>
//         )}

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';

// function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [status, setStatus] = useState({ message: '', isError: false });
//   // const navigate = useNavigate(); // Commented out for demo - uncomment in your project

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ message: '', isError: false });

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ message: data.message, isError: false });

//         // Store user data - Note: In real implementation, avoid localStorage for sensitive data
//         if (typeof(Storage) !== "undefined") {
//           localStorage.setItem("loggedInEmail", data.email);
//           localStorage.setItem("userId", data.user_id);
//           localStorage.setItem("userRole", data.role);
//           localStorage.removeItem("cart");
//         }

//         const roleRoutes = {
//           customer: '/customer/dashboard',
//           vendor: '/vendor/dashboard',
//           rider: '/rider/dashboard',
//           admin: '/admin/dashboard'
//         };

//         const redirectPath = roleRoutes[data.role];
//         if (redirectPath) {
//           // navigate(redirectPath); // Uncomment in your project
//           console.log(`Would navigate to: ${redirectPath}`);
//         } else {
//           alert(`⚠️ Unknown role: ${data.role}`);
//           // navigate('/'); // Uncomment in your project
//         }

//       } else {
//         setStatus({ message: data.error || 'Login failed', isError: true });
//       }
//     } catch (err) {
//       console.error("❌ Login error:", err);
//       setStatus({ message: 'Server error. Please try again.', isError: true });
//     }
//   };

//   return (
//     <div className="h-screen w-screen bg-gradient-to-br from-blue-300 via-cyan-100 to-green-100 flex items-center justify-center">
//       <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-xl">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Login to your account
//         </h2>
        
//         <div className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter your email"
//             />
//           </div>
          
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter your password"
//             />
//           </div>
          
//           <button
//             onClick={handleSubmit}
//             className="w-full bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium"
//           >
//             Login
//           </button>
//         </div>

//         {status.message && (
//           <p className={`mt-4 text-center text-sm ${status.isError ? 'text-red-600' : 'text-green-600'}`}>
//             {status.message}
//           </p>
//         )}

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <button 
//             onClick={() => {
//               // navigate('/signup'); // Uncomment in your project
//               console.log('Would navigate to signup');
//             }}
//             className="text-blue-500 hover:underline cursor-pointer"
//           >
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [status, setStatus] = useState({ message: '', isError: false });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(`🔍 Input change detected: ${name} = "${value}"`); // Debug log
    
//     setFormData(prev => {
//       const newData = { ...prev, [name]: value };
//       console.log('🔄 New form data:', newData); // Debug log
//       return newData;
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ message: '', isError: false });
    
//     console.log('📝 Form submitted with data:', formData); // Debug log

//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ message: data.message, isError: false });

//         localStorage.setItem("loggedInEmail", data.email);
//         localStorage.setItem("userId", data.user_id);
//         localStorage.setItem("userRole", data.role);
//         localStorage.removeItem("cart");

//         const roleRoutes = {
//           customer: '/customer/dashboard',
//           vendor: '/vendor/dashboard',
//           rider: '/rider/dashboard',
//           admin: '/admin/dashboard'
//         };

//         const redirectPath = roleRoutes[data.role];
//         if (redirectPath) {
//           navigate(redirectPath);
//         } else {
//           alert(`⚠️ Unknown role: ${data.role}`);
//           navigate('/');
//         }

//       } else {
//         setStatus({ message: data.error || 'Login failed', isError: true });
//       }
//     } catch (err) {
//       console.error("❌ Login error:", err);
//       setStatus({ message: 'Server error', isError: true });
//     }
//   };

//   // Debug: Log renders
//   console.log('🎨 Login component rendered with formData:', formData);

//   return (
//     <div className="h-screen w-screen bg-gradient-to-br from-blue-300 via-cyan-100 to-green-100 flex items-center justify-center">
//       <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-xl">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to your account</h2>
        
        
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-black-700">Email</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               onFocus={() => console.log('📧 Email input focused')}
//               onBlur={() => console.log('📧 Email input blurred')}
//               className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-black-700">Password</label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               onFocus={() => console.log('🔒 Password input focused')}
//               onBlur={() => console.log('🔒 Password input blurred')}
//               onKeyDown={(e) => console.log('⌨️ Key pressed in password:', e.key)}
//               className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-red-500 bg-white"
//               placeholder="Enter your password"
//               style={{ backgroundColor: 'white' }} // Force white background
//             />
//           </div>
          

//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
//           >
//             Login
//           </button>
//         </form>

//         {status.message && (
//           <p className={`mt-4 text-center text-sm ${status.isError ? 'text-red-600' : 'text-green-600'}`}>
//             {status.message}
//           </p>
//         )}

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState({ message: '', isError: false });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: '', isError: false });

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Store token and user info
        localStorage.setItem("token", data.access_token); // 🛡️ JWT stored
        localStorage.setItem("loggedInEmail", data.email);
        localStorage.setItem("userId", data.user_id);
        localStorage.setItem("userRole", data.role);
        localStorage.removeItem("cart"); // optional cleanup

        setStatus({ message: data.message, isError: false });

        // Redirect based on role
        const roleRoutes = {
          customer: '/customer/dashboard',
          vendor: '/vendor/dashboard',
          rider: '/rider/dashboard',
          admin: '/admin/dashboard'
        };

        const redirectPath = roleRoutes[data.role];
        if (redirectPath) {
          navigate(redirectPath);
        } else {
          alert(`⚠️ Unknown role: ${data.role}`);
          navigate('/');
        }

      } else {
        setStatus({ message: data.error || 'Login failed', isError: true });
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setStatus({ message: 'Server error', isError: true });
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-300 via-cyan-100 to-green-100 flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to your account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-red-500 bg-white"
              placeholder="Enter your password"
              style={{ backgroundColor: 'white' }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        {status.message && (
          <p className={`mt-4 text-center text-sm ${status.isError ? 'text-red-600' : 'text-green-600'}`}>
            {status.message}
          </p>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
