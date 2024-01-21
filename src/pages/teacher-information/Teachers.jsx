import PageCard from "@/components/Common/PageCard";

const TeachersPage = () => {
  return (
    <div className="container">
      <PageCard title="সকল শিক্ষক" />
      <div className="card">
        <table class="table table-bordered px-3 py-3 mb-0 text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Designation</th>
              <th scope="col">Address</th>
              <th scope="col">BirthDate</th>
              <th scope="col">Joining Date</th>
              <th scope="col">Educational Qualification</th>
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
              <td>Kamrul Hasan</td>
              <td>01922-229911</td>
              <td>Principal</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Master of Arts (MA)</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <img
                  style={{ width: "100px", height: "70px", objectFit: "cover" }}
                  src="/images/teacher/6.jpg"
                  alt=""
                />
              </td>
              <td>Rakib Hasan</td>
              <td>01922-229911</td>
              <td>Principal</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Master of Science (MSc)</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <img
                  style={{ width: "100px", height: "70px", objectFit: "cover" }}
                  src="/images/teacher/teacher.jpg"
                  alt=""
                />
              </td>
              <td>Sakib Al Hasan</td>
              <td>01922-229911</td>
              <td>Vice Principal</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Master of Commerce (MCom)</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                <img
                  style={{ width: "100px", objectFit: "cover" }}
                  src="/images/teacher/3.png"
                  alt=""
                />
              </td>
              <td>Nurul Hasan</td>
              <td>01922-229911</td>
              <td>Asst Teacher</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Master of Business Administration (MBA)</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                <img
                  style={{ width: "100px", height: "70px", objectFit: "cover" }}
                  src="/images/teacher/teacher.jpg"
                  alt=""
                />
              </td>
              <td>Md Sahin</td>
              <td>01922-229911</td>
              <td>Teacher</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Master of Laws (LLM)</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                <img
                  style={{ width: "100px", height: "70px", objectFit: "cover" }}
                  src="/images/teacher/6.jpg"
                  alt=""
                />
              </td>
              <td>MR Ripon</td>
              <td>01922-229911</td>
              <td>Teacher</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Master of Engineering (MEng)</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>
                <img
                  style={{ width: "100px", objectFit: "cover" }}
                  src="/images/teacher/3.png"
                  alt=""
                />
              </td>
              <td>Nirob Hasan</td>
              <td>01922-229911</td>
              <td>Teacher</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Doctor of Philosophy (Ph.D.)</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>
                <img
                  style={{ width: "100px", objectFit: "cover" }}
                  src="/images/teacher/3.png"
                  alt=""
                />
              </td>
              <td>Rashel Das</td>
              <td>01922-229911</td>
              <td>Teacher</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Diploma in Engineering</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>
                <img
                  style={{ width: "100px", objectFit: "cover" }}
                  src="/images/teacher/3.png"
                  alt=""
                />
              </td>
              <td>Md Hasan</td>
              <td>01922-229911</td>
              <td>Teacher</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Bachelor of Education (BEd)</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>
                <img
                  style={{ width: "100px", objectFit: "cover" }}
                  src="/images/teacher/3.png"
                  alt=""
                />
              </td>
              <td>Partha Sharma</td>
              <td>01922-229911</td>
              <td>Teacher</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Bachelor of Education (BEd)</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>
                <img
                  style={{ width: "100px", objectFit: "cover" }}
                  src="/images/teacher/3.png"
                  alt=""
                />
              </td>
              <td>Atif Islam</td>
              <td>01922-229911</td>
              <td>Teacher</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Bachelor of Education (BEd)</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>
                <img
                  style={{ width: "100px", objectFit: "cover" }}
                  src="/images/teacher/3.png"
                  alt=""
                />
              </td>
              <td>Sohel Khan</td>
              <td>01922-229911</td>
              <td>Teacher</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Bachelor of Education (BEd)</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>
                <img
                  style={{ width: "100px", objectFit: "cover" }}
                  src="/images/teacher/3.png"
                  alt=""
                />
              </td>
              <td>Monir Hasan</td>
              <td>01922-229911</td>
              <td>Teacher</td>
              <td>Dhaka Govt School & College, Dhaka</td>
              <td>01 January, 1970</td>
              <td>7 Feb, 2020</td>
              <td>Bachelor of Education (BEd)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeachersPage;
