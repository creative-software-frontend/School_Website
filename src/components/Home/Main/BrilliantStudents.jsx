import ProfileCardHeading from "@/components/Common/ProfileCardHeading";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const BrilliantStudents = () => {
  return (
    <section className="brilliant-section">
      <ProfileCardHeading heading={"কৃতি শিক্ষার্থী"} />
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="brilliant-students-wrapper row my-3 mb-4">
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/1.jpg" alt="" />
              <h3 className="h4 mb-0">Namzul Hasan</h3>
              <p>ঢাকা বিভাগে ১ম </p>
              <p>
                <span>বিজ্ঞান বিভাগ</span> ২০১৮
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/2.jpg" alt="" />
              <h3 className="h4 mb-0">Selina Ahmed</h3>
              <p>মেডিকেল ভর্তি ১ম স্থান </p>
              <p>
                <span>ব্যবসায় বিভাগ</span> ২০১৮
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/3.jpg" alt="" />
              <h3 className="h4 mb-0">Nahida Mahmud</h3>
              <p>ঢাবি ভর্তি পরীক্ষায় ১ম </p>
              <p>
                <span>মানবিক বিভাগ</span> ২০১৮
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/4.jpg" alt="" />
              <h3 className="h4 mb-0">Shruti Hasan</h3>
              <p>চবি ভর্তি পরীক্ষায় ১০ম </p>
              <p>
                <span>অর্থনীতি</span> ২০১৮
              </p>
            </div>
          </div>
        </div>
        <div className="brilliant-students-wrapper row my-3 mb-4">
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/1.jpg" alt="" />
              <h3 className="h4 mb-0">Namzul Hasan</h3>
              <p>ঢাকা বিভাগে ১ম </p>
              <p>
                <span>বিজ্ঞান বিভাগ</span> ২০১৮
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/1.jpg" alt="" />
              <h3 className="h4 mb-0">Namzul Hasan</h3>
              <p>ঢাকা বিভাগে ১ম </p>
              <p>
                <span>বিজ্ঞান বিভাগ</span> ২০১৮
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/1.jpg" alt="" />
              <h3 className="h4 mb-0">Namzul Hasan</h3>
              <p>ঢাকা বিভাগে ১ম </p>
              <p>
                <span>বিজ্ঞান বিভাগ</span> ২০১৮
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/1.jpg" alt="" />
              <h3 className="h4 mb-0">Namzul Hasan</h3>
              <p>ঢাকা বিভাগে ১ম </p>
              <p>
                <span>বিজ্ঞান বিভাগ</span> ২০১৮
              </p>
            </div>
          </div>
        </div>
        <div className="brilliant-students-wrapper row my-3 mb-">
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/1.jpg" alt="" />
              <h3 className="h4 mb-0">Namzul Hasan</h3>
              <p>ঢাকা বিভাগে ১ম </p>
              <p>
                <span>বিজ্ঞান বিভাগ</span> ২০১৮
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/1.jpg" alt="" />
              <h3 className="h4 mb-0">Namzul Hasan</h3>
              <p>ঢাকা বিভাগে ১ম </p>
              <p>
                <span>বিজ্ঞান বিভাগ</span> ২০১৮
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/1.jpg" alt="" />
              <h3 className="h4 mb-0">Namzul Hasan</h3>
              <p>ঢাকা বিভাগে ১ম </p>
              <p>
                <span>বিজ্ঞান বিভাগ</span> ২০১৮
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-2 text-center brilliant">
              <img src="/images/students/1.jpg" alt="" />
              <h3 className="h4 mb-0">Namzul Hasan</h3>
              <p>ঢাকা বিভাগে ১ম </p>
              <p>
                <span>বিজ্ঞান বিভাগ</span> ২০১৮
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default BrilliantStudents;
