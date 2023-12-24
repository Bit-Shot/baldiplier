const filePath = "Assets/Audio/";
const songs = ["Bald Lezar", "Baldopotamus"];
const fileType = ".mp3";

var index = 0;
const min = 0;
const max = songs.length - 1;

function clamp(num) {
    return Math.min(Math.max(num, min), max);
}



window.onload = function () {
    function selectSong(indexDelta) {
        index = clamp(index + indexDelta);

        cover.src = "Assets/Images/".concat(songs[index], ".png");
        songName.innerHTML = songs[index];

        music.src = filePath.concat(songs[index], fileType);
        playpause.src = "Assets/Images/play.png";
    }

    selectSong(0);

    prev.addEventListener("click", function () {
        selectSong(-1);
    })
    next.addEventListener("click", function () {
        selectSong(1);
    })

    playpause.addEventListener("click", function () {
        if (music.paused == false) {
            music.pause();
            playpause.src = "Assets/Images/play.png";
        } else {
            music.play();
            playpause.src = "Assets/Images/pause.png";
        }

        if (playpause.src == "Assets/Images/play.png") {
            playpause.src = "Assets/Images/pause.png";
        }
    })
}