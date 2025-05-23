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
            $('#squarePortfolioTop').append(square);
            k++;
        }
    }

    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            let value = (i + j) % 2;
            let square = $('<div>').addClass('w-full aspect-square rounded-tl');
            if (value === 0 && j >= grid - 1 - i) {
                square.addClass('bg-cst-cream');
            }
            $('#squarePortfolioBottom').append(square);
        }
    }

    // ACHIEVEMENT
    for (let i = grid; i > 0; i--) {
        let k = 0;
        for (let j = grid; j > 0; j--) {
            let value = (i + j) % 2;
            let square = $('<div>').addClass('w-full aspect-square rounded-bl');
            if (value === 0 && k >= grid - i) {
                square.addClass('bg-cst-black');
            }
            $('#squareAchievement').append(square);
            k++;
        }
    }
});
