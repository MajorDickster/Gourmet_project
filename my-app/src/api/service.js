import axios from 'axios';



const BASE_URL = import.meta.env.VITE_BASE_URL;

export const UserSignup = async (email, password) => {
    try{
        const response = await axios.post(`${BASE_URL}/signup`, {
            email,
            password
        });
        return response.data; // Return the response data
    }
    catch (error) {
        console.error("Error during signup:", error);
        throw error; // Re-throw the error for further handling
    }
}

// src/api/auth.js or wherever you manage auth API calls



export const UserLogin = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email,
            password
        });
        return response.data; // Return login response
    } catch (error) {
        console.error("Error during login:", error);
        throw error; // Propagate error to handle it in the UI
    }
};
