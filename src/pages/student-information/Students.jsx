const StudentsPage = () => {
  return (
    <div className="container">
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <h4 className="fw-bold">সকল শিক্ষার্থী</h4>
        <div className="d-flex gap-2">
          <select className="form-select" aria-label="Default select example">
            <option disabled selected>
              Select Class
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="3">Four</option>
            <option value="3">Five</option>
          </select>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Session</option>
            <option value="1">2023</option>
            <option value="2">2022</option>
            <option value="3">2021</option>
            <option value="3">2020</option>
            <option value="3">2019</option>
          </select>
        </div>
      </div>
      <div className="card">
        <table className="table table-bordered px-3 py-3 mb-0 text-center">
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
              <th style={{ verticalAlign: "middle" }} scope="row">
                1
              </th>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  src="/images/students/1.jpg"
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
            <tr>
              <th style={{ verticalAlign: "middle" }} scope="row">
                2
              </th>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  src="/images/students/2.jpg"
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
            <tr>
              <th style={{ verticalAlign: "middle" }} scope="row">
                3
              </th>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  src="/images/students/3.jpg"
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
            <tr>
              <th style={{ verticalAlign: "middle" }} scope="row">
                4
              </th>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  src="/images/students/4.jpg"
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
            <tr>
              <th style={{ verticalAlign: "middle" }} scope="row">
                5
              </th>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  src="/images/students/5.jpg"
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
            <tr>
              <th style={{ verticalAlign: "middle" }} scope="row">
                6
              </th>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  src="/images/students/6.jpg"
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
            <tr>
              <th style={{ verticalAlign: "middle" }} scope="row">
                7
              </th>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  src="/images/students/7.jpg"
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
            <tr>
              <th style={{ verticalAlign: "middle" }} scope="row">
                8
              </th>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  src="/images/students/8.jpg"
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
            <tr>
              <th style={{ verticalAlign: "middle" }} scope="row">
                9
              </th>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  src="/images/students/1.jpg"
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
            <tr>
              <th style={{ verticalAlign: "middle" }} scope="row">
                10
              </th>
              <td>
                <img
                  style={{
                    width: "100px",
                    height: "70px",
                    objectFit: "cover",
                  }}
                  src="/images/students/2.jpg"
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
