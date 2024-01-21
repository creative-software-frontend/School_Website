const Footer = () => {
  return (
    <div className="container">
      <div className="row footer-main py-4 pb-3">
        <div className="col-lg-3 text-center">
          <img
            src="/images/logo.png"
            alt=""
            style={{
              height: "60px",
              objectFit: "cover",
              background: "white",
              borderRadius: "50%",
            }}
          />
          <p className="copyright">
            copyright &copy;school-managment all rights reserved.
          </p>
          <p className="made-by">
            developed by <a href="#">Creative Software</a>
          </p>
          <div className="d-flex align-items-center justify-content-center gap-3 footer-social">
            <span>
              <i className="fa fa-facebook"></i>
            </span>
            <span>
              <i className="fa fa-youtube"></i>
            </span>
            <span>
              <i className="fa fa-linkedin-square"></i>
            </span>
            <span>
              <i className="fa fa-instagram"></i>
            </span>
            <span>
              <i className="fa fa-twitter"></i>
            </span>
          </div>
        </div>
        <div className="col-lg-3 footer-links">
          <h2 className="footer-col-heading">Support Zone</h2>
          <ul>
            <li>
              <a href="#">Unlock Your Potential</a>
            </li>
            <li>
              <a href="#">Privacy policy and cookie policy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Featured courses</a>
            </li>
            <li>
              <a href="#">Join Us</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 footer-links">
          <h2 className="footer-col-heading">Company Info</h2>
          <ul>
            <li>
              <a href="#">InfixEdu for Business</a>
            </li>
            <li>
              <a href="#">Teach on InfixEdu</a>
            </li>
            <li>
              <a href="#">Get the app</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 footer-links">
          <h2 className="footer-col-heading">Explore Services</h2>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help and Support</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Certificate Verification</a>
            </li>
            <li>
              <a href="#">Free Course</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
