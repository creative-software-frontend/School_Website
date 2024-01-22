import { useEffect, useState } from "react";

const TopHeader = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateCurrentDateTime = () => {
      const now = new Date();

      // Format the date
      const day = now.getDate();
      const month = now.getMonth() + 1; // Months are zero-based
      const year = now.getFullYear();

      const formattedDate = `${day}-${month}-${year}`;

      // Format the time
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "pm" : "am";

      // Convert 24-hour format to 12-hour format
      const formattedHours = hours % 12 || 12;

      // Add leading zero for single-digit minutes
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      const formattedTime = `${formattedHours}:${formattedMinutes}${ampm}`;

      const dateTimeString = `Date: ${formattedDate} | Time: ${formattedTime}`;
      setCurrentDateTime(dateTimeString);
    };

    // Update the current date and time initially and then every minute
    updateCurrentDateTime();
    const intervalId = setInterval(updateCurrentDateTime, 60000); // Update every minute

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="container">
      <div className="bg-primary d-flex justify-content-between px-4 py-3">
        <div className="date-time">
          <p className="text-white">{currentDateTime}</p>
        </div>
        <div className="d-flex align-items-center">
          <p className="me-4">
            <i className="fa fa-envelope me-2"></i> admin@gmail.com
          </p>
          <p>
            <i className="fa fa-phone me-2"></i> +88 01911 22 33 44
          </p>
        </div>
        <div className="d-flex align-items-center">
          <a className="me-4 text-white" href="#">
            <i className="fa fa-language me-1"></i> English 
          </a>
          <p className="d-flex align-items-center">
            <i className="fa fa-sign-in me-1"></i>Login -
            <a className="text-white me-1" href="#">
              &nbsp;Guardian
            </a>{" "}
            |
            <a className="text-white ms-1" href="#">
              Teacher
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
