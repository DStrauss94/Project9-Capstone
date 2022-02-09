
toggleBody = () => {
    var element = document.body;
    element.classList.toggle('dark-mode');
    toggleGithub();
    toggleLines();
}

toggleGithub = () => {
    var elementTwo = document.querySelectorAll('#github');
    console.log(elementTwo);

    elementTwo.forEach(elementNode => {
        elementNode.classList.toggle("dark-mode-carousel");
    });
    
    
}

toggleLines = () => {
    var elementThree = document.querySelectorAll('#line');
    console.log(elementThree);
    elementThree.classList.toggle('hr-dark-mode');
}

