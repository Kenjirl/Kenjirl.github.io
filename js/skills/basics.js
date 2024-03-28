$(document).ready(function() {
    let basics = [
        {
            tag: "html5",
            hex: "E34F26",
            title: "HTML",
            level: "8",
            description: "Semantic is Enchantic",
            rgba: "227,79,38,1"
        },
        {
            tag: "css3",
            hex: "00A9FF",
            title: "CSS",
            level: "9",
            description: "Master of Centering Divs",
            rgba: "0,169,255,1"
        },
        {
            tag: "javascript",
            hex: "F7DF1E",
            title: "JavaScript",
            level: "8",
            description: "Manipulation makes Animation",
            rgba: "247,223,30,1"
        },
    ];

    basics.forEach(function(skill) {
        $('#basic').append(`
            <div class="w-full mb-2 md:mb-8 last:mb-0 p-2 flex items-center justify-center gap-4 border-[3px] border-cst-black bg-cst-cream rounded-lg outline-none
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
