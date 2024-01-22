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
              <p className="bg-light-grey text-primary fw-bold px-2">19 JAN</p>
              <p className="bg-primary text-white fw-bold px-2">2024</p>
            </div>
            <a href="#" className="text-primary mt-2">
              এসএসসি পরীক্ষার ফলাফল ২০২৩
            </a>
          </div>
          <div className="d-flex gap-2 mt-2">
            <div className="d-flex flex-column text-center">
              <p className="bg-light-grey text-primary fw-bold px-2">22 JAN</p>
              <p className="bg-primary text-white fw-bold px-2">2024</p>
            </div>
            <a href="#" className="text-primary mt-2">
              বার্ষিক বনভোজন ২০২৪
            </a>
          </div>
          <div className="d-flex gap-2 mt-2">
            <div className="d-flex flex-column text-center">
              <p className="bg-light-grey text-primary fw-bold px-2">23 JAN</p>
              <p className="bg-primary text-white fw-bold px-2">2024</p>
            </div>
            <a href="#" className="text-primary mt-2">
              রেজাল্ট সংশোধনী ২০২৩
            </a>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div className="news-wrapper">
            <div className="card my-2 flex-row news align-items-center p-2 gap-2">
              <img
                style={{ width: "100px", objectFit: "cover" }}
                src="/images/news/1.png"
                alt=""
              />
              <div className="news-content">
                <h4 className="mb-0 h6">
                  এইচএসসিতে শতভাগ উত্তীর্ণ ঢাকা কলেজে{".."}
                </h4>
                <p className="text-secondary news-subheading">
                  <span className="text-white bg-primary news-source px-2">
                    Prothom Alo
                  </span>{" "}
                  29-09-2023
                </p>
              </div>
            </div>
            <div className="card my-2 flex-row news align-items-center p-2 gap-2">
              <img
                style={{ width: "100px", objectFit: "cover" }}
                src="/images/news/Rajuk.jpg"
                alt=""
              />
              <div className="news-content">
                <h4 className="mb-0 h6">
                  ঢাকা বিভাগে প্রথম স্থান দখল করে নিল ঢাকা কলেজ
                </h4>
                <p className="text-secondary news-subheading">
                  <span className="text-white bg-primary news-source px-2">
                    Kaler Kontho
                  </span>{" "}
                  29-09-2023
                </p>
              </div>
            </div>
            <div className="card my-2 flex-row news align-items-center p-2 gap-2">
              <img
                style={{ width: "100px", objectFit: "cover" }}
                src="/images/news/2.jpg"
                alt=""
              />
              <div className="news-content">
                <h4 className="mb-0 h6">
                  কলেজ টুর্ণামেন্টে প্রথম ঢাকা কলেজ {".."}
                </h4>
                <p className="text-secondary news-subheading">
                  <span className="text-white bg-primary news-source px-2">
                    Vorer Kagoj
                  </span>{" "}
                  29-09-2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div className="event-wrapper">
            <div className="card p-2 event my-2 flex-row align-items-center gap-2">
              <div>
                <span className="bg-primary text-white py-2 px-2">১</span>
              </div>
              <div>
                <h4 className="h6 fw-bold mb-0">
                  জানুয়ারি থেকে ক্রীড়া প্রতিযোগীতা শুরু
                </h4>
                <p className="text-secondary">20 January, 2023</p>
              </div>
            </div>
            <div className="card p-2 event my-2 flex-row align-items-center gap-2">
              <div>
                <span className="bg-primary text-white py-2 px-2">২</span>
              </div>
              <div>
                <h4 className="h6 fw-bold mb-0">
                  সাংস্কৃতিক পুরষ্কার বিতরণী ডিসেম্বর থেকে
                </h4>
                <p className="text-secondary">20 January, 2023</p>
              </div>
            </div>
            <div className="card p-2 event my-2 flex-row align-items-center gap-2">
              <div>
                <span className="bg-primary text-white py-2 px-2">৩</span>
              </div>
              <div>
                <h4 className="h6 fw-bold mb-0">
                  ২ দিন ব্যাপী বৈশাখী মেলা উদযাপন
                </h4>
                <p className="text-secondary">20 January, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default NoticeBoard;
