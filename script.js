const logo = document.querySelector('#logo');

setTimeout(function() {
    logo.setAttribute('src', '/static/img/icon_smile.svg');
}, 1000);

setTimeout(function() {
    logo.setAttribute('src', '/static/img/icon_peace.svg');
}, 1100);

setTimeout(function() {
    logo.setAttribute('src', '/static/img/icon_smile.svg');
}, 1200);

const blink = setInterval(function() {
    logo.setAttribute('src', '/static/img/icon_peace.svg');
    console.log('blink', new Date())
}, 5000);

const openEyes = setInterval(function() {
    logo.setAttribute('src', '/static/img/icon_smile.svg');
    console.log('open', new Date())
}, 5100);

const blog = document.querySelector('#blog');
const email = document.querySelector('#logo');
const github = document.querySelector('#github');
const linkedin = document.querySelector('#linkedin');

blog.addEventListener('mouseOver', clearInterval(blink))
blog.addEventListener('mouseOver', clearInterval(openEyes))

email.addEventListener('mouseOver', clearInterval(blink))
email.addEventListener('mouseOver', clearInterval(openEyes))

github.addEventListener('mouseOver', clearInterval(blink))
github.addEventListener('mouseOver', clearInterval(openEyes))

linkedin.addEventListener('mouseOver', clearInterval(blink))
linkedin.addEventListener('mouseOver', clearInterval(openEyes))


