async function loadComponents() {
    const slots = document.querySelectorAll('[data-component]');

    await Promise.all([...slots].map(async (slot) => {
        const url = slot.dataset.component;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Gagal memuat ${url} (${res.status})`);
        slot.outerHTML = await res.text();
    }));
}
