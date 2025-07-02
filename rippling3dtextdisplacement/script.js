console.clear();

const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);

const container = select('.container');
const textWrap = select('.text-wrap');
const textLine = select('.text-line');
const text = select('.text');
const temp = select('.temp');

const numWords = 8;
const numLines = 21;

let textString = text.textContent;
let textW = temp.offsetWidth;

const guiParams = function () {
  this.baseFrequency = 0.007;
  this.scale = 100;
};

let gui = new dat.GUI();
let params = new guiParams();

function repeatStringNumTimes(string, times) {
  return times > 0 ? string.repeat(times) : "";
}

function duplicateText() {
  textString = repeatStringNumTimes(textString, numWords);
  text.textContent = textString;
  for (let i = 0; i < numLines - 1; i++) {
    const clone = textLine.cloneNode(true);
    textWrap.appendChild(clone);
  }
}

function init() {
  duplicateText();
  gsap.set(container, { autoAlpha: 1 });
  textWrap.style.width = textW * (numWords - 1) + 'px';
}

function animate() {
  gsap.from('.text-line:nth-of-type(even) .text', {
    x: -(textW + 10),
    duration: 1,
    ease: 'none',
    repeat: -1
  });

  gsap.to('.text-line:nth-of-type(odd) .text', {
    x: -(textW + 10),
    duration: 1,
    ease: 'none',
    repeat: -1
  });

  gsap.from(textWrap, {
    opacity: 0,
    duration: 2
  });

  gsap.fromTo(textWrap, {
    x: -400
  }, {
    x: 400,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut'
  });

  gsap.to(textWrap, {
    rotationY: 360,
    rotationX: 360,
    duration: 15,
    ease: 'none',
    repeat: -1,
    transformOrigin: 'center center -100px'
  });
}

function addGUI() {
  gui.add(params, 'baseFrequency', 0, 0.02).onChange(function () {
    gsap.set('#turbulence', { attr: { baseFrequency: params.baseFrequency } });
  });

  gui.add(params, 'scale', 0, 400).onChange(function () {
    gsap.set('#displacement', { attr: { scale: params.scale } });
  });
}

window.onload = () => {
  init();
  addGUI();
  animate();
};
