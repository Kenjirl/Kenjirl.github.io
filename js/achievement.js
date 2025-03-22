$(document).ready(function() {
    const achievements = [
        'Pengenalan ke Logika Pemrograman',
        'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
        'Belajar Dasar Git dengan GitHub',
        'Dasar Pemrograman Web',
        'Membuat Front-End Web untuk Pemula',
        'Fundamental FE Web Development',
        'Membuat Aplikasi Web dengan React',
        'Fundamental Aplikasi Web dengan React',
        'Front-End Web Developer Expert',
        'Meniti Karier sebagai Software Developer',
        'Front End Web & React - Dicoding X Kampus Merdeka Batch 3',
        'Finalis ECBC 2022',
        'MySkill - Front End - HTML',
        'MySkill - Front End - CSS',
        'MySkill - Website Development Fundamental',
        'MySkill - Git and Github',
        'MySkill - Troubleshooting & Debugging',
    ];

    let achievementHtml = "";
    achievements.forEach((title, index) => {
        let imgSrc = `img/achievement/${index + 1}.jpg`;
        let imgSrcFallback = `./img/achievement/small/${index + 1}.jpg`;

        achievementHtml += `
            <div class="w-full p-2 flex flex-col items-center justify-center gap-2 bg-cst-black rounded snap-center">
                <div class="w-2 aspect-square rounded-full bg-cst-cream"></div>
                <div class="w-full aspect-video rounded-sm bg-cover bg-center brightness-75 blurred-img" style="background-image: url('${imgSrcFallback}');">
                    <a class="bg-transparent group"
                        href="${imgSrc}" data-fancybox="achievement-no" data-caption="${index + 1} - ${title}" id="zoom-pic-${index+1}">
                        <img class="w-full min-w-[250px] aspect-video rounded-sm object-cover object-center brightness-75 outline-cst-cream
                            hover:brightness-100 focus:brightness-100 group-hover:brightness-100 group-focus:brightness-100 transition-all" 
                            src="${imgSrc}" 
                            alt="Achievement ${title} Picture" 
                            loading="lazy">
                    </a>
                </div>
                <p class="line-clamp-1">${title}</p>
            </div>
        `;
    });

    $("#achievementContainer").append(achievementHtml);

    $(".blurred-img img").each(function() {
        const img = $(this);
        const parentDiv = img.parent().parent();

        function loaded() {
            parentDiv.addClass("loaded").removeClass("brightness-75");
            img.addClass("opacity-100");
        }

        if (img[0].complete) {
            loaded();
        } else {
            img.on("load", loaded);
        }
    })

    Fancybox.bind('[data-fancybox="achievement-no"]', {
    // Your custom options for a specific gallery
    });
});