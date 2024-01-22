import ProfileCardHeading from "@/components/Common/ProfileCardHeading";
import React, { useEffect, useState } from "react";
// import "@/assets/js/gallery";
const PhotoGallery = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const totalSlides = 12; // Adjust the total number of slides accordingly

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > totalSlides) {
      newIndex = 1; // Loop back to the first image
    } else if (newIndex < 1) {
      newIndex = totalSlides; // Go to the last image if at the beginning
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    if (n > totalSlides) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(totalSlides);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  };
  return (
    <div className="mt-3">
      <ProfileCardHeading heading={"ফটো গ্যালারি"} />
      <div className="my-3">
        <div class="photo-container">
          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">1 </span>/ 12
            </div>
            <img src="/images/photos/1.jpg" style={{ width: "100%" }} />
          </div>

          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">2 </span>/ 12
            </div>
            <img src="/images/photos/2.jpg" style={{ width: "100%" }} />
          </div>

          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">3 </span>/ 12
            </div>
            <img src="/images/photos/3.jpg" style={{ width: "100%" }} />
          </div>

          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">4 </span>/ 12
            </div>
            <img src="/images/photos/4.jpg" style={{ width: "100%" }} />
          </div>

          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">5 </span>/ 12
            </div>
            <img src="/images/photos/5.jpg" style={{ width: "100%" }} />
          </div>

          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">6 </span>/ 12
            </div>
            <img src="/images/photos/6.jpg" style={{ width: "100%" }} />
          </div>
          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">7 </span>/ 12
            </div>
            <img src="/images/photos/7.jpg" style={{ width: "100%" }} />
          </div>
          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">8 </span>/ 12
            </div>
            <img src="/images/photos/Picnic1.jpg" style={{ width: "100%" }} />
          </div>
          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">9 </span>/ 12
            </div>
            <img src="/images/photos/1.jpg" style={{ width: "100%" }} />
          </div>
          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">10 </span> / 12
            </div>
            <img src="/images/photos/2.jpg" style={{ width: "100%" }} />
          </div>
          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">11 </span> / 12
            </div>
            <img src="/images/photos/3.jpg" style={{ width: "100%" }} />
          </div>
          <div class="mySlides">
            <div class="numbertext">
              <span className="fw-bold">12 </span> / 12
            </div>
            <img src="/images/photos/4.jpg" style={{ width: "100%" }} />
          </div>

          <a className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={() => plusSlides(1)}>
            &#10095;
          </a>

          <div class="caption-container">
            <p id="caption"></p>
          </div>

          <div class="row">
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/1.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(1)}
                alt="The Woods"
              />
            </div>
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/2.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(2)}
                alt="Cinque Terre"
              />
            </div>
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/3.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(3)}
                alt="Mountains and fjords"
              />
            </div>
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/4.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(4)}
                alt="Northern Lights"
              />
            </div>
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/5.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(5)}
                alt="Nature and sunrise"
              />
            </div>
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/6.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(6)}
                alt="Snowy Mountains"
              />
            </div>
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/7.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(7)}
                alt="Snowy Mountains"
              />
            </div>
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/Picnic1.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(8)}
                alt="Snowy Mountains"
              />
            </div>
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/1.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(9)}
                alt="The Woods"
              />
            </div>
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/2.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(10)}
                alt="Cinque Terre"
              />
            </div>
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/3.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(11)}
                alt="Mountains and fjords"
              />
            </div>
            <div class="column">
              <img
                class="demo cursor"
                src="/images/photos/4.jpg"
                style={{ width: "100%" }}
                onClick={() => currentSlide(12)}
                alt="Northern Lights"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
