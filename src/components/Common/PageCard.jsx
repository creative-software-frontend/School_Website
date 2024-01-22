const PageCard = ({ title }) => {
  return (
    <div className="card px-3 py-3 my-1 page-card">
      <h4 className="fw-bold">{title}</h4>
    </div>
  );
};

export default PageCard;
