import TeacherCard from "@/components/Common/TeacherCard";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const TeacherList = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div className="carousel-images-container d-flex my-4 mb-5 teacher-list px-2">
        <TeacherCard
          name="John Doe"
          designation="Principal"
          image={"teacher.jpg"}
        />
        <TeacherCard
          name="Mr Kamal"
          designation="Vice Principal"
          image={"1.jpg"}
        />
        <TeacherCard name="Nafiz Iqbal" designation="Teacher" image={"3.png"} />
        <TeacherCard
          name="Salina Akter"
          designation="Teacher"
          image={"4.jpg"}
        />
        <TeacherCard
          name="Rasel Kanti"
          designation="Asst Teacher"
          image={"5.jpg"}
        />
        <TeacherCard
          name="Sakib Rahman"
          designation="Lecturer"
          image={"6.jpg"}
        />
      </div>
      <div className="carousel-images-container d-flex my-4 mb-5 teacher-list px-2">
        <TeacherCard name="John Doe" designation="Principal" image={"1.jpg"} />
        <TeacherCard
          name="Mr Kamal"
          designation="Vice Principal"
          image={"teacher.jpg"}
        />
        <TeacherCard name="Nafiz Iqbal" designation="Teacher" image={"3.png"} />
        <TeacherCard
          name="Salina Akter"
          designation="Teacher"
          image={"5.jpg"}
        />
        <TeacherCard
          name="Rasel Kanti"
          designation="Asst Teacher"
          image={"4.jpg"}
        />

        <TeacherCard
          name="Sakib Rahman"
          designation="Lecturer"
          image={"teacher.jpg"}
        />
      </div>
      <div className="carousel-images-container d-flex my-4 mb-5 teacher-list px-2">
        <TeacherCard name="John Doe" designation="Principal" image={"4.jpg"} />
        <TeacherCard
          name="Mr Kamal"
          designation="Vice Principal"
          image={"1.jpg"}
        />
        <TeacherCard name="Nafiz Iqbal" designation="Teacher" image={"3.png"} />
        <TeacherCard
          name="Salina Akter"
          designation="Teacher"
          image={"6.jpg"}
        />
        <TeacherCard
          name="Rasel Kanti"
          designation="Asst Teacher"
          image={"6.jpg"}
        />
        <TeacherCard
          name="Sakib Rahman"
          designation="Lecturer"
          image={"5.jpg"}
        />
      </div>
    </Carousel>
  );
};

export default TeacherList;
