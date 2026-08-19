(function () {
    const siteHeader = document.getElementById('site-header');
    const nav = document.getElementById('main-nav');
    const announcement = document.getElementById('announcement-header');
    const closeBtn = document.getElementById('close-announcement');
    const heroSection = document.querySelector('.hero-fullpage');

    const storageKey = 'cfc-announcement-dismissed';

    function normalizeAnnouncementCopy() {
        if (!announcement) return;
        const announcementLabel = announcement.querySelector('.announcement-link span');
        if (!announcementLabel) return;
        announcementLabel.innerHTML = 'This Sunday at 9:30am &amp; 11am. Watch Online -&gt;';
    }

    function normalizePrimaryNav() {
        if (!nav) return;
        const navList = nav.querySelector('.navbar-nav');
        if (!navList) return;

        navList.innerHTML = `
            <li><a href="/about-us/">About Us</a></li>
            <li><a href="/come-visit/">Come Visit</a></li>
            <li><a href="/about-us/find-community.html">Group Life</a></li>
            <li><a href="https://myrock.cfcwired.org/events" target="_blank">Events/Classes</a></li>
            <li><a href="/get-involved/serve.html">Serve</a></li>
            <li><a href="https://myrock.cfcwired.org/give" target="_blank">Give</a></li>
            <li><a href="https://myrock.cfcwired.org/connect" target="_blank">myCFC</a></li>
            <li><a href="javascript:;" aria-label="Search"><i class="fa fa-search"></i></a></li>
        `;
    }

    function normalizePageTitle() {
        const titleMap = {
            '/': 'Christian Fellowship Church',
            '/about-us/': 'About Us - Christian Fellowship Church',
            '/about-us/find-community.html': 'Find Community - Christian Fellowship Church',
            '/about-us/find-community': 'Find Community - Christian Fellowship Church',
            '/about-us/contact-us.html': 'Contact Us - Christian Fellowship Church',
            '/about-us/contact-us': 'Contact Us - Christian Fellowship Church',
            '/about-us/statement-of-faith.html': 'Statement of Faith - Christian Fellowship Church',
            '/about-us/statement-of-faith': 'Statement of Faith - Christian Fellowship Church',
            '/about-us/meet-the-team.html': 'Meet the Team - Christian Fellowship Church',
            '/about-us/meet-the-team': 'Meet the Team - Christian Fellowship Church',
            '/come-visit/': 'Come Visit - Christian Fellowship Church',
            '/watch-read/messages.html': 'Messages - Christian Fellowship Church',
            '/watch-read/messages': 'Messages - Christian Fellowship Church',
            '/get-involved/core-classes.html': 'Core Classes - Christian Fellowship Church',
            '/get-involved/core-classes': 'Core Classes - Christian Fellowship Church',
            '/get-involved/serve.html': 'Serve - Christian Fellowship Church',
            '/get-involved/serve': 'Serve - Christian Fellowship Church',
            '/for-my-family/children.html': 'Children - Christian Fellowship Church',
            '/for-my-family/children': 'Children - Christian Fellowship Church',
            '/for-my-family/middle-school.html': 'Middle School - Christian Fellowship Church',
            '/for-my-family/middle-school': 'Middle School - Christian Fellowship Church',
            '/for-my-family/high-school.html': 'High School - Christian Fellowship Church',
            '/for-my-family/high-school': 'High School - Christian Fellowship Church',
            '/request-prayer.html': 'Request Prayer - Christian Fellowship Church'
            ,'/request-prayer': 'Request Prayer - Christian Fellowship Church'
        };

        const normalizedPath = window.location.pathname;
        if (normalizedPath in titleMap) {
            document.title = titleMap[normalizedPath];
        }
    }

    function normalizeFooterCopy() {
        const footer = document.querySelector('footer');
        if (!footer) return;

        const weeklyHeading = Array.from(footer.querySelectorAll('h6, .footer-heading')).find((node) => /cfc\s*(wired\s*)?(weekly|monthly)/i.test(node.textContent || ''));
        if (weeklyHeading) {
            weeklyHeading.textContent = 'CFCWIRED MONTHLY';
        }

        const footerPhone = Array.from(footer.querySelectorAll('a[href^="tel:"]')).find((link) => /703\.729\.3900/.test(link.textContent || ''));
        if (footerPhone) {
            const icon = footerPhone.querySelector('i');
            if (icon) {
                footerPhone.innerHTML = `${icon.outerHTML}1.703.729.3900`;
            } else {
                footerPhone.textContent = '1.703.729.3900';
            }
        }

        const footerCopyright = Array.from(footer.querySelectorAll('p, span, small')).find((node) => {
            const text = node.textContent || '';
            return /copyright\s*2026|©\s*2026/i.test(text) && node.children.length === 0;
        });
        if (footerCopyright) {
            footerCopyright.textContent = '© 2026 CHRISTIAN FELLOWSHIP CHURCH. ALL RIGHTS RESERVED.';
        }

        // Normalize "Designed By: PlainJoe Studios" link to match live
        // Search both inside footer and in sub-footer outside footer element
        var designedByLink = Array.from(footer.querySelectorAll('a')).find((link) => /plainjoe/i.test(link.textContent || '') || /plainjoe/i.test(link.href || ''));
        if (!designedByLink) {
            designedByLink = Array.from(document.querySelectorAll('a')).find((link) => /plainjoe/i.test(link.textContent || '') || /plainjoe/i.test(link.href || ''));
        }
        if (designedByLink) {
            designedByLink.href = 'https://cfcwired.org/';
            designedByLink.removeAttribute('target');
            designedByLink.textContent = 'Designed By: PlainJoe Studios';
            designedByLink.classList.remove('text-uppercase');
        }

        // Normalize app store alt text (search whole document)
        const appStoreImg = document.querySelector('img[alt*="App Store"], img[alt*="Apple"]');
        if (appStoreImg) {
            appStoreImg.alt = 'Available on the Apple Store';
        }
        const googlePlayImg = document.querySelector('img[alt*="Google Play"]');
        if (googlePlayImg) {
            googlePlayImg.alt = 'Get it on Google Play';
        }
    }

    function updateBodyOffset() {
        if (!siteHeader) return;
        const navHeight = nav ? nav.offsetHeight : 0;
        const announcementHeight = (announcement && !announcement.classList.contains('closed')) ? announcement.offsetHeight : 0;

        if (heroSection) {
            heroSection.style.marginTop = '0px';
            heroSection.style.paddingTop = '0px';
            document.body.style.paddingTop = '0px';
            return;
        }

        document.body.style.paddingTop = siteHeader.offsetHeight + 'px';
        document.documentElement.style.setProperty('--site-header-h', siteHeader.offsetHeight + 'px');
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

    // Subsplash library embeds post their rendered content height to the parent
    // window. Copying it onto the iframe keeps scrolling on the page instead of
    // inside the frame, and re-measures when the embed switches views.
    //
    // The embed needs two to three seconds to boot before it reports anything, so the
    // last height is kept per embed and width and applied up front. Without it every
    // visit starts short and visibly grows.
    function sizeSubsplashEmbeds() {
        const subsplashOrigin = 'https://subsplash.com';
        const librarySelector = 'iframe[src*="subsplash.com"][src*="/lb/"]';
        const storagePrefix = 'cfc-subsplash-height:';

        // Reported height depends on how wide the frame is, so width is part of the key.
        function storageKey(frame) {
            return storagePrefix + frame.src + '@' + Math.round(frame.clientWidth / 50) * 50;
        }

        function applyLastKnownHeights() {
            const frames = document.querySelectorAll(librarySelector);
            for (const frame of frames) {
                try {
                    const cached = localStorage.getItem(storageKey(frame));
                    if (cached) {
                        frame.style.height = cached + 'px';
                    }
                } catch (error) {
                    return;
                }
            }
        }

        window.addEventListener('message', function (event) {
            if (event.origin !== subsplashOrigin) return;

            const data = event.data;
            if (data === null || typeof data !== 'object') return;

            const height = Number(data.pageHeight);
            if (!height) return;

            // Only the library embeds (`/lb/`) report a content height; the single
            // video player keeps its own aspect-ratio box.
            const frames = document.querySelectorAll(librarySelector);
            for (const frame of frames) {
                if (frame.contentWindow !== event.source) continue;

                frame.style.height = height + 'px';

                try {
                    localStorage.setItem(storageKey(frame), height);
                } catch (error) {
                    // Storage unavailable; the frame is still sized correctly.
                }

                // The embed changes views without a page load, so a reader scrolled
                // deep into the previous view would land in empty space.
                if (data.eventType === 'route transition') {
                    const frameTop = frame.getBoundingClientRect().top + window.pageYOffset;
                    if (window.pageYOffset > frameTop) {
                        window.scrollTo(0, frameTop);
                    }
                }
            }
        });

        applyLastKnownHeights();
    }

    sizeSubsplashEmbeds();
    normalizeAnnouncementCopy();
    normalizePrimaryNav();
    normalizePageTitle();
    normalizeFooterCopy();
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
