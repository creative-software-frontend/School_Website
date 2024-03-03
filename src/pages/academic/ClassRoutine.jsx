import axiosPublic from "@/api/axiosPublic";
import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import Spinner from "@/components/my/Spinner";
import { useCommonContext } from "@/context/CommonContext";
import { useFrontendContext } from "@/context/FrontendContext";
import { useState } from "react";

import { FaUserTie, FaBuilding, FaBook, FaClock } from "react-icons/fa";

const ClassRoutinePage = () => {
  // sections state
  const [sections, setSections] = useState([]);
  const [section, setSection] = useState("");

  // class section time table
  const [timeTable, setTimeTable] = useState(false);

  // week days
  const [weekDays, setWeekDays] = useState([]);

  // loader state for show loading in section
  const [loader, setLoader] = useState(false);

  // loader state for show timeTable Loading
  const [loaderTimeTable, setLoaderTimeTable] = useState(false);

  // state needed for disable the submit button
  const [selectedClass, setSelectedClass] = useState(null);

  // classes data & function to capitalize first letter from context api
  const { classes } = useFrontendContext();
  const { capitalizeFirstLetter } = useCommonContext();

  // when user select any class

  const handleClassChange = async (e) => {
    const class_id = e.target.value;
    setSelectedClass(class_id);
    try {
      setLoader(true);
      if (class_id) {
        const { data } = await axiosPublic.get("class-sections/" + class_id);
        setSections(data.sections);
      }

      setLoader(false);
    } catch (error) {
      setLoader(false);
      // Handle errors here
      console.error("Error fetching Filter Student data:", error);
    }
  };

  // when user submit the button for class timetable

  const handleSubmit = async () => {
    if (section == "") {
      alert("Please select class & Section");
      return false;
    }
    try {
      setLoaderTimeTable(true);
      if (selectedClass && section) {
        const { data } = await axiosPublic.get(
          `class/${selectedClass}/section/${section}/timetable`
        );
        setTimeTable(data.time_table);
        setWeekDays(data.week_days);
      }

      setLoaderTimeTable(false);
    } catch (error) {
      setLoaderTimeTable(false);
      // Handle errors here
      console.error("Error fetching Filter Student data:", error);
    }
  };

  return (
    <div className="container">
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <ProfileCardHeading heading={"ক্লাস রুটিন । Class Routine"} />
      </div>
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between gap-3">
        <div className="col-lg-4">
          <select
            className="form-control class-list form-select"
            style={{ width: "100%" }}
            onChange={(e) => handleClassChange(e)}
          >
            <option selected>Select Class</option>
            {classes.length &&
              classes.map((item) => (
                <option value={item.id}>
                  {capitalizeFirstLetter(item.class_name)}
                </option>
              ))}
          </select>
        </div>
        <div className="col-lg-4">
          <select
            className="form-control class-list form-select"
            style={{ width: "100%" }}
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            {!loader && <option value={""}>Select Section</option>}

            {loader ? (
              <option selected>Loading....</option>
            ) : (
              sections.map((item) => (
                <option value={item.id}>{item.section}</option>
              ))
            )}
          </select>
        </div>
        <div className="col-lg-4">
          <button
            disabled={!selectedClass && !section}
            type="submit"
            className="btn btn-success"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>

      {timeTable && timeTable.length > 0 ? (
        <div className="timetable card p-3">
          <div className="week-days d-flex gap-5 justify-content-between mb-3">
            {weekDays.length &&
              weekDays.map((day) => (
                <p className="class_timetable_col" key={day.id}>
                  {day.name}
                </p>
              ))}
          </div>
          <div className="timetable-data row">
            {loaderTimeTable ? (
              <Spinner />
            ) : (
              weekDays.map((day) => (
                <div
                  key={day.id}
                  className="col-md-2"
                  style={{ maxWidth: "14%" }}
                >
                  {timeTable.some(
                    (timeSlot) => timeSlot.weekday_id == day.id
                  ) ? (
                    timeTable.map((timeSlot) => {
                      if (timeSlot.weekday_id == day.id) {
                        return (
                          <div
                            key={timeSlot.id}
                            className="timetable-row card mb-2 p-2"
                          >
                            <span
                              style={{ fontSize: "12px", fontWeight: "500" }}
                              className="d-flex align-items-center"
                            >
                              <FaClock className="me-1" /> {timeSlot.time_from}{" "}
                              - {timeSlot.time_to}
                            </span>
                            <div className="timetable-cell">
                              <div className="d-flex align-items-center gap-1">
                                <FaBook /> {timeSlot.subject.subject}
                              </div>
                              <div className="d-flex align-items-center gap-1">
                                <FaUserTie /> {timeSlot.teacher.name}
                              </div>
                              <div className="d-flex align-items-center gap-1">
                                <FaBuilding /> {timeSlot.room_no}
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })
                  ) : (
                    <div
                      style={{ width: "100%" }}
                      className={`text-danger ${
                        day.id === 3 || day.id === 4
                          ? "ms-3 ps-1"
                          : " ms-3 ps-4"
                      } `}
                    >
                      Not Sheduled
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        timeTable.length == 0 && (
          <div className="timetable card p-3">
            <p className="text-danger">
              Class is not sheduled For Selected Class & Section
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default ClassRoutinePage;
