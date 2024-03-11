const TeacherCard = ({ name, designation, image }) => {
  return (
    <div className="col-lg-2 col-6">
      <div class="card teacher">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body teacher-content">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
