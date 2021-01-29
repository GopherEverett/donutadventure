
class Hero{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.objects = {
                        sprinkleSpray: 5,
                        sugarShock: 10
                    }
        this.catchPhrases = [`i'm fresher than day old pizza`,
 `you can't count my calories`]
    }

    talkSass() {
        console.log(
            this.catchPhrases[
            Math.floor(
                Math.random() * this.catchPhrases.length
            )]
        );
    }

    announceHealth() {
        console.log(`${this.name}'s health is now ${this.health}`);
    }

    battle(enemy) {
        const objectsArray = Object.keys(this.objects);
        const randomNumber = Math.floor(Math.random() * objectsArray.length);
        const randomObject = objectsArray[randomNumber];

        const hitPoints = this.objects[randomObject]

        enemy.health -= hitPoints;

        return `${this.name} is using the ${randomObject} which have ${hitPoints} hit points`;
    }

}

class Enemy{
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.objects = {
                        pepperoniStars: 5,
                        cheeseGrease: 10
        }
        this.catchPhrases = [`i'm youtube famous`,
`i'm more dangerous than an uncovered sewer`];
    }

    talkSmack() {
       console.log(
            this.catchPhrases[
            Math.floor(
                Math.random() * this.catchPhrases.length
            )]
        );
    }

    announceHealth() {
        console.log(`${this.name}'s health is now ${this.health}`);
    }

    battle(enemy) {
         const objectsArray = Object.keys(this.objects);
        const randomNumber = Math.floor(Math.random() * objectsArray.length);
        const randomObject = objectsArray[randomNumber];

        const hitPoints = this.objects[randomObject]

        enemy.health -= hitPoints;

        return `${this.name} is using the ${randomObject} which have ${hitPoints} hit points`;
    }
}

const dougie = new Hero('Dougie the donut');
const pizzaRat = new Enemy('Pizza Rat')

//////////////////////////////
// Walking Down the Street //
/////////////////////////////


// Have Dougie talkSass
dougie.talkSass();
// Have Pizza Rat talkSmack
pizzaRat.talkSmack();
// Have Dougie announceHealth
dougie.announceHealth()
// Have Pizza Rat announceHealth
pizzaRat.announceHealth();

/////////////
// Battle!//
////////////
// pizzaRat.battle(dougie);
// dougie.battle(pizzaRat);
// pizzaRat.announceHealth();
// dougie.announceHealth();

// Website
let message = document.querySelector('#message');
let header = document.querySelector('h1');
let game = document.querySelector('#game');
let gameOver = document.querySelector('#gameOver');
let pizzaRatScore = document.querySelector('#pizzaRatScore');
let dougieScore = document.querySelector('#dougieScore');

document.querySelector("#dougieHit").addEventListener('click', e => {

    message.innerHTML = dougie.battle(pizzaRat);
    updateScore(pizzaRat.health, pizzaRatScore)
    if (pizzaRat.health < 1) {
        finishGame()
    }
});


document.querySelector("#pizzaRatHit").addEventListener('click', e => {
    message.innerHTML = pizzaRat.battle(dougie);
    updateScore(dougie.health, dougieScore)
    if (dougie.health < 1) {
        finishGame()
    }
});

function updateScore(score, location) {
    location.innerHTML = score;
}

function finishGame() {
    game.classList.add('hide');
    message.classList.add('hide');
    header.classList.add('hide');
    gameOver.classList.remove('hide');
}
