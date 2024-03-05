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
import AcademicCalendarPage from "./pages/academic/AcademiCalendar";
import OnlineAdmissionPage from "./pages/admission/OnlineAdmission";
import { useFrontendContext } from "./context/FrontendContext";
import Spinner from "./components/my/Spinner";
import ExamRoutinePage from "./pages/academic/ExamRoutine";
import ClassRoutinePage from "./pages/academic/ClassRoutine";
import OnlineResultPage from "./pages/result/OnlineResultPage";

function App() {
  const { loader } = useFrontendContext();
  // Conditionally set the background style based on the loader state
  const backgroundStyle = loader
    ? { background: "none" } // Set background to none when loader is active
    : {
        background:
          'url("/images/paisley.png") repeat scroll center top rgba(0, 0, 0, 0)',
      };
  return (
    <div style={backgroundStyle}>
      {loader ? (
        <Spinner />
      ) : (
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
            <Route
              path="/institute-vission"
              element={<InstituteVisionMission />}
            />
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
            <Route
              path="/brilliant-students"
              element={<BrilliantStudentsPage />}
            />
            <Route path="/lectures" element={<LecturesPage />} />
            <Route path="/questions" element={<QuestionsPage />} />

            {/*
             ******* academic *******
             */}

            <Route
              path="/academic-calendar"
              element={<AcademicCalendarPage />}
            />
            <Route path="/class-routine" element={<ClassRoutinePage />} />
            <Route path="/exam-routine" element={<ExamRoutinePage />} />
            {/* <Route path="/brilliant-students" element={<BrilliantStudentsPage />} />
        <Route path="/lectures" element={<LecturesPage />} />
        <Route path="/questions" element={<QuestionsPage />} /> */}
            {/*
             ******* admission information *******
             */}
            <Route path="/online-admission" element={<OnlineAdmissionPage />} />

            {/*
             ******* result *******
             */}
            <Route path="/online-result" element={<OnlineResultPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
