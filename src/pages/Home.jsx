import HomeMain from "@/components/Home/Main";
import NewsUpdate from "@/components/Home/Main/NewsUpdate";
import Sidebar from "@/components/Home/Sidebar";

const HomePage = () => {
  return (
    <div
      style={{ paddingLeft: "0px", paddingRight: "0px" }}
      className="container homepage-main-container mt-1"
    >
      <div className="container my-1">
        <NewsUpdate />
      </div>
      <div className="row gap-1">
        <div className="col-lg-8 card ms-4">
          <HomeMain />
        </div>
        <div className="col-lg-3 card sidebar-col-lg-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
