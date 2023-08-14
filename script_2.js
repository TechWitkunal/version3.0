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
        startBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class", "players active player");
        userChoise = "O";
    })
})

let playerXIcon = "fa-solid fa-xmark";
let playerOIcon = "fa-regular fa-circle";
let playerSign = "X";
let runBot = true;
let botRunTimes = 0;

// when user click
function clickedBox(element) {
    if (players.classList.contains("player")) {
        // element.innerHTML = `<i class="${playerOIcon}"></i>`;
        element.innerHTML = `<i>O</i>`;
        players.classList.add("active");
        playerSign = "O";
        element.setAttribute("id", playerSign);
    } else {
        // element.innerHTML = `<i class="${playerXIcon}"></i>`;
        element.innerHTML = `<i>X</i>`;
        players.classList.add("active");
        playerSign = "X";
        element.setAttribute("id", playerSign);
    }
    selectWinner();
    playBoard.style.pointerEvents = "none";
    element.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(function () {
        bot(runBot);
    }, randomDelayTime)
}


function arrayValue() {
    let temp_array = []
    for (let i = 0; i < allbox.length; i++) {
        if (allbox[i].childElementCount == 0 && checkplace(i + 1, temp_array) == false) {
            temp_array.push(i + 1);
        }
    }
    return temp_array;
}

let funcRNot = document.createElement("value");
document.body.appendChild(funcRNot);
function bot(runBot) {
    if (runBot) {
        playerSign = "O";
        ranN = 0;
        funcRNot.innerHTML = "false";
        let array = [];
        array = arrayValue();
        console.log(array, "...values are as follow")
        if (array.length > 0) {
            console.log(funcRNot.innerHTML);
            runBot = true;
            let otherCondition = playRandom("O", runBot);
            console.log(otherCondition, "...other condition run");
            if (!(otherCondition)) {
                if ((getId(1) == userChoise && getId(2) == userChoise && checkplace(3, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(3, array)) {
                    botput(3, array, runBot)
                    funcRNot.innerHTML = "true";
                    // console.log(runBot, "...value of runbot");
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                // console.log(funcRNot.innerHTML == "false");
                if ((getId(2) == userChoise && getId(3) == userChoise && checkplace(1, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(1, array)) {
                    botput(1, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(1) == userChoise && getId(3) == userChoise && checkplace(2, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(2, array)) {
                    botput(2, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                //
                if ((getId(4) == userChoise && getId(5) == userChoise && checkplace(6, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(6, array)) {
                    botput(6, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(5) == userChoise && getId(6) == userChoise && checkplace(4, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(4, array)) {
                    botput(4, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(4) == userChoise && getId(6) == userChoise && checkplace(5, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(5, array)) {
                    botput(5, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                //
                console.log(array)
                if ((getId(7) == userChoise && getId(8) == userChoise && checkplace(9, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(9, array)) {
                    botput(9, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(8) == userChoise && getId(9) == userChoise && checkplace(7, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(7, array)) {
                    botput(7, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(7) == userChoise && getId(9) == userChoise && checkplace(8, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(8, array)) {
                    botput(8, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(1) == userChoise && getId(4) == userChoise && checkplace(7, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(7, array)) {
                    runBot = true;
                    botput(7, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(1) == userChoise && getId(7) == userChoise && checkplace(4, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(4, array)) {
                    botput(4, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(4) == userChoise && getId(7) == userChoise && checkplace(1, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(1, array)) {
                    botput(1, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                //
                if ((getId(2) == userChoise && getId(5) == userChoise && checkplace(8, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(8, array)) {
                    botput(8, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // 
                // }/
                if ((getId(5) == userChoise && getId(8) == userChoise && checkplace(2, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(2, array)) {
                    botput(2, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(2) == userChoise && getId(8) == userChoise && checkplace(5, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(5, array)) {
                    botput(5, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(3) == userChoise && getId(6) == userChoise && checkplace(9, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(9, array)) {
                    botput(9, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(6) == userChoise && getId(9) == userChoise && checkplace(3, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(3, array)) {
                    botput(3, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(3) == userChoise && getId(9) == userChoise && checkplace(6, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(6, array)) {
                    botput(6, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(1) == userChoise && getId(5) == userChoise && checkplace(9, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(9, array)) {
                    botput(9, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(5) == userChoise && getId(9) == userChoise && checkplace(1, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(1, array)) {
                    botput(1, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(1) == userChoise && getId(9) == userChoise && checkplace(5, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(5, array)) {
                    botput(5, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(3) == userChoise && getId(5) == userChoise && checkplace(7, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(7, array)) {
                    botput(7, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }
                if ((getId(5) == userChoise && getId(7) == userChoise && checkplace(3, array) && (funcRNot.innerHTML == "false"))) {
                    // if (checkplace(3, array)) {
                    botput(3, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }
                // }

                if ((getId(3) == userChoise && getId(7) == userChoise && checkplace(5, array) && (funcRNot.innerHTML == "false"))) {
                    console.log(checkplace(5, array), " ... 1")
                    // if (checkplace(5, array)) {
                    botput(5, array, runBot)
                    console.log("...inside this")
                    funcRNot.innerHTML = "true";
                    console.log(funcRNot.innerHTML, "...10");
                }

                if (funcRNot.innerHTML == "false") {
                    let array2 = arrayValue();
                    let place = randomPlace(array2);
                    // otherConditionFunc()
                    funcRNot.innerHTML = true;
                    console.log(place, "...plase select or not")
                    if (!place) { funcRNot = false; bot(runBot); }
                }
                console.log(funcRNot.innerHTML, "...10");
            }
        }
    }
}

function randomPlace(array2) {
    let randomBox = array2[Math.floor(Math.random() * array2.length)] // getting random position for bot to play
    console.log(randomBox, allbox[randomBox - 1], allbox[randomBox - 1].childElementCount == 0, "...random box place")
    if (allbox[randomBox - 1].childElementCount == 0) {
        runBot = true;
        botput((randomBox), array2, runBot);
        console.log(randomBox - 1, "...get selected")
        return true;
    }
    return false;
}

function playRandom(sign, runBot) {
    console.log(sign)
    botRunTimes++;
    let x = 0, index = 0;
    if (runBot == true) {
        let array = arrayValue();
        if (botRunTimes == 1) {
            for (let i = 0; i < allbox.length; i++) {
                if (allbox[i].childElementCount > 0) {
                    x++;
                    index = i;
                }
            }
            if (x == 1) {
                index++;
                console.log(index, "....index......../");
                if (index == 1) {
                    if (checkplace(9, array)) {
                        botput(9, array, runBot);
                        botRunTimes++;
                        return true;
                    }
                    else {
                        bot(runBot);
                        return false;
                    }
                }
                else if (index == 7) {
                    console.log(checkplace(3, array), "....../ for 7")
                    if (checkplace(3, array)) {
                        botput(3, array, runBot);
                        botRunTimes++;
                        return true;
                    }
                    else {
                        bot(runBot);
                        return false;
                    }
                } else if (index == 9) {
                    if (checkplace(1, array)) {
                        botput(1, array, runBot);
                        botRunTimes++;
                        return true;
                    }
                    else {
                        bot(runBot);
                        return false;
                    }
                } else if (index == 3) {
                    if (checkplace(7, array)) {
                        botput(7, array, runBot);
                        botRunTimes++;
                        return true;
                    }
                    else {
                        bot(runBot);
                        return false;
                    }
                }
            } else {
                return otherConditionFunc(sign, array);
            }
        } else {
            return otherConditionFunc(sign, array);
        }

    }
}

function otherConditionFunc(sign, array) {
    if ((getId(1) == sign && getId(2) == sign) || (getId(2) == sign && getId(3) == sign) || (getId(1) == sign && getId(3) == sign)) {
        if (getId(2) == sign && getId(3) == sign) {
            if (checkplace(1, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(1, array, runBot);
                console.log("...from other");
            }
        }
        else if (getId(1) == sign && getId(3) == sign) {
            if (checkplace(2, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(2, array, runBot);
                console.log("...from other");
            }
        }
        else {
            if (checkplace(3, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(3, array, runBot);
                console.log("...from other");
            }
        };
        return true;
    }
    else if ((getId(4) == sign && getId(5) == sign) || (getId(5) == sign && getId(6) == sign) || (getId(4) == sign && getId(6) == sign)) {
        // console.log("5-6")
        if (getId(5) == sign && getId(6) == sign) {
            if (checkplace(4, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(4, array, runBot);
                console.log("...from other");
            }
        }
        else if (getId(4) == sign && getId(6) == sign) {
            if (checkplace(5, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(5, array, runBot);
                console.log("...from other");
            }
        }
        else {
            if (checkplace(6, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(6, array, runBot);
                console.log("...from other");
            }
        };
        return true;
    }
    else if ((getId(7) == sign && getId(8) == sign) || (getId(8) == sign && getId(9) == sign) || (getId(7) == sign && getId(9) == sign)) {
        if (getId(8) == sign && getId(9) == sign) {
            if (checkplace(7, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(7, array, runBot);
                console.log("...from other");
            }
        }
        else if (getId(7) == sign && getId(9) == sign) {
            if (checkplace(8, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(8, array, runBot);
                console.log("...from other");
            }
        }
        else {
            if (checkplace(6, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(6, array, runBot);
                console.log("...from other");
            }
        };
        return true;
    }
    else if ((getId(1) == sign && getId(4) == sign) || (getId(4) == sign && getId(7) == sign) || (getId(1) == sign && getId(7) == sign)) {
        if (getId(4) == sign && getId(7) == sign) {
            if (checkplace(1, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(1, array, runBot);
                console.log("...from other");
            }
        }
        else if (getId(1) == sign && getId(7) == sign) {
            if (checkplace(4, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(4, array, runBot);
                console.log("...from other");
            }
        }
        else {
            if (checkplace(7, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(7, array, runBot);
                console.log("...from other");
            }
        };
        return true;
    }
    else if ((getId(2) == sign && getId(5) == sign) || (getId(5) == sign && getId(8) == sign) || (getId(2) == sign && getId(8) == sign)) {
        if (getId(5) == sign && getId(8) == sign) {
            if (checkplace(2, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(2, array, runBot);
                console.log("...from other");
            }
        }
        else if (getId(2) == sign && getId(8) == sign) {
            if (checkplace(5, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(5, array, runBot);
                console.log("...from other");
            }
        }
        else {
            if (checkplace(8, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(8, array, runBot);
                console.log("...from other");
            }
        };
        return true;
    }
    else if ((getId(3) == sign && getId(6) == sign) || (getId(6) == sign && getId(9) == sign) || (getId(3) == sign && getId(9) == sign)) {
        if (getId(6) == sign && getId(9) == sign) {
            if (checkplace(3, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(3, array, runBot);
                console.log("...from other");
            }
        }
        else if (getId(3) == sign && getId(9) == sign) {
            if (checkplace(6, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(6, array, runBot);
                console.log("...from other");
            }
        }
        else {
            if (checkplace(9, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(9, array, runBot);
                console.log("...from other");
            }
        };
        return true;
    }
    else if ((getId(1) == sign && getId(5) == sign) || (getId(5) == sign && getId(9) == sign) || (getId(1) == sign && getId(9) == sign)) {
        if (getId(5) == sign && getId(9) == sign) {
            if (checkplace(1, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(1, array, runBot);
                console.log("...from other");
            }
        }
        else if (getId(1) == sign && getId(9) == sign) {
            if (checkplace(5, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(5, array, runBot);
                console.log("...from other");
            }
        }
        else {
            if (checkplace(9, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(9, array, runBot);
                console.log("...from other");
            }
        };
        return true;
    }
    else if ((getId(3) == sign && getId(5) == sign) || (getId(5) == sign && getId(7) == sign) || (getId(3) == sign && getId(7) == sign)) {
        if (getId(5) == sign && getId(7) == sign) {
            if (checkplace(3, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(3, array, runBot);
                console.log("...from other");
            }
        }
        else if (getId(3) == sign && getId(7) == sign) {
            if (checkplace(5, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(5, array, runBot);
                console.log("...from other");
            }
        }
        else {
            if (checkplace(7, array) == false) {
                // let array2 = arrayValue();
                // let place = randomPlace(array2);
                otherConditionFunc("O", array)
                funcRNot.innerHTML = true;
                console.log(place, "...plase select or not")
                // if (!place) { funcRNot = false; bot(runBot); }
            } else {
                botput(7, array, runBot);
                console.log("...from other");
            }
        };
        return true;
    } else {
        return false;
    }
}


function checkplace(randomBox, array) {
    console.log(randomBox, array, "...check function for this")
    for (let i = 0; i < array.length; i++) {
        if (array[i] == randomBox) {
            // TF = true;
            return true;
        }
    }
    // console.log(TF, " ... ", randomBox);
    console.log(array, "..final array");
    return false;
}

function botput(randomBox, array, runBot) {
    console.log(randomBox, "...value of randomBox")
    if (!(runBot)) { return }
    botRunTimes++;
    runBot = false;
    playRandom(1, 2, 3, "O", runBot, array);
    randomBox = randomBox - 1;
    if (allbox[randomBox].childElementCount == 0) {
        if (players.classList.contains("player")) {
            // allbox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
            allbox[randomBox].innerHTML = `<i>X</i>`;
            players.classList.remove("active");
            playerSign = "X";
            allbox[randomBox].setAttribute("id", playerSign);
        } else {
            // allbox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
            allbox[randomBox].innerHTML = `<i>O</i>`;
            players.classList.remove("active");
            playerSign = "O";
            allbox[randomBox].setAttribute("id", playerSign);
        }
    } else {
        if (!(runBot)) { return }
        let randomBox = array[Math.floor(Math.random() * array.length)] // getting random position for bot to play
        botput(randomBox, runBot);
    }
    selectWinner();
    allbox[randomBox].style.pointerEvents = "none";
    playBoard.style.pointerEvents = "auto";
}

function getId(idname) {
    return document.querySelector(".box" + idname).id;
}

function checkThreeId(val1, val2, val3, sign) {
    if (getId(val1) == sign && getId(val2) == sign && getId(val3) == sign) {
        return true;
    }
}

function selectWinner() {
    if (checkThreeId(1, 2, 3, playerSign) || checkThreeId(4, 5, 6, playerSign) || checkThreeId(7, 8, 9, playerSign) || checkThreeId(1, 4, 7, playerSign) || checkThreeId(2, 5, 8, playerSign) || checkThreeId(3, 6, 9, playerSign) || checkThreeId(1, 5, 9, playerSign) || checkThreeId(3, 5, 7, playerSign)) {
        runBot = false;
        bot(runBot);

        // if ((getId(1) == userChoise && getId(7) == userChoise && getId(9) == userChoise) || (getId(7) == userChoise && getId(1) == userChoise && getId(3) == userChoise) || (getId(3) == userChoise && getId(9) == userChoise && getId(7) == userChoise)) {
        //     alert("Ooo.. You play a trick with me now I understand your trick");
        // }

        setTimeout(function () {
            playBoard.classList.remove("show");
            resultBox.classList.add("show");
        }, 700)



        wonText.innerHTML = `Player <b>${playerSign}</b> won the match`;
    } else {
        if (getId(1) != "" && getId(2) != "" && getId(3) != "" && getId(4) != "" && getId(5) != "" && getId(6) != "" && getId(7) != "" && getId(8) != "" && getId(9) != "") {
            wonText.innerHTML = `Match get draw`;
            setTimeout(function () {
                playBoard.classList.remove("show");
                resultBox.classList.add("show");
            }, 700)
        }
    }

    replay.addEventListener("click", () => {
        window.location.reload();
    })
} 
