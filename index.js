console.log("DOM Loaded");

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
        backgroundSound.volume = 0.75;
        backgroundSound.loop = true;
        
    }else if(soundBtn.innerHTML === "Sound: oN" &&  footerSoundBtn.innerHTML === "Sound: oN"){
        soundBtn.innerHTML = "Sound: oFF";
        footerSoundBtn.innerHTML = "Sound: oFF";
        backgroundSound.pause();
    }

}


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



    
const navlogo = document.querySelector('#logo');
const text = navlogo.textContent.trim();
navlogo.textContent = '';

[...text].forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.transitionDelay = `${i * 0.05}s`;

    span.style.setProperty('--out-delay', `${(text.length - i - 1) * 0.01}s`); 
    navlogo.append(span);
});





