import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputRoot = path.join(root, 'rock-theme/CFCWired/PageContent');
const contentPageLayout = 'Homepage.aspx';
const contentPageFeatureZone = 'WelcomeVideo';
const contentPageBodyZone = 'MainContent';

const pages = [
  {
    source: 'src/index.html',
    output: 'home',
    pageName: 'Homepage',
    route: '/',
    layout: 'Homepage.aspx',
    browserTitle: 'Christian Fellowship Church',
    description: 'Christian Fellowship Church - A Spirit-directed church discipling people to know Jesus as Lord',
    featureZone: 'WelcomeVideo',
    unwrapContainers: false,
    bodyBlocks: [
      {
        zone: 'MainContent',
        file: 'vision.html',
        notes: 'Opening vision statement.'
      },
      {
        zone: 'MainContent',
        file: 'this-sunday.html',
        notes: 'This Sunday copy and weekly resource links.'
      },
      {
        zone: 'MainContent',
        file: 'coming-up.html',
        blockType: 'Calendar Item Occurrence List by Audience Lava',
        notes: 'Lava template for four audience-filtered EventItemOccurrences artwork tiles.'
      },
      {
        zone: 'MainContent',
        file: 'experience-cfc.html',
        notes: 'Experience CFC unframed columns.'
      },
      {
        zone: 'MainContent',
        file: 'discipleship-pathway.html',
        notes: 'Discipleship Pathway live-parity spacing and CTA.'
      }
    ],
    note: 'Homepage uses the Homepage.aspx layout. Put feature.html in the WelcomeVideo zone, then stack each body section payload in the MainContent zone in the order listed above.'
  },
  {
    source: 'src/about-us/index.html',
    output: 'about-us',
    pageName: 'About Us',
    route: '/about-us',
    layout: contentPageLayout,
    browserTitle: 'About Us - Christian Fellowship Church',
    description: 'Learn about Christian Fellowship Church, our mission, vision, values, and story.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone,
    unwrapContainers: false,
    unwrapBodyContainers: false
  },
  {
    source: 'src/about-us/statement-of-faith.html',
    output: 'about-us/statement-of-faith',
    pageName: 'Statement of Faith',
    route: '/about-us/statement-of-faith',
    layout: contentPageLayout,
    browserTitle: 'Statement of Faith - Christian Fellowship Church',
    description: 'Christian Fellowship Church statement of faith.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone,
    unwrapContainers: false,
    unwrapBodyContainers: false
  },
  {
    source: 'src/come-visit/index.html',
    output: 'come-visit',
    pageName: 'Come Visit',
    route: '/come-visit',
    layout: contentPageLayout,
    browserTitle: 'Come Visit - Christian Fellowship Church',
    description: 'Plan your visit to Christian Fellowship Church in Ashburn, Virginia.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone
  },
  {
    source: 'src/about-us/find-community.html',
    output: 'about-us/find-community',
    pageName: 'Find Community',
    route: '/about-us/find-community',
    layout: contentPageLayout,
    browserTitle: 'Find Community - Christian Fellowship Church',
    description: 'Find community through groups and connection opportunities at Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone,
    rockNative: 'Consider replacing the group CTA with Rock Group Finder after the static import is verified.'
  },
  {
    source: 'src/get-involved/core-classes.html',
    output: 'get-involved/core-classes',
    pageName: 'Core Classes',
    route: '/get-involved/core-classes',
    layout: contentPageLayout,
    browserTitle: 'Core Classes - Christian Fellowship Church',
    description: 'Core classes and spiritual formation opportunities at Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone,
    rockNative: 'If class registration is managed in Rock, replace static CTAs with Rock event or registration links.'
  },
  {
    source: 'src/get-involved/serve.html',
    output: 'get-involved/serve',
    pageName: 'Serve',
    route: '/get-involved/serve',
    layout: contentPageLayout,
    browserTitle: 'Serve - Christian Fellowship Church',
    description: 'Find ways to serve at Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone,
    rockNative: 'Serve opportunities could later move to a Content Channel if they change often.'
  },
  {
    source: 'src/get-involved/global-outreach.html',
    output: 'get-involved/global-outreach',
    pageName: 'Global Outreach',
    route: '/get-involved/global-outreach',
    layout: contentPageLayout,
    browserTitle: 'Global Outreach - Christian Fellowship Church',
    description: 'Global outreach and missions at Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone
  },
  {
    source: 'src/get-involved/local-outreach.html',
    output: 'get-involved/local-outreach',
    pageName: 'Local Outreach',
    route: '/get-involved/local-outreach',
    layout: contentPageLayout,
    browserTitle: 'Local Outreach - Christian Fellowship Church',
    description: 'Local outreach opportunities at Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone
  },
  {
    source: 'src/get-involved/living-on-mission.html',
    output: 'get-involved/living-on-mission',
    pageName: 'Living on Mission',
    route: '/get-involved/living-on-mission',
    layout: contentPageLayout,
    browserTitle: 'Living on Mission - Christian Fellowship Church',
    description: 'Living on Mission at Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone
  },
  {
    source: 'src/request-prayer.html',
    output: 'request-prayer',
    pageName: 'Request Prayer',
    route: '/request-prayer',
    layout: contentPageLayout,
    browserTitle: 'Request Prayer - Christian Fellowship Church',
    description: 'Request prayer from Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone,
    rockNative: 'Replace the static prayer CTA with Rock Prayer Request Entry after the content import is verified.'
  },
  {
    source: 'src/for-my-family/children.html',
    output: 'for-my-family/children',
    pageName: 'Children',
    route: '/for-my-family/children',
    layout: contentPageLayout,
    browserTitle: 'Children - Christian Fellowship Church',
    description: 'Children ministry at Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone
  },
  {
    source: 'src/for-my-family/middle-school.html',
    output: 'for-my-family/middle-school',
    pageName: 'Middle School',
    route: '/for-my-family/middle-school',
    layout: contentPageLayout,
    browserTitle: 'Middle School - Christian Fellowship Church',
    description: 'Middle school ministry at Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone
  },
  {
    source: 'src/for-my-family/high-school.html',
    output: 'for-my-family/high-school',
    pageName: 'High School',
    route: '/for-my-family/high-school',
    layout: contentPageLayout,
    browserTitle: 'High School - Christian Fellowship Church',
    description: 'High school ministry at Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone
  },
  {
    source: 'src/watch-read/messages.html',
    output: 'watch-read/messages',
    pageName: 'Messages',
    route: '/watch-read/messages',
    layout: contentPageLayout,
    browserTitle: 'Messages - Christian Fellowship Church',
    description: 'Watch messages from Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone,
    rockNative: 'The static Subsplash embed can later be replaced by Rock media or a Content Channel Dynamic block.'
  },
  {
    source: 'src/about-us/contact-us.html',
    output: 'about-us/contact-us',
    pageName: 'Contact Us',
    route: '/about-us/contact-us',
    layout: contentPageLayout,
    browserTitle: 'Contact Us - Christian Fellowship Church',
    description: 'Contact Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone,
    rockNative: 'Replace any static form/CTA with a Rock Workflow Entry block for contact submissions.'
  },
  {
    source: 'src/about-us/meet-the-team.html',
    output: 'about-us/meet-the-team',
    pageName: 'Meet the Team',
    route: '/about-us/meet-the-team',
    layout: contentPageLayout,
    browserTitle: 'Meet the Team - Christian Fellowship Church',
    description: 'Meet the staff team at Christian Fellowship Church.',
    featureZone: contentPageFeatureZone,
    bodyZone: contentPageBodyZone,
    rockNative: 'The staff grid should eventually become a Rock Content Channel Dynamic block.'
  }
];

const rockImageRoot = '/Content/ExternalSite/Images';
const imageFilePattern = /\.(?:avif|gif|jpe?g|png|svg|webp)$/i;
const localImageFiles = new Set(fs.readdirSync(path.join(root, 'src/images')));

const meetTeamPhotos = new Map([
  ['Jon Ackerman', 'jon-ackerman.jpg'],
  ['Hector Aldaz', 'hector-aldez.jpg'],
  ['Eden Asbeha', '32-Eden-Ashbeha.jpg'],
  ['Brian Bales', 'brian-bales.jpg'],
  ['Eddie Batten', 'eddie-batton.jpg'],
  ['Fred Clark', 'fred-clark.jpg'],
  ['Beth Davidson', 'beth-davidson.jpg'],
  ['Pouyan Farshad', '31-Pouyan-Farshad-Help-Desk-Technician-copy.jpg'],
  ['Nancy Graham', 'nancy-graham.jpg'],
  ['Sarah Hansma', 'Sarah2022-scaled.jpg'],
  ['Mike Haynes', 'mike-haynes.jpg'],
  ['Deb Hilbig', '30-Deb-Hilbig.jpg'],
  ['Josh Hill', 'josh-hill.jpg'],
  ['Cheryl Howard', 'cheryl-Howared-2023.jpg'],
  ['Brooke Jones', 'brooke-jones.jpg'],
  ['Alysia Metallo', 'alysia-metallo.jpg'],
  ['Michele Miller', 'michele-miller.jpg'],
  ['Jason Tom', 'Jason-Tom.jpg'],
  ['Lee Towns', 'lee-towns.jpg'],
  ['Mike Trivett', 'mike-trivett.jpg'],
  ['Tina Walderman', 'silhouette-female.gif'],
  ['Richele Walker', 'richelle-walker.jpg'],
  ['Jeff Webber', 'jeff-webber.jpg'],
  ['Rebekah Williams', '29-Rebekah-Williams-2.jpg'],
  ['Ruth Romano', 'silhouette-female.gif'],
  ['Kathy Tubach', 'silhouette-female.gif'],
  ['Wendy Zwart', 'wendy-zwart.jpg']
]);

const meetTeamOrder = [
  ...meetTeamPhotos.keys()
];

function findMatchingSectionEnd(content, startIndex) {
  const tokenPattern = /<\/?section\b[^>]*>/gi;
  tokenPattern.lastIndex = startIndex;
  let depth = 0;
  let match;

  while ((match = tokenPattern.exec(content)) != null) {
    if (match[0].startsWith('</')) {
      depth -= 1;
      if (depth === 0) {
        return tokenPattern.lastIndex;
      }
    } else {
      depth += 1;
    }
  }

  throw new Error(`Could not find matching </section> after index ${startIndex}`);
}

function firstSection(content) {
  const start = content.search(/<section\b/i);
  if (start < 0) {
    throw new Error('No section found');
  }

  const end = findMatchingSectionEnd(content, start);
  return { start, end, html: content.slice(start, end) };
}

function stripCommentBeforeSection(content) {
  return content.replace(/^\s*<!--[\s\S]*?-->\s*/, '');
}

function stripRockNotes(html) {
  return html.replace(/\s*<!--(?:(?!-->)[\s\S])*?RockRMS Lava Notes:(?:(?!-->)[\s\S])*?-->\s*/g, '\n');
}

function normalizeInterSectionPrefix(html) {
  return html
    .replace(/Rock zone-[^)]*/gi, 'Rock content')
    .replace(/\n[ \t]+<!--/g, '\n<!--')
    .replace(/^[ \t]+<!--/, '<!--')
    .replace(/[ \t]+$/g, '');
}

function reindentFragment(html, indentation = '    ') {
  const lines = html.split('\n');
  while (lines.length > 0 && lines[0].trim().length === 0) {
    lines.shift();
  }

  while (lines.length > 0 && lines[lines.length - 1].trim().length === 0) {
    lines.pop();
  }

  const contentLines = lines.filter(line => line.trim().length > 0);
  const commonIndent = contentLines.length === 0
    ? 0
    : Math.min(...contentLines.map(line => line.match(/^\s*/)[0].length));

  return lines
    .map(line => line.trim().length === 0 ? '' : `${indentation}${line.slice(commonIndent)}`)
    .join('\n');
}

function sectionToBlock(html, { unwrapContainer = true } = {}) {
  const withoutOuterSection = html
    .replace(/^\s*<section\b([^>]*)>/i, '<div$1>')
    .replace(/<\/section>\s*$/i, '</div>')
    .trim();

  const blockHtml = unwrapContainer ? unwrapDirectContainer(withoutOuterSection) : withoutOuterSection;
  return blockHtml.trim() + '\n';
}

function unwrapDirectContainer(html) {
  const openMatch = html.match(/^<div\b([^>]*)>\s*<div\b([^>]*)class="([^"]*\bcontainer\b[^"]*)"([^>]*)>/i);
  if (openMatch == null) {
    return html;
  }

  const outerOpenEnd = html.indexOf('>') + 1;
  const containerOpenStart = html.slice(outerOpenEnd).search(/<div\b[^>]*class="[^"]*\bcontainer\b[^"]*"[^>]*>/i) + outerOpenEnd;
  const containerOpenEnd = html.indexOf('>', containerOpenStart) + 1;
  const outerClose = html.lastIndexOf('</div>');
  const innerClose = html.lastIndexOf('</div>', outerClose - 1);

  if (containerOpenStart < outerOpenEnd || containerOpenEnd <= containerOpenStart || innerClose < 0 || outerClose < 0) {
    return html;
  }

  return `${html.slice(0, outerOpenEnd)}\n${reindentFragment(html.slice(containerOpenEnd, innerClose))}\n${html.slice(outerClose)}`;
}

function bodySections(content, heroEnd) {
  const footerStart = content.search(/\n\s*<!-- Footer|\n\s*<footer\b/i);
  if (footerStart < 0) {
    throw new Error('No footer boundary found');
  }

  return content.slice(heroEnd, footerStart).trim();
}

function normalizeBody(html, options = {}) {
  html = stripRockNotes(html);
  const sectionPattern = /<section\b/gi;
  let cursor = 0;
  let output = '';
  let match;

  while ((match = sectionPattern.exec(html)) != null) {
    output += normalizeInterSectionPrefix(html.slice(cursor, match.index));
    const end = findMatchingSectionEnd(html, match.index);
    output += sectionToBlock(html.slice(match.index, end), options);
    cursor = end;
    sectionPattern.lastIndex = end;
  }

  output += normalizeInterSectionPrefix(html.slice(cursor));

  return normalizeRockPaths(output).trim() + '\n';
}

function normalizeMeetTeamBody(html, options = {}) {
  return addMeetTeamPhotos(normalizeBody(html, options));
}

function addMeetTeamPhotos(html) {
  const withPhotos = html
    .replace('<div class="py-5">', '<div class="py-5 meet-team-section">')
    .replace('<div class="row g-4">', '<div class="row g-4 staff-grid">')
    .replace(/<div class="col-md-6 col-lg-4">/g, '<div class="col-md-6 col-lg-4 staff-grid-item">')
    .replace(/<div class="card h-100 border-0 shadow-sm text-center">/g, '<div class="card h-100 border-0 shadow-sm text-center staff-card">')
    .replace(/<div class="card-body p-4">\s*<div class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 100px; height: 100px;">\s*<i class="fa fa-user text-primary" style="font-size: 3rem;"><\/i>\s*<\/div>\s*<h5 class="fw-bold mb-1">([^<]+)<\/h5>/g, (_match, staffName) => {
      const fileName = meetTeamPhotos.get(staffName.trim()) ?? 'silhouette-female.gif';
      return `<div class="card-body p-4">\n                    <img src="${rockImageUrl(fileName)}" alt="${staffName.trim()}" class="staff-photo rounded-circle mb-3">\n                    <h5 class="fw-bold mb-1">${staffName}</h5>`;
    });

  return reorderMeetTeamCards(withPhotos);
}

function reorderMeetTeamCards(html) {
  const gridOpen = '<div class="row g-4 staff-grid">';
  const gridStart = html.indexOf(gridOpen);
  if (gridStart < 0) {
    return html;
  }

  const gridEnd = findMatchingDivEnd(html, gridStart);
  const innerStart = gridStart + gridOpen.length;
  const innerEnd = gridEnd - '</div>'.length;
  const inner = html.slice(innerStart, innerEnd);
  const cards = [];
  let cursor = 0;

  while (cursor < inner.length) {
    const cardStart = inner.indexOf('<div class="col-md-6 col-lg-4 staff-grid-item">', cursor);
    if (cardStart < 0) {
      break;
    }

    const cardEnd = findMatchingDivEnd(inner, cardStart);
    cards.push(inner.slice(cardStart, cardEnd));
    cursor = cardEnd;
  }

  if (cards.length === 0) {
    return html;
  }

  const byName = new Map(cards.map(card => {
    const name = card.match(/<h5 class="fw-bold mb-1">([^<]+)<\/h5>/)?.[1]?.trim();
    return [name, card];
  }).filter(([name]) => name != null));
  const used = new Set();
  const orderedCards = meetTeamOrder
    .map(name => {
      const card = byName.get(name);
      if (card == null) {
        return null;
      }

      used.add(name);
      return card;
    })
    .filter(Boolean);
  const unorderedCards = cards.filter(card => {
    const name = card.match(/<h5 class="fw-bold mb-1">([^<]+)<\/h5>/)?.[1]?.trim();
    return name == null || !used.has(name);
  });
  const nextInner = `\n        ${[...orderedCards, ...unorderedCards].join('\n\n        ')}\n    `;

  return `${html.slice(0, innerStart)}${nextInner}${html.slice(innerEnd)}`;
}

function findMatchingDivEnd(content, startIndex) {
  const tokenPattern = /<\/??div\b[^>]*>/gi;
  tokenPattern.lastIndex = startIndex;
  let depth = 0;
  let match;

  while ((match = tokenPattern.exec(content)) != null) {
    if (match[0].startsWith('</')) {
      depth -= 1;
      if (depth === 0) {
        return tokenPattern.lastIndex;
      }
    } else {
      depth += 1;
    }
  }

  throw new Error(`Could not find matching </div> after index ${startIndex}`);
}

function normalizeBodyBlocks(html, options = {}) {
  html = stripRockNotes(html);
  const sectionPattern = /<section\b/gi;
  let cursor = 0;
  const blocks = [];
  let match;

  while ((match = sectionPattern.exec(html)) != null) {
    const prefix = normalizeInterSectionPrefix(html.slice(cursor, match.index)).trim();
    const end = findMatchingSectionEnd(html, match.index);
    const blockHtml = [prefix, sectionToBlock(html.slice(match.index, end), options).trim()].filter(Boolean).join('\n');
    blocks.push(normalizeRockPaths(blockHtml).trim() + '\n');
    cursor = end;
    sectionPattern.lastIndex = end;
  }

  const trailing = normalizeInterSectionPrefix(html.slice(cursor)).trim();
  if (trailing.length > 0) {
    throw new Error(`Unexpected trailing body content: ${trailing.slice(0, 80)}`);
  }

  return blocks;
}

function splitHomepageBodyBlocks(html, options = {}) {
  const blocks = normalizeBodyBlocks(html, options);
  if (blocks.length === 5) {
    return [blocks[0], blocks[1], homepageEventsTemplate(), ...blocks.slice(3)];
  }

  const welcomeAndSunday = blocks[0];
  const splitMarker = '<div class="row mt-5">';
  const splitIndex = welcomeAndSunday.indexOf(splitMarker);

  if (splitIndex < 0) {
    throw new Error('Could not split homepage Vision and ThisSunday content');
  }

  const vision = `${welcomeAndSunday.slice(0, splitIndex).trimEnd()}\n        </div>\n    </div>\n`;
  const thisSundayContent = welcomeAndSunday.slice(splitIndex).trimStart().replace('<div class="row mt-5">', '<div class="row">');
  const thisSunday = `<div class="py-5 bg-light">\n        <div class="container">\n            ${thisSundayContent}`;

  return [vision, thisSunday, homepageEventsTemplate(), ...blocks.slice(2)];
}

function homepageEventsTemplate() {
  return `<div class="home-coming-up-section">
    <div class="container">
      <h1 class="text-center fw-bold mb-5 text-uppercase">COMING UP</h1>
      {% if EventItemOccurrences != empty %}
        <div class="row g-4">
          {% for eventItemOccurrence in EventItemOccurrences limit:4 %}
            {% assign linkUrl = '' %}
            {% if EventDetailPage != empty %}
              {% capture linkUrl %}{{ EventDetailPage }}?EventOccurrenceId={{ eventItemOccurrence.Id }}{% endcapture %}
            {% endif %}
            {% if linkUrl == empty and RegistrationPage != empty %}
              {% capture linkUrl %}{{ RegistrationPage }}?EventOccurrenceId={{ eventItemOccurrence.Id }}{% endcapture %}
            {% endif %}
            {% capture eventDate %}
              {{ eventItemOccurrence.NextStartDateTime | Date:'ddd, MMM d / h:mmtt' }}
            {% endcapture %}
            {% capture eventMonth %}{{ eventItemOccurrence.NextStartDateTime | Date:'MMM' }}{% endcapture %}
            {% capture eventDay %}{{ eventItemOccurrence.NextStartDateTime | Date:'d' }}{% endcapture %}
            {% assign imageGuid = eventItemOccurrence.EventItem | Attribute:'Image','RawValue' %}
            {% if imageGuid == empty %}{% assign imageGuid = eventItemOccurrence.EventItem | Attribute:'EventImage','RawValue' %}{% endif %}
            {% if imageGuid == empty %}{% assign imageGuid = eventItemOccurrence.EventItem | Attribute:'Event Image','RawValue' %}{% endif %}
            {% if imageGuid == empty %}{% assign imageGuid = eventItemOccurrence.EventItem | Attribute:'Photo','RawValue' %}{% endif %}
            {% assign imageUrl = '' %}
            {% if imageGuid != empty %}{% assign imageUrl = imageGuid | ImageUrl %}{% endif %}
            {% if imageUrl == empty and eventItemOccurrence.EventItem.Photo.Guid != empty %}
              {% capture imageUrl %}/GetImage.ashx?Guid={{ eventItemOccurrence.EventItem.Photo.Guid }}{% endcapture %}
            {% endif %}
            {% if imageUrl == empty and eventItemOccurrence.EventItem.PhotoId != empty %}
              {% capture imageUrl %}/GetImage.ashx?Id={{ eventItemOccurrence.EventItem.PhotoId }}{% endcapture %}
            {% endif %}
            {% if imageUrl == empty and eventItemOccurrence.EventItem.ImageUrl != empty %}
              {% assign imageUrl = eventItemOccurrence.EventItem.ImageUrl %}
            {% endif %}
            <div class="col-xs-6 col-md-3">
              {% if linkUrl != empty %}<a href="{{ linkUrl }}" class="event-tile event-card-tile d-block">{% else %}<div class="event-tile event-card-tile d-block">{% endif %}
                {% if imageUrl != empty %}
                  <img src="{{ imageUrl }}" class="img-responsive event-tile-image" alt="{{ eventItemOccurrence.EventItem.Name | Escape }}">
                {% else %}
                  <span class="event-card-date" aria-hidden="true">
                    <span class="event-card-month">{{ eventMonth | Strip }}</span>
                    <span class="event-card-day">{{ eventDay | Strip }}</span>
                  </span>
                  <span class="event-tile-fallback">
                    <strong>{{ eventItemOccurrence.EventItem.Name }}</strong>
                    <small>{{ eventDate | Strip }}</small>
                    {% if eventItemOccurrence.EventItem.Summary != empty %}<span>{{ eventItemOccurrence.EventItem.Summary }}</span>{% endif %}
                  </span>
                {% endif %}
              {% if linkUrl != empty %}</a>{% else %}</div>{% endif %}
            </div>
          {% endfor %}
        </div>
      {% else %}
        <p class="text-center text-muted mb-0">Coming up items will appear here after the event occurrence block is configured.</p>
      {% endif %}
      <div class="text-center mt-4">
        <a href="https://myrock.cfcwired.org/Events?audience=All+Church" target="_blank" class="btn btn-primary">See More Events</a>
      </div>
    </div>
  </div>
  `;
}

function normalizeRockPaths(html) {
  return normalizeImagePaths(html)
    .replace(/href="\.\.\/for-my-family\/children\.html"/g, 'href="/for-my-family/children"')
    .replace(/href="\.\.\/for-my-family\/middle-school\.html"/g, 'href="/for-my-family/middle-school"')
    .replace(/href="\.\.\/for-my-family\/high-school\.html"/g, 'href="/for-my-family/high-school"')
    .replace(/href="come-visit\/"/g, 'href="/come-visit"')
    .replace(/href="watch-read\/messages\.html"/g, 'href="/watch-read/messages"')
    .replace(/href="about-us\/find-community\.html"/g, 'href="/about-us/find-community"')
    .replace(/href="get-involved\/core-classes\.html"/g, 'href="/get-involved/core-classes"')
    .replace(/class="([^"]*)\bcol-6\b/g, 'class="$1col-xs-6');
}

function normalizeImagePaths(html) {
  return html
    .replace(/((?:src|poster)=")(?:(?:\.\.\/|\.\/)?images\/|\/images\/)([^"]+)(")/g, (_match, prefix, fileName, suffix) => {
      return `${prefix}${rockImageUrl(fileName)}${suffix}`;
    })
    .replace(/(url\(['"]?)(?:(?:\.\.\/|\.\/)?images\/|\/images\/)([^'")]+)(['"]?\))/g, (_match, prefix, fileName, suffix) => {
      return `${prefix}${rockImageUrl(fileName)}${suffix}`;
    })
    .replace(/((?:src|poster)=")https:\/\/cfcwired\.org\/wp-content\/uploads\/\d{4}\/\d{2}\/([^"?#]+)(?:[?#][^"]*)?(")/g, (match, prefix, fileName, suffix) => {
      return imageFilePattern.test(fileName) && localImageFiles.has(fileName) ? `${prefix}${rockImageUrl(fileName)}${suffix}` : match;
    })
    .replace(/(url\(['"]?)https:\/\/cfcwired\.org\/wp-content\/uploads\/\d{4}\/\d{2}\/([^'")?#]+)(?:[?#][^'")]*)?(['"]?\))/g, (match, prefix, fileName, suffix) => {
      return imageFilePattern.test(fileName) && localImageFiles.has(fileName) ? `${prefix}${rockImageUrl(fileName)}${suffix}` : match;
    })
    .replace(/https:\/\/cfcwired\.org\/wp-content\/uploads\/\d{4}\/\d{2}\/([^\s"'<>)]*)/g, (match, fileName) => {
      return imageFilePattern.test(fileName) && localImageFiles.has(fileName) ? rockImageUrl(fileName) : match;
    });
}

function rockImageUrl(fileName) {
  return `${rockImageRoot}/${fileName}`;
}

function normalizeFeature(html, options = {}) {
  return normalizeRockPaths(sectionToBlock(html, options));
}

function cleanGeneratedFiles(outDir, page) {
  fs.mkdirSync(outDir, { recursive: true });
  const generatedFiles = new Set(['feature.html', 'main.html', 'notes.md']);

  if (page.bodyBlocks != null) {
    generatedFiles.add('main.html');
    page.bodyBlocks.forEach(block => generatedFiles.add(block.file));
  }

  for (const file of generatedFiles) {
    fs.rmSync(path.join(outDir, file), { force: true });
  }
}

function notesFor(page) {
  const rockNative = page.rockNative ? `\n## Rock-Native Follow-Up\n\n${page.rockNative}\n` : '';
  const preservesContainers = page.unwrapContainers === false;
  const featureNote = preservesContainers
    ? 'Hero block only. The homepage payload includes its own inner `.container` because the homepage layout leaves this zone full-width.'
    : 'Hero block only. Do not include page header, nav, footer, scripts, or nested `.container`.';
  const bodyNote = preservesContainers
    ? 'Homepage body sections include their own `.container` wrappers so section backgrounds can span the viewport.'
    : 'Page body content extracted from the converted static page.';
  const bodyRows = page.bodyBlocks != null
    ? page.bodyBlocks.map(block => `| \`${block.zone}\` | ${block.blockType ?? 'HTML Content'} | \`${block.file}\` | ${block.notes} |`).join('\n')
    : `| \`${page.bodyZone}\` | HTML Content | \`main.html\` | ${bodyNote} |`;
  const bodySteps = page.bodyBlocks != null
    ? page.bodyBlocks.map((block, index) => {
        if (block.blockType === 'Content Channel Dynamic') {
          return `${index + 4}. Add a Content Channel Dynamic block in the \`${block.zone}\` zone, set Channel to \`${block.channel}\`, set the block's Detail Page linked page so Lava exposes \`LinkedPages.DetailPage\`, and paste \`${block.file}\` as the Lava template.`;
        }

        if (block.blockType != null && block.blockType !== 'HTML Content') {
          return `${index + 4}. Add a ${block.blockType} block in the \`${block.zone}\` zone and paste \`${block.file}\` as the Lava template.`;
        }

        return `${index + 4}. Paste \`${block.file}\` into an HTML Content block in the \`${block.zone}\` zone.`;
      }).join('\n')
    : `4. Paste \`main.html\` into an HTML Content block in the \`${page.bodyZone}\` zone.`;
  const verifyStep = page.bodyBlocks != null ? page.bodyBlocks.length + 4 : 5;
  return `# ${page.pageName} Import Notes

Source page: \`${page.source}\`

## Rock Page

- Page name: ${page.pageName}
- Suggested route: \`${page.route}\`
- Layout: \`${page.layout}\`
- Browser title: \`${page.browserTitle}\`
- Meta description: \`${page.description}\`

## Blocks

| Zone | Block Type | File | Notes |
|------|------------|------|-------|
| \`${page.featureZone}\` | HTML Content | \`feature.html\` | ${featureNote} |
${bodyRows}

## Import Steps

1. Create or open the Rock page at \`${page.route}\`.
2. Set the layout to \`${page.layout}\`.
3. Paste \`feature.html\` into an HTML Content block in the \`${page.featureZone}\` zone.
${bodySteps}
${verifyStep}. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.
${page.note ? `\n## Page-Specific Note\n\n${page.note}\n` : ''}${rockNative}
## Excluded Static Markup

The static page header, nav, footer, CDN links, and \`site.js\` script are intentionally excluded. Rock supplies these through \`Site.Master\`, the site-level zones, and the theme CSS.
`;
}

for (const page of pages) {
  const sourcePath = path.join(root, page.source);
  const content = fs.readFileSync(sourcePath, 'utf8');
  const hero = firstSection(content);
  const featureBlockOptions = { unwrapContainer: page.unwrapContainers !== false };
  const bodyBlockOptions = { unwrapContainer: page.unwrapBodyContainers ?? page.unwrapContainers !== false };
  const featureHtml = normalizeFeature(hero.html, featureBlockOptions);
  const outDir = path.join(outputRoot, page.output);

  cleanGeneratedFiles(outDir, page);
  fs.writeFileSync(path.join(outDir, 'feature.html'), featureHtml);
  if (page.bodyBlocks != null) {
    const bodyBlockHtml = page.output === 'home'
      ? splitHomepageBodyBlocks(bodySections(content, hero.end), bodyBlockOptions)
      : normalizeBodyBlocks(bodySections(content, hero.end), bodyBlockOptions);

    if (bodyBlockHtml.length !== page.bodyBlocks.length) {
      throw new Error(`${page.source} produced ${bodyBlockHtml.length} body blocks, expected ${page.bodyBlocks.length}`);
    }

    page.bodyBlocks.forEach((block, index) => {
      fs.writeFileSync(path.join(outDir, block.file), bodyBlockHtml[index]);
    });
  } else {
    const mainHtml = page.output === 'about-us/meet-the-team'
      ? normalizeMeetTeamBody(bodySections(content, hero.end), bodyBlockOptions)
      : normalizeBody(bodySections(content, hero.end), bodyBlockOptions);
    fs.writeFileSync(path.join(outDir, 'main.html'), mainHtml);
  }
  fs.writeFileSync(path.join(outDir, 'notes.md'), notesFor(page));
}

console.log(`Packaged ${pages.length} Rock page content directories.`);
