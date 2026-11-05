// Kotak-kotak dekorasi di pojok section.
// Dimuat langsung lewat <script> di index.html (bukan lewat script.js) dan
// tanpa jQuery, supaya kotak sudah ada sejak awal halaman tampil.
// Kotak berisi warna muncul bertahap dari pojoknya saat grup terlihat di layar
// (lihat .square-grid di input.css).
(function () {
    const GRID = 5;
    const STEP_MS = 45; // jeda antar "lapisan" diagonal dari pojok

    // r = baris, c = kolom (0..GRID-1), urut dari kiri atas
    const groups = [
        {
            id: 'squareSkill',
            color: 'bg-cst-black', rounded: 'rounded-tr',
            fill: (r, c) => c <= r,                       // segitiga kiri bawah
            dist: (r, c) => (GRID - 1 - r) + c,           // dari pojok kiri bawah
        },
        {
            id: 'squarePortfolioTop',
            color: 'bg-cst-cream', rounded: 'rounded-br',
            fill: (r, c) => c <= GRID - r,                // segitiga kiri atas
            dist: (r, c) => r + c,                        // dari pojok kiri atas
        },
        {
            id: 'squarePortfolioBottom',
            color: 'bg-cst-cream', rounded: 'rounded-tl',
            fill: (r, c) => c >= GRID - 1 - r,            // segitiga kanan bawah
            dist: (r, c) => (GRID - 1 - r) + (GRID - 1 - c), // dari pojok kanan bawah
        },
        {
            id: 'squareAchievement',
            color: 'bg-cst-black', rounded: 'rounded-bl',
            fill: (r, c) => c >= r,                       // segitiga kanan atas
            dist: (r, c) => r + (GRID - 1 - c),           // dari pojok kanan atas
        },
    ];

    const grids = [];

    groups.forEach(function (g) {
        const container = document.getElementById(g.id);
        if (!container) return;

        const frag = document.createDocumentFragment();
        for (let r = 0; r < GRID; r++) {
            for (let c = 0; c < GRID; c++) {
                const cell = document.createElement('div');
                cell.className = 'w-full aspect-square ' + g.rounded;
                // pola papan catur, hanya di dalam segitiga
                if ((r + c) % 2 === 0 && g.fill(r, c)) {
                    cell.classList.add(g.color, 'square-fill');
                    cell.style.setProperty('--square-delay', g.dist(r, c) * STEP_MS + 'ms');
                }
                frag.appendChild(cell);
            }
        }
        container.appendChild(frag);
        container.classList.add('square-grid');
        grids.push(container);
    });

    // Tanpa IntersectionObserver: langsung tampilkan
    if (!('IntersectionObserver' in window)) {
        grids.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    grids.forEach(el => io.observe(el));
})();
