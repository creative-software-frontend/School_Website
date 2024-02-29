import ProfileCardHeading from "@/components/Common/ProfileCardHeading";

const ClassExamRoutinePage = () => {
  return (
    <div className="container">
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <ProfileCardHeading heading={"ক্লাস রুটিন । Class Routine"} />
        <ProfileCardHeading heading={"পরীক্ষার রুটিন । Exam Routine"} />
      </div>
    </div>
  );
};

export default ClassExamRoutinePage;
