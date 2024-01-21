import PageCard from "@/components/Common/PageCard";

const StudentsPage = () => {
  return (
    <div className="container">
      <PageCard title="সকল শিক্ষার্থী" />
      <div className="card">
        <table class="table table-bordered px-3 py-3 mb-0 text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Photo</th>
              <th scope="col">Student Id</th>
              <th scope="col">Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Session</th>
              <th scope="col">Shift</th>
              <th scope="col">Section</th>
              <th scope="col">Class</th>
              <th scope="col">Address</th>
              <th scope="col">Guardian</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  src="/images/teacher/3.png"
                  alt=""
                />
              </td>
              <td>2023010001</td>
              <td>Abdur Rahman</td>
              <td>01877-112233</td>
              <td>2020</td>
              <td>Morning</td>
              <td>A</td>
              <td>Five</td>
              <td>New Market Road, Dhaka</td>
              <td>F: Shakib Rahman</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPage;
