import axios from "axios";

const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

axiosAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem("CUSTOMER_SECRET_ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosAuth.interceptors.response.use(
  (response) => {
    return response; // Return the response in the success case
  },
  (error) => {
    try {
      const { response } = error;
      if (response.status === 401) {
        localStorage.removeItem("CUSTOMER_SECRET_ACCESS_TOKEN");
      }
    } catch (e) {
      console.error(e);
    }

    return Promise.reject(error); // Return a rejected promise in the error case
  }
);

export default axiosAuth;
