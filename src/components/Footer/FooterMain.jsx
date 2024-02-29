import { useFrontendContext } from "@/context/FrontendContext";

const FooterMain = () => {
  const { institute } = useFrontendContext();

  return (
    <div className="row footer-main py-4 pb-3">
      <div className="col-lg-3 ">
        <h2 className="footer-col-heading">যোগাযোগ</h2>

        {institute[0] && (
          <div className="footer-contact">
            <h4 className="h5 mb-1">{institute[0].school_name}</h4>
            <p className="d-flex align-items-start">
              <i className="fa fa-map-marker me-2 mt-2"></i>{" "}
              {institute[0].address}
            </p>
            <p>
              <i className="fa fa-id-card-o"></i> School Code:{" "}
              {institute[0].eiin_no}
            </p>
            <p>
              <i className="fa fa-phone"></i> {institute[0].phone}
            </p>
            <p>
              <i className="fa fa-envelope"></i> {institute[0].email}
            </p>
            <p>
              <i className="fa fa-globe"></i> www.school.com
            </p>
          </div>
        )}
      </div>
      <div className="col-lg-3 footer-links">
        <h2 className="footer-col-heading">সহায়তা কেন্দ্র</h2>
        <ul>
          <li>
            <a href="#">আনলক ইউর পটেনশিয়াল</a>
          </li>
          <li>
            <a href="#">প্রাইভেসি এবং কুকি পলিসি</a>
          </li>
          <li>
            <a href="#">সাইটম্যাপ</a>
          </li>
          <li>
            <a href="#">বিশেষ কোর্স</a>
          </li>
          <li>
            <a href="#">যোগ দিন</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 footer-links">
        <h2 className="footer-col-heading">প্রতিষ্ঠানের তথ্য</h2>
        <ul className="mb-1">
          <li>
            <a href="#">আমাদের সম্পর্কে</a>
          </li>
          <li>
            <a href="#">যোগাযোগ</a>
          </li>
          <li>
            <a href="#">এপস ডাউনলোড</a>
          </li>
        </ul>
        <div>
          <img
            src="/images/play-store.png"
            alt=""
            style={{ width: "200px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-lg-3 footer-links">
        <h2 className="footer-col-heading">সেবা সমুহ</h2>
        <ul>
          <li>
            <a href="#">ক্যারিয়ার</a>
          </li>
          <li>
            <a href="#">ব্লগ</a>
          </li>
          <li>
            <a href="#">সাহায্য</a>
          </li>
          <li>
            <a href="#">শর্ত সমুহ</a>
          </li>
          <li>
            <a href="#">সার্টিফিকেট যাচাইকরণ</a>
          </li>
          <li>
            <a href="#">ফ্রি কোর্স</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMain;
