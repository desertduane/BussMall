'use strict'

// var timesClicked1 = 0;
// var timesClicked2 = 0;
// var timesClicked3 = 0;

function Image(number) {
  this.name = number;
  this.source = 'images/' + number + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
  Image.all.push(this);
}
Image.totalClicks = 0;
Image.all = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var previouslyShown = [];

for(var i = 0; i < Image.allNames.length; i++) {
  new Image(Image.allNames[i]);
}

Image.imgEl1 = document.getElementById('image1');
Image.imgEl2 = document.getElementById('image2');
Image.imgEl3 = document.getElementById('image3');
Image.container = document.getElementById('products');

function makeRandomNumber(){
  return Math.floor(Math.random() * Image.all.length)
}


function displayImages() {
  console.log(previouslyShown, 'previously shown images');
  var numbers = [];

  numbers[0] = makeRandomNumber();
  numbers[1] = makeRandomNumber();

  while(numbers[0] === numbers[1]){
    console.log('doup found');
    numbers[1] = makeRandomNumber();
  }
  numbers[2] = makeRandomNumber();
  while(numbers[2] === numbers[1] || numbers[2] === numbers[0]){
    console.log('doup found');
    numbers[2] = makeRandomNumber();

  }
  Image.imgEl1.src = Image.all[numbers[0]].source;
  Image.imgEl2.src = Image.all[numbers[1]].source;
  Image.imgEl3.src = Image.all[numbers[2]].source;
  Image.all[numbers[0]].timesShown += 1;
  Image.all[numbers[1]].timesShown += 1;
  Image.all[numbers[2]].timesShown += 1;
  console.log(numbers, 'currently showing');
  previouslyShown = numbers;
}

function showList(){
  var ulEl = document.getElementById('thelist');
  for(var i = 0; i < Image.all.length; i++){

    var liEl = document.createElement('li');
    liEl.textContent = Image.all[i].name + ' was shown ' + Image.all[i].timesShown + ' times and was clicked ' + Image.all[i].timesClicked + ' times.';
    ulEl.appendChild(liEl);
  }
}

function handleClick(e) {
  Image.totalClicks += 1;

  console.log(Image.totalClicks, 'total clicks');

  for(var i = 0; i < Image.all.length; i++){
    if(e.target.alt === Image.all[i].name){
      Image.all[i].timesClicked += 1;
    }
  }
  if(Image.totalClicks === 3) {
    Image.container.removeEventListener('click', handleClick);

    showList();
  }


  displayImages();
}
displayImages();

Image.container.addEventListener('click', handleClick)



// var randomImage = function () {
//   var randomIndex = Math.floor(Math.random() * Image.all.length);
//   Image.imgEl1.src = Image.all[randomIndex].source;
//   Image.imgEl1.alt = Image.all[randomIndex].name;
//   duplicatePreventer();
//   Image.all[randomIndex].timesShown += 1;
//
//   console.log(Image.all[randomIndex].name + 'has been shown ' + Image.all[randomIndex].timesShown + ' times');
//
// };
//
// var randomImage2 = function () {
//
//   var randomIndex = Math.floor(Math.random() * Image.all.length);
//   Image.imgEl2.src = Image.all[randomIndex].source;
//   Image.imgEl2.alt = Image.all[randomIndex].name;
//   duplicatePreventer();
//   Image.all[randomIndex].timesShown += 1;
//
//   console.log(Image.all[randomIndex].name + 'has been shown ' + Image.all[randomIndex].timesShown + ' times');
//
// };
// var randomImage3 = function () {
//
//   var randomIndex = Math.floor(Math.random() * Image.all.length);
//   Image.imgEl3.src = Image.all[randomIndex].source;
//   Image.imgEl3.alt = Image.all[randomIndex].name;
//   duplicatePreventer();
//   Image.all[randomIndex].timesShown += 1;
//
//   console.log(Image.all[randomIndex].name + 'has been shown ' + Image.all[randomIndex].timesShown + ' times');
//
// };
// function duplicatePreventer() {
//   if(Image.imgEl1.src === Image.imgEl2.src || Image.imgEl1.src === Image.imgEl3.src){
//     randomImage();
//     console.log('re-rolled');
//   }else if(Image.imgEl2.src === Image.imgEl3.src){
//     randomImage2();
//     console.log('re-rolled');
//   }
// }
// function getRandomImages() {
//   randomImage();
//   randomImage2();
//   randomImage3();
// }
//
// document.getElementById('products').addEventListener('click', getRandomImages);
// document.getElementById('products').addEventListener('click', randomImage2);
// document.getElementById('products').addEventListener('click', randomImage3);


// function addClickOne() {
//   timesClicked1 += 1;
//   console.log('img1 clicked ' + timesClicked1 + ' times');
// }
// function addClickTwo() {
//   timesClicked2 += 1;
//   console.log('img2 clicked ' + timesClicked2 + ' times');
// }
// function addClickThree() {
//   timesClicked3 += 1;
//   console.log('img3 clicked ' + timesClicked3 + ' times');
// }


// document.getElementById('image1').addEventListener('click', addClickOne);
// document.getElementById('image2').addEventListener('click', addClickTwo);
// document.getElementById('image3').addEventListener('click', addClickThree);
