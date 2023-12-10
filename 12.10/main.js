const player = document.getElementById("player")

function playSong(id) {
  player.src = `www.youtube.com/embed/${id}?autoplay=1`;
}
