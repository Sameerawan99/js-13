// Assignment 1
let paragraph = document.getElementById('para')
let buttn = document.getElementById('change text')

function newText() { 
      
    paragraph.innerHTML = "Hello, World!"


}

buttn.addEventListener("click",newText)




// Assignment # 03

let list = document.getElementById('mylist')
let listItems = document.getElementsByTagName('li')

function list() {
    for(let i=0; i<= listItems.length;  i++ ){
        console.log(listItems[i].textContent);
        
    }
    

}


// Assignmet 04

let button = document.getElementById('mybutton')

function addclass() {
    
    button.classList.toggle('active')
}
button.addEventListener('click', addclass)




// Assignmet 5



function logInputValue() {
    let input = document.getElementById('myInput');
    
    input.addEventListener('input', function() {
        console.log(input.value);
    });
}