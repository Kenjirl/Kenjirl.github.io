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

    // DIVIDER PORTOFOLIO & ACHIEVEMENT
    let containerWidth = $('#divider').width();
    let squareSize = 32;
    let numSquares = Math.ceil(containerWidth / squareSize);

    function createRow(container, isCream, shift) {
        container.empty();
        for (let i = 0; i < numSquares; i++) {
            let isFilled = (i + shift) % 2 === 0;
            let square = $('<div>')
                .addClass('aspect-square')
                .css({ width: `${squareSize}px` })
                .addClass(isFilled ? (isCream ? 'bg-cst-cream' : 'bg-cst-black') : '');

            container.append(square);
        }
    }

    createRow($('#squareDividerBlack1'), true, 0);
    createRow($('#squareDividerBlack2'), true, 1);
    createRow($('#squareDividerCream1'), false, 1);
    createRow($('#squareDividerCream2'), false, 0);

    $(window).resize(function () {
        containerWidth = $('#divider').width();
        numSquares = Math.ceil(containerWidth / squareSize);
        createRow($('#squareDividerBlack1'), true, 0);
        createRow($('#squareDividerBlack2'), true, 1);
        createRow($('#squareDividerCream1'), false, 1);
        createRow($('#squareDividerCream2'), false, 0);
    });

    // DIVIDER ACHIEVEMENT & SUMMON
    containerWidth = $('#divider2').width();
    numSquares = Math.ceil(containerWidth / squareSize);

    createRow($('#squareDivider2Cream1'), false, 0);
    createRow($('#squareDivider2Cream2'), false, 1);

    $(window).resize(function () {
        containerWidth = $('#divider').width();
        numSquares = Math.ceil(containerWidth / squareSize);
        createRow($('#squareDividerBlack1'), true, 0);
        createRow($('#squareDividerBlack2'), true, 1);
        createRow($('#squareDividerCream1'), false, 1);
        createRow($('#squareDividerCream2'), false, 0);
        
        containerWidth = $('#divider2').width();
        numSquares = Math.ceil(containerWidth / squareSize);
        createRow($('#squareDivider2Cream1'), false, 0);
        createRow($('#squareDivider2Cream2'), false, 1);
    });
});
