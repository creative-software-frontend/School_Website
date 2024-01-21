import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import React from "react";

const ImportantLinks = () => {
  return (
    <>
      <ProfileCardHeading heading={"গুরুত্বপূর্ণ লিংক । Important Links"} />
      <ul className="importnt-links ms-1 ps-3">
        <li>
          <a href="#">স্মার্ট সফটওয়্যার</a>
        </li>
        <li>
          <a href="#">জনপ্রশাসন মন্ত্রালয়</a>
        </li>
        <li>
          <a href="#">প্রধানমন্ত্রীর কার্যালয়</a>
        </li>
        <li>
          <a href="#">বাংলাদেশ সিভিল সার্ভিস প্রশাসন একাডেমি</a>
        </li>
        <li>
          <a href="#">বাংলাদেশ সরকারি কর্ম কমিশন</a>
        </li>
        <li>
          <a href="#">শিক্ষা মন্ত্রালণয়</a>
        </li>
        <li>
          <a href="#">মাধ্যমিক ও উচ্চশিক্ষা অধিদিপ্তর</a>
        </li>
        <li>
          <a href="#">প্রাথমিক শিক্ষা অধিদিপ্তর</a>
        </li>
        <li>
          <a href="#">ফলাফল</a>
        </li>
        <li>
          <a href="#">দৈনিক পত্রিকা</a>
        </li>
      </ul>
    </>
  );
};

export default ImportantLinks;
