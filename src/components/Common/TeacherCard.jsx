const TeacherCard = ({ name, designation, image }) => {
  return (
    <div className="col-lg-2 col-6">
      <div className="card teacher">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body teacher-content">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
