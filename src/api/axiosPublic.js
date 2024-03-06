import axios from "axios";

// Create a new instance of axios without interceptors
const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
  // withCredentials: true,
});
export const axiosOnly = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  // withCredentials: true,
});
export default axiosPublic;

export const csrf = async () => {
  try {
    const response = await axiosOnly.get("/sanctum/csrf-cookie");
    return response.data.CSRF_TOKEN; // Return the CSRF token if needed
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
    throw error; // Throw error for handling if necessary
  }
};
