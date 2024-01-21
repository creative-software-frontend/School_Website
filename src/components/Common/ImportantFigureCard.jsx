import ProfileCardHeading from "./ProfileCardHeading";

const ImportantFigureCard = ({ name, designation, image }) => {
  return (
    <>
      <ProfileCardHeading heading={designation} />
      <div class="card figure mb-2 mt-2">
        <img src={"/images/figures/" + image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">{name}</h5>
          <p class="card-text text-center">{designation}</p>
          <div className="text-center mt-1">
            <a href="#" class="text-success fw-bold">
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportantFigureCard;
