let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide1");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.opacity = '1';
    setTimeout(showSlides, 5000); 
}
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.brand-slider');
  const slides = document.querySelectorAll('.brand-slider .slide');
  
  let totalWidth = 0;
  slides.forEach(slide => {
      totalWidth += slide.offsetWidth;
  });

  slider.style.width = `${totalWidth}px`;

  const keyframes = [
      { transform: 'translateX(0)' },
      { transform: `translateX(-${totalWidth / 3}px)` }
  ];

  const animation = slider.animate(keyframes, {
      duration: 20000,
      iterations: Infinity
  });
});

// var swiper = new Swiper(".brand-slider", {
//   spaceBetween: 20,
//   loop:true,
//   autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//   },
//   breakpoints: {
//       450: {
//         slidesPerView: 2,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       991: {
//         slidesPerView: 4,
//       },
//       1200: {
//         slidesPerView: 5,
//       },
//     },
// });
document.addEventListener("DOMContentLoaded", async function () {
    const API_URL = "https://widget.trustpilot.com/trustbox-data/56278e9abfbbba0bdcd568bc?businessUnitId=6792a3eee2ccb370dbac2cd6&locale=en-GB&includeReviews=false";  // Replace with the actual Trustpilot API URL if needed

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Extract data
        const stars = data.businessEntity.stars;  // Example: 3.5
        const trustScore = data.businessEntity.trustScore;  // Example: 3.7
        const totalReviews = data.businessEntity.numberOfReviews.total;  // Example: 10

        // Update TrustScore and Reviews Count
        document.getElementById("trustscore").innerText = `TrustScore: ${trustScore.toFixed(1)} | ${totalReviews} Reviews`;

        // Display star ratings
        const starsContainer = document.getElementById("stars-container");
        starsContainer.innerHTML = getStarRatingHTML(stars);

    } catch (error) {
        console.error("Error fetching Trustpilot data:", error);
        document.getElementById("trustscore").innerText = "Failed to load Trustpilot data";
    }
});

// Function to generate star rating HTML
function getStarRatingHTML(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    let starsHTML = "";

     for (let i = 0; i < fullStars; i++) {
            starsHTML += `<i class="fas fa-star"style="margin-right: 5px;background-color:  rgb(14, 207, 143);padding: 5px;"></i>`; // Full star
        }

        if (halfStar) {
            starsHTML += `<i class="fas fa-star-half-alt"style="margin-right: 5px;background-color:  rgb(14, 207, 143);padding: 5px;"></i>`; // Half star
        }

        for (let i = 0; i < emptyStars; i++) {
            starsHTML += `<i class="far fa-star"style="margin-right: 5px;background-color:  rgb(14, 207, 143);padding: 5px;"></i>`; // Empty star
        }


    return starsHTML;
}
