import "./styles.css";

import imgSrc from "./pexels-abdullah-alallah-314142096-28558771.jpg";

const imgElement = document.querySelector(".imgbox img");
if (imgElement) {
  imgElement.src = imgSrc;
}

// Query all elements with the class 'itemPic'
const itemImgs = document.querySelectorAll(".itemPic");

// Iterate over the NodeList and set the src for each element
itemImgs.forEach((itemImg) => {
  const img = itemImg;
  img.src = imgSrc;
});

const footerImage = document.querySelector(".footerPic");

if (footerImage) {
  footerImage.src = imgSrc;
}
