
anime({
  targets: 'div.box.red',
  translateY: [
  //array with two obj is used to go down and return back to orginal position
    { value: 200, duration: 2000 },
    { value: 0, duration: 800 }
  ],
  rotate:{
    value: '1turn',
    easing: 'easeInOutSine'
  }
});

anime({
  targets: 'div.box.blue',
  translateY: [
    { value: 200, duration: 500, delay: 1000}, // starting from second block we use delay so that first block undergoes the transformation and then only the second block is allowed to transfrom
    { value: 0, duration: 800 }
  ],
  rotate:{
    value: '1turn',
    easing: 'easeInOutSine',
    delay: 1000
  }
});

anime({
  targets: 'div.box.green',
  translateY: [
    { value: 200, duration: 500, delay: 2000},
    { value: 0, duration: 800 }
  ],
  rotate:{
    value: '1turn',
    easing: 'easeInOutSine',
    delay: 2000
  }
});

anime({
  targets: 'div.box.yellow',
  translateY: [
    { value: 200, duration: 500, delay: 3000},
    { value: 0, duration: 800 }
  ],
  rotate:{
    value: '1turn',
    easing: 'easeInOutSine',
    delay: 3000
  }
});

var playPause = anime({
  targets: 'div.box',
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }
  ],
  rotate:{
    value: '1turn',
    easing: 'easeInOutSine'
  },
  delay: function(el, i, l){ return i * 1000},
  autoplay:false,//automatically run huna didaina
  loop:true
});

document.querySelector('#boxes .play').onclick = playPause.play;//grabs the play button using query selector ani plays the box when clicked on play button
document.querySelector('#boxes .pause').onclick = playPause.pause;