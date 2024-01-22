import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InstituteHistory from "./pages/institue-information/InstituteHistory";
import InstituteVisionMission from "./pages/institue-information/InstituteVisionMission";
import ComputerLabPage from "./pages/institue-information/computerLab";
import LibraryPage from "./pages/institue-information/library";
import CulturalHistoryPage from "./pages/institue-information/culturalHistory";
import TeachersPage from "./pages/teacher-information/Teachers";
import DirectorsPage from "./pages/teacher-information/Director";
import StudentsPage from "./pages/student-information/Students";
import BrilliantStudentsPage from "./pages/student-information/BrilliantStudents";
import LecturesPage from "./pages/student-information/Lectures";
import QuestionsPage from "./pages/student-information/Questions";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/*
         ******* home page *******
         */}
        <Route path="/" element={<HomePage />} />

        {/*
         ******* institute information *******
         */}
        <Route path="/institute-history" element={<InstituteHistory />} />
        <Route path="/institute-vission" element={<InstituteVisionMission />} />
        <Route path="/computer-lab" element={<ComputerLabPage />} />
        <Route path="/cultural-history" element={<CulturalHistoryPage />} />
        <Route path="/library" element={<LibraryPage />} />

        {/*
         ******* teacher information *******
         */}

        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/directors" element={<DirectorsPage />} />

        {/*
         ******* student information *******
         */}

        <Route path="/students" element={<StudentsPage />} />
        <Route path="/brilliant-students" element={<BrilliantStudentsPage />} />
        <Route path="/lectures" element={<LecturesPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
