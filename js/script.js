(function () {
    const scripts = [
        './js/nav.js',
        './js/lore.js',
        './js/profile.js',
        './js/skills/basics.js',
        './js/skills/specials.js',
        './js/skills/additionals.js',
        './js/quests.js',
        './js/achievement.js',
        './js/summon.js',
        './js/squares.js',
    ];

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = src;
            s.async = false;
            s.onload = resolve;
            s.onerror = () => reject(new Error(`Gagal memuat ${src}`));
            document.body.appendChild(s);
        });
    }

    (async () => {
        try {
            await loadComponents();
        } catch (err) {
            console.error(err);
        }

        for (const src of scripts) {
            try {
                await loadScript(src);
            } catch (err) {
                console.error(err);
            }
        }
    })();
})();