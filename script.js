var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

let queen = {
    position: {
        x: 4,
        y: 4,
    },
};



function changedirection(steps, direction) {

    let temp;
    let temp1;


    switch (direction) {
        case `N`: {
            temp = queen.position.x - steps;
            if (temp > 8 && temp < 0) {
                console.log("Boundary Outside");
            } else {
                queen.position.x = temp;
                console.log(
                    "Current Position is " + board[queen.position.x][queen.position.y]
                );
            }
            break;
        }

        case `S`: {
            temp = queen.position.x + steps;
            if (temp > 8 && temp < 0) {
                console.log("Boundary Outside");
            } else {
                queen.position.x = temp;
                console.log(
                    "Current Position is " + board[queen.position.x][queen.position.y]
                );
            }
            break;
        }

        case `W`: {
            temp = queen.position.y - steps;
            if (temp > 8 && temp < 0) {
                console.log("Boundary Outside");
            } else {
                queen.position.y = temp;
                console.log(
                    "Current Position is " + board[queen.position.x][queen.position.y]
                );
            }

            break;
        }

        case `E`: {
            temp = queen.position.y + steps;
            if (temp > 8 && temp < 0) {
                console.log("Boundary Outside");
            } else {
                queen.position.y = temp;
                console.log(
                    "Current Position is " + board[queen.position.x][queen.position.y]
                );
            }

            break;
        }

        case `NE`: {
            temp = queen.position.x - steps;
            temp1 = queen.position.y + steps;

            if ((temp > 8 && temp < 0) || (temp1 > 8 && temp1 < 0)) {
                console.log("Boundary Outside");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
                console.log(
                    "Current Position is " + board[queen.position.x][queen.position.y]
                );
            }
            break;
        }

        case `NW`: {
            temp = queen.position.x - steps;
            temp1 = queen.position.y - steps;

            if ((temp > 8 && temp < 0) || (temp1 > 8 && temp1 < 0)) {
                console.log("Boundary Outside");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
                console.log(
                    "Current Position is " + board[queen.position.x][queen.position.y]
                );
            }
            break;
        }

        case `SE`: {
            temp = queen.position.x + steps;
            temp1 = queen.position.y + steps;

            if ((temp > 8 && temp < 0) || (temp1 > 8 && temp1 < 0)) {
                console.log("Boundary Outside");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
                console.log(
                    "Current Position is " + board[queen.position.x][queen.position.y]
                );
            }
            break;
        }

        case `SW`: {
            temp = queen.position.x + steps;
            temp1 = queen.position.y - steps;

            if ((temp > 8 && temp < 0) || (temp1 > 8 && temp1 < 0)) {
                console.log("Boundary Outside");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
                console.log(
                    "Current Position is " + board[queen.position.x][queen.position.y]
                );
            }
            break;
        }
    }
}

function play() {
    let steps = window.prompt("Enter the Position : ");
    let direction = window.prompt("Enter the Direction of Queen :");

    changedirection(parseInt(steps), direction);
}

play();