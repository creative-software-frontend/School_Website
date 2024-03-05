import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mt-1">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
        <div className="container-fluid">
          {/* <Link className="navbar-brand text-white" to="/">
            প্রথম পাতা
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/"
                  aria-current="page"
                >
                  প্রথম পাতা
                </Link>
              </li>
              {/* institute information */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  id="navbarDropdownMenuLink2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  প্রতিষ্ঠানের তথ্য
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <li>
                    <Link className="dropdown-item" to="/institute-history">
                      প্রতিষ্ঠানের ইতিহাস
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/institute-vission">
                      প্রতিষ্ঠানের ভিশন ও মিশন
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/computer-lab">
                      কম্পিউটার ল্যাব
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cultural-history">
                      সাংস্কৃতিক কার্যক্রম
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/library">
                      লাইব্রেরী
                    </Link>
                  </li>
                </ul>
              </li>
              {/* teacher information */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  id="navbarDropdownMenuLink2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  শিক্ষকমন্ডলীর তথ্য
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <li>
                    <Link className="dropdown-item" to="/teachers">
                      সকল শিক্ষক
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/directors">
                      কর্মকর্তা বৃন্দ
                    </Link>
                  </li>
                </ul>
              </li>
              {/* student information */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  id="navbarDropdownMenuLink2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  শিক্ষার্থী তথ্য
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <li>
                    <Link className="dropdown-item" to="/students">
                      সকল শিক্ষার্থী
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/brilliant-students">
                      কৃতি শিক্ষার্থী
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/lectures">
                      লেকচার
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/questions">
                      প্রশ্নাবলী
                    </Link>
                  </li>
                </ul>
              </li>
              {/* academic */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  একাডেমিক
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/academic-calendar">
                      একাডেমিক ক্যালেন্ডার
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/class-routine">
                      ক্লাস রুটিন
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/exam-routine">
                      পরীক্ষার রুটিন
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      মাল্টিমিডিয়া ক্লাস তথ্য
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      পাঠ্যপুস্তক সহায়ক ই-কন্টেন্ট
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ভর্তির তথ্য
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {/* <li>
                    <a className="dropdown-item" href="#">
                      ভর্তি তথ্য
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ভর্তি ফর্ম
                    </a>
                  </li> */}
                  <li>
                    <Link className="dropdown-item" to="/online-admission">
                      অনলাইনে ভর্তি
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ফলাফল
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/online-result">
                      রেজাল্ট পরিসংখ্যান
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  পরিকল্পনা
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      পঞ্চবার্ষিক পরিকল্পনা
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      বার্ষিক পরিকল্পনা
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#" aria-current="page">
                  চাকুরী
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ছবি ঘর
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      ফটো গ্যালারী
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ভিডিও গ্যালারী
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#" aria-current="page">
                  যোগাযোগ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
