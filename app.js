//This will fill in the users choice spot...

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let p1_choice = document.querySelector('.p1_choice');
let pc_choice = document.querySelector(".pc_choice");
let play_button = document.querySelector('#play_btn');
let rock_pic = "misc/svg/003-stone.svg";
let paper_pic = "misc/svg/002-file.svg";
let scissors_pic = "misc/svg/001-scissors.svg";
let p1_var 
let pc_var
let win_lose = document.querySelector('.WINorLOSE');

rock.addEventListener("click", function() {
    p1_choice.src = rock_pic;
    p1_choice.style.visibility = "visible";
    p1_var = "rock";
});

paper.addEventListener("click", function() {
    p1_choice.src = paper_pic;
    p1_choice.style.visibility = "visible";
    p1_var = "paper";
});

scissors.addEventListener("click", () => {
    p1_choice.src = scissors_pic;
    p1_choice.style.visibility = "visible";
    p1_var = "scissors";
});

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


play_button.addEventListener("click", () => {
    pc_pick();
    WIN_OR_LOSE();
});