const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const endtext = document.querySelector('h1');

//Scroll animation
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    // duration = length of video * 1000
    duration: 10000,
    triggerElement: intro,
    triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text animation
const textAnim = TweenMax.fromTo(text, 3,{opacity: 1},{opacity: 0});

let scene2 = new ScrollMagic.Scene({
    // duration = length of video * 1000
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
}).setTween(textAnim)
.addTo(controller);

//Video animation

scene.on('update', e=>{
    scrollPos = e.scrollPos / 1000;
    video.currentTime = scrollPos;
})
