let count = 0;
let click1 = 0;let click2 = 0;let click3 = 0;let click4 = 0;let click5 = 0;let click6 = 0;let click7 = 0;let click8 = 0;let click9 = 0;
const resetButton = document.querySelector("#resetButton").addEventListener("click", (event) => {
    location.reload();
})


let choosen = 0;
const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const block4 = document.getElementById("block4");
const block5 = document.getElementById("block5");
const block6 = document.getElementById("block6");
const block7 = document.getElementById("block7");
const block8 = document.getElementById("block8");
const block9 = document.getElementById("block9");


block1.addEventListener("click" , (event) => {
    if(choosen && click1 === 0) {
        event.target.textContent = "X";
        count++;
        if (block2.textContent === block1.textContent && block3.textContent == block1.textContent) {
            alert("Player X Wins");
            window.location.reload();
        }
        else if (block4.textContent === block1.textContent && block7.textContent == block1.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block5.textContent === block1.textContent && block9.textContent == block1.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click1++;
        choosen--;
    }
    else if (choosen === 0 && click1 === 0){
        event.target.textContent = "O";
        count++;
        console.log(block1.textContent);
        if (block2.textContent === block1.textContent && block3.textContent == block1.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block4.textContent === block1.textContent && block7.textContent == block1.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block5.textContent === block1.textContent && block9.textContent == block1.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click1++;
        choosen++;
    }
})
block2.addEventListener("click" , (event) => {
    if(choosen && click2 === 0) {
        event.target.textContent = "X";
        count++;
        if (block1.textContent === block2.textContent && block3.textContent == block2.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block5.textContent === block2.textContent && block8.textContent == block2.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click2++;
        choosen--;
    }
    else if (choosen === 0 && click2 === 0) {
        event.target.textContent = "O";
        count++;
        if (block1.textContent === block2.textContent && block3.textContent == block2.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block5.textContent === block2.textContent && block8.textContent == block2.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click2++;
        choosen++;
    }
})
block3.addEventListener("click" , (event) => {
    if(choosen && click3 === 0) {
        event.target.textContent = "X";
        count++;
        if (block2.textContent === block3.textContent && block1.textContent == block3.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block6.textContent === block3.textContent && block9.textContent == block3.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block5.textContent === block3.textContent && block7.textContent == block3.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click3++;
        choosen = 0;
    }
    else if (choosen === 0 && click3 === 0) {
        event.target.textContent = "O";
        count++;
        if (block2.textContent === block3.textContent && block1.textContent == block3.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block6.textContent === block3.textContent && block9.textContent == block3.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block5.textContent === block3.textContent && block7.textContent == block3.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click3++;
        choosen = 1;
    }
})
block4.addEventListener("click" , (event) => {
    if(choosen && click4 === 0) {
        event.target.textContent = "X";
        count++;
        if (block1.textContent === block4.textContent && block7.textContent == block4.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block5.textContent === block4.textContent && block6.textContent == block4.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click4++;
        choosen = 0;
    }
    else if (choosen === 0 && click4 === 0) {
        event.target.textContent = "O";
        count++;
        if (block1.textContent === block4.textContent && block7.textContent == block4.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block5.textContent === block4.textContent && block6.textContent == block4.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click4++;
        choosen = 1;
    }
})
block5.addEventListener("click" , (event) => {
    if(choosen && click5 == 0) {
        event.target.textContent = "X";
        count++;
        if (block3.textContent === block5.textContent && block7.textContent == block5.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block4.textContent === block5.textContent && block6.textContent == block5.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block2.textContent === block5.textContent && block8.textContent == block5.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click5++;
        choosen = 0;
    }
    else if (choosen === 0 && click5 === 0) {
        event.target.textContent = "O";
        count++;
        if (block3.textContent === block5.textContent && block7.textContent == block5.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block4.textContent === block5.textContent && block6.textContent == block5.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block2.textContent === block5.textContent && block8.textContent == block5.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click5++;
        choosen = 1;
    }
})
block6.addEventListener("click" , (event) => {
    if(choosen && click6 === 0) {
        event.target.textContent = "X";
        count++;
        if (block4.textContent === block6.textContent && block5.textContent == block6.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block9.textContent === block6.textContent && block3.textContent == block6.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click6++;
        choosen = 0;
    }
    else if (choosen === 0 && click6 === 0) {
        event.target.textContent = "O";
        count++;
        if (block4.textContent === block6.textContent && block5.textContent == block6.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block9.textContent === block6.textContent && block3.textContent == block6.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click6++;
        choosen = 1;
    }
})
block7.addEventListener("click" , (event) => {
    if(choosen && click7 === 0) {
        event.target.textContent = "X";
        count++;
        if (block3.textContent === block7.textContent && block5.textContent == block7.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block8.textContent === block7.textContent && block9.textContent == block7.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block1.textContent === block7.textContent && block4.textContent == block7.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click7++;
        choosen = 0;
    }
    else if (choosen === 0 && click7 === 0) {
        event.target.textContent = "O";
        count++;
        if (block3.textContent === block7.textContent && block5.textContent == block7.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block8.textContent === block7.textContent && block9.textContent == block7.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block1.textContent === block7.textContent && block4.textContent == block7.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click7++;
        choosen = 1;
    }
})
block8.addEventListener("click" , (event) => {
    if(choosen && click8 === 0) {
        event.target.textContent = "X"
        count++;
        if (block2.textContent === block8.textContent && block5.textContent == block8.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block9.textContent === block8.textContent && block7.textContent == block8.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click8++;
        choosen = 0;
    }
    else  if (choosen === 0 && click8 === 0){
        event.target.textContent = "O";
        count++;
        if (block2.textContent === block8.textContent && block5.textContent == block8.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block9.textContent === block8.textContent && block7.textContent == block8.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click8++;
        choosen = 1;
    }
})
block9.addEventListener("click" , (event) => {
    if(choosen && click9 === 0) {
        event.target.textContent = "X";
        count++;
        if (block3.textContent === block9.textContent && block6.textContent == block9.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block8.textContent === block9.textContent && block7.textContent == block9.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (block1.textContent === block9.textContent && block5.textContent == block9.textContent) {
            alert("Player X Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click9++;
        choosen = 0;
    }
    else if (choosen === 0 && click9 === 0) {
        event.target.textContent = "O"
        count++;
        if (block3.textContent === block9.textContent && block6.textContent == block9.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block8.textContent === block9.textContent && block7.textContent == block9.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (block1.textContent === block9.textContent && block5.textContent == block9.textContent) {
            alert("Player O Wins")
            window.location.reload();
        }
        else if (count === 9) {
            alert("Match Tied");
            location.reload();
        }
        click9++;
        choosen = 1;
    }
})
