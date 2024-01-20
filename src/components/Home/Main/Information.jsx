import ProfileCardHorizontal from "@/components/Common/ProfileCardHorizontal";
import data from "@/db/information";

const Information = () => {
  return (
    <div className="row">
      {data.map((information, index) => (
        <ProfileCardHorizontal key={index} information={information} />
      ))}
    </div>
  );
};

export default Information;
