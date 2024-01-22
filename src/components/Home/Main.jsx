import React from "react";
import Slider from "./Main/Slider";
import TeacherList from "./Main/TeacherList";
import Information from "./Main/Information";
import BrilliantStudents from "./Main/BrilliantStudents";
import PhotoGallery from "./Main/PhotoGallery";

const HomeMain = () => {
  return (
    <>
      <Slider />
      <TeacherList />
      <Information />
      <BrilliantStudents />
      <PhotoGallery />
    </>
  );
};

export default HomeMain;
