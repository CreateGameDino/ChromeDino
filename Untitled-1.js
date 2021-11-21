const score = document.getElementById("score");
const dino = document.getElementById("dinosaur");
const cactus = document.getElementById("cactus");
const bird = document.getElementById("bird");

function jump() {

dino.classList.add("jump-animation");

setTimeout(() =>
dino.classList.remove ("jump-animation"),500);

}

document.addEventListener('keypress', (event) => {
    if (!dinosaur.classList.contains ("jump-animation"))
     jump();
})

setInterval(

    () => {
            const dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
            const birdleft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"))
            const cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
            score.innerText++ 

                if (cactusleft<0) {
                    cactus.style.display = 'none'
        } else {
             cactus.style.display = ""
        }
        if (birdleft<0) {
            bird.style.display = 'none'
} else {
    bird.style.display = ""
}

        if ((cactusleft < 50 && cactusleft > 0 && dinotop > 150) || (birdleft < 50 && birdleft > 0 && dinotop > 150)) {
                alert("Game over. Your score: " + score.innerText + "." + " Continue?")
            location.reload();    
        }
    }, 50
)