const logo = document.querySelector('#logo');

const blink = '/static/img/icon_peace.svg';
const awake = '/static/img/icon_smile.svg';
const happy = '/static/img/icon_laugh.svg'

setTimeout(function() {
    logo.setAttribute('src', awake);
}, 1000);

setTimeout(function() {
    logo.setAttribute('src', blink);
}, 1100);

setTimeout(function() {
    logo.setAttribute('src', awake);
}, 1200);


const blog = document.querySelector('#blog');
const email = document.querySelector('#email');
const github = document.querySelector('#github');
const linkedin = document.querySelector('#linkedin');

blog.addEventListener('mouseenter', function() {
    logo.setAttribute('src', happy)
})
blog.addEventListener('mouseleave', function() {
    logo.setAttribute('src', awake)
})

email.addEventListener('mouseenter', function() {
    logo.setAttribute('src', happy)
})
email.addEventListener('mouseleave', function() {
    logo.setAttribute('src', awake)
})

github.addEventListener('mouseenter', function() {
    logo.setAttribute('src', happy)
})
github.addEventListener('mouseleave', function() {
    logo.setAttribute('src', awake)
})

linkedin.addEventListener('mouseenter', function() {
    logo.setAttribute('src', happy)
})
linkedin.addEventListener('mouseleave', function() {
    logo.setAttribute('src', awake)
})


