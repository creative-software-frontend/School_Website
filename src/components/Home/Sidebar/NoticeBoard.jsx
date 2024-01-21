import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import React from "react";

const NoticeBoard = () => {
  return (
    <>
      <ProfileCardHeading heading={"নোটিশ বোর্ড । Notice Board"} />

      <nav className="mx-1 mt-2">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            নোটিশ
          </button>
          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            নিউজ
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            ইভেন্টস
          </button>
        </div>
      </nav>
      <div class="tab-content mx-1 mb-3" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className="d-flex gap-2 mt-2">
            <div className="d-flex flex-column text-center">
              <p className="bg-light-grey text-primary fw-bold px-2">18 JAN</p>
              <p className="bg-primary text-white fw-bold px-2">2024</p>
            </div>
            <a href="#" className="text-primary mt-2">
              ভর্তি বিজ্ঞপ্তি ২০২৪
            </a>
          </div>
          <div className="d-flex gap-2 mt-2">
            <div className="d-flex flex-column text-center">
              <p className="bg-light-grey text-primary fw-bold px-2">18 JAN</p>
              <p className="bg-primary text-white fw-bold px-2">2024</p>
            </div>
            <a href="#" className="text-primary mt-2">
              এসএসসি পরীক্ষার ফলাফল ২০২৩
            </a>
          </div>
          <div className="d-flex gap-2 mt-2">
            <div className="d-flex flex-column text-center">
              <p className="bg-light-grey text-primary fw-bold px-2">18 JAN</p>
              <p className="bg-primary text-white fw-bold px-2">2024</p>
            </div>
            <a href="#" className="text-primary mt-2">
              ভর্তি বিজ্ঞপ্তি ২০২৪
            </a>
          </div>
          <div className="d-flex gap-2 mt-2">
            <div className="d-flex flex-column text-center">
              <p className="bg-light-grey text-primary fw-bold px-2">18 JAN</p>
              <p className="bg-primary text-white fw-bold px-2">2024</p>
            </div>
            <a href="#" className="text-primary mt-2">
              ভর্তি বিজ্ঞপ্তি ২০২৪
            </a>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          ...
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          ...
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default NoticeBoard;
