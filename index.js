var numberOfButtons = document.querySelectorAll(".drum");

function sound(key) {
    switch(key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case 'j':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;

        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case 'l':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
    }
}

function addAnimation(key) {
    button = document.querySelector("."+key);
    button.classList.add("pressed");

    setTimeout(function() {
        button.classList.remove("pressed");
    },100);
}

for(var i=0;i<numberOfButtons.length;i++) {
    numberOfButtons[i].addEventListener("click",function() {
        sound(this.innerHTML);
        addAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event) {
    sound(event.key);
    addAnimation(event.key);
})