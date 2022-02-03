// if(window.innerWidth >=768){
//     let list = document.getElementById("carouselExampleControls");
//     list.style.display = 'none';
//     gridLayout();
// }
// else{
//     list.style.display = 'none';
//   }


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


window.addEventListener('resize', () => {
    let list = document.getElementById("carouselExampleControls");
    if(window.innerWidth <= 768){
      list.style.display = '';
    } else{
      list.style.display = 'none';
    }
  });


 


gridLayout = () => {
    
        const p = document.createElement("p");
        p.innerHTML = "Hello World!";
        let project1 = document.getElementById('grid-project');
        project1.append(p);
        
        
    
}
