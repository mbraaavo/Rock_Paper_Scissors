//Grabbing some elements from the DOM
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let p1_choice = document.querySelector('.p1_choice');
let pc_choice = document.querySelector(".pc_choice");
let play_button = document.querySelector('#play_btn');
let rock_pic = "misc/svg/003-stone.svg";
let paper_pic = "misc/svg/002-file.svg";
let scissors_pic = "misc/svg/001-scissors.svg";
let p1_var = ""
let pc_var
let win_lose = document.querySelector('.WINorLOSE');
let guide = document.querySelector('.guide');
let p1_score = document.querySelector('#ur_score');
let pc_score = document.querySelector('#pc_score');
let announcement = document.querySelector('.announcement');
let reload = document.querySelector('#reload');

//This will populate the user's choice and activate the "play" button
rock.addEventListener("click", () => {
    p1_choice.src = rock_pic;
    p1_choice.style.visibility = "visible";
    p1_var = "rock";
    play_button.style.pointerEvents = "auto";
    play_button.style.backgroundColor = "#F4A261";
});

paper.addEventListener("click", () => {
    p1_choice.src = paper_pic;
    p1_choice.style.visibility = "visible";
    p1_var = "paper";
    play_button.style.pointerEvents = "auto";
    play_button.style.backgroundColor = "#F4A261";
    
});

scissors.addEventListener("click", () => {
    p1_choice.src = scissors_pic;
    p1_choice.style.visibility = "visible";
    p1_var = "scissors";
    play_button.style.pointerEvents = "auto";
    play_button.style.backgroundColor = "#F4A261";
});

//Function that will randomize pc's choice
function pc_pick () {
    let rando = Math.random() * 1000;
    let number = Math.floor(rando); 
    
    if (number <= 333) {
        pc_choice.src = rock_pic;
        pc_choice.style.visibility = "visible";
        pc_var = "rock";
    }
    else if (number > 333 && number < 669) {
        pc_choice.src = paper_pic;
        pc_choice.style.visibility = "visible";
        pc_var = "paper";
    }

    else {
        pc_choice.src = scissors_pic;
        pc_choice.style.visibility = "visible";
        pc_var = "scissors";
    }
};

//function name says it all... this declares whether you lost or won.
function WIN_OR_LOSE () {

    if (pc_var === p1_var) {
        win_lose.innerHTML = "TIE!";
    }
    else if (pc_var == "rock") {
        if (p1_var == "paper"){
            win_lose.innerHTML = "WIN!";
        }
        else if (p1_var == "scissors") {
            win_lose.innerHTML = "LOSE!";
        }
    }
    else if (pc_var == "paper") {
        if (p1_var == "rock"){
            win_lose.innerHTML = "LOSE!";
        }
        else if (p1_var == "scissors") {
            win_lose.innerHTML = "WIN!";
        }
    }
    else if (pc_var == "scissors") {
        if (p1_var == "paper") {
            win_lose.innerHTML = "LOSE!";
        }
        else if (p1_var == "rock") {
            win_lose.innerHTML = "WIN!";
        }
    }
    else {
        win_lose.innerHTML = "ERROR?";
    }

    if (win_lose.innerHTML == "WIN!") {
        win_lose.className = "win";
    }
    else if (win_lose.innerHTML == "LOSE!") {
        win_lose.className = "lose";
    }
    else {
        win_lose.className = "tie";
    }
};

//Locks up our play button until the player makes a choice.
if (p1_var === "") {
    play_button.style.pointerEvents = "none";
}

//This will be our score counter function!
let p1_score_number = 0;
let pc_score_number = 0;

function score_counter () {
    if (win_lose.innerHTML == "WIN!") {
        p1_score_number ++;
        p1_score.innerHTML = p1_score_number;   
    }
    
    else if (win_lose.innerHTML == "LOSE!") {
        pc_score_number ++;
        pc_score.innerHTML = pc_score_number;
    };
}

//This will be the winner announcment! I'm doing best out of 5

function winner_announcement() {
    if (pc_score.innerHTML == "3" || p1_score.innerHTML == "3") {
        if (pc_score_number == "3") {
            announcement.innerHTML = "SORRY!! <br> PC WON..";
            play_button.style.pointerEvents = "none";
            play_button.style.backgroundColor = "#264653";
            announcement.style.color = "#DD1C1A";
            guide.innerHTML = "";
            rock.style.pointerEvents = "none";
            paper.style.pointerEvents = "none";
            scissors.style.pointerEvents = "none";
            reload.style.display = "block";
            guide.innerHTML = "Hit the reload to play again!";
        }
        else {
            announcement.innerHTML= "CONGRATS!! <br> YOU WON!!";
            play_button.style.pointerEvents = "none";
            play_button.style.backgroundColor = "#264653";
            announcement.style.color = "#E9C46A";
            guide.innerHTML = "";
            rock.style.pointerEvents = "none";
            paper.style.pointerEvents = "none";
            scissors.style.pointerEvents = "none";
            reload.style.display = "block";
            guide.innerHTML = "Hit the Reload to Play Again!";
        }
    };
    
}

//Play button action!
play_button.addEventListener("click", () => {
    pc_pick();
    WIN_OR_LOSE();
    guide.innerHTML = "Play or Choose Again!";
    score_counter();
    winner_announcement();
});

//Reload button action!
reload.addEventListener("click", () => {
    pc_score_number = 0;
    p1_score_number = 0;
    p1_score.innerHTML = "0";
    pc_score.innerHTML = "0";
    guide.innerHTML = "Choose Your Weapon to PLAY";
    reload.style.display = "none";
    win_lose.innerHTML = "";
    announcement.innerHTML = "";
    p1_choice.src = "";
    p1_choice.style.visibility = "hidden";
    p1_var = "";
    pc_choice.src = "";
    pc_choice.style.visibility = "hidden";
    pc_var = "";
    rock.style.pointerEvents = "auto";
    paper.style.pointerEvents = "auto";
    scissors.style.pointerEvents = "auto";
});