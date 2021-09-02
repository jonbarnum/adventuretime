let colors = ['green', 'red', 'purple', 'blue', 'yellow', 'orange'];

let count = 0
let container = document.getElementById('container');

let button = document.getElementById('button');

button.addEventListener('click', function(){
    if (count < 6){
        let randomColor = colors[count];
        container.style.background = randomColor;
        count = count + 1;  
    } else {
        count = 0
    }
});