import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../api/authAxios";
import { useNavigate } from "react-router-dom";
import axiosPublic, { axiosOnly, csrf } from "@/api/axiosPublic";
import axiosAuth from "../api/authAxios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // homepage data

  const [homePageData, setHomePageData] = useState([]);

  const [customer, setCustomer] = useState(null);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState("");
  const [customerToken, setCustomerToken] = useState(
    localStorage.getItem("CUSTOMER_SECRET_ACCESS_TOKEN")
  );
  const [profileUpdateMessage, setProfileUpdateMessage] = useState(null);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  // search

  const [searchProducts, setSearchProducts] = useState([]);
  const [totalSearchProducts, setTotalSearchProducts] = useState("");

  // backendUrl
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getHomePageAndCustomer = async () => {
    try {
      const { data } = await axiosPublic.get("/homepage-data");
      setHomePageData(data.result);

      try {
        const { data } = await axiosAuth.get("/api/user");
        setCustomer(data);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching customer:", error);
      }
    } catch (error) {
      // Handle errors here
      console.error("Error fetching homepage data:", error);
    }
  };

  const getCustomer = async () => {
    try {
      const { data } = await axiosAuth.get("/api/user");
      setCustomer(data);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching customer:", error);
    }
  };

  const login = async ({ ...formData }) => {
    setErrors([]);
    try {
      const token = await csrf();

      // Include CSRF token in the headers of the request
      const config = {
        headers: {
          "X-CSRF-TOKEN": token, // Replace 'X-CSRF-TOKEN' with your actual header name
        },
      };
      const { data } = await axiosPublic.post("/login", formData, config);
      setCustomerToken(data.token);
      localStorage.setItem("CUSTOMER_SECRET_ACCESS_TOKEN", data.token);
      await getCustomer();
      navigate("/my-profile");
    } catch (e) {
      if (e.response.status === 401) {
        setMessage(e.response.data.error);
        // Clear errors after 3 seconds
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
        // Clear errors after 3 seconds
        setTimeout(() => {
          setErrors([]);
        }, 3000);
      }
    }
  };

  const register = async ({ ...formData }) => {
    setErrors([]);
    try {
      const token = await csrf(); // Fetch CSRF token

      // Include CSRF token in the headers of the request
      const config = {
        headers: {
          "X-CSRF-TOKEN": token, // Replace 'X-CSRF-TOKEN' with your actual header name
        },
      };

      const { data } = await axiosPublic.post("/register", formData, config);
      setCustomerToken(data.token);
      localStorage.setItem("CUSTOMER_SECRET_ACCESS_TOKEN", data.token);
      await getCustomer();
      navigate("/my-profile");
      // navigate("/visitor");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const vendorRegister = async ({ ...formData }) => {
    setErrors([]);
    try {
      const token = await csrf(); // Fetch CSRF token

      // Include CSRF token in the headers of the request
      const config = {
        headers: {
          "X-CSRF-TOKEN": token, // Replace 'X-CSRF-TOKEN' with your actual header name
        },
      };

      const { data } = await axiosPublic.post(
        "/vendor-register",
        formData,
        config
      );
      setMessage("Success!. You Registration has been completed.");

      // Redirect the user to google.com after successful registration
      window.location.href = backendUrl + "/vendor/login";
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const customerProfileUpdate = async ({ ...formData }) => {
    setErrors([]);
    try {
      const token = await csrf(); // Fetch CSRF token

      // Include CSRF token in the headers of the request
      const config = {
        headers: {
          "X-CSRF-TOKEN": token, // Replace 'X-CSRF-TOKEN' with your actual header name
        },
      };

      const { data } = await axiosAuth.post(
        "/api/customer-profile-update",
        formData,
        config
      );

      setProfileUpdateMessage(data.message);
      await getCustomer();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const logout = async () => {
    setLoader(true);
    try {
      await axiosAuth.post("/api/logout");

      setCustomer(null);
      localStorage.removeItem("CUSTOMER_SECRET_ACCESS_TOKEN");
      setCustomerToken("");
      setLoader(false);
      // navigate("/customer/login");
    } catch (e) {
      if (e.response && e.response.status === 422) {
        setErrors(e.response.data.errors);
      } else {
        console.error("Error during logout:", e);
      }
    }
  };

  // place order

  const placeOrder = async (
    formData,
    userData,
    deliveryFee,
    totalAmount,
    totalAmountWithoutDiscount,
    totalDiscount
  ) => {
    setErrors([]);
    try {
      const requestData = {
        cartItems: formData,
        userInfo: userData,
        deliveryFee: deliveryFee,
        totalAmount: totalAmount,
        totalAmountWithoutDiscount: totalAmountWithoutDiscount,
        totalDiscount: totalDiscount,
      };
      await axiosAuth.post("/api/place-order", requestData);
      navigate("/payment");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const [isFrontend, setIsFrontEnd] = useState(true);

  useEffect(() => {
    if (isFrontend) {
      getHomePageAndCustomer();
    } else {
      getCustomer();
    }
  }, [isFrontend]);

  // submit newsletter

  const submitNewsLetter = async ({ ...formData }) => {
    setErrors([]);
    try {
      const token = await csrf(); // Fetch CSRF token

      // Include CSRF token in the headers of the request
      const config = {
        headers: {
          "X-CSRF-TOKEN": token, // Replace 'X-CSRF-TOKEN' with your actual header name
        },
      };

      const { data } = await axiosPublic.post("/news-letter", formData, config);
      setMessage("Success. Your Newsletter has been submitted");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (e) {
      console.log(e.response);
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  // search products

  const getSearchProducts = async (search) => {
    setLoader(true);
    const { data } = await axiosPublic.get("/search-products/" + search);
    setSearchProducts(data.result.products);
    setTotalSearchProducts(data.result.total_products);
    setLoader(false);
  };

  // search hints

  const getSearchHints = async (hint) => {};

  return (
    <AuthContext.Provider
      value={{
        homePageData,
        customer,
        errors,
        login,
        register,
        logout,
        customerProfileUpdate,
        customerToken,
        loader,
        profileUpdateMessage,
        placeOrder,
        backendUrl,
        vendorRegister,
        message,
        setIsFrontEnd,
        submitNewsLetter,
        getSearchProducts,
        searchProducts,
        totalSearchProducts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
