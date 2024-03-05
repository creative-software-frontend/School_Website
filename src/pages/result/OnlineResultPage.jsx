import axiosPublic from "@/api/axiosPublic";
import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import Spinner from "@/components/my/Spinner";
import { useCommonContext } from "@/context/CommonContext";
import { useFrontendContext } from "@/context/FrontendContext";
import { useState } from "react";

const OnlineResultPage = () => {
  // state needed for disable the submit button & to get result
  const [admissionNo, setAdmissionNo] = useState(null);

  //  result not found message state
  const [resultNotFoundMessage, setResultNotFoundMessage] = useState(false);

  // loader state for show loading while getting data
  const [loader, setLoader] = useState(false);

  // examlist data from context api or store
  const { examList, institute, backendUrl } = useFrontendContext();

  // capitalize functon from common context

  const { capitalizeFirstLetter } = useCommonContext();

  // store server returned result in a state
  const [result, setResult] = useState("");

  // Result Extra Info =
  const [totalFailedSubjects, setTotalFailedSubjects] = useState("");
  const [finalGrade, setFinalGrade] = useState("");
  const [finalPoint, setFinalPoint] = useState("");
  const [finalComment, setFinalComment] = useState("");
  const [percentage, setPercentage] = useState("");
  const [position, setPosition] = useState("");

  // exam state
  const [exam, setExam] = useState(false);

  // on select any exam
  const handleExamChange = async (e) => {
    setExam(e.target.value);
  };

  // when user submit the button for online result
  const handleSubmit = async () => {
    try {
      setLoader(true);
      if (admissionNo) {
        const { data } = await axiosPublic.get(
          `online-result/${admissionNo}/exam/${exam}`
        );
        setResult(data.online_result);
        setTotalFailedSubjects(data.total_failed_subjects);
        setFinalGrade(data.final_grade);
        setFinalPoint(data.final_point);
        setFinalComment(data.final_comment);
        setPercentage(data.percentage);
        setPosition(data.position);
        setResultNotFoundMessage(true);
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      // Handle errors here
      console.error("Error fetching data:", error);
    }
  };

  // format date function

  return (
    <div className="container">
      {/* page header */}
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <ProfileCardHeading heading={"অনলাইন রেজাল্ট। Online Result"} />
        <div style={{ fontSize: "18px", fontWeight: "500" }}>
          {!result && resultNotFoundMessage && (
            <p className="text-danger">Result Not Found</p>
          )}
        </div>
      </div>
      {/* end page header */}

      {/* result search option with admission no & exam */}
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-end justify-content-start gap-3">
        <div className="col-lg-4">
          <label className="form-label" htmlFor="exam">
            Exam:
          </label>
          <select
            className="form-control class-list form-select"
            style={{ width: "100%" }}
            id="exam"
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
          <label className="form-label" htmlFor="admissionNo">
            Enter Admission No:
          </label>
          <input
            type="text"
            className="form-control"
            id="admissionNo"
            value={admissionNo}
            onChange={(e) => setAdmissionNo(e.target.value)}
          />
        </div>

        <div className="col-lg-4">
          <button
            disabled={!admissionNo || !exam}
            type="submit"
            className="btn btn-success"
            onClick={() => handleSubmit()}
          >
            Get Result
          </button>
        </div>
      </div>
      {/* end search */}

      {!loader ? (
        result && (
          // ============== result section  ==============
          <div className="card px-3 py-3 my-1">
            {/* result header  */}
            <h2 className="text-center mb-1 mt-4">
              {result[0].entries && result[0].entries.exam.exam_name} Result
            </h2>
            <p className="text-center mt-0" style={{ fontSize: "18px" }}>
              {institute[0] && institute[0].school_name}
            </p>
            {/* end result header */}

            {/* student details */}
            <div className="student-details row my-5">
              <div className="col-lg-4 ms-3">
                <p>
                  <span className="font-weight-b">Name: </span>
                  {result[0].entries.personal &&
                    result[0].entries.personal.first_name +
                      " " +
                      result[0].entries.personal.last_name}
                </p>
                <p>
                  <span className="font-weight-b">Student ID: </span>
                  {result[0].entries.academic &&
                    result[0].entries.academic.admission_no}
                </p>
                <p>
                  <span className="font-weight-b">Father's Name: </span>
                  {result[0].entries.guardian &&
                    result[0].entries.guardian.father_name}
                </p>
                <p>
                  <span className="font-weight-b">Mother's Name: </span>
                  {result[0].entries.guardian &&
                    result[0].entries.guardian.mother_name}
                </p>
              </div>
              <div className="col-lg-4">
                <p>
                  <span className="font-weight-b">Class: </span>
                  {result[0].entries.academic &&
                    capitalizeFirstLetter(
                      result[0].entries.academic.class.class_name
                    )}
                </p>
                <p>
                  <span className="font-weight-b">Roll No: </span>
                  {result[0].entries.academic &&
                    result[0].entries.academic.roll_number}
                </p>
                <p>
                  <span className="font-weight-b">Registration No: </span>
                  {result[0].entries.academic &&
                    result[0].entries.academic.registration_number}
                </p>
                <p>
                  <span className="font-weight-b">Section: </span>
                  {result[0].entries.academic &&
                    result[0].entries.academic.section.section}
                </p>
              </div>
              <div className="col-lg-3 student-photo d-flex justify-content-end">
                <img
                  src={
                    result[0].entries.document &&
                    backendUrl + "/" + result[0].entries.document.student_photo
                  }
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            {/*  end student details */}

            {/* result specific data */}
            <table class="table table-bordered border-dark text-center my-5">
              <thead>
                <tr>
                  <th scope="col">Subjects</th>
                  <th scope="col">Total Mark</th>
                  <th scope="col">Obtained Mark</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Point</th>
                </tr>
              </thead>
              <tbody>
                {result.map((item) => (
                  <tr>
                    <td>
                      {item.entries.subject && item.entries.subject.subject}
                    </td>
                    <td>{item.entries && item.entries.total_marks}</td>
                    <td>{item.entries && item.entries.marks_obtained}</td>
                    <td>{item && item.grade}</td>
                    <td>{item && item.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* end result specific data */}

            {/* result final data */}
            <table class="table table-bordered border-dark text-center my-5 mt-2">
              <thead>
                <tr>
                  <th scope="col">Full Marks</th>
                  <th scope="col">Total Obtained Marks</th>
                  <th scope="col">Failed Subjects</th>
                  <th scope="col">Final Grade</th>
                  <th scope="col">Final GPA</th>
                  <th scope="col">Percentage</th>
                  <th scope="col">Comment</th>
                  <th scope="col">Class Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{result[0].total_marks}</td>
                  <td>{result[0].total_marks_obtained}</td>
                  <td>{totalFailedSubjects}</td>
                  <td>{finalGrade}</td>
                  <td>{finalPoint}</td>
                  <td>{percentage}</td>
                  <td>{finalComment}</td>
                  <td>{position}</td>
                </tr>
              </tbody>
            </table>
            {/* end result final data */}
          </div>
          //   ============= End result section  ==============
        )
      ) : (
        <div className="card">
          <Spinner />
        </div>
      )}
    </div> // End  container
  );
};

export default OnlineResultPage;
