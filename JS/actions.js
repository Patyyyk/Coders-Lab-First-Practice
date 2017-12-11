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



});
