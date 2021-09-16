const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lampada');

function isBrokenLamp() {
    return lamp.src.includes('Broken')
}

function LampOn() {
    if (!isBrokenLamp()) {
        lamp.src = './img/lampOn.jpg'
    }
}
function LampOff() {
    if (!isBrokenLamp()) {
        lamp.src = './img/lampOff.jpg'
    }
}

function brokeLamp() {
    lamp.src = './img/lampBroken.jpg'
}

turnOn.addEventListener('click', LampOn)
turnOff.addEventListener('click', LampOff)

lamp.addEventListener('dblclick', brokeLamp)
lamp.addEventListener('mouseover', LampOn)
lamp.addEventListener('mouseleave', LampOff)