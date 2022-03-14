var audio = new Audio('gta1.mp3');
document.getElementById("play").addEventListener("click", function (){
     audio.play();
    document.getElementById("result").innerText = "🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣"
})
document.getElementById("po").addEventListener("click", function () {
    audio.pause();
})
document.getElementById("submit").addEventListener("click", function (){
    document.getElementById("result").innerText = "wrong captcha";
})

