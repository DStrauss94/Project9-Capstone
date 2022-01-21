
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
    var elementTwo = document.querySelectorAll('#github');
    console.log(elementTwo);

    elementTwo.forEach(elementNode => {
        elementNode.classList.toggle("dark-mode-carousel");
    });
    
    // elementTwo.forEach(githubDark);

    // githubDark = (node) => {
    //     node.classList.toggle('dark-mode-carousel');
    // }
    
    
}
