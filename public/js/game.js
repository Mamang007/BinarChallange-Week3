// Function untuk menjalankan COM
let element = null; //element dideklarasikan di luar fungsi comPlay agar terdeteksi function removeHl
let random = null;
function comPlay() {
    random = Math.round(Math.random() * 3)
    console.log(random);

    if (random === 1) {
        element = document.getElementById('com-batu')
    } else if (random === 2) {
        element = document.getElementById('com-kertas')
    } else {
        element = document.getElementById('com-gunting')
    }

    element.classList.add("highlightCom");
};

// Digunakan untuk menghapus highlight sebelumnya pada COM
function removeHlCom() {
    if (element !== null) {
    document.querySelector(".highlightCom").classList.remove("highlightCom")};
}

// Player memilih tangan (Permainan dimulai)
document.getElementById("batu").onclick = function() {
    document.getElementById("batu").classList.add("highlight");
    removeHlCom();
    comPlay();
    if(random === 1){
        document.querySelector("#game-result .player-result-draw").style.display = "block";
    } else if (random === 2){
        document.querySelector("#game-result .player-result-lose").style.display = "block";
    } else {
        document.querySelector("#game-result .player-result-win").style.display = "block";
    }
    document.querySelector("#game-result .vs-text").remove();
};
document.getElementById("kertas").onclick = function() {
    document.getElementById("kertas").classList.add("highlight");
    removeHlCom();
    comPlay();
    if(random === 1){
        document.querySelector("#game-result .player-result-win").style.display = "block";
    } else if (random === 2){
        document.querySelector("#game-result .player-result-draw").style.display = "block";
    } else {
        document.querySelector("#game-result .player-result-lose").style.display = "block";
    }
    document.querySelector("#game-result .vs-text").remove();
};
document.getElementById("gunting").onclick = function() {
    document.getElementById("gunting").classList.add("highlight");
    removeHlCom();
    comPlay();
    if(random === 1){
        document.querySelector("#game-result .player-result-lose").style.display = "block";
    } else if (random === 2){
        document.querySelector("#game-result .player-result-win").style.display = "block";
    } else {
        document.querySelector("#game-result .player-result-draw").style.display = "block";
    }
    document.querySelector("#game-result .vs-text").remove();
};

// triger


// Refresh Page
document.getElementById("refresh-page").onclick = function() {
    window.location.reload();
}