(function () {
    const siteHeader = document.getElementById('site-header');
    const nav = document.getElementById('main-nav');
    const announcement = document.getElementById('announcement-header');
    const closeBtn = document.getElementById('close-announcement');

    const storageKey = 'cfc-announcement-dismissed';

    function updateBodyOffset() {
        if (!siteHeader) return;
        document.body.style.paddingTop = siteHeader.offsetHeight + 'px';
    }

    function checkBannerState() {
        if (!announcement) return;

        const bannerVersion = announcement.getAttribute('data-version');
        const dismissedVersion = localStorage.getItem(storageKey);

        if (dismissedVersion === bannerVersion) {
            announcement.classList.add('closed');
        }

        setTimeout(updateBodyOffset, 50);
    }

    function closeBanner() {
        if (!announcement) return;

        const bannerVersion = announcement.getAttribute('data-version');
        localStorage.setItem(storageKey, bannerVersion);
        announcement.classList.add('closed');

        setTimeout(updateBodyOffset, 350);
    }

    function handleScroll() {
        if (!nav) return;
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }

    checkBannerState();
    updateBodyOffset();

    if (closeBtn) {
        closeBtn.addEventListener('click', closeBanner);
    }

    if (announcement) {
        announcement.addEventListener('transitionend', updateBodyOffset);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateBodyOffset);

    handleScroll();
})();
