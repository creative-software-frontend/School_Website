import ProfileCardHeading from "./ProfileCardHeading";

const ImportantFigureCard = ({ name, designation, image }) => {
  return (
    <>
      <ProfileCardHeading heading={designation} />
      <div className="card figure mb-2 mt-2">
        <img
          src={"/images/figures/" + image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <p className="card-text text-center">{designation}</p>
          <div className="text-center mt-1">
            <a href="#" className="text-success fw-bold">
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportantFigureCard;
