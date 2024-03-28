$(document).ready(function() {
    // Lore Carousel
    let contentArray = [
        "From a total beginner to a passionate web developer, my journey has been nothing short of remarkable. Before setting foot into college, the world of coding was foreign to me. My curiosity and drive, however, led me to dive headfirst into the vast ocean of technology, where I began my adventure with the basics of programming in C.",
        "As I navigated through the complexities of code, my path took a thrilling turn towards Android development using Android Studio, but I felt like I didn't really fit into it. My academic endeavors introduced me to the intricate dance of databases, with SQL becoming a close companion.",
        "The true turning point came in my second year of college, when I discovered the captivating world of web development. It was love at first sight. The dynamic and interactive nature of web applications drew me in, and I knew I had found my calling. Starting with back-end development, Laravel became my first guide through the intricacies of server-side logic and data handling. But the journey didn't end there. The vibrant and ever-evolving front-end scene beckoned, and ReactJS opened the doors to creating responsive and user-friendly interfaces.",
        "Now, two years into this fascinating world, my passion for both the Front-End and Back-End aspects of web development has only grown. Currently, I'm channeling this passion into my final college project — a marketplace web application that aims to solve real-world problems with innovative digital solutions. This project is not just a culmination of my academic learning but a testament to my self-taught expertise and dedication to mastering web development."
    ];

    // Make story and dots based on lore array
    contentArray.forEach(function(content, index) {
        // Story
        let div = $('<div>').append($('<p>').text(content));
        if (index !== 0) {
            div.addClass('hidden');
        }
        $('#carouselContent').append(div);

        // Dots
        let button = $('<button>').addClass(`
            dot-btn p-1 w-[18px] md:w-[20px] aspect-square outline-none rounded border-2
            hover:bg-cst-cream hover:border-cst-black
            focus:bg-cst-cream focus:border-cst-black
            transition-all
        `);
        if (index === 0) {
            button.addClass('translate-y-[8px] shadow-down-black bg-cst-cream border-cst-black');
        } else {
            button.addClass('bg-cst-black shadow-up-black border-cst-cream');
        }
        button.attr('data-index', index + 1);
        $('<div>').append(button).appendTo('#dotsContainer');
    });

    let totalSlides = contentArray.length;
    let currentIndex = 0;

    $('.prev-btn').click(function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    $('.next-btn').click(function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    $('.dot-btn').click(function() {
        let index = $(this).data('index');
        currentIndex = index - 1;
        updateCarousel();
    });

    function updateCarousel() {
        $('.carousel-content > div').addClass('hidden');
        $('.carousel-content > div').eq(currentIndex).removeClass('hidden');

        $('.dot-btn').removeClass([
            'translate-y-[8px]', 'shadow-down-black', 'bg-cst-cream', 'border-cst-black'
        ]).addClass([
            'bg-cst-black', 'border-cst-cream', 'shadow-up-black'
        ]);
        $('.dot-btn[data-index="' + (currentIndex + 1) + '"]').addClass([
            'translate-y-[8px]', 'shadow-down-black', 'bg-cst-cream', 'border-cst-black'
        ]).removeClass([
            'bg-cst-black', 'border-cst-cream', 'shadow-up-black'
        ]);
    }
});
