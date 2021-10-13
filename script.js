const songs = [ 
    "bensound-dance.mp3",
    "bensound-epic.mp3",
    "bensound-buddy.mp3",
    "bensound-tomorrow.mp3",
    "bensound-happiness.mp3",
    "bensound-happyrock.mp3",
];
const player = document.getElementById("player");
function createSongList() {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list;
}
const songList = document.getElementById("songList");
songList.appendChild(createSongList());
songList.onclick = function (e) {
    const source = document.getElementById("source")
    source.src = "sons/"+e.target.innerText;
    document.querySelector('#currentSong')
    .innerHTML = `Now playing: ${e.target.innerText}`;
player.load();
player.play();
};
function playAudio() {
    if(player.readyState){
        player.play();
    }
}
function pauseAudio() {
    player.pause();
}
const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
    const  volume = e.target.value;
    player.volume = volume;
};
function updateProgress() {
    if(player.currentTime > 0) {
    const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
} 
}







