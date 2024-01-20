const TopHeader = () => {
  return (
    <div className="container">
      <div className="bg-primary d-flex justify-content-between px-4 py-3">
        <div className="d-flex align-items-center">
          <p className="me-4">
            <i className="fa fa-envelope me-2"></i> school.management@gmail.com
          </p>
          <p>
            <i className="fa fa-phone me-2"></i> +88 01911 22 33 44
          </p>
        </div>
        <div className="d-flex align-items-center">
          <a className="me-4 text-white" href="#">
            <i className="fa fa-language me-1"></i> English |
          </a>
          <p className="d-flex align-items-center">
            <i className="fa fa-sign-in me-1"></i>Login{" "}
            <i className="fa fa-angle-right me-1 ms-1"></i>
            <a className="text-white me-1" href="#">
              Guardian
            </a>{" "}
            |
            <a className="text-white ms-1" href="#">
              Teacher
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
