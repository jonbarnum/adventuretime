function getUserName(){
    let userName = prompt ('Please enter your name')

    document.getElementById('name').innerHTML = userName;  
};

getUserName();




function userAnswer(){
    let userAnswer = prompt('Do You Want To Go On An Adventure?');

console.log(userAnswer)

if (userAnswer.toLowerCase() == 'yes'){
    let url = "https://24.media.tumblr.com/tumblr_m8izndR4kl1rq20pxo1_500.gif"
    document.write(`<img src="${url}">`)
} else {
    let url = "https://i.pinimg.com/originals/5b/7b/30/5b7b304bea8a6c105fc80a36d8025cd4.gif"
    document.write(`<img src="${url}">`)
}
};

userAnswer();


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