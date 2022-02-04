//When the page loads, check to see if screen is equal or bigger than 768px
//If so, then it removes Carousel Html
document.addEventListener("DOMContentLoaded", function() { 
    if(window.innerWidth >=768){
        let list = document.getElementById("carouselExampleControls");
        list.style.display = 'none';
        gridLayout();
    }
}, true);



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
    let list2 = document.getElementById("grid-project");
    if(window.innerWidth < 768){
      list.style.display = '';
      list2.style.display = 'none';
    } else{
      list.style.display = 'none';
      list2.style.display = '';  
      
    }
    
  });

//where my Grid HTML will populate 
 gridLayout = () => {

        const div = document.createElement("div");
        const text = document.createTextNode("Form Project");
        div.appendChild(text);
        document.getElementById("grid-project").appendChild(div);
    }
