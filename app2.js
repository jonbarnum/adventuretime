let userAnswer = prompt('Do You Want To Go On An Adventure?');

console.log(userAnswer)

if (userAnswer.toLowerCase() == 'yes'){
    let url = "https://24.media.tumblr.com/tumblr_m8izndR4kl1rq20pxo1_500.gif"
    document.write(`<img src="${url}">`)
}

