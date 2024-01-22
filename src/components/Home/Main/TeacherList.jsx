import TeacherCard from "@/components/Common/TeacherCard";
import React from "react";

const TeacherList = () => {
  return (
    <div className="row my-3 teacher-list px-2">
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
      <TeacherCard name="Salina Akter" designation="Teacher" image={"4.jpg"} />
      <TeacherCard
        name="Rasel Kanti"
        designation="Asst Teacher"
        image={"5.jpg"}
      />
      <TeacherCard name="Sakib Rahman" designation="Lecturer" image={"6.jpg"} />
    </div>
  );
};

export default TeacherList;
