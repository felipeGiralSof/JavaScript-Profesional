import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video, 
  plugins: [new AutoPlay(), new AutoPause()],
});

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();

const button2 = document.getElementById("muteButton");
button2.onclick = () => player.toggle();

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error =>{
    console.log(error.message);
  });
}