let st = "";
let n;
let result;
let rA = "The lines match";
let rB = "The lines do not match";
let numresultstr;
let strLength;


function getRandom(i) {
    return Math.floor(Math.random() * i);
}

function sravnenie(stA, jobA) {
    if (jobA == stA) {
        result = rA;
    } else {
        result = rB;
    }
}

function newLevel() {
    let fstr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    let sstr = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    let tstr = ["z", "x", "c", "v", "b", "n", "m"];
    let str = [];

    // Создаем новую строку в зависимости от уровня

    let level = +prompt('Enter a number from 1 to 6 to select the level according to the number. 0 to exit.\n1 level = characters from first line "qwertyuiop",\n2 level = characters from the second line "asdfghjkl",\n3 level = characters from the third line "zxcvbnm",\n4 level = characters from first and second line,\n5 level = characters from the second and third lines,\n6 level = characters from first and third row.');
    if (level == 0) {
        newGame();
    } else
    if (level == 1) {
        strLength = fstr;
        for (let i = 0; i < fstr.length; i++) {
            str[i] = fstr[i];
        }
    } else if (level == 2) {
        strLength = sstr;
        for (let i = 0; i < sstr.length; i++) {
            str[i] = sstr[i];
        }
    } else if (level == 3) {
        strLength = tstr;
        for (let i = 0; i < tstr.length; i++) {
            str[i] = tstr[i];
        }
    } else if (level == 4) {
        strLength = sfstr;
        let fsstr = fstr.concat(sstr);
        for (let i = 0; i < sfstr.length; i++) {
            str[i] = fsstr[i];
        }
    } else if (level == 5) {
        strLength = ststr;
        let ststr = sstr.concat(tstr);
        for (let i = 0; i < ststr.length; i++) {
            str[i] = ststr[i];
        }
    } else if (level == 6) {
        strLength = ftstr;
        let ftstr = fstr.concat(tstr);
        for (let i = 0; i < ftstr.length; i++) {
            str[i] = ftstr[i];
        }
    } else if (level > 6 && level < 0) {
        alert("Invalid number, please enter this again")
        setTimeout(newLevel, 10000)
    }
}

/*
function strLength() {
    for(let i = 0; i < numresultstr; i++) {
        str.push("");
    }
}
*/

function newStr(numres) {
    st = "";
    //Задаём символы в выходящую строку
    for (let i = 0; i < numres; i++) {
        n = getRandom(strLength.length);
        st += strLength[n];
    }
}

function settingsGame() {
    numresultstr = +prompt("Enter the number of characters you want to enter");
    newLevel();
    newGame();
}

function newGame() {
    while (true) {
        newStr(numresultstr);

        let job = prompt("Введите строку: " + st);

        sravnenie(st, job);
        console.log(result);

        if (result == rA) {
            alert(result);
            let ans = +prompt(rA + ".\n Enter 1 if you want to start over.\n 0 To return to settings,\n another number to complete")
            if (ans == 1) {
                newGame();
            } else if (ans == 0) {
                settingsGame();
            } else if (ans < 0 || ans > 1) {
                break
            }
        } else {
            alert(result);
            let ans = +prompt(rB + ". Enter 0 to return to settings, another number to finish")
            if (ans == 0) {
                settingsGame();

            } else if (ans < 0 || ans > 0) {
                break
            }
        }
    }
}
settingsGame();