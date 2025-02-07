let input = document.querySelector('input');
let ctrlIcon = document.querySelector('.bx-hide');

ctrlIcon.onclick = function() {
    if (input.type === 'password') {
        input.type = 'text';
        ctrlIcon.classList.remove('bx-hide');
        ctrlIcon.classList.add('bx-show');
    } else {
        input.type = 'password';
        ctrlIcon.classList.remove('bx-show');
        ctrlIcon.classList.add('bx-hide');
    }
}