import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useFrontendContext } from "@/context/FrontendContext";
import TeacherCard from "@/components/Common/TeacherCard";

const TeacherList = () => {
  const { teachers, backendUrl } = useFrontendContext();

  const renderTeacherCards = () => {
    const numberOfDivs = Math.ceil(teachers.length / 6);

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
        const start = i * 6;
        const end = (i + 1) * 6;
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
