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
            <li class="nav-item"><a class="nav-link" href="/about-us/">About Us</a></li>
            <li class="nav-item"><a class="nav-link" href="/come-visit/">Come Visit</a></li>
            <li class="nav-item"><a class="nav-link" href="/about-us/find-community.html">Group Life</a></li>
            <li class="nav-item"><a class="nav-link" href="https://myrock.cfcwired.org/events" target="_blank">Events/Classes</a></li>
            <li class="nav-item"><a class="nav-link" href="/get-involved/serve.html">Serve</a></li>
            <li class="nav-item"><a class="nav-link" href="https://myrock.cfcwired.org/give" target="_blank">Give</a></li>
            <li class="nav-item"><a class="nav-link" href="https://myrock.cfcwired.org/connect" target="_blank">myCFC</a></li>
            <li class="nav-item ms-lg-2"><a class="nav-link" href="javascript:;" aria-label="Search"><i class="bi bi-search"></i></a></li>
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
    }

    function updateBodyOffset() {
        if (!siteHeader) return;
        const navHeight = nav ? nav.offsetHeight : 0;
        const announcementHeight = (announcement && !announcement.classList.contains('closed')) ? announcement.offsetHeight : 0;

        if (heroSection) {
            heroSection.style.marginTop = -navHeight + 'px';
            heroSection.style.paddingTop = (navHeight + announcementHeight) + 'px';
            document.body.style.paddingTop = '0px';
            return;
        }

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
