let cells = document.querySelectorAll(".cell");
let WinnerName = document.querySelector("#status");
let resetbtn = document.querySelector("#reset");
let turnX = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML === "") {
      cell.innerHTML = turnX ? "X" : "O";
      turnX = !turnX;
    }
    checkWinner();
  });
});

const boxdisable = () => {
  for (let cell of cells) {
    cell.style.pointerEvents = "none";
  }
};

const boxenable = () => {
  for (let cell of cells) {
    cell.style.pointerEvents = "auto";
  }
};

const checkWinner = () => {
  let Draw = true;

  for (let pattern of winPattern) {
    let pos1value = cells[pattern[0]].innerText;
    let pos2value = cells[pattern[1]].innerText;
    let pos3value = cells[pattern[2]].innerText;

    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        setTimeout(() => {
          WinnerName.innerHTML = "Winner is " + pos1value;

          boxdisable();
          return;
        }, 500);
      }
    }
  }

  cells.forEach((cell) => {
    if (cell.innerHTML === "") {
      Draw = false;
    }
  });
  if (Draw === true) {
    WinnerName.innerHTML = "It's a Tie!";
    boxdisable();
  }
};

resetbtn.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  WinnerName.innerHTML = "";
  turnX = true;
  boxenable();
});
