$(document).ready(function() {
    let grid = 5;

    // SKILLS
    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            let value = (i + j) % 2;
            let square = $('<div>').addClass('w-full aspect-square rounded-tr');
            if (value === 0 && j<=i) {
                square.addClass('bg-cst-black');
            }
            $('#squareSkill').append(square);
        }
    }

    // PORTFOLIO
    for (let i = grid; i > 0; i--) {
        let k = 0;
        for (let j = grid; j > 0; j--) {
            let value = (i + j) % 2;
            let square = $('<div>').addClass('w-full aspect-square rounded-br');
            if (value === 0 && k<=i) {
                square.addClass('bg-cst-cream');
            }
            $('#squarePortfolio').append(square);
            k++;
        }
    }
});
