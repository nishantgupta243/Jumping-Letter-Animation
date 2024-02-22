const container = document.querySelectorAll('span');

console.log(container);

container.forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
});

});
