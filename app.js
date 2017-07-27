'use strict'


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

var clicks = [];
var titles = [];

var previouslyShown = [];

for(var i = 0; i < Image.allNames.length; i++) {
  new Image(Image.allNames[i]);
}

Image.image1Img = document.getElementById('image1');
Image.image2Img = document.getElementById('image2');
Image.image3Img = document.getElementById('image3');
Image.container = document.getElementById('products');

function updateChartArrays() {
  for(var i = 0; i < Image.allNames.length; i++) {
    titles[i] = Image.all[i].name;
    clicks[i] = Image. all[i].timesClicked;
  }
}

function makeRandomNumber(){
  return Math.floor(Math.random() * Image.all.length);
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

  Image.image1Img.src = Image.all[numbers[0]].source;
  Image.image2Img.src = Image.all[numbers[1]].source;
  Image.image3Img.src = Image.all[numbers[2]].source;

  Image.image1Img.alt = Image.all[numbers[0]].name;
  Image.image2Img.alt = Image.all[numbers[1]].name;
  Image.image3Img.alt = Image.all[numbers[2]].name;

  Image.all[numbers[0]].timesShown += 1;
  Image.all[numbers[1]].timesShown += 1;
  Image.all[numbers[2]].timesShown += 1;

  console.log(numbers, 'currently showing');
  previouslyShown = numbers;
}



function handleClick(e) {
  Image.totalClicks += 1;
  console.log(Image.totalClicks, 'total clicks');
  for(var i = 0; i < Image.all.length; i++){
    if(e.target.alt === Image.all[i].name){

      Image.all[i].timesClicked += 1;
      updateChartArrays();
    }
  }

  displayImages();
  if(Image.totalClicks === 25) {
    localStorage.surveyData = JSON.stringify(Image.all);

    updateChartArrays();

    Image.image1Img.removeEventListener('click', handleClick);
    Image.image2Img.removeEventListener('click', handleClick);
    Image.image3Img.removeEventListener('click', handleClick);

    return drawChart();
  }
}


var data = {
  labels: titles,
  datasets: [
    {
      data: clicks,
      backgroundColor: [
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy',
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy',
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy',
        'bisque',
        'darkgray',
        'burlywood',
        'lightblue',
        'navy'
      ],
      hoverBackgroundColor: [
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple',
        'purple'
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('mallChart').getContext('2d');
  mallChart = new Chart(ctx,{
    type: 'horizontalBar',
    data: data,
    options: {
      title: {
        display: true,
        text: 'Product Popularity'
      },
      legend: {
        display: false,
        responsive: false,
        animation: {
          duration: 600,
          easing: 'easeOutBounce'
        }
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
}
if(localStorage.surveyData) {
  console.log('there is survey data');
  Image.all = JSON.parse(localStorage.surveyData);
}else{
  console.log('no survey data');
}
displayImages();
Image.image1Img.addEventListener('click', handleClick);
Image.image2Img.addEventListener('click', handleClick);
Image.image3Img.addEventListener('click', handleClick);





  // function showList(){
  //   var ulEl = document.getElementById('thelist');
  //   for(var i = 0; i < Image.all.length; i++){
  //
  //     var liEl = document.createElement('li');
  //     liEl.textContent = Image.all[i].name + ' was shown ' + Image.all[i].timesShown + ' times and was clicked ' + Image.all[i].timesClicked + ' times.';
  //     ulEl.appendChild(liEl);
  //
  //     document.getElementById('listButton').removeEventListener('click', showList);
  //   }
  // }
