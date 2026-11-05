$(document).ready(function () {
    const $modal = $('#profileModal');
    let lastFocus = null;

    function openProfile() {
        lastFocus = document.activeElement;
        $modal.attr('aria-hidden', 'false');
        $('body').addClass('overflow-hidden');
        $modal.find('.overflow-y-auto').scrollTop(0);
        $('#profileClose').trigger('focus');
    }

    function closeProfile() {
        $modal.attr('aria-hidden', 'true');
        $('body').removeClass('overflow-hidden');
        if (lastFocus) lastFocus.focus();
    }

    $('#openProfile').on('click', openProfile);
    $('#profileClose').on('click', closeProfile);
    $modal.on('click', function (e) { if (e.target === this) closeProfile(); });

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' && $modal.attr('aria-hidden') === 'false') closeProfile();
    });
});