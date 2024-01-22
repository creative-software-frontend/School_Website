const LecturesPage = () => {
  return (
    <div className="container">
      <div className="card px-3 py-3 my-1 page-card flex-row align-items-center justify-content-between">
        <h4 className="fw-bold">পাঠসমুহ</h4>
        <div className="d-flex gap-2">
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Class</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Subject</option>
            <option value="1">Bangla</option>
            <option value="2">English</option>
            <option value="3">Math</option>
          </select>
          <button type="submit" className="btn btn-primary">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LecturesPage;
