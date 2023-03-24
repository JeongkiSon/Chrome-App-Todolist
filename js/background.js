const images = [
    "https://source.unsplash.com/random/?night",
    "https://source.unsplash.com/random/?space",
    "https://source.unsplash.com/random/?aurora"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// image tag
const bgImage = document.createElement("img"); // create an element

// define property src in image tag
bgImage.src = `${chosenImage}`;
bgImage.id = "back";

// add it inside the body
document.body.appendChild(bgImage);

// we make  html element from JS!!