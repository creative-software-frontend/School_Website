import { createContext, useContext, useEffect, useState } from "react";
import axiosPublic from "@/api/axiosPublic";

const FrontendContext = createContext({});

export const FrontendProvider = ({ children }) => {
  // institute
  const [institute, setInstitute] = useState({});
  const [teachers, setTeachers] = useState({});

  // loader
  const [loader, setLoader] = useState(false);

  // backendUrl
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getHomePageData = async () => {
    try {
      setLoader(true);
      const { data } = await axiosPublic.get("/homepage-data");
      setInstitute(data.institute);
      setTeachers(data.teachers);
      setLoader(false);
    } catch (error) {
      // Handle errors here
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  return (
    <FrontendContext.Provider
      value={{
        institute,
        teachers,
        loader,
        backendUrl,
      }}
    >
      {children}
    </FrontendContext.Provider>
  );
};

export function useFrontendContext() {
  return useContext(FrontendContext);
}
