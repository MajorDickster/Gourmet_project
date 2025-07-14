// // import React from "react";
// // import { UserSignup } from "../api/service.js"; // adjust path if needed
// // import { useNavigate } from "react-router-dom";

// // const SignUp = () => {
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //   e.preventDefault();

// //   const response = await fetch("http://localhost:5000/api/signup", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(formData)
// //   });

// //   const data = await response.json();

// //   if (response.ok) {
// //     localStorage.setItem("userId", data.user_id); // Store user ID
// //     localStorage.setItem("loggedInEmail", formData.email);
// //     localStorage.setItem("userRole", "customer");
// //     navigate("/customer/dashboard");
// //   } else {
// //     alert(data.error || "Signup failed");
// //   }
// // };

// //   return (
// //     <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md mx-auto mt-10">
// //       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up to eat!</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
// //           <input
// //             id="email"
// //             name="email"
// //             type="email"
// //             required
// //             className="mt-1 p-2 w-full border rounded-md"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
// //           <input
// //             id="password"
// //             name="password"
// //             type="password"
// //             required
// //             className="mt-1 p-2 w-full border rounded-md"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
// //         >
// //           Submit
// //         </button>
// //       </form>
// //       <p className="mt-4 text-center text-sm text-gray-600">
// //         Already have an account?{" "}
// //         <a href="/login" className="text-blue-500 hover:underline">Login</a>
// //       </p>
// //     </div>
// //   );
// // };

// // export default SignUp;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     role: "customer"
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("userId", data.user_id); // Save user ID
//         localStorage.setItem("loggedInEmail", formData.email);
//         localStorage.setItem("userRole", "customer");
//         alert("Signup successful!");
//         navigate("/customer/dashboard");
//       } else {
//         alert(data.error || "Signup failed");
//       }
//     } catch (err) {
//       alert("Error: " + err.message);
//     }
//   };

//   return (
//     <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up to eat!</h2>
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
//           Submit
//         </button>
//       </form>
//       <p className="mt-4 text-center text-sm text-gray-600">
//         Already have an account?{" "}
//         <a href="/login" className="text-blue-500 hover:underline">Login</a>
//       </p>
//     </div>
//   );
// };

// export default SignUp;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     const payload = {
//       email,
//       password,
//       role: "customer"
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("userId", data.user_id);
//         localStorage.setItem("loggedInEmail", email);
//         localStorage.setItem("userRole", "customer");

//         alert("Signup successful! Please complete your profile.");
//         navigate("/complete-profile");
//       } else {
//         alert(data.error || "Signup failed");
//       }
//     } catch (err) {
//       alert("Error: " + err.message);
//     }
//   };

//   return (
//     <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up to eat!</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
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
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//         >
//           Submit
//         </button>
//       </form>
//       <p className="mt-4 text-center text-sm text-gray-600">
//         Already have an account?{" "}
//         <a href="/login" className="text-blue-500 hover:underline">Login</a>
//       </p>
//     </div>
//   );
// };

// export default SignUp;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setError("");

//     const form = e.target;
//     const email = form.email.value.trim();
//     const password = form.password.value;

//     const payload = {
//       email,
//       password,
//       role: "customer", // hardcoded role (you can expand this for role selection later)
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (response.ok && data.user_id) {
//         localStorage.setItem("userId", data.user_id);
//         localStorage.setItem("loggedInEmail", email);
//         localStorage.setItem("userRole", data.role); // use backend-provided role

//         alert("Signup successful! Please complete your profile.");
//         navigate("/complete-profile");
//       } else {
//         setError(data.error || "Signup failed — possibly due to duplicate email.");
//       }
//     } catch (err) {
//       console.error("Signup error:", err);
//       setError("Server error: " + err.message);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up to eat!</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             className="mt-1 p-2 w-full border rounded-md"
//             disabled={submitting}
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             required
//             className="mt-1 p-2 w-full border rounded-md"
//             disabled={submitting}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={submitting}
//           className={`w-full py-2 px-4 rounded text-white transition ${
//             submitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {submitting ? "Submitting..." : "Submit"}
//         </button>
//       </form>

//       {error && (
//         <p className="mt-4 text-center text-sm text-red-600">{error}</p>
//       )}

//       <p className="mt-4 text-center text-sm text-gray-600">
//         Already have an account?{" "}
//         <a href="/login" className="text-blue-500 hover:underline">Login</a>
//       </p>
//     </div>
//   );
// };

// export default SignUp;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setError("");

//     const form = e.target;
//     const email = form.email.value.trim();
//     const password = form.password.value;

//     const payload = {
//       email,
//       password,
//       role: "customer",
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (response.ok && data.user_id) {
//         localStorage.setItem("userId", data.user_id);
//         localStorage.setItem("loggedInEmail", email);
//         localStorage.setItem("userRole", data.role);

//         alert("Signup successful! Please complete your profile.");
//         navigate("/complete-profile");
//       } else {
//         setError(data.error || "Signup failed — possibly due to duplicate email.");
//       }
//     } catch (err) {
//       console.error("Signup error:", err);
//       setError("Server error: " + err.message);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 flex items-center justify-center">
//       <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up to eat!</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled={submitting}
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               className="mt-1 p-2 w-full border rounded-md"
//               disabled={submitting}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={submitting}
//             className={`w-full py-2 px-4 rounded text-white transition ${
//               submitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {submitting ? "Submitting..." : "Submit"}
//           </button>
//         </form>

//         {error && (
//           <p className="mt-4 text-center text-sm text-red-600">{error}</p>
//         )}

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-500 hover:underline">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    const payload = {
      email,
      password,
      role: "customer",
    };

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.user_id) {
        localStorage.setItem("userId", data.user_id);
        localStorage.setItem("loggedInEmail", email);
        localStorage.setItem("userRole", data.role);

        alert("Signup successful! Please complete your profile.");
        navigate("/complete-profile");
      } else {
        setError(data.error || "Signup failed — possibly due to duplicate email.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError("Server error: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up to eat!</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 p-2 w-full border rounded-md"
              disabled={submitting}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 p-2 w-full border rounded-md"
              disabled={submitting}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-2 px-4 rounded text-white transition ${
              submitting ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-sm text-red-600">{error}</p>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
