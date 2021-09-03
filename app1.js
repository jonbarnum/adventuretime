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
    guessingGame();
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

function randomNumberGenerator(){
    let correctAnswer = Math.floor(Math.random() * 50) +1;
    return correctAnswer;
}


function guessingGame () {
    let numberOfAttempts = 8;
    let correctAnswer = randomNumberGenerator();
    let play = true;
    let currentAttempt = 0;

    while (play){
        let userResponse = prompt ("Guess a Number Between 1 to 50");
        currentAttempt = currentAttempt + 1;
        if ((userResponse < 1 ) || (userResponse > 50)){
            userResponse = prompt ("Guess a number between 1 to 50");
        } else if (userResponse == correctAnswer){
            alert ("Mathimatical!!!, You Got it Right!!!");
            play = false
        } else if (userResponse < correctAnswer) {
            alert ("Supper bummer!, too low " + (numberOfAttempts - currentAttempt ) + " attempts left"); 
            
        } else if (userResponse > correctAnswer){
            alert ("Oh No!!! too high " + (numberOfAttempts - currentAttempt) + "  attempts left" );
        }  
        if (currentAttempt == numberOfAttempts){
            play = false;
        }
    }
}


function pictureQuestion(){
    let pictureAnswer = prompt ('How many times do you want to see a picture? Choose between 1 through 3');

    console.log(pictureAnswer);

    if (pictureAnswer == 1 || pictureAnswer == 2 || pictureAnswer == 3){
        let url = "https://c.tenor.com/9JO3m3Tyj4kAAAAC/jake-adventure-time.gif";
        for (let i = 0; i < pictureAnswer; i++){
            document.write(`<img src="${url}">`);
    
        }
    }
}

pictureQuestion();
