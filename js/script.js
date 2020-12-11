var tileOne = document.querySelector('#tileOne');
var tileTwo = document.querySelector('#tileTwo');
var gifOne = document.querySelector('#gifOne');
var gifTwo = document.querySelector('#gifTwo');
var installation = document.querySelector('.installation');
var videoOne = document.querySelector('#video1');
var videoTwo = document.querySelector('#video2');
const beginBtn = document.querySelector('#btn-begin');
const audio = document.querySelector('#overall-audio');

var oneClicked = false;
var twoClicked = false;

var playerOne = new Vimeo.Player(videoOne);
var playerTwo = new Vimeo.Player(videoTwo);

playerOne.setVolume(0);
playerTwo.setVolume(0);


beginBtn.addEventListener('click', () => 
{
    overlay.style.opacity = 0;
    overlay.style.zIndex = -10;
    audio.play();
});

tileOne.addEventListener('click', () => 
{
   tileOne.classList.toggle('fade');
   tileTwo.classList.toggle('fade');
   gifOne.classList.toggle('fadeIn');
   videoOne.classList.toggle('fadeIn');
   installation.style.zIndex = 0;
   installation.style.opacity = 0;
   //playerOne.play();
});

tileTwo.addEventListener('click', () => 
{
    tileOne.classList.toggle('fade');
    tileTwo.classList.toggle('fade');
    gifTwo.classList.toggle('fadeIn');
    videoTwo.classList.toggle('fadeIn');
    installation.style.zIndex = 0;
    installation.style.opacity = 0;
   // playerTwo.play();
});

playerOne.on('ended', function() 
{
    oneClicked = true;
    installation.style.zIndex = 2;
    installation.style.opacity = 1;
    videoOne.style.opacity = 0;
    videoOne.style.zIndex = 0;
    gifOne.style.opacity = 0;

    if (oneClicked === true && twoClicked === false)
    {
        tileTwo.classList.toggle('fadeIn');
    }

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
    twoClicked = true;
    installation.style.zIndex = 2;
    installation.style.opacity = 1;
    videoTwo.style.opacity = 0;
    videoTwo.style.zIndex = 0;
    gifTwo.style.opacity = 0;

    console.log(twoClicked, oneClicked);

    if (oneClicked === false && twoClicked === true)
    {
        tileOne.classList.toggle('fadeIn');
    }

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

           // selectTile.style.display = "block";

            oneClicked = false;
            twoClicked = false;
        },2000);
    }
});

