const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//이미지 element 생성
const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);


