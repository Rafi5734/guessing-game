/*
console.log(document.querySelector('#guessing-number').textContent);

document.querySelector('#guessing-number').textContent = 'Correct number!';
console.log(document.querySelector('#guessing-number').textContent);
document.querySelector('#question').textContent = 13;
document.querySelector('#gussing-score').textContent = 10;

console.log(document.querySelector('#input').value);
document.querySelector('#input').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let deed = 20;
let highScore = 0;


document.querySelector('#check').addEventListener('click', function() {
    const guess = Number(document.querySelector('#input').value);
    console.log(guess, typeof guess);


    //if there is no valid number
    if (!guess) {
        document.querySelector('#guessing-number').textContent = 'No Valid Number!';


        //if there is win
    } else if (guess === secretNumber) {
        document.querySelector('#guessing-number').textContent = 'Correct number! you Win';
        document.querySelector('#question').textContent = secretNumber;
        console.log(document.querySelector('#guessing-number').textContent);

        document.querySelector('.gussing').style.backgroundColor = '#60b347';
        document.querySelector('#question').style.fontWeight = 'bold';

        if (deed > highScore) {
            highScore = deed;
            document.querySelector('#scoreHigh').textContent = highScore;
        }

        //if the number is too high
    } else if (guess > secretNumber) {
        if (deed > 0) {
            document.querySelector('#guessing-number').textContent = 'Too High From Your guessing';
            console.log(document.querySelector('#guessing-number').textContent);
            deed--;
            document.querySelector('#gussing-score').textContent = deed;
        } else {
            document.querySelector('#guessing-number').textContent = 'You Lost The Game';
            document.querySelector('#gussing-score').textContent = 0;
        }


        //if the number is too low
    } else if (guess < secretNumber) {
        if (deed > 0) {
            document.querySelector('#guessing-number').textContent = 'Too Low From Your guessing';
            console.log(document.querySelector('#guessing-number').textContent);
            deed--;
            document.querySelector('#gussing-score').textContent = deed;
        } else {
            document.querySelector('#guessing-number').textContent = 'You Lost The Game';
            document.querySelector('#gussing-score').textContent = 0;
        }
    }
});

document.querySelector('#again').addEventListener('click', function() {
    deed = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('#guessing-number').textContent = 'start guessing...';
    document.querySelector('#gussing-score').textContent = deed;
    document.querySelector('#question').textContent = '?';
    document.querySelector('#input').value = '';

    document.querySelector('.gussing').style.backgroundColor = '#222';
    document.querySelector('#question').style.fontWeight = 'none';
});