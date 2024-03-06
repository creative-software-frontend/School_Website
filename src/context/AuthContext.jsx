import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosPublic, { csrf } from "@/api/axiosPublic";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  // handle form submission

  const submitOnlineAdmission = async ({ ...formData }) => {
    try {
      const token = await csrf(); // Fetch CSRF token

      // Include CSRF token in the headers of the request
      const config = {
        headers: {
          "X-CSRF-TOKEN": token,
        },
      };
      await axiosPublic.post("online-admission", formData, config);
      alert("Your application has been submitted for Review");
    } catch (e) {
      console.log(e);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loader,
        submitOnlineAdmission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
