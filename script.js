function changing() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let body_bg = document.querySelector('body');

    body_bg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

let mode = document.querySelector('#mode');
let body = document.querySelector('body');
let premode = 'light';

mode.addEventListener('click', () => {
    if (premode === 'light') {
        premode = 'dark';
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        premode = 'light';
        body.classList.add('light');
        body.classList.remove('dark');
    }

    console.log(premode);
});