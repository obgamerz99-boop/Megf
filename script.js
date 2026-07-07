// ===============================
// START BUTTON
// ===============================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    document.getElementById("game").scrollIntoView({
        behavior: "smooth"
    });
});


// ===============================
// LOVE GAME
// ===============================

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("funnyMessage");


const messages = [
    "Are you sure? 🤨",
    "Nice try 😂",
    "You can't escape ❤️",
    "The button knows the truth 🌷",
    "Wrong answer detected 😭",
    "Try again hehe"
];


// Move NO button

function moveNoButton(){

    const x = Math.random() * 
    (window.innerWidth - noBtn.offsetWidth - 50);

    const y = Math.random() * 
    (window.innerHeight - noBtn.offsetHeight - 50);


    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";


    message.innerHTML =
    messages[Math.floor(Math.random()*messages.length)];

}


noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart", moveNoButton);


// YES BUTTON

yesBtn.addEventListener("click",()=>{

    createConfetti();

    setTimeout(()=>{

        document.getElementById("lovePage").style.display="block";

        document.getElementById("lovePage")
        .scrollIntoView({
            behavior:"smooth"
        });

    },1000);

});



// ===============================
// FLOATING FLOWERS + HEARTS
// ===============================


function createFloating(){

    const flowerBox =
    document.getElementById("flowers");

    const heartBox =
    document.getElementById("hearts");


    const flowers=[
        "🌷",
        "🌸",
        "🌹",
        "🌺"
    ];


    for(let i=0;i<25;i++){

        let flower=document.createElement("span");

        flower.innerHTML =
        flowers[Math.floor(Math.random()*flowers.length)];

        flower.style.left =
        Math.random()*100+"%";

        flower.style.animationDuration =
        (5+Math.random()*8)+"s";


        flowerBox.appendChild(flower);

    }



    for(let i=0;i<20;i++){

        let heart=document.createElement("span");

        heart.innerHTML="❤️";

        heart.style.left =
        Math.random()*100+"%";

        heart.style.animationDuration =
        (4+Math.random()*7)+"s";


        heartBox.appendChild(heart);

    }

}


createFloating();



// ===============================
// CONFETTI
// ===============================


function createConfetti(){

    for(let i=0;i<100;i++){

        let piece =
        document.createElement("div");


        piece.innerHTML =
        ["❤️","🌷","✨","💖"]
        [Math.floor(Math.random()*4)];


        piece.style.position="fixed";
        piece.style.left=
        Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.fontSize=
        (15+Math.random()*25)+"px";

        piece.style.zIndex="9999";


        document.body.appendChild(piece);



        let fall =
        piece.animate(

            [
                {
                    transform:"translateY(0) rotate(0)",
                    opacity:1
                },

                {
                    transform:
                    `translateY(100vh) rotate(720deg)`,
                    opacity:0
                }

            ],

            {
                duration:
                2000+Math.random()*2000
            }

        );


        fall.onfinish=()=>{
            piece.remove();
        };

    }

}



// ===============================
// MUSIC BUTTON
// ===============================


const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");


let playing=false;


musicBtn.addEventListener("click",()=>{


    if(!playing){

        music.play();

        musicBtn.innerHTML="⏸️";

        playing=true;

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵";

        playing=false;

    }


});



// ===============================
// SCROLL REVEAL
// ===============================


const cards =
document.querySelectorAll(".card");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


    let position =
    card.getBoundingClientRect().top;


    if(position < window.innerHeight-100){

        card.style.opacity="1";
        card.style.transform="translateY(0)";

    }


});


});


// Initial card state

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform=
    "translateY(50px)";

    card.style.transition=
    "0.8s";

});