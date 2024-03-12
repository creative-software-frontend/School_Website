import axiosPublic from "@/api/axiosPublic";
import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import Spinner from "@/components/my/Spinner";
import { useCommonContext } from "@/context/CommonContext";
import { useFrontendContext } from "@/context/FrontendContext";
import { useState } from "react";

const ExamRoutinePage = () => {
  // sections state
  const [sections, setSections] = useState([]);
  const [section, setSection] = useState("");

  // exam time table
  const [loaderTimeTable, setLoaderTimeTable] = useState(false);
  const [timeTable, setTimeTable] = useState(false);

  // exam state
  const [exam, setExam] = useState(false);

  // loader state for show loading in section
  const [loader, setLoader] = useState(false);

  // state needed for disable the submit button
  const [selectedClass, setSelectedClass] = useState(null);

  // classes data & function to capitalize first letter from context api
  const { classes, examList } = useFrontendContext();
  const {
    capitalizeFirstLetter,
    formatDate,
    getDayName,
    formatTime,
    calculateDuration,
  } = useCommonContext();

  // on select any exam

  const handleExamChange = async (e) => {
    setExam(e.target.value);
  };

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
    if (section == "" || !exam) {
      alert("Please select class & Section");
      return false;
    }
    try {
      setLoaderTimeTable(true);
      if (exam && selectedClass && section) {
        const { data } = await axiosPublic.get(
          `exam/${exam}/class/${selectedClass}/section/${section}/timetable`
        );
        setTimeTable(data.exam_timetable);
      }

      setLoaderTimeTable(false);
    } catch (error) {
      setLoaderTimeTable(false);
      // Handle errors here
      console.error("Error fetching data:", error);
    }
  };

  // format date function

  return (
    <div className="container exam-routine">
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <ProfileCardHeading heading={"পরীক্ষার রুটিন । Class Routine"} />
        <div
          className="sm-mt-05"
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          {timeTable.length > 0
            ? timeTable[0].exam.exam_name +
              " | " +
              capitalizeFirstLetter(timeTable[0].class.class_name) +
              " Section " +
              timeTable[0].section.section
            : timeTable && (
                <p className="text-danger">Exam Time Table Not Found</p>
              )}
        </div>
      </div>
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between gap-3">
        <div className="col-lg-4">
          <select
            className="form-control class-list form-select"
            style={{ width: "100%" }}
            onChange={(e) => handleExamChange(e)}
          >
            <option value={""}>Select Exam</option>

            {examList.length &&
              examList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.exam_name}
                </option>
              ))}
          </select>
        </div>
        <div className="col-lg-3">
          <select
            className="form-control class-list form-select"
            style={{ width: "100%" }}
            onChange={(e) => handleClassChange(e)}
          >
            <option value={""}>Select Class</option>
            {classes.length &&
              classes.map((item) => (
                <option value={item.id} key={item.id}>
                  {capitalizeFirstLetter(item.class_name)}
                </option>
              ))}
          </select>
        </div>
        <div className="col-lg-3">
          <select
            className="form-control class-list form-select"
            style={{ width: "100%" }}
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            {!loader && <option value={""}>Select Section</option>}

            {loader ? (
              <option>Loading....</option>
            ) : (
              sections.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.section}
                </option>
              ))
            )}
          </select>
        </div>
        <div className="col-lg-2">
          <button
            disabled={!selectedClass || !section || !exam}
            type="submit"
            className="btn btn-success"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>

      {!loaderTimeTable ? (
        timeTable.length > 0 && (
          <div className="exam-timetable table-responsive card p-2">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Day</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Starts At</th>
                  <th scope="col">Ends At</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Room/Block</th>
                </tr>
              </thead>
              <tbody>
                {timeTable.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{formatDate(item.date)}</th>
                    <td>{getDayName(item.date)}</td>
                    <td>{item.subject.subject}</td>
                    <td>{formatTime(item.start_time)}</td>
                    <td>{formatTime(item.end_time)}</td>
                    <td>{calculateDuration(item.start_time, item.end_time)}</td>
                    <td>{item.room_no}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <div className="card">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default ExamRoutinePage;
