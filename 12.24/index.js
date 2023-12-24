/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 

const redLights = document.querySelectorAll(".red");
const blueLights = document.querySelectorAll(".blue");

let lightsOn = false;

setInterval(() => {
  if (lightsOn) {
    for (light of redLights) {
      light.classList.remove("lights-on");
    }
    for (light of blueLights) {
      light.classList.add("lights-on");
    }
  } else {
    for (light of redLights) {
      light.classList.add("lights-on");
    }
    for (light of blueLights) {
      light.classList.remove("lights-on");
    }
  }

  lightsOn = !lightsOn;

}, 800);
