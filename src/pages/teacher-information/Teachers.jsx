import PageCard from "@/components/Common/PageCard";
import { useFrontendContext } from "@/context/FrontendContext";

const TeachersPage = () => {
  const { teachers, backendUrl } = useFrontendContext();

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
              <th scope="col">Joining Date</th>
              <th scope="col">Educational Qualification</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length &&
              teachers.map((teacher, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>
                    <img
                      style={{
                        width: "100px",
                        height: "70px",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      src={
                        teacher.image
                          ? backendUrl + "/" + teacher.image
                          : "/images/teacher/default.png"
                      }
                      alt=""
                    />
                  </td>
                  <td>{teacher.users.name}</td>
                  <td>{teacher.phone}</td>
                  <td>Designation</td>
                  <td>7 Feb, 2020</td>
                  <td>Master of Arts (MA)</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeachersPage;
