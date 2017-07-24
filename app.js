'use strict'

var timesClicked1 = 0;
var timesClicked2 = 0;
var timesClicked3 = 0;

function Image(number) {
  this.name = number;
  this.source = 'images/' + number + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
  Image.all.push(this);
}

Image.all = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(var i = 0; i < Image.allNames.length; i++) {
  new Image(Image.allNames[i]);
}

Image.imgEl1 = document.getElementById('image1');
Image.imgEl2 = document.getElementById('image2');
Image.imgEl3 = document.getElementById('image3');


function randomImage() {
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl1.src = Image.all[randomIndex].source;
  Image.imgEl1.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;

  console.log(Image.all[randomIndex].name + 'has been shown ' + Image.all[randomIndex].timesShown + ' times');

}

function randomImage2() {

  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl2.src = Image.all[randomIndex].source;
  Image.imgEl2.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;

  console.log(Image.all[randomIndex].name + 'has been shown ' + Image.all[randomIndex].timesShown + ' times');

}
function randomImage3() {

  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl3.src = Image.all[randomIndex].source;
  Image.imgEl3.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;

  console.log(Image.all[randomIndex].name + 'has been shown ' + Image.all[randomIndex].timesShown + ' times');


}
function addClickOne() {
  timesClicked1 += 1;
  console.log('img1 clicked ' + timesClicked1 + ' times');
}
function addClickTwo() {
  timesClicked2 += 1;
  console.log('img2 clicked ' + timesClicked2 + ' times');
}
function addClickThree() {
  timesClicked3 += 1;
  console.log('img3 clicked ' + timesClicked3 + ' times');
}


document.getElementById('products').addEventListener('click', randomImage);
document.getElementById('products').addEventListener('click', randomImage2);
document.getElementById('products').addEventListener('click', randomImage3);
document.getElementById('image1').addEventListener('click', addClickOne);
document.getElementById('image2').addEventListener('click', addClickTwo);
document.getElementById('image3').addEventListener('click', addClickThree);

randomImage();
randomImage2();
randomImage3();