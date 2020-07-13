
for (var i = 0; i < document.getElementsByClassName("drum").length; i++){
    document.getElementsByClassName("drum")[i].addEventListener("click", () => {
        var tom1 = new Audio('./sounds/tom-1.mp3');
        tom1.play();
    });
    
};
