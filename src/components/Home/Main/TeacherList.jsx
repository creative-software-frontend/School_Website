import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useFrontendContext } from "@/context/FrontendContext";
import TeacherCard from "@/components/Common/TeacherCard";

const TeacherList = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [teacherSliderShow, setTeacherSliderShow] = useState(6);

  const { teachers, backendUrl } = useFrontendContext();

  useEffect(() => {
    if (isMobile) {
      setTeacherSliderShow(2);
      // alert(teacherSliderShow);
    } else {
      setTeacherSliderShow(6);
    }
  }, [isMobile]);

  const renderTeacherCards = () => {
    const numberOfDivs = Math.ceil(teachers.length / teacherSliderShow);

    const renderCardsForDiv = (start, end) => {
      return teachers.slice(start, end).map((teacher) => (
        <TeacherCard
          key={teacher.id}
          name={teacher.users.name}
          designation={teacher.designation}
          image={
            teacher.image
              ? backendUrl + "/" + teacher.image
              : "images/teacher/default.png"
          } // Provide a default image if not available
        />
      ));
    };

    const renderDivs = () => {
      const divs = [];
      for (let i = 0; i < numberOfDivs; i++) {
        const start = i * teacherSliderShow;
        const end = (i + 1) * teacherSliderShow;
        const cards = renderCardsForDiv(start, end);

        divs.push(
          <div
            key={i}
            className="carousel-images-container d-flex my-4 mb-5 teacher-list px-2"
          >
            {cards.length > 0 ? cards : <p>No teachers available</p>}
          </div>
        );
      }
      return divs;
    };

    return renderDivs();
  };

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width threshold as needed
    };

    // Initial check
    checkWindowWidth();

    // Attach event listener to window resize
    window.addEventListener("resize", checkWindowWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {teachers.length > 0 ? (
        renderTeacherCards()
      ) : (
        <p>No teachers available</p>
      )}
    </Carousel>
  );
};

export default TeacherList;
