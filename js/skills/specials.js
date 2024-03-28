$(document).ready(function() {
    let specials = [
        {
            tag: "laravel",
            hex: "FF2D20",
            title: "Laravel",
            level: "8",
            description: "Frienemies on Web Dev Journey",
            rgba: "255,45,32,1"
        },
        {
            tag: "tailwindcss",
            hex: "06B6D4",
            title: "Tailwind CSS",
            level: "9",
            description: "Easier way to Centering Divs",
            rgba: "6,182,212,1"
        },
        {
            tag: "react",
            hex: "61DAFB",
            title: "React",
            level: "7",
            description: "React makes Dynamic",
            rgba: "97,218,251,1"
        },
        {
            tag: "jquery",
            hex: "0769AD",
            title: "JQuery",
            level: "8",
            description: "Easier way to Manipulate DOM",
            rgba: "7,105,173,1"
        },
    ];

    specials.forEach(function(skill) {
        $('#special').append(`
            <div class="w-full mb-2 md:mb-8 last:mb-0 p-2 flex items-center justify-center gap-4 bg-cst-cream border-[3px] border-cst-black rounded-lg outline-none
                hover:bg-cst-black hover:text-cst-cream hover:border-cst-cream hover:-translate-y-2 hover:shadow-up-black
                focus:bg-cst-black focus:text-cst-cream focus:border-cst-cream focus:-translate-y-2 focus:shadow-up-black
                transition-all group" tabindex="0">
                <img class="group-hover:hidden group-focus:hidden"
                    height="60" width="60" src="https://cdn.simpleicons.org/${skill.tag}/3b383e" />
                <img class="hidden group-hover:block group-hover:drop-shadow-[0_0_5px_rgba(${skill.rgba})] 
                    group-focus:block group-focus:drop-shadow-[0_0_5px_rgba(${skill.rgba})] transition-all"
                    height="60" width="60" src="https://cdn.simpleicons.org/${skill.tag}/${skill.hex}" />
                <div class="flex-1 w-full flex flex-col items-start justify-between">
                    <div class="w-full flex">
                        <p class="w-full font-semibold">${skill.title}</p>
                        <p class="w-full text-end">Lv. ${skill.level}/10</p>
                    </div>
                    <div class="md:text-xl">
                        <p>${skill.description}</p>
                    </div>
                </div>
            </div>
        `);
    });
});
