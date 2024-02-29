const SpinnerButton = ({ text }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {text && text} &nbsp;
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default SpinnerButton;
