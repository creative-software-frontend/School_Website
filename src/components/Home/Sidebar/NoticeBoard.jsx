import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import React from "react";

const NoticeBoard = () => {
  return (
    <>
      <ProfileCardHeading heading={"নোটিশ বোর্ড । Notice Board"} />
      <div class="marquee-container">
        <div class="marquee-content p-2">
          <p>
            <a href="#">ভর্তি বিজ্ঞপ্তি ২০২৪</a>
          </p>
          <p>
            <a href="#">একাডেমিক রেজাল্ট ২০২৩</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default NoticeBoard;
