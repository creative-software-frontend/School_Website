import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import React from "react";

const VideoGalleryPage = () => {
  return (
    <div className="container">
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <ProfileCardHeading heading={"ভিডিও গ্যালারি । Video Gallery"} />
      </div>
      <div className="card p-3">
        <div className="row mb-2">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">Video Title</div>
              <div className="card-body mx-0 px-0 py-1 mb-0 pb-0">
                <iframe
                  width="403"
                  height="315"
                  src="https://www.youtube.com/embed/nDsz2ELBlb0?si=FPpS6i0iqBPPfW-P"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">Video Title 2</div>
              <div className="card-body mx-0 px-0 py-1 mb-0 pb-0">
                <iframe
                  width="403"
                  height="315"
                  src="https://www.youtube.com/embed/pHk0AV39fSw?si=qWM6mrm7vCwKJGOy"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">Video Title 3</div>
              <div className="card-body mx-0 px-0 py-1 mb-0 pb-0">
                <iframe
                  width="403"
                  height="315"
                  src="https://www.youtube.com/embed/CaCPxfYp1mw?si=ZJ3h_AGEs9i0V-tB"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">Video Title</div>
              <div className="card-body mx-0 px-0 py-1 mb-0 pb-0">
                <iframe
                  width="403"
                  height="315"
                  src="https://www.youtube.com/embed/nDsz2ELBlb0?si=FPpS6i0iqBPPfW-P"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">Video Title 2</div>
              <div className="card-body mx-0 px-0 py-1 mb-0 pb-0">
                <iframe
                  width="403"
                  height="315"
                  src="https://www.youtube.com/embed/pHk0AV39fSw?si=qWM6mrm7vCwKJGOy"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">Video Title 3</div>
              <div className="card-body mx-0 px-0 py-1 mb-0 pb-0">
                <iframe
                  width="403"
                  height="315"
                  src="https://www.youtube.com/embed/CaCPxfYp1mw?si=ZJ3h_AGEs9i0V-tB"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGalleryPage;
