// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const BASE_URL = import.meta.env.VITE_BASE_URL;

// const CompleteProfile = () => {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     phone_number: '',
//     date_of_birth: '',
//     address: '',
//     role: ''
//   });

//   const [status, setStatus] = useState('');
//   const email = localStorage.getItem("signedUpEmail") || localStorage.getItem("loggedInEmail");
//   const navigate = useNavigate();

//   // ✅ Auto-skip if profile already completed
//   useEffect(() => {
//     const checkProfile = async () => {
//       if (!email) return;

//       try {
//         const res = await axios.get(`${BASE_URL}/user-info?email=${email}`);
//         if (res.data.completed) {
//           const role = localStorage.getItem("userRole") || "customer";
//           navigate(`/${role}/dashboard`);
//         }
//       } catch (err) {
//         console.error("Failed to check profile status", err);
//       }
//     };

//     checkProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       setStatus('❌ Email not found. Please sign up again.');
//       return;
//     }

//     try {
//       const res = await axios.put(`${BASE_URL}/complete-profile`, {
//         ...formData,
//         email
//       });

//       const role = formData.role || 'customer';
//       localStorage.setItem("userRole", role);

//       setStatus('✅ Profile updated successfully!');
//       navigate(`/${role}/dashboard`);
//     } catch (err) {
//       console.error(err);
//       setStatus('❌ Failed to update profile.');
//     }
//   };

//   return (
//     <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Complete Your Profile</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {["first_name", "last_name", "phone_number", "date_of_birth", "address"].map(field => (
//           <div key={field}>
//             <label htmlFor={field} className="block text-sm font-medium text-gray-700">
//               {field.replace('_', ' ')}
//             </label>
//             <input
//               id={field}
//               name={field}
//               type={field === "date_of_birth" ? "date" : "text"}
//               required
//               value={formData[field]}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//         ))}

//         {/* 🔽 Role Dropdown */}
//         <div>
//           <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
//           <select
//             id="role"
//             name="role"
//             required
//             value={formData.role}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           >
//             <option value="">-- Select Role --</option>
//             <option value="customer">Customer</option>
//             <option value="vendor">Vendor</option>
//             <option value="rider">Rider</option>
//           </select>
//         </div>

//         <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
//           Submit
//         </button>
//       </form>

//       {status && <p className="mt-4 text-center text-sm">{status}</p>}
//     </div>
//   );
// };

// export default CompleteProfile;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const BASE_URL = import.meta.env.VITE_BASE_URL;

// const CompleteProfile = () => {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     phone_number: '',
//     date_of_birth: '',
//     address: '',
//     role: ''
//   });

//   const [status, setStatus] = useState('');
//   const email = localStorage.getItem("signedUpEmail") || localStorage.getItem("loggedInEmail");
//   const navigate = useNavigate();

//   // ✅ Auto-skip if profile already completed
//   useEffect(() => {
//     const checkProfile = async () => {
//       if (!email) return;

//       try {
//         const res = await axios.get(`${BASE_URL}/user-info?email=${email}`);
//         if (res.data.completed) {
//           const role = localStorage.getItem("userRole") || "customer";
//           navigate(`/${role}/dashboard`);
//         }
//       } catch (err) {
//         console.error("Failed to check profile status", err);
//       }
//     };

//     checkProfile();
//   }, []);

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!email) {
//     setStatus('❌ Email not found. Please sign up again.');
//     return;
//   }

//   try {
//     await axios.put(`${BASE_URL}/complete-profile`, {
//       ...formData,
//       email
//     });

//     const role = formData.role || 'customer';

//     // ✅ Fix applied here
//     localStorage.setItem("userRole", role);
//     localStorage.setItem("loggedInEmail", email); // <== this ensures the right email is used
//     localStorage.removeItem("signedUpEmail");     // <== cleanup

//     setStatus('✅ Profile updated successfully!');
//     navigate(`/${role}/dashboard`);
//   } catch (err) {
//     console.error(err);
//     setStatus('❌ Failed to update profile.');
//   }
// };


//   return (
//     <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Complete Your Profile</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {["first_name", "last_name", "phone_number", "date_of_birth", "address"].map(field => (
//           <div key={field}>
//             <label htmlFor={field} className="block text-sm font-medium text-gray-700">
//               {field.replace('_', ' ')}
//             </label>
//             <input
//               id={field}
//               name={field}
//               type={field === "date_of_birth" ? "date" : "text"}
//               required
//               value={formData[field]}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//         ))}

//         {/* 🔽 Role Dropdown */}
//         <div>
//           <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
//           <select
//             id="role"
//             name="role"
//             required
//             value={formData.role}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           >
//             <option value="">-- Select Role --</option>
//             <option value="customer">Customer</option>
//             <option value="vendor">Vendor</option>
//             <option value="rider">Rider</option>
//           </select>
//         </div>

//         <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
//           Submit
//         </button>
//       </form>

//       {status && <p className="mt-4 text-center text-sm">{status}</p>}
//     </div>
//   );
// };

// export default CompleteProfile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const CompleteProfile = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    date_of_birth: '',
    address: '',
    role: ''
  });

  const [status, setStatus] = useState('');
  const email = localStorage.getItem("signedUpEmail") || localStorage.getItem("loggedInEmail");
  const navigate = useNavigate();

  useEffect(() => {
    const checkProfile = async () => {
      if (!email) return;

      try {
        const res = await axios.get(`${BASE_URL}/user-info?email=${email}`);
        if (res.data.completed) {
          const role = localStorage.getItem("userRole") || "customer";
          navigate(`/${role}/dashboard`);
        }
      } catch (err) {
        console.error("Failed to check profile status", err);
      }
    };

    checkProfile();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus('❌ Email not found. Please sign up again.');
      return;
    }

    try {
      await axios.put(`${BASE_URL}/complete-profile`, {
        ...formData,
        email
      });

      const role = formData.role || 'customer';

      localStorage.setItem("userRole", role);
      localStorage.setItem("loggedInEmail", email);
      localStorage.removeItem("signedUpEmail");

      setStatus('✅ Profile updated successfully!');
      navigate(`/${role}/dashboard`);
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to update profile.');
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-300 via-cyan-100 to-green-100 flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Complete Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["first_name", "last_name", "phone_number", "date_of_birth", "address"].map(field => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                {field.replace('_', ' ')}
              </label>
              <input
                id={field}
                name={field}
                type={field === "date_of_birth" ? "date" : "text"}
                required
                value={formData[field]}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          ))}

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">-- Select Role --</option>
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
              <option value="rider">Rider</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Submit
          </button>
        </form>

        {status && <p className="mt-4 text-center text-sm">{status}</p>}
      </div>
    </div>
  );
};

export default CompleteProfile;

