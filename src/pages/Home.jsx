import HomeMain from "@/components/Home/Main";
import NewsUpdate from "@/components/Home/Main/NewsUpdate";
import Sidebar from "@/components/Home/Sidebar";

const HomePage = () => {
  return (
    <div
      style={{ paddingLeft: "0px", paddingRight: "0px" }}
      className="container homepage-main-container mt-2"
    >
      <div className="container my-3">
        <NewsUpdate />
      </div>
      <div className="row gap-4">
        <div className="col-lg-8 card ms-4">
          <HomeMain />
        </div>
        <div className="col-lg-3 card">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
