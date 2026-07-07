// Typing Animation

const text = [
    "Python Developer",
    "Data Analyst",
    "Machine Learning Enthusiast",
    "Mechanical Engineer"
];

let index = 0;
let charIndex = 0;
let currentText = "";

const typingElement = document.getElementById("typing");


function type(){

    if(charIndex < text[index].length){

        currentText += text[index].charAt(charIndex);

        typingElement.textContent = currentText;

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}



function erase(){

    if(charIndex > 0){

        currentText = currentText.slice(0,-1);

        typingElement.textContent = currentText;

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index >= text.length){
            index = 0;
        }

        setTimeout(type,500);

    }

}


type();





// Dark / Light Mode Toggle

const button = document.getElementById("theme-toggle");


button.addEventListener("click",()=>{


document.body.classList.toggle("light-mode");


});





// Scroll Reveal Animation

const cards = document.querySelectorAll(
".skill-card, .project-card, .timeline-card"
);


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


const position = card.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}


});


});
