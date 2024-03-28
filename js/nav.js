$(document).ready(function() {
    let links = [
        { text: "Lore", href: "#lore" },
        { text: "Abilities", href: "#abilities" },
        { text: "Quests", href: "#quests" },
        { text: "Summon", href: "#summon" }
    ];

    let delay = 0.75;

    links.forEach(function(link) {
        let anchor = $('<a>').attr({
            'href': link.href,
            'class': 'w-fit px-2 py-1 rounded text-cst-black outline-none hover:bg-cst-black hover:text-cst-cream focus:bg-cst-black focus:text-cst-cream transition-all animate__animated animate__bounceIn',
        }).text(link.text);

        anchor[0].style.setProperty('--animate-duration', `${delay}s`);

        $('#navLinks').append(anchor);

        delay += 0.75;
    });
});
