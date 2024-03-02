import axiosPublic from "@/api/axiosPublic";
import Spinner from "@/components/my/Spinner";
import { useFrontendContext } from "@/context/FrontendContext";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const StudentsPage = () => {
  const { students, classes, sessions, backendUrl } = useFrontendContext();

  // state for on change class
  const [selectedClass, setSelectedClass] = useState("");

  // state for on change session
  const [selectedSession, setSelectedSession] = useState("");

  // state needed for data table
  const [search, setSearch] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // loader state

  const [loader, setLoader] = useState(false);

  // data table page change

  const rowsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // data table
  const columns = [
    {
      name: "SL",
      selector: (row, index) =>
        currentPage !== 1
          ? index + 1 + rowsPerPage * (currentPage - 1)
          : index + 1,
    },
    {
      name: "Image",
      selector: (row) => (
        <img
          width={200}
          height={70}
          src={
            row.document && row.document.student_photo
              ? backendUrl + "/" + row.document.student_photo
              : "/images/default.png"
          }
          style={{
            width: "50px",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      ),
    },
    {
      name: "Student Id",
      selector: (row) => row["admission_no"],
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) =>
        row.personal && row.personal.first_name + " " + row.personal.last_name,
    },
    {
      name: "Session",
      selector: (row) => row.session_info && row.session_info.session_name,
    },
    {
      name: "Shift",
      selector: (row) => row.shift && row.shift.name,
    },
    {
      name: "Class",
      selector: (row) =>
        row.class &&
        row.section &&
        row.class.class_name + " Section - (" + row.section.section + ")",
    },

    {
      name: "Address",
      selector: (row) => row.personal && row.personal.address,
    },
    {
      name: "Guardian",
      selector: (row) => row.guardian && "F: " + row.guardian.father_name,
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <>
    //       <button
    //         type="button"
    //         title="details"
    //         className="btn mr-2 btn-warning"
    //         onClick={() => handleShow(row.id)}
    //       >
    //         <i className="fa fa-eye"></i>
    //       </button>
    //       <Link to={"/admin/speakers-edit/" + row.id}>
    //         <button title="edit" className="btn mr-2 btn-success">
    //           <i className="fa fa-pencil-square-o"></i>
    //         </button>
    //       </Link>
    //       <button
    //         onClick={() => handleDelete(row.id)}
    //         title="delete"
    //         className="btn btn-danger"
    //       >
    //         <i className="fa fa-trash"></i>
    //       </button>
    //     </>
    //   ),
    // },
  ];

  // when user search for admission_no

  useEffect(() => {
    const result = students.filter((item) => {
      return item["admission_no"].includes(search);
    });
    setFilteredStudents(result);
  }, [search]);

  // on change student class

  const handleChange = async (e) => {
    const selectedValue = e.target.value;
    setSelectedClass(selectedValue);

    try {
      setLoader(true);
      const { data } = await axiosPublic.get("/class/" + selectedValue);
      setFilteredStudents(data.students);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      // Handle errors here
      console.error("Error fetching Filter Student data:", error);
    }
  };

  // on change session

  const handleSessionChange = async (e) => {
    const selectedValue = e.target.value;
    setSelectedSession(selectedValue);

    try {
      setLoader(true);
      if (selectedClass && selectedValue) {
        const { data } = await axiosPublic.get(
          "/class/" + selectedClass + "/session/" + selectedValue
        );
        setFilteredStudents(data.class_session_students);
      } else {
        const { data } = await axiosPublic.get("/session/" + selectedValue);
        setFilteredStudents(data.session_students);
      }

      setLoader(false);
    } catch (error) {
      setLoader(false);
      // Handle errors here
      console.error("Error fetching Filter Student data:", error);
    }
  };

  return (
    <div className="container">
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <h4 className="fw-bold">সকল শিক্ষার্থী</h4>
        <div className="d-flex gap-2">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => handleChange(e)}
          >
            <option disabled selected>
              Select Class
            </option>
            {classes.length &&
              classes.map((item) => (
                <option value={item.id}>
                  {item.class_name.charAt(0).toUpperCase() +
                    item.class_name.slice(1)}
                </option>
              ))}
          </select>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => handleSessionChange(e)}
          >
            <option selected>Select Session</option>
            {sessions.length &&
              sessions.map((item) => (
                <option value={item.id}>{item.session_name}</option>
              ))}
          </select>
        </div>
      </div>
      <div className="card">
        {loader ? (
          <Spinner />
        ) : (
          <DataTable
            columns={columns}
            data={filteredStudents}
            pagination
            paginationDefaultPage={currentPage}
            onChangePage={handlePageChange}
            highlightOnHover
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search Here"
                className="w-25 form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
          />
        )}
      </div>
    </div>
  );
};

export default StudentsPage;
