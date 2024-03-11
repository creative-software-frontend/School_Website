import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import { useCommonContext } from "@/context/CommonContext";
import React from "react";

const PlanningPage = () => {

  const {downloadPdf} = useCommonContext();

 

  return (
    <div className="container">
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <ProfileCardHeading heading={"পরিকল্পনা । Planning"} />
      </div>

      <div className="card p-3 pt-4">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Planning Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                Fiver Years Planning{" "}
                <i className="fa fa-file text-success ms-2"></i>
              </td>

              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => downloadPdf("five-year-planning")}
                >
                  <i className="text-white fa fa-download me-2"></i>Download Now
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                One Year Planning{" "}
                <i className="fa fa-file text-success ms-2"></i>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => downloadPdf("one-year-planning")}
                >
                  <i className="text-white fa fa-download me-2"></i>Download Now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlanningPage;
