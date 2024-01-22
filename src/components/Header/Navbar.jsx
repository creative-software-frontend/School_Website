import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mt-1">
      <nav class="navbar navbar-expand-lg navbar-light bg-primary text-white">
        <div class="container-fluid">
          {/* <Link class="navbar-brand text-white" to="/">
            প্রথম পাতা
          </Link> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link text-white" to="/" aria-current="page">
                  প্রথম পাতা
                </Link>
              </li>
              {/* institute information */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  id="navbarDropdownMenuLink2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  প্রতিষ্ঠানের তথ্য
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <li>
                    <Link class="dropdown-item" to="/institute-history">
                      প্রতিষ্ঠানের ইতিহাস
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/institute-vission">
                      প্রতিষ্ঠানের ভিশন ও মিশন
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/computer-lab">
                      কম্পিউটার ল্যাব
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/cultural-history">
                      সাংস্কৃতিক কার্যক্রম
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/library">
                      লাইব্রেরী
                    </Link>
                  </li>
                </ul>
              </li>
              {/* teacher information */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  id="navbarDropdownMenuLink2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  শিক্ষকমন্ডলীর তথ্য
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <li>
                    <Link class="dropdown-item" to="/teachers">
                      সকল শিক্ষক
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/directors">
                      কর্মকর্তা বৃন্দ
                    </Link>
                  </li>
                </ul>
              </li>
              {/* student information */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  id="navbarDropdownMenuLink2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  শিক্ষার্থী তথ্য
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <li>
                    <Link class="dropdown-item" to="/students">
                      সকল শিক্ষার্থী
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      কৃতি শিক্ষার্থী
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      লেকচার
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      প্রশ্নাবলী
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link text-white dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  একাডেমিক
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      একাডেমিক ক্যালেন্ডার
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      ক্লাস পরীক্ষার রুটিন
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      মাল্টিমিডিয়া ক্লাস তথ্য
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      পাঠ্যপুস্তক সহায়ক ই-কন্টেন্ট
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link text-white dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ভর্তির তথ্য
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      ভর্তি তথ্য
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      ভর্তি ফর্ম
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      অনলাইনে ভর্তি
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link text-white dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ফলাফল
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      রেজাল্ট পরিসংখ্যান
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link text-white dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  পরিকল্পনা
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      পঞ্চবার্ষিক পরিকল্পনা
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      বার্ষিক পরিকল্পনা
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#" aria-current="page">
                  চাকুরী
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link text-white dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ছবি ঘর
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      ফটো গ্যালারী
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      ভিডিও গ্যালারী
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#" aria-current="page">
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
