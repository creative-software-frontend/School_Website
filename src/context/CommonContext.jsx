import { createContext, useContext, useEffect, useState } from "react";

const CommonContext = createContext({});

export const CommonProvider = ({ children }) => {
  //   const [institute, setInstitute] = useState({});

  // Capitalize First Letter

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Function to get today's date in the format "YYYY-MM-DD"
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Ensure month and day are two digits
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  }

  // Format Date like 31-02-2024
  const formatDate = (str) => {
    // Convert the string to a JavaScript Date object
    const dateObject = new Date(str);

    // Extracting date components
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = dateObject.getFullYear();

    // Combine components in the desired format
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  // format time like -> 03:11 PM

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date(0, 0, 0, hours, minutes);
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  // get day name from date

  const getDayName = (dateString) => {
    const options = {
      weekday: "long",
    };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  // calculate duration from start time(14:20) and end time(16:20)  to ( 2 Hours 30 Minutes)

  const calculateDuration = (startTime, endTime) => {
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    const startInMinutes = startHours * 60 + startMinutes;
    const endInMinutes = endHours * 60 + endMinutes;

    const durationInMinutes = endInMinutes - startInMinutes;

    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;

    return `${hours} hours ${minutes} minutes`;
  };

  //   useEffect(() => {
  //     getHomePageData();
  //   }, []);

  return (
    <CommonContext.Provider
      value={{
        capitalizeFirstLetter,
        formatDate,
        getDayName,
        formatTime,
        calculateDuration,
        getTodayDate,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export function useCommonContext() {
  return useContext(CommonContext);
}
