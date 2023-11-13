"use strict";

window.addEventListener('load', function () {
    const fadeInElem = document.querySelector('.fade-in');
    fadeInElem.classList.add('animation');
});

function message() {
    const user = document.getElementById('name');
    const email = document.getElementById('email');
    const success = document.getElementById('success');
    const error = document.getElementById('error');

    if (user.value === '' || email.value === '') {
        error.style.display = 'block';
    } else {
        setTimeout(() => {
            user.value = '';
            email.value = '';
            success.style.display = 'block';
        }, 2000);
    }





}


