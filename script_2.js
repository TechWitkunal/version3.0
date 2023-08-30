const startBox = document.querySelector(".start-box"),
    startXbtn = startBox.querySelector(".playerX"),
    startObtn = startBox.querySelector(".playerO"),
    playBoard = document.querySelector(".play-board"),
    players = document.querySelector(".play-board .players"),
    allbox = playBoard.querySelectorAll("section span"),
    resultBox = document.querySelector(".result"),
    wonText = resultBox.querySelector("header p"),
    replay = resultBox.querySelector(".option button");


let userChoise;
let playerXIcon = "fa-solid fa-xmark";
let playerOIcon = "fa-regular fa-circle";
let playerSign = "";
let botStatus = false;
let filledBoxes = [];
let conditionVerifyStatus = false;
let botStep = 0;

let rowCombo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

let connerCombo = [1,3,7,9];

window.addEventListener("load", () => {
    // adding function clickedBox to all span tag inside section
    for (let i = 0; i < allbox.length; i++) {
        allbox[i].setAttribute("onclick", "clickedBox(this)")
    }

    startXbtn.addEventListener("click", () => {
        startBox.classList.add("hide");
        playBoard.classList.add("show");
        userChoise = "X";
    })
    startObtn.addEventListener("click", () => {
        // alert("Select only X...please don't select O")
        // window.location.reload();
        startBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class", "players active player");
        userChoise = "O";
    })
})

function clickedBox(element) {
    if (players.classList.contains("player")) {
        // element.innerHTML = `<i class="${playerOIcon}"></i>`;
        element.innerHTML = `<i>O</i>`;
        players.classList.add("active");

        playerSign = "X";
        console.log(playerSign, userChoise, "////////////")
        element.setAttribute("id", "O");
        console.log(parseInt(element.getAttribute("data-box-num")))
        if (checkplace(parseInt(element.getAttribute("data-box-num")), filledBoxes)) filledBoxes.push(parseInt(element.getAttribute("data-box-num")));
        element.style.pointerEvents = "none";
        selectWinner(playerSign);
    } else {
        // element.innerHTML = `<i class="${playerXIcon}"></i>`;
        element.innerHTML = `<i>X</i>`;
        players.classList.add("active");
        playerSign = "O";
        console.log(playerSign, userChoise, "////////////")
        element.setAttribute("id", "X");
        console.log(parseInt(element.getAttribute("data-box-num")))
        if (checkplace(parseInt(element.getAttribute("data-box-num")), filledBoxes)) filledBoxes.push(parseInt(element.getAttribute("data-box-num")));
        element.style.pointerEvents = "none";
        selectWinner(playerSign);
    }
    playBoard.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(function () {
        botStatus = true;
        bot(botStatus);
    }, randomDelayTime)
}



function arrayValue() {
    let array = [];
    for (let i = 1; i <= allbox.length; i++) {
        if (allbox[i - 1].id == "X" || allbox[i - 1].id == "O") {
            console.log(i, ".................../// enter in array")
            array.push(i);
        }
    }
    return array;
}

function checkplace(randomBox, array) {
    console.log(randomBox)
    if (randomBox == 0) randomBox + 1;
    array = arrayValue();
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] == randomBox) {
            console.log("return false", randomBox, array[i]);
            return false;
        }
    }
    console.log(randomBox, "return true");
    return true;
}

function getId(idname) {
    return document.querySelector(".box" + idname).id;
}

function bot(botStatus) {
    if (botStatus == false) return;
    // if (filledBoxes > 8) selectWinner();
    firstStepConditon(filledBoxes);

}

function firstStepConditon(filledBoxes) {
    // playerSign = "O"
    console.log("inside first condition" + botStep)
    if (botStep == 0) {
        console.log(checkplace(5, filledBoxes))
        if (checkplace(5, filledBoxes)) {
            console.log("first -> 0 chance for 5");
            botput(playerSign, 5);
            console.log("inside first if")
        } else {
            console.log("1 -> 3 condition for random");
            let conditonStatus3 = false;
            let randomBox = Math.floor(Math.random() * 4) + 1; 
            console.log(connerCombo[randomBox-1], "........else randomBox value")
            if (checkplace(connerCombo[randomBox-1], filledBoxes)) {
                conditonStatus3 = true;
                botput(playerSign, connerCombo[randomBox-1]);
            }
            if (!conditonStatus3) thirdStepCondition();
            // if (!thirdStepCondition(filledBoxes)) thirdStepCondition();
        }
    } else {
        let call = botPair();
        if (!call) {
            console.log("not first chance call second condition");
            secondStepCondition()
        }
    }
    botStep++;
}

function botPair() {
    console.log("...pair......inside second condition");
    filledBoxes = arrayValue();
    // playerSign = "X";
    let j = 1;
    let conditonStatus = false;
    rowCombo.forEach(i => {
        // console.log(getId(i[0]), ".............value of i");
        if (getId(i[0]) == playerSign && getId(i[1]) == playerSign && checkplace(i[2], filledBoxes) && conditonStatus == false) {
            console.log("condition for this match...", i[2]);
            conditonStatus = true
            botput(playerSign, i[2])
        }
        if (getId(i[1]) == playerSign && getId(i[2]) == playerSign && checkplace(i[0], filledBoxes) && conditonStatus == false) {
            console.log("condition for this match...", i[0]);
            conditonStatus = true
            botput(playerSign, i[0])
        }
        if (getId(i[0]) == playerSign && getId(i[2]) == playerSign && checkplace(i[1], filledBoxes) && conditonStatus == false) {
            console.log("condition for this match...", i[1]);
            conditonStatus = true
            botput(playerSign, i[1])
        }
    })
    if (conditonStatus == false) {
        console.log("return false");
        return false;
    }
    console.log("return true");
    return true;
}

// let conditonStatus = document.createElement("div");
// document.body.appendChild();
function secondStepCondition() {
    filledBoxes = arrayValue();
    // playerSign = "O";
    console.log(playerSign, filledBoxes, "...inside second condition");
    let j = 1;
    let conditonStatus = false;
    rowCombo.forEach(i => {
        // console.log(getId(i[0]), ".............value of i");
        if (getId(i[0]) ==userChoise && getId(i[1]) ==userChoise && checkplace(i[2], filledBoxes) && conditonStatus == false) {
            console.log("condition for this match...", i[2]);
            conditonStatus = true
            botput(playerSign, i[2])
        }
        if (getId(i[1]) ==userChoise && getId(i[2]) ==userChoise && checkplace(i[0], filledBoxes) && conditonStatus == false) {
            console.log("condition for this match...", i[0]);
            conditonStatus = true
            botput(playerSign, i[0])
        }
        if (getId(i[0]) ==userChoise && getId(i[2]) ==userChoise && checkplace(i[1], filledBoxes) && conditonStatus == false) {
            console.log("condition for this match...", i[1]);
            conditonStatus = true
            botput(playerSign, i[1])
        }
    })
    if (conditonStatus == false) {
        console.log("no condition match inside false")
        console.log(conditonStatus);
        let call = thirdStepCondition(filledBoxes);
        if (!call) {
            let conditonStatus2 = false;
            console.log("enter in loop............");
            rowCombo.forEach(i => {
                console.log(i, "//////////// i value");
                if (checkplace(i[0], filledBoxes) && conditonStatus2 == false) {
                    console.log(i[0], "////////////////////............../////////////")
                    botput(playerSign, i[0])
                    conditonStatus2 = true;
                }
                if (checkplace(i[1], filledBoxes) && conditonStatus2 == false) {
                    console.log(i[1], "////////////////////............../////////////")
                    botput(playerSign, i[1])
                    conditonStatus2 = true;
                }
                if (checkplace(i[2], filledBoxes) && conditonStatus2 == false) {
                    console.log(i[2], "////////////////////............../////////////")
                    botput(playerSign, i[2])
                    conditonStatus2 = true;
                }
            })
            if (conditonStatus2 == false) selectWinner();
        }
    }
}



function thirdStepCondition(filledBoxes) {
    let randomBox = Math.floor(Math.random() * 9) + 1; // getting random position for bot to play
    if (!checkplace(randomBox, filledBoxes)) return false;
    console.log("random place is selected is this:- " + randomBox);
    // console.log(randomBox, allbox[randomBox - 1], allbox[randomBox - 1].childElementCount == 0, "...random box place")
    console.log(filledBoxes)
    botput(playerSign, randomBox);
    return true;
}

function botput(playerSign, box) {
    box--;
    console.log(box, playerSign, "..............botput final");
    if (playerSign == "X") {
        console.log(box + 1);
        if (checkplace(box + 1, filledBoxes)) filledBoxes.push(box + 1);
        // allbox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
        allbox[box].innerHTML = `<i>X</i>`;
        players.classList.remove("active");
        // playerSign = "X";
        console.log("X", "....inside put");
        allbox[box].setAttribute("id", "X");
        console.log("X...");
        allbox[box].style.pointerEvents = "none";
    } else {
        console.log(box + 1, ".............data t obe check")
        if (checkplace(box + 1, filledBoxes)) filledBoxes.push(box + 1);
        // allbox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
        allbox[box].innerHTML = `<i>O</i>`;
        players.classList.remove("active");
        // playerSign = "O";
        console.log("O", "....inside put");
        allbox[box].setAttribute("id", "O");
        console.log("O...", box + 1);
        allbox[box].style.pointerEvents = "none";
    }
    playBoard.style.pointerEvents = "auto";
    botStatus = false;
    selectWinner(playerSign);
}

function checkThreeId(val1, val2, val3, sign) {
    if (getId(val1) == sign && getId(val2) == sign && getId(val3) == sign) {
        return true;
    }
}

function selectWinner(playerSign) {

    if (checkThreeId(1, 2, 3, playerSign) || checkThreeId(4, 5, 6, playerSign) || checkThreeId(7, 8, 9, playerSign) || checkThreeId(1, 4, 7, playerSign) || checkThreeId(2, 5, 8, playerSign) || checkThreeId(3, 6, 9, playerSign) || checkThreeId(1, 5, 9, playerSign) || checkThreeId(3, 5, 7, playerSign)) {
        botStatus = false;
        bot(botStatus);

        setTimeout(function () {
            playBoard.classList.remove("show");
            resultBox.classList.add("show");
        }, 700)



        wonText.innerHTML = `Player <b>${playerSign}</b> won the match`;
        playBoard.style.pointerEvents = "none";
        botStatus = false;
        // selectWinner(playerSign);
    } else {
        if (getId(1) != "" && getId(2) != "" && getId(3) != "" && getId(4) != "" && getId(5) != "" && getId(6) != "" && getId(7) != "" && getId(8) != "" && getId(9) != "") {
            wonText.innerHTML = `Match get draw`;
            setTimeout(function () {
                playBoard.classList.remove("show");
                resultBox.classList.add("show");
            }, 700)
            playBoard.style.pointerEvents = "none";
            botStatus = false;
            // selectWinner(playerSign);
        }
    }

    replay.addEventListener("click", () => {
        window.location.reload();
    })
} 
