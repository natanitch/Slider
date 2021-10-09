//карусель
var slideIndex = 1;
showSlides(slideIndex);

function plusSlidesNext(n){
  showSlides(slideIndex +=1);
}

function plusSlidesPrev(n) {
  showSlides(slideIndex -= 1);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName('slider-show');
  var dots = document.getElementsByClassName('dot');

  if(n > slides.length) {
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex=slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";   
  }

  slides[slideIndex - 1].style.display = "block";

  for (var j = 0; j < dots.length; j++) {
   dots[j].style.backgroundColor = "#bbb";
 }

 dots[slideIndex - 1].style.backgroundColor = "#717171";
 document.getElementById('changepicname').style.display = "none";
}

//смена название картинки
function showInput (){
  document.getElementById('changepicname').style.display = "block";
}

function clear() {
  document.getElementById('changepicname').value = "";
}

var pic = ["pic1", "pic2", "pic3", "pic4", "pic5", "pic6", "pic7"];

function changePicName() {
  var slides = document.getElementsByClassName('slider-show');
  var ent = document.getElementById('changepicname').value;
  
  for (var i = 0; i < slides.length; i++) {
    for (var j = 0; j < pic.length; j++) {
      if(i==j){
      if (slides[i].style.display == "block") {
        document.getElementById(pic[j]).innerHTML = ent;
        }
      }
    }
  }
  clear(); 
}