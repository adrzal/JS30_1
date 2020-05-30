document.body.addEventListener("keydown", function (evn) {

    if (evn.key == "a" || evn.key == "s" || evn.key == "d" || evn.key == "f" || evn.key == "g" || evn.key == "h" || evn.key == "j" || evn.key == "k" || evn.key == "l") {
        
        const sound = new Audio(`Audio/${evn.key}.wav`);
        
        sound.pause();
        sound.currentTime = 0;
        sound.play();

        let playing = document.querySelector(`#${evn.key}`);
        
        playing.classList.add("play");
        
        playing.addEventListener("transitionend", function(){
            playing.classList.remove("play");
        })

    }

})
