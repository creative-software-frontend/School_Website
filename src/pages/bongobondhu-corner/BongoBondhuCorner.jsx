import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import BondgoBondhuGallery from "@/components/bongobondhu-corner/BondgoBondhuGallery";
import BongobondhuJiboni from "@/components/bongobondhu-corner/BongobondhuJiboni";

const BongoBondhuCornerPage = () => {
  return (
    <div className="container">
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <ProfileCardHeading heading={"বঙ্গবন্ধু কর্ণার । Bongobondhu Corner"} />
      </div>
      <div className="card p-4 sm-p-1">
        <div className="d-flex align-items-start sm-flex-column">
          <div
            className="nav flex-column nav-pills me-3 sm-flex-row sm-mb-1"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-jiboni"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              আত্মজীবনী
            </button>
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-gallery"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              গ্যালারি
            </button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-jiboni"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <BongobondhuJiboni />
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-gallery"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <BondgoBondhuGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BongoBondhuCornerPage;
