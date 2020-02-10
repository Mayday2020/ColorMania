
let element = document.querySelector('.wrap'),
code_color = document.querySelector('#code_color'),
color_button = document.querySelector('#button');

function randomColor() {

    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256)),
        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    code_color.textContent = color;
    element.style.background = color;
}
color_button.addEventListener('click', randomColor);

