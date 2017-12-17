document.addEventListener("DOMContentLoaded",	function	()	{
var prevButton = document.querySelector('.slider-prevbutton'),
    nextButton = document.querySelector('.slider-nextbutton'),
    sliderChildren = document.querySelector('.slider').children,
    imageIndex = 0;

  sliderChildren[imageIndex].style.display = 'block';

  nextButton.addEventListener('click', function(event){
    sliderChildren[imageIndex].style.display = 'none';
    imageIndex++;
    if (imageIndex === sliderChildren.length){
      imageIndex = 0;
    }
    sliderChildren[imageIndex].style.display = 'block';
  });

  prevButton.addEventListener('click', function(event){
    sliderChildren[imageIndex].style.display = 'none';
    imageIndex--;
    if (imageIndex < 0){
      imageIndex = 2;
    }
    sliderChildren[imageIndex].style.display = 'block';
  });
  // ----------------------calculator------------------------------------------
  var listArrow = document.querySelectorAll('.list_arrow'),
      elementsList = document.querySelectorAll('.list_panel'),
      chairList = elementsList[0].children,
      colorList = elementsList[1].children,
      patternList = elementsList[2].children,
      yourChair = document.querySelector('.title'),
      titleValue = document.querySelector('.title.value'),
      spanColor = document.querySelector('.color'),
      colorValue = document.querySelector('.color.value'),
      spanPattern = document.querySelector('.pattern'),
      patternValue = document.querySelector('.pattern.value'),
      transport = document.getElementById('transport'),
      sumStrong = document.querySelector('.sum').firstChild,
      chairPrice = 0, colorPrice = 0, patternPrice = 0, transportPrice = 0,sum= 0;

// sum function
function sumFunc(chairPrice, colorPrice, patternPrice, transportPrice) {
  sum = (chairPrice+colorPrice+patternPrice+transportPrice);
  sumStrong.innerText = sum + 'zł'
};

// all arrows buttons
  for (var i = 0; i < listArrow.length; i++) {
    listArrow[i].addEventListener('click', function(event){
      this.nextElementSibling.classList.toggle("visible");
    })
  }
//list of chairs
  for (var i = 0; i < chairList.length; i++) {
    chairList[i].addEventListener('click', function(event){
      yourChair.innerText = this.innerText;
      titleValue.innerText = this.dataset.price;
      this.parentElement.classList.toggle("visible");
      chairPrice = parseInt(this.dataset.price);
      sumFunc(chairPrice, colorPrice, patternPrice, transportPrice);
    })
  }
//list of colors
for (var i = 0; i < colorList.length; i++) {
  colorList[i].addEventListener('click', function(event){
    spanColor.innerText = this.innerText;
    colorValue.innerText = this.dataset.price;
    this.parentElement.classList.toggle("visible");
    colorPrice = parseInt(this.dataset.price);
    sumFunc(chairPrice, colorPrice, patternPrice, transportPrice);
  })
}
  //list of patterns
  for (var i = 0; i < patternList.length; i++) {
    patternList[i].addEventListener('click', function(event){
      spanPattern.innerText = this.innerText;
      patternValue.innerText = this.dataset.price;
      this.parentElement.classList.toggle("visible");
      patternPrice = parseInt(this.dataset.price);
      sumFunc(chairPrice, colorPrice, patternPrice, transportPrice);
    })
}
//transport included event
transport.addEventListener('click',function(event){
  if (transport.checked) {
      transportPrice = parseInt(this.dataset.price);
}else{
  transportPrice = 0;
}
sumFunc(chairPrice, colorPrice, patternPrice, transportPrice);
})

});
