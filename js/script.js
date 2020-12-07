var tileOne = document.querySelector('#tileOne');
var tileTwo = document.querySelector('#tileTwo');
var installation = document.querySelector('#installation');
var videoOne = document.querySelector('#video1');
var videoTwo = document.querySelector('#video2');
const beginBtn = document.querySelector('#btn-begin');
const audio = document.querySelector('#overall-audio');
var oneClicked = false;
var twoClicked = false;

beginBtn.addEventListener('click', () => {
    overlay.style.opacity = 0;
    overlay.style.zIndex = -10;
    audio.play();
});

tileOne.addEventListener('click', () => 
{
    $("#tileOne").delay(100).animate({"opacity": "0"}, 600);
    $("#installation").delay(300).animate({"opacity": "0.5"}, 600);
    $("#closeUpRoses").delay(300).animate({"opacity": "0.7"}, 600);
    $("#closeUpFlowers").delay(300).animate({"opacity": "0"}, 600);
    $("#video1").delay(300).animate({"opacity": "0.5"}, 600);
    $("#video1").delay(300).animate({"display": "block"}, 600);
    $("#video1").delay(300).animate({"z-index": "6"}, 600);
    tileTwo.style.zIndex = '3';
});

tileTwo.addEventListener('click', () => 
{
    $("#tileTwo").delay(100).animate({"opacity": "0"}, 600);
    $("#tileOne").delay(100).animate({"opacity": "0"}, 600);
    $("#tileOne").delay(100).animate({"display": "none"}, 600);
    $("#installation").delay(100).animate({"opacity": "0.3"}, 600);
    $("#closeUpRoses").delay(100).animate({"opacity": "0"}, 600);
    $("#closeUpFlowers").delay(100).animate({"opacity": "0.7"}, 600);
    $("#video2").delay(300).animate({"opacity": "0.6"}, 600);
    $("#video2").delay(300).animate({"z-index": "6"}, 600);
    videoTwo.style.display = 'block';
    tileOne.style.zIndex = '0';
});

var iframeOne = $('#video1');
var playerOne = new Vimeo.Player(iframeOne);

var iframeTwo = $('#video2');
var playerTwo = new Vimeo.Player(iframeTwo);

playerOne.on('ended', function() 
{
    tileTwo.style.zIndex = "5";
    $("#video1").delay(100).animate({"display": "none"}, 100); 
    $("#video1").delay(100).animate({"opacity": "0"}, 100); 
    $("#video1").delay(100).animate({"z-index": "-1"}, 100);
    $("#installation").delay(300).animate({"opacity": "1"}, 300);   
    $("#closeUpRoses").delay(300).animate({"opacity": "0"}, 300);
    oneClicked = true;

    if (oneClicked === true && twoClicked === true)
    {
        console.log(twoClicked, oneClicked);
        setTimeout(function()
        { 
            tileOne.style.display = "block";
            tileOne.style.zIndex = "5";
            tileOne.style.opacity = "1";
            tileTwo.style.display = "block";
            tileTwo.style.zIndex = "5";
            tileTwo.style.opacity = "1";
        },2000);
    }
});

playerTwo.on('ended', function() 
{
    tileTwo.style.zIndex = "5";
    $("#video2").delay(100).animate({"display": "none"}, 100); 
    $("#video2").delay(100).animate({"opacity": "0"}, 100); 
    $("#video2").delay(100).animate({"z-index": "-1"}, 100);
    $("#installation").delay(300).animate({"opacity": "1"}, 300);   
    $("#closeUpFlowers").delay(300).animate({"opacity": "0"}, 300);
    twoClicked = true;

    if (oneClicked === true && twoClicked === true)
    {
        console.log(twoClicked, oneClicked);
        setTimeout(function()
        { 
            tileOne.style.display = "block";
            tileOne.style.zIndex = "5";
            tileOne.style.opacity = "1";
            tileTwo.style.display = "block";
            tileTwo.style.zIndex = "5";
            tileTwo.style.opacity = "1";
        },2000);
    }
});

