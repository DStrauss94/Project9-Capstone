
// function toggleBody() {
//     var element = document.body;
//     element.classList.toggle('dark-mode');

// }

toggleBody = () => {
    var element = document.body;
    element.classList.toggle('dark-mode');
    toggleGithub();
}

toggleGithub = () => {
    var elementTwo = document.querySelector('#github');
    elementTwo.classList.toggle('dark-mode-carousel');
    
}
