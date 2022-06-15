import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const input = document.querySelector('.input');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    Notify.info(number(input.value));
});


function number(num) {
    return `+380 (${num.slice(0, 2)}) ${num.slice(2, 6)}-${num.slice(6, 10)}`;
}
