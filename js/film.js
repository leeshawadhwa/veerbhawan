// play video when user enters room. Pause when leaving
const v = document.getElementById('filmvideo');
v.pause();
AFRAME.registerComponent('listener', {
  tick: function () {
    const X = this.el.getAttribute('position')["x"];

    if (X<=10) {
      v.play();
    } else {
      v.pause();
    }
  }
});

// Workaround for mobile video
// uses the splash screen button to trigger video play/pause so that the
// video will auto play when the user enters the theater room
const enterButton = document.querySelector('.splash__button')
const splash = document.querySelector('.splash');

enterButton.addEventListener('click', () => {
  v.play();
  v.pause();
  splash.style.display = 'none';
});
