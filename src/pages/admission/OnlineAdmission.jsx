import axiosPublic from "@/api/axiosPublic";
import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import Spinner from "@/components/my/Spinner";
import { useCommonContext } from "@/context/CommonContext";
import { useFrontendContext } from "@/context/FrontendContext";
import { useState } from "react";

const OnlineAdmissionPage = () => {
  // get today date from store for selecting default today date in admission date
  const { getTodayDate, capitalizeFirstLetter } = useCommonContext();

  // get class list from frontend context api
  const { classes, currennt_session, departments } = useFrontendContext();

  // Initialize state with the current date
  const [admissionDate, setAdmissionDate] = useState(getTodayDate());

  return (
    <div className="container">
      {/* page header */}
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <ProfileCardHeading heading={"অনলাইনে ভর্তি । Online Admission"} />
      </div>
      {/* end page header */}

      {/* admission form */}
      <div className="card px-3 py-3 my-1">
        {/* ========= academic details ========= */}
        <div className="row">
          <div className="col-md-4"></div>

          <div className="col-md-12 mb-3">
            <h3 className="card-title">Academic Details</h3>
          </div>
          <div className="form-group col-md-4">
            <label className="form-label">Admission Date</label>
            <input
              type="date"
              className="form-control"
              name="admission_date"
              id="admission_date"
              value={admissionDate}
              readOnly
            />
          </div>

          <div className="form-group col-md-4">
            <label className="form-label">Roll Number</label>
            <input
              type="text"
              className="form-control"
              name="roll_number"
              id="roll_number"
              placeholder="Enter Roll Number"
            />
          </div>
          <div className="form-group col-md-4">
            <label className="form-label">Registration Number</label>
            <input
              type="text"
              className="form-control"
              name="registration_number"
              id="registration_number"
              placeholder="Enter Registration Number"
            />
          </div>
          <div className="form-group  col-md-4">
            <label className="form-label">
              Class <span className="text-danger">*</span>
            </label>
            <select
              name="class_id"
              style={{ width: "100%" }}
              id="class_id"
              className="form-control class-select"
            >
              <option value="">Select Class</option>
              {classes &&
                classes.map((item) => (
                  <option value={item.id} key={item.id}>
                    {capitalizeFirstLetter(item.class_name)}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group  col-md-4">
            <label className="form-label">
              Session <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="session_id"
              value={currennt_session && currennt_session.session_name}
              readOnly
            />
          </div>
          <div className="form-group  col-md-4">
            <label className="form-label">
              Department <span className="text-danger">*</span>
            </label>
            <select
              name="department_id"
              style={{ width: "100%" }}
              id="department_id"
              className="form-control"
            >
              <option value="">Select Department</option>
              {departments &&
                departments.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.department}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group  col-md-4">
            <label className="form-label">
              Version <span className="text-danger">*</span>
            </label>
            <select
              name="version_id"
              style={{ width: "100%" }}
              id="version_id"
              className="form-control "
            >
              <option value="">Select Version</option>
              <option value="1">Bangla</option>
              <option value="2">English</option>
            </select>
          </div>
        </div>

        {/* =========end academic details ========= */}
      </div>
      {/* end admission form */}
    </div> // End  container
  );
};

export default OnlineAdmissionPage;
