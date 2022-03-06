tsParticles.load("tsparticles", {
  particles: {
    color: {
      value: [
        "#FFAEBC",
      ]
    },
    move: {
      angle: {
        offset: 0,
        value: 15
      },
      direction: "bottom",
      enable: true,
      outModes: {
        default: "out"
      },
      speed: 3
    },
    number: {
      value: 250
    },
    opacity: {
      value: 1
    },
    shape: {
      type: "heart"
    },
    size: {
      value: 16
    },
    roll: {
      darken: {
        enable: true,
        value: 30
      },
      enlighten: {
        enable: true,
        value: 30
      },
      enable: true,
      mode: "horizontal",
      speed: {
        min: 5,
        max: 15
      }
    },
    zIndex: {
      value: {
        min: 0,
        max: 100
      },
      opacityRate: 0,
      velocityRate: 2
    }
  }
});
var audio = document.createElement("AUDIO");
var check = document.getElementById('check');
var text = document.getElementById("text");

const heading = document.querySelector('.heading');
const characters = heading.textContent.match(/[\w\W]/g);    

document.body.appendChild(audio);
audio.src = "./BeautifulInWhite.mp3"

check.addEventListener("click", function () {
  text.style.display = "block";
  check.disabled = true;
  audio.play();
  showText();
})

function showText() {
  heading.textContent = '';    //Empty the contents.
  
  // Loop through each character and push it inside heading element as a new span element.
  characters.forEach(char => {
    const span = document.createElement('span');
    if(char == " "){
      span.style.paddingLeft = "10px";
    } else {
      span.textContent = char;
    }
    heading.appendChild(span);
  });

}
  
// Create charcter count variable and set timer with new function called setChar().
let char = 0;
let timer = setInterval(setChar, 100);
//Stop the interval when all characters are rendered else set character span class to fade.
function setChar(){
  const spanChar = document.querySelectorAll('span')[char];
  if(spanChar){
    spanChar.className = 'fade';
    char++;
  }
  char === characters.length + 2 && clearInterval(timer);
}