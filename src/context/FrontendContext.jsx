import { createContext, useContext, useEffect, useState } from "react";
import axiosPublic from "@/api/axiosPublic";

const FrontendContext = createContext({});

export const FrontendProvider = ({ children }) => {
  const [institute, setInstitute] = useState({});
  const [teachers, setTeachers] = useState({});
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sessions, setSessions] = useState([]);

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
      setStudents(data.students);
      setClasses(data.classes);
      setSessions(data.sessions);
      setLoader(false);
    } catch (error) {
      setLoader(false);
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
        students,
        classes,
        sessions,
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
