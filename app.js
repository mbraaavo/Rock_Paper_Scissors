//This will fill in the users choice spot...

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let p1_choice = document.querySelector('#p1_choice');

rock.addEventListener("click", () => {
    p1_choice.src("misc/svg/003-stone.svg");
});
