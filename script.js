const tabBtns = document.querySelectorAll(".tab");
const galleryItems = document.querySelectorAll(".gallery .item");
const galleryItemImg = document.querySelectorAll(".gallery .item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-image img");

// add event listener on all tabs
for (let tabBtn of tabBtns) {
  tabBtn.addEventListener("click", (e) => {
    clickedTab = e.target.getAttribute("data-tabs");
    filterGalleryItems(clickedTab, e.target);
  });
}

// lets change images on tab click
function filterGalleryItems(clickedTab, tab) {
  // remove active class from all tab buttons
  for (let tabBtn of tabBtns) {
    tabBtn.classList.remove("active");
  }
  // add active class on clicked tab button
  tab.classList.add("active");

  // Now show or hide images
  if (clickedTab === "all") {
    for (let galleryItem of galleryItems) {
      galleryItem.style.display = "block";
    }
  } else {
    for (let galleryItem of galleryItems) {
      if (galleryItem.getAttribute("data-filter") === clickedTab) {
        galleryItem.style.display = "block";
      } else {
        galleryItem.style.display = "none";
      }
    }
  }
}

// Lightbox settngs
for (let currentImage of galleryItemImg) {
  currentImage.addEventListener("click", (e) => {
    const clickedImage = e.target.getAttribute("src");
    lightbox.style.display = "flex";
    lightboxImg.src = clickedImage;
  });
}

// Remove lightbox when user click outside the image or cross button
window.addEventListener("click", (e) => {
  if (
    e.target.getAttribute("class") === "lightbox" ||
    e.target.getAttribute("class") === "cross"
  ) {
    lightbox.style.display = "none";
  }
});
// lightbox.display = "box";
// lightboxImg.src = "clickedImg";
