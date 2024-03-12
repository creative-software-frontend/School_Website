import axiosPublic, { csrf } from "@/api/axiosPublic";
import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import SpinnerButton from "@/components/my/SpinnerButton";
import ToastComponents from "@/components/my/Toast";
import { useCommonContext } from "@/context/CommonContext";
import { useFrontendContext } from "@/context/FrontendContext";
import { useRef, useState } from "react";

const OnlineAdmissionPage = () => {
  const studentPhotoRef = useRef(null);

  // loader state to show form submitting
  const [loader, setLoader] = useState(false);

  // success Message after successful Form Submission
  const [successMessage, setSuccessMessage] = useState(false);

  // upload image file error ( less than 2 mb and must be an image)
  const [fileError, setFileError] = useState("");

  // academic details states for form submission
  const [classId, setClassId] = useState("");

  const [departmentId, setDepartmentId] = useState("");
  const [versionId, setVersionId] = useState(1);

  // personal details states for form submission

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [religion, setReligion] = useState("Islam");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [countryId, setCountryId] = useState(20);
  const [districtId, setDistrictId] = useState("");
  const [address, setAddress] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [measurementData, setMeasurementData] = useState("");
  const [studentPhoto, setStudentPhoto] = useState(null);

  // guardian details states for form submission
  const [fatherName, setFatherName] = useState("");
  const [fatherPhone, setFatherPhone] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherPhone, setMotherPhone] = useState("");
  const [motherOccupation, setMotherOccupation] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianRelation, setGuardianRelation] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [guardianOccupation, setGuardianOccupation] = useState("");
  const [guardianaddress, setGuardianaddress] = useState("");

  // student address states for form submission
  const [currentAddress, setCurrentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [previousSchoolName, setPreviousSchoolName] = useState("");
  const [previousSchoolAddress, setPreviousSchoolAddress] = useState("");

  // get today date from store for selecting default today date in admission date
  // get capitalize firstLetter from store
  // get file Error & Handle File Change From Store
  // image = user selected image
  const { getTodayDate, capitalizeFirstLetter } = useCommonContext();

  // get class list from frontend context api
  const { classes, currennt_session, departments, districts } =
    useFrontendContext();

  const [sessionId, setSessionId] = useState(
    currennt_session && currennt_session.id
  );

  // Initialize state with the current date
  const [admissionDate, setAdmissionDate] = useState(getTodayDate());

  // when user select any image will triger this function
  // function duty -> check file type & image size

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setStudentPhoto(file);
    // Check if a file is selected
    if (file) {
      // Check file type
      const allowedTypes = ["image/jpeg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        setFileError("Invalid file type. Please upload only JPG or PNG.");
        event.target.value = null; // Clear the file input
        setStudentPhoto(null);
        return;
      } else {
        // Check file size (2 MB limit)
        const maxSize = 2 * 1024 * 1024; // 2 MB in bytes
        if (file.size > maxSize) {
          setFileError("File size exceeds the limit of 2 MB.");
          event.target.value = null;
          setStudentPhoto(null);
          return;
        } else {
          setFileError("");
        }
      }
    }
  };

  // online admission form submit

  const handleSubmit = async (event) => {
    setLoader(true);
    event.preventDefault();

    // Create FormData object
    const formData = new FormData();

    // Append other form data fields to FormData
    formData.append("classId", classId);
    formData.append("sessionId", sessionId);
    formData.append("departmentId", departmentId);
    formData.append("versionId", versionId);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("gender", gender);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("religion", religion);
    formData.append("mobileNo", mobileNo);
    formData.append("email", email);
    formData.append("bloodGroup", bloodGroup);
    formData.append("countryId", countryId);
    formData.append("districtId", districtId);
    formData.append("address", address);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("measurementData", measurementData);

    // Append the image file to FormData
    if (studentPhoto) {
      formData.append("studentPhoto", studentPhoto);
    }

    formData.append("fatherName", fatherName);
    formData.append("fatherPhone", fatherPhone);
    formData.append("fatherOccupation", fatherOccupation);
    formData.append("motherName", motherName);
    formData.append("motherPhone", motherPhone);
    formData.append("motherOccupation", motherOccupation);
    formData.append("guardianName", guardianName);
    formData.append("guardianRelation", guardianRelation);
    formData.append("guardianEmail", guardianEmail);
    formData.append("guardianPhone", guardianPhone);
    formData.append("guardianOccupation", guardianOccupation);
    formData.append("guardianaddress", guardianaddress);
    formData.append("currentAddress", currentAddress);
    formData.append("permanentAddress", permanentAddress);
    formData.append("previousSchoolName", previousSchoolName);
    formData.append("previousSchoolAddress", previousSchoolAddress);

    try {
      const token = await csrf(); // Fetch CSRF token
      // Make a POST request to the server
      const { data } = await axiosPublic.post("/online-admission", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRF-TOKEN": token, // Add your CSRF token header if needed
          // Add other headers if needed
        },
      });
      setLoader(false);
      setSuccessMessage(data);
      studentPhotoRef.current.value = ""; // Clear the file input
      // Reset the form after successful submission
      formReset();
      setTimeout(() => {
        setSuccessMessage(false);
      }, 5000);
    } catch (error) {
      setLoader(false);
      // Handle errors
      console.error("Error submitting form data:", error.message);
    }
  };

  // Reset form after submission

  const formReset = () => {
    setClassId("");
    setDepartmentId("");
    setFirstName("");
    setLastName("");
    setGender("");
    setDateOfBirth("");
    setMobileNo("");
    setEmail("");
    setBloodGroup("");
    setDistrictId("");
    setAddress("");
    setHeight("");
    setWeight("");
    setMeasurementData("");
    // Reset the student photo state to null
    setStudentPhoto(null);
    setFatherName("");
    setFatherPhone("");
    setFatherOccupation("");
    setMotherName("");
    setMotherPhone("");
    setMotherOccupation("");
    setGuardianName("");
    setGuardianRelation("");
    setGuardianEmail("");
    setGuardianPhone("");
    setGuardianOccupation("");
    setGuardianaddress("");
    setCurrentAddress("");
    setPermanentAddress("");
    setPreviousSchoolName("");
    setPreviousSchoolAddress("");
  };
  return (
    <div className="container">
      {/* toast success message */}
      {successMessage && (
        <ToastComponents
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}
      {/* end toast success */}

      {/* page header */}
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <ProfileCardHeading heading={"অনলাইনে ভর্তি । Online Admission"} />
      </div>
      {/* end page header */}

      {/* admission form */}
      <form onSubmit={handleSubmit}>
        <div className="card px-3 py-3 my-1">
          {/* ========= academic details ========= */}
          <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-12">
              <h3 className="card-title" style={{ fontSize: "24px" }}>
                Academic Details
              </h3>
            </div>
            <hr />
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

            <div className="form-group  col-md-4">
              <label className="form-label">
                Class <span className="text-danger">*</span>
              </label>
              <select
                name="class_id"
                style={{ width: "100%" }}
                id="class_id"
                className="form-control class-select"
                value={classId}
                onChange={(e) => setClassId(e.target.value)}
                required
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
                value={departmentId}
                onChange={(e) => setDepartmentId(e.target.value)}
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
                value={versionId}
                onChange={(e) => setVersionId(e.target.value)}
              >
                <option value="">Select Version</option>
                <option value="1">Bangla</option>
                <option value="2">English</option>
              </select>
            </div>
          </div>
          {/* =========end academic details ========= */}

          {/* =========== personal details ==============*/}
          <div className="row">
            <div className="col-md-12">
              <h3 className="card-title" style={{ fontSize: "24px" }}>
                Personal Details
              </h3>
            </div>
            <hr />
            <div className="form-group col-md-4">
              <label className="form-label">
                First Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                id="first_name"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                id="last_name"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="form-group  col-md-4">
              <label className="form-label">
                Gender <span className="text-danger">*</span>
              </label>
              <select
                name="gender"
                style={{ width: "100%" }}
                id="gender"
                className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="date_of_birth"
                id="date_of_birth"
                placeholder="Enter Date of Birth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>

            <div className="form-group  col-md-4">
              <label className="form-label">Religion </label>
              <select
                name="religion"
                style={{ width: "100%" }}
                id="religion"
                className="form-control"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
              >
                <option value="">Select Religion</option>
                <option value="Islam">Islam</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddha">Buddha</option>
                <option value="Chiristian">Chiristian</option>
              </select>
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Mobile No</label>
              <input
                type="text"
                className="form-control"
                name="mobile_no"
                id="mobile_no"
                placeholder="Enter  Mobile No"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                required
              />
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group  col-md-4">
              <label className="form-label">Blood Group </label>
              <select
                name="blood_group"
                style={{ width: "100%" }}
                id="blood_group"
                className="form-control"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option value="">Select Blood Group</option>
                <option value="O+">O+</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O-">O-</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Country</label>
              <select
                name="country_id"
                id="country_id"
                style={{ width: "100%" }}
                className="form-control"
                value={countryId}
                onChange={(e) => setCountryId(e.target.value)}
                readOnly
              >
                <option value="20">Bangladesh</option>
              </select>
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">District</label>
              <select
                name="district_id"
                id="district_id"
                style={{ width: "100%" }}
                className="form-control"
                value={districtId}
                onChange={(e) => setDistrictId(e.target.value)}
              >
                <option value="">Select District</option>
                {districts &&
                  districts.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-group col-md-8">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                id="address"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Height</label>
              <input
                type="text"
                className="form-control"
                name="height"
                id="height"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4">
              <label className="form-label">Weight</label>
              <input
                type="text"
                className="form-control"
                name="weight"
                id="weight"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4">
              <label className="form-label">Measurement Date</label>
              <input
                type="date"
                className="form-control"
                name="measurement_date"
                id="measurement_date"
                value={measurementData}
                onChange={(e) => setMeasurementData(e.target.value)}
              />
            </div>
            <div
              className="form-group col-md-5 sm-mx-width-100"
              style={{ maxWidth: "37%" }}
            >
              <label className="form-label ">
                Student Photo{" "}
                <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                  ( Image should be jpg or png & not more than 2 mb ){" "}
                  <span className="text-danger">*</span>
                </span>
              </label>
              <input
                className="form-control"
                type="file"
                id="studentPhoto"
                name="student_photo"
                accept=".jpg, .jpeg, .png"
                ref={studentPhotoRef}
                onChange={handleFileChange}
              />
              <div
                id="file-warning-student"
                style={{ display: fileError ? "block" : "none" }}
                className="text-danger mt-1"
              >
                {fileError && fileError}
              </div>
            </div>
          </div>
          {/* ========== end personal details ========== */}

          {/* ============ guardian details ==============*/}
          <div className="row">
            <div className="col-md-12">
              <h3 className="card-title" style={{ fontSize: "24px" }}>
                Guardian Details
              </h3>
            </div>
            <hr />
            <div className="form-group col-md-4">
              <label className="form-label">Father Name</label>
              <input
                type="text"
                className="form-control"
                name="father_name"
                id="father_name"
                placeholder="Enter Father Name"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                required
              />
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Father Phone</label>
              <input
                type="text"
                className="form-control"
                name="father_phone"
                id="father_phone"
                placeholder="Enter Father Phone"
                value={fatherPhone}
                onChange={(e) => setFatherPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Father Occupation</label>
              <input
                type="text"
                className="form-control"
                name="father_occupation"
                id="father_occupation"
                placeholder="Enter Father Occupation"
                value={fatherOccupation}
                onChange={(e) => setFatherOccupation(e.target.value)}
                required
              />
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Mother Name</label>
              <input
                type="text"
                className="form-control"
                name="mother_name"
                id="mother_name"
                placeholder="Enter Mother Name"
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-md-4">
              <label className="form-label">Mother Phone</label>
              <input
                type="text"
                className="form-control"
                name="mother_phone"
                id="mother_phone"
                placeholder="Enter Mother Phone"
                value={motherPhone}
                onChange={(e) => setMotherPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Mother Occupation</label>
              <input
                type="text"
                className="form-control"
                name="mother_occupation"
                id="mother_occupation"
                placeholder="Enter Mother Occupation"
                value={motherOccupation}
                onChange={(e) => setMotherOccupation(e.target.value)}
                required
              />
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Guardian Name</label>
              <input
                type="text"
                className="form-control"
                name="guardian_name"
                id="guardian_name"
                placeholder="Enter Guardian Name"
                value={guardianName}
                onChange={(e) => setGuardianName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4">
              <label className="form-label">Guardian Relation</label>
              <input
                type="text"
                className="form-control"
                name="guardian_relation"
                id="guardian_relation"
                placeholder="Enter Guardian Relation"
                value={guardianRelation}
                onChange={(e) => setGuardianRelation(e.target.value)}
              />
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Guardian Email</label>
              <input
                type="text"
                className="form-control"
                name="guardian_email"
                id="guardian_email"
                placeholder="Enter Guardian Email"
                value={guardianEmail}
                onChange={(e) => setGuardianEmail(e.target.value)}
              />
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Guardian Phone</label>
              <input
                type="text"
                className="form-control"
                name="guardian_phone"
                id="guardian_phone"
                placeholder="Enter Guardian Phone"
                value={guardianPhone}
                onChange={(e) => setGuardianPhone(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4">
              <label className="form-label">Guardian Occupation</label>
              <input
                type="text"
                className="form-control"
                name="guardian_occupation"
                id="guardian_occupation"
                placeholder="Enter Guardian Occupation"
                value={guardianOccupation}
                onChange={(e) => setGuardianOccupation(e.target.value)}
              />
            </div>

            <div className="form-group col-md-4">
              <label className="form-label">Guardian Address</label>
              <input
                type="text"
                className="form-control"
                name="guardian_address"
                id="guardian_address"
                placeholder="Enter Guardian Address"
                value={guardianaddress}
                onChange={(e) => setGuardianaddress(e.target.value)}
              />
            </div>
          </div>

          {/* ============ end guardian details ============= */}

          {/* ========= student address & extra details =========*/}
          <div className="row">
            <div className="col-md-12">
              <h3 style={{ fontSize: "24px" }} className="card-title">
                Student Address Details
              </h3>
            </div>
            <hr />

            <div className="form-group col-md-6">
              <label className="form-label">Current Address</label>
              <input
                type="text"
                className="form-control"
                name="current_address"
                id="current_address"
                placeholder="Enter Current Address"
                value={currentAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Permanent Address</label>
              <input
                type="text"
                className="form-control"
                name="permanent_address"
                id="permanent_address"
                placeholder="Enter Permanent Address"
                value={permanentAddress}
                onChange={(e) => setPermanentAddress(e.target.value)}
                required
              />
            </div>

            <div className="col-md-12">
              <h3 style={{ fontSize: "24px" }} className="card-title">
                Miscellaneous Details
              </h3>
            </div>
            <hr />
            <div className="form-group col-md-6">
              <label className="form-label">Previous School Name</label>
              <input
                type="text"
                className="form-control"
                name="previous_school_name"
                id="previous_school_name"
                placeholder="Enter Previous School Name"
                value={previousSchoolName}
                onChange={(e) => setPreviousSchoolName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Previous School Address</label>
              <input
                type="text"
                className="form-control"
                name="previous_school_address"
                id="previous_school_address"
                placeholder="Enter Previous School Address"
                value={previousSchoolAddress}
                onChange={(e) => setPreviousSchoolAddress(e.target.value)}
              />
            </div>
          </div>
          {/* ======= end student address & extra details ======== */}

          {/* form submit */}
          <div className="row justify-content-end">
            <div className="col-lg-4 d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                {loader ? <SpinnerButton text={"Submitting..."} /> : "Submit"}
              </button>
            </div>
          </div>

          {/* end form submit */}
        </div>
      </form>
      {/* end admission form */}
    </div> // End  container
  );
};

export default OnlineAdmissionPage;
