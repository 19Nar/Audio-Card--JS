
var iContainer = document.createElement("div");
iContainer.className = "container-fluid";

var iRow = document.createElement("div");
iRow.className = "row";

var iCol = document.createElement("div");
iCol.className = "col-xs-12 col-sm-12 col-md-12";

var iCard = document.createElement("div");
iCard.className = "card";

var myImage = document.createElement("img");
myImage.src = "image.jpg";
myImage.style.width="100%";
myImage.style.padding="10px";

var iCardbody = document.createElement("div");
iCardbody.className = "card-body";

var iCardtitle = document.createElement("h5");
iCardtitle.className = "card-title";

var iCardtext = document.createElement("p");
iCardtext.className = "card-text";


var myTitle = document.createTextNode("Hallo, Henry!");
var myMessage = document.createTextNode("Thank you for being such a great son!!!");

var iBtn1 = document.createElement("a");
iBtn1.className = "btn btn-dark text-white";
iBtn1.type="button";
iBtn1.style.margin="10px";

var iBtn2 = document.createElement("a");
iBtn2.className = "btn btn-dark text-white";
iBtn2.type="button";

/*
iBtn.addEventListener('click', function x(){
  console.log('test button')
})
*/


var myMusic1 = document.createTextNode("Play Music");
var myMusic2 = document.createTextNode("Stop Music");


iBtn1.addEventListener('click',playAudio);
iBtn2.addEventListener('click',pauseAudio)

var myAudio = document.createElement("AUDIO");
myAudio.src="http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Nirvana/Nirvana%20'The%20Man%20Who%20Sold%20The%20World'.mp3";

console.log(myAudio)
function playAudio() {
  myAudio.play();
  }
  
  function pauseAudio() {
    myAudio.pause();
  }


iContainer.appendChild(iRow);
iRow.appendChild(iCol);
iCol.appendChild(iCard);
iCard.appendChild(myImage);
iCol.appendChild(iCardbody);
iCardbody.appendChild(iCardtitle);
iCardtitle.appendChild(myTitle);
iCardbody.appendChild(iCardtext);
iCardtext.appendChild(myMessage);
iCardbody.appendChild(iBtn1);
iCardbody.appendChild(iBtn2);
iBtn1.appendChild(myMusic1);
iBtn2.appendChild(myMusic2);

document.body.appendChild(iContainer);
console.log(iContainer);

