$(document).ready(function () {
    // x & y dalam persen (0-100) dari ukuran gambar map
    const chapters = [
        {
            title: "The Beginning",
            place: "The Quiet Forest",
            x: 13, y: 28,
            content: [
                "From a total beginner to a passionate web developer, my journey has been nothing short of remarkable. Before setting foot into college, the world of coding was foreign to me. My curiosity and drive, however, led me to dive headfirst into the vast ocean of technology, where I began my adventure with the basics of programming in C."
            ]
        },
        {
            title: "Detour Through Android & Data",
            place: "Crossroads of Code",
            x: 28.5, y: 63.25,
            content: [
                "As I navigated through the complexities of code, my path took a thrilling turn towards Android development using Android Studio, but I felt like I didn't really fit into it. My academic endeavors introduced me to the intricate dance of databases, with SQL becoming a close companion."
            ]
        },
        {
            title: "Discovering the Web",
            place: "The Great Junction",
            x: 49.90, y: 42.5,
            content: [
                "The true turning point came in my second year of college, when I discovered the captivating world of web development. It was love at first sight. The dynamic and interactive nature of web applications drew me in, and I knew I had found my calling.",
                "Starting with back-end development, Laravel became my first guide through the intricacies of server-side logic and data handling. But the journey didn't end there. The vibrant and ever-evolving front-end scene beckoned, and ReactJS opened the doors to creating responsive and user-friendly interfaces."
            ]
        },
        {
            title: "The Longest Quest",
            place: "The Farther East",
            x: 78, y: 64,
            content: [
                "Now, years into this fascinating world, my passion for both the Front-End and Back-End aspects of web development has only grown. My last, longest journey was my final college project — a marketplace web application customized for wedding purposes - that aims to solve real-world problems with innovative digital solutions.",
                "This project is not just a culmination of my academic learning but a testament to my self-taught expertise and dedication to mastering web development."
            ]
        }
    ];

    const $flags = $('#mapFlags');
    const $modal = $('#loreModal');
    let current = 0;
    let lastFocus = null;

    // Jalur putus-putus antar bendera (atribut SVG, tidak butuh class Tailwind)
    const points = chapters.map(c => `${c.x},${c.y}`).join(' ');
    $('#lorePath').html(`
        <polyline class="stroke-3 [stroke-dasharray:6_6] md:stroke-5 md:[stroke-dasharray:10_10]"
            points="${points}" fill="none" stroke="#e3e1d4" stroke-width="5"
            stroke-dasharray="10 10" stroke-linecap="round" opacity="1"
            vector-effect="non-scaling-stroke"></polyline>
    `);

    // Bendera
    chapters.forEach(function (c, i) {
        const $flag = $(`
            <button class="map-flag invisible group absolute -translate-x-1/2 -translate-y-1/2 origin-center
                    w-[clamp(2rem,7.5vw,5.25rem)] outline-hidden
                    hover:scale-125 focus-visible:scale-125
                    transition-transform duration-200"
                style="left:${c.x}%; top:${c.y}%"
                aria-label="Chapter ${i + 1}: ${c.title}" data-index="${i}">

                <img class="block w-full h-auto pointer-events-none
                        drop-shadow-[0_3px_2px_rgba(0,0,0,0.5)]"
                    src="../img/flag-${i + 1}.svg" alt="" draggable="false">

                <span class="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 whitespace-nowrap
                        text-xs md:text-base font-semibold leading-normal
                        bg-cst-cream text-cst-black border-[1.5px] border-cst-black rounded
                        opacity-0 pointer-events-none transition-opacity
                        group-hover:opacity-100 group-focus-visible:opacity-100">${c.place}</span>
            </button>
        `);
        $flags.append($flag);
    });

    $flags.on('click', '.map-flag', function () {
        lastFocus = this;
        openChapter($(this).data('index'));
    });

    function openChapter(index) {
        current = index;
        const c = chapters[index];

        $('#loreChapter').text(`Chapter ${index + 1} · ${c.place}`);
        $('#loreTitle').text(c.title);
        $('#loreBody').empty().append(c.content.map(t =>
            $('<p>')
                .addClass('text-justify indent-6 text-base md:text-xl leading-relaxed')
                .text(t)
        ));
        $('#loreCounter').text(`${index + 1} / ${chapters.length}`);
        $('#lorePrev').prop('disabled', index === 0);
        $('#loreNext').prop('disabled', index === chapters.length - 1);
        $('#loreBodyWrap').scrollTop(0);

        $(`.map-flag[data-index="${index}"]`).attr('data-visited', 'true');

        $modal.attr('aria-hidden', 'false');
        $('body').addClass('overflow-hidden');
        $('#loreClose').trigger('focus');
    }

    function closeModal() {
        $modal.attr('aria-hidden', 'true');
        $('body').removeClass('overflow-hidden');
        if (lastFocus) lastFocus.focus();
    }

    $('#loreClose').on('click', closeModal);
    $modal.on('click', function (e) { if (e.target === this) closeModal(); });
    $('#lorePrev').on('click', () => current > 0 && openChapter(current - 1));
    $('#loreNext').on('click', () => current < chapters.length - 1 && openChapter(current + 1));

    $(document).on('keydown', function (e) {
        if ($modal.attr('aria-hidden') !== 'false') return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') $('#lorePrev').trigger('click');
        if (e.key === 'ArrowRight') $('#loreNext').trigger('click');
    });

    // Mode debug: buka index.html#debug lalu klik peta untuk melihat koordinat
    if (location.hash === '#debug') {
        $('#loreMap').on('click', function (e) {
            const r = this.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
            const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
            console.log(`x: ${x}, y: ${y}`);
        });
    }

    // ===== Loading map & animasi masuk =====
    function animateIn(el, anim, delay) {
        el.style.animationDelay = delay + 'ms';
        el.classList.remove('invisible');
        el.classList.add('animate__animated', anim);
        el.addEventListener('animationend', function () {
            el.classList.remove('animate__animated', anim);
            el.style.animationDelay = '';
        }, { once: true });
    }

    function revealMapUI() {
        // judul, tombol Profile, jalur
        document.querySelectorAll('[data-map-ui]').forEach(function (el) {
            animateIn(el, el.dataset.mapUi, Number(el.dataset.delay || 0));
        });

        // bendera muncul satu per satu setelah elemen lain
        document.querySelectorAll('.map-flag').forEach(function (el, i) {
            animateIn(el, 'animate__fadeInDown', 700 + i * 250);
        });
    }

    const mapImg = document.querySelector('#mapBg img');
    const mapBg = document.getElementById('mapBg');
    let revealed = false;

    const placeholder = document.getElementById('mapPlaceholder');

    function onMapReady() {
        if (revealed) return;
        revealed = true;
        mapBg.classList.add('loaded'); // fade-in peta asli, lalu placeholder memudar
        revealMapUI();

        // Lepas placeholder dari DOM setelah selesai memudar
        let removed = false;
        const done = function () {
            if (removed) return;
            removed = true;
            placeholder.remove();
        };
        placeholder.addEventListener('transitionend', function (e) {
            if (e.propertyName === 'opacity') done();
        }, { once: true });
        setTimeout(done, 1500); // cadangan
    }

    if (mapImg.complete && mapImg.naturalWidth > 0) {
        onMapReady();
    } else {
        mapImg.addEventListener('load', onMapReady);
        mapImg.addEventListener('error', onMapReady); // jangan sampai UI tersembunyi selamanya
    }
});
