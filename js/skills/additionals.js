$(document).ready(function() {
    let additionals = [
        {
            description: "Responsive is Impressive",
        },
        {
            description: "Imperfect, yet Perfectionist",
        },
        {
            description: "Minimalist is Elegist",
        },
        {
            description: "Model, View, & Controller Fan!",
        },
        {
            description: "Adaptive to new Techs",
        },
    ];

    additionals.forEach(function(skill, index) {
        $('#additional').append(`
            <div class="w-full mb-2 md:mb-8 last:mb-0 p-2 flex items-center justify-center gap-4 bg-cst-cream border-[3px] border-cst-black rounded-lg outline-none
                hover:bg-cst-black hover:text-cst-cream hover:border-cst-cream hover:-translate-y-2 hover:shadow-up-black
                focus:bg-cst-black focus:text-cst-cream focus:border-cst-cream focus:-translate-y-2 focus:shadow-up-black
                transition-all group" tabindex="0">
                <div class="w-[60px] aspect-square flex items-center justify-center text-4xl font-bold group-hover:drop-shadow-[0_0_5px_rgba(227,225,212,1)] group-focus:drop-shadow-[0_0_5px_rgba(227,225,212,1)]">
                    0${index+1}</div>
                <div class="flex-1 w-full flex flex-col items-start justify-between">
                    <div>
                        <span>Lv. --/--</span>
                    </div>
                    <div class="md:text-xl">
                        <p>${skill.description}</p>
                    </div>
                </div>
            </div>
        `);
    });
});
