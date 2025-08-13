console.log("DOM Loaded");

// Sound functionality
// This code handles the sound toggle functionality
const soundBtn = document.querySelector('.soundBtn');
const footerSoundBtn = document.querySelector('#footerBtn');
footerSoundBtn.addEventListener("click",soundOn);
soundBtn.addEventListener("click",soundOn);


const backgroundSound = document.createElement('audio');
backgroundSound.src = "Assets/relaxing-ambient-music-342190.mp3";

function soundOn(){
    if(soundBtn.innerHTML === "Sound: oFF" && footerSoundBtn.innerHTML === "Sound: oFF"){
        soundBtn.innerHTML = "Sound: oN";
        footerSoundBtn.innerHTML = "Sound: oN";
        backgroundSound.play();
        backgroundSound.loop = true;
        
    }else if(soundBtn.innerHTML === "Sound: oN" &&  footerSoundBtn.innerHTML === "Sound: oN"){
        soundBtn.innerHTML = "Sound: oFF";
        footerSoundBtn.innerHTML = "Sound: oFF";
        backgroundSound.pause();
    }

}


// Carousel functionality
const imageSlider = document.querySelector(".artSection");
const slide = document.querySelector(".art");


document.getElementById("nextBtn").addEventListener("click", () => {
  handleCarouselMove(true);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  handleCarouselMove(false);
});

function handleCarouselMove(forward = true) {
  const slideWidth = slide.clientWidth;
  imageSlider.scrollBy({
    left: forward ? slideWidth : -slideWidth,
    behavior: "smooth"
  });
}



    






