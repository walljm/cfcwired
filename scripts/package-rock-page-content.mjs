import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputRoot = path.join(root, 'rock-theme/CFCWired/PageContent');

const pages = [
  {
    source: 'src/index.html',
    output: 'home',
    pageName: 'Homepage',
    route: '/',
    layout: 'Homepage.aspx',
    browserTitle: 'Christian Fellowship Church',
    description: 'Christian Fellowship Church - A Spirit-directed church discipling people to know Jesus as Lord',
    featureZone: 'Feature',
    bodyZone: 'Sub Feature',
    unwrapContainers: false,
    note: 'Homepage uses the Homepage.aspx layout. Put the hero in Feature and the remaining sections in Sub Feature.'
  },
  {
    source: 'src/about-us/index.html',
    output: 'about-us',
    pageName: 'About Us',
    route: '/about-us',
    layout: 'FullWidth.aspx',
    browserTitle: 'About Us - Christian Fellowship Church',
    description: 'Learn about Christian Fellowship Church, our mission, vision, values, and story.',
    featureZone: 'Feature',
    bodyZone: 'Main'
  },
  {
    source: 'src/come-visit/index.html',
    output: 'come-visit',
    pageName: 'Come Visit',
    route: '/come-visit',
    layout: 'FullWidth.aspx',
    browserTitle: 'Come Visit - Christian Fellowship Church',
    description: 'Plan your visit to Christian Fellowship Church in Ashburn, Virginia.',
    featureZone: 'Feature',
    bodyZone: 'Main'
  },
  {
    source: 'src/about-us/find-community.html',
    output: 'about-us/find-community',
    pageName: 'Find Community',
    route: '/about-us/find-community',
    layout: 'FullWidth.aspx',
    browserTitle: 'Find Community - Christian Fellowship Church',
    description: 'Find community through groups and connection opportunities at Christian Fellowship Church.',
    featureZone: 'Feature',
    bodyZone: 'Main',
    rockNative: 'Consider replacing the group CTA with Rock Group Finder after the static import is verified.'
  },
  {
    source: 'src/get-involved/core-classes.html',
    output: 'get-involved/core-classes',
    pageName: 'Core Classes',
    route: '/get-involved/core-classes',
    layout: 'FullWidth.aspx',
    browserTitle: 'Core Classes - Christian Fellowship Church',
    description: 'Core classes and spiritual formation opportunities at Christian Fellowship Church.',
    featureZone: 'Feature',
    bodyZone: 'Main',
    rockNative: 'If class registration is managed in Rock, replace static CTAs with Rock event or registration links.'
  },
  {
    source: 'src/get-involved/serve.html',
    output: 'get-involved/serve',
    pageName: 'Serve',
    route: '/get-involved/serve',
    layout: 'FullWidth.aspx',
    browserTitle: 'Serve - Christian Fellowship Church',
    description: 'Find ways to serve at Christian Fellowship Church.',
    featureZone: 'Feature',
    bodyZone: 'Main',
    rockNative: 'Serve opportunities could later move to a Content Channel if they change often.'
  },
  {
    source: 'src/request-prayer.html',
    output: 'request-prayer',
    pageName: 'Request Prayer',
    route: '/request-prayer',
    layout: 'FullWidth.aspx',
    browserTitle: 'Request Prayer - Christian Fellowship Church',
    description: 'Request prayer from Christian Fellowship Church.',
    featureZone: 'Feature',
    bodyZone: 'Main',
    rockNative: 'Replace the static prayer CTA with Rock Prayer Request Entry after the content import is verified.'
  },
  {
    source: 'src/for-my-family/children.html',
    output: 'for-my-family/children',
    pageName: 'Children',
    route: '/for-my-family/children',
    layout: 'FullWidth.aspx',
    browserTitle: 'Children - Christian Fellowship Church',
    description: 'Children ministry at Christian Fellowship Church.',
    featureZone: 'Feature',
    bodyZone: 'Main'
  },
  {
    source: 'src/for-my-family/middle-school.html',
    output: 'for-my-family/middle-school',
    pageName: 'Middle School',
    route: '/for-my-family/middle-school',
    layout: 'FullWidth.aspx',
    browserTitle: 'Middle School - Christian Fellowship Church',
    description: 'Middle school ministry at Christian Fellowship Church.',
    featureZone: 'Feature',
    bodyZone: 'Main'
  },
  {
    source: 'src/for-my-family/high-school.html',
    output: 'for-my-family/high-school',
    pageName: 'High School',
    route: '/for-my-family/high-school',
    layout: 'FullWidth.aspx',
    browserTitle: 'High School - Christian Fellowship Church',
    description: 'High school ministry at Christian Fellowship Church.',
    featureZone: 'Feature',
    bodyZone: 'Main'
  },
  {
    source: 'src/watch-read/messages.html',
    output: 'watch-read/messages',
    pageName: 'Messages',
    route: '/watch-read/messages',
    layout: 'FullWidth.aspx',
    browserTitle: 'Messages - Christian Fellowship Church',
    description: 'Watch messages from Christian Fellowship Church.',
    featureZone: 'Feature',
    bodyZone: 'Main',
    rockNative: 'The static Subsplash embed can later be replaced by Rock media or a Content Channel Dynamic block.'
  },
  {
    source: 'src/about-us/contact-us.html',
    output: 'about-us/contact-us',
    pageName: 'Contact Us',
    route: '/about-us/contact-us',
    layout: 'FullWidth.aspx',
    browserTitle: 'Contact Us - Christian Fellowship Church',
    description: 'Contact Christian Fellowship Church.',
    featureZone: 'Feature',
    bodyZone: 'Main',
    rockNative: 'Replace any static form/CTA with a Rock Workflow Entry block for contact submissions.'
  },
  {
    source: 'src/about-us/meet-the-team.html',
    output: 'about-us/meet-the-team',
    pageName: 'Meet the Team',
    route: '/about-us/meet-the-team',
    layout: 'FullWidth.aspx',
    browserTitle: 'Meet the Team - Christian Fellowship Church',
    description: 'Meet the staff team at Christian Fellowship Church.',
    featureZone: 'Feature',
    bodyZone: 'Main',
    rockNative: 'The staff grid should eventually become a Rock Content Channel Dynamic block.'
  }
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

  return html.slice(0, outerOpenEnd) + html.slice(containerOpenEnd, innerClose).trim() + html.slice(outerClose);
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
    output += html.slice(cursor, match.index).replace(/Rock zone-[^)]*/gi, 'Rock content');
    const end = findMatchingSectionEnd(html, match.index);
    output += sectionToBlock(html.slice(match.index, end), options);
    cursor = end;
    sectionPattern.lastIndex = end;
  }

  output += html.slice(cursor).replace(/Rock zone-[^)]*/gi, 'Rock content');

  return normalizeRockPaths(output).trim() + '\n';
}

function normalizeRockPaths(html) {
  return html
    .replace(/url\('\.\.\/images\//g, "url('/images/")
    .replace(/url\('\.\/images\//g, "url('/images/")
    .replace(/url\('images\//g, "url('/images/")
    .replace(/src="\.\.\/images\//g, 'src="/images/')
    .replace(/src="\.\/images\//g, 'src="/images/')
    .replace(/src="images\//g, 'src="/images/')
    .replace(/href="\.\.\/for-my-family\/children\.html"/g, 'href="/for-my-family/children"')
    .replace(/href="\.\.\/for-my-family\/middle-school\.html"/g, 'href="/for-my-family/middle-school"')
    .replace(/href="\.\.\/for-my-family\/high-school\.html"/g, 'href="/for-my-family/high-school"')
    .replace(/href="come-visit\/"/g, 'href="/come-visit"')
    .replace(/href="watch-read\/messages\.html"/g, 'href="/watch-read/messages"')
    .replace(/href="about-us\/find-community\.html"/g, 'href="/about-us/find-community"')
    .replace(/href="get-involved\/core-classes\.html"/g, 'href="/get-involved/core-classes"')
    .replace(/class="([^"]*)\bcol-6\b/g, 'class="$1col-xs-6');
}

function normalizeFeature(html, options = {}) {
  return normalizeRockPaths(sectionToBlock(html, options));
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
| \`${page.bodyZone}\` | HTML Content | \`main.html\` | ${bodyNote} |

## Import Steps

1. Create or open the Rock page at \`${page.route}\`.
2. Set the layout to \`${page.layout}\`.
3. Paste \`feature.html\` into an HTML Content block in the \`${page.featureZone}\` zone.
4. Paste \`main.html\` into an HTML Content block in the \`${page.bodyZone}\` zone.
5. Verify image paths, links, page title/breadcrumb placement, mobile layout, and admin edit controls in Rock.
${page.note ? `\n## Page-Specific Note\n\n${page.note}\n` : ''}${rockNative}
## Excluded Static Markup

The static page header, nav, footer, CDN links, and \`site.js\` script are intentionally excluded. Rock supplies these through \`Site.Master\`, the site-level zones, and the theme CSS.
`;
}

for (const page of pages) {
  const sourcePath = path.join(root, page.source);
  const content = fs.readFileSync(sourcePath, 'utf8');
  const hero = firstSection(content);
  const blockOptions = { unwrapContainer: page.unwrapContainers !== false };
  const featureHtml = normalizeFeature(hero.html, blockOptions);
  const mainHtml = normalizeBody(bodySections(content, hero.end), blockOptions);
  const outDir = path.join(outputRoot, page.output);

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'feature.html'), featureHtml);
  fs.writeFileSync(path.join(outDir, 'main.html'), mainHtml);
  fs.writeFileSync(path.join(outDir, 'notes.md'), notesFor(page));
}

console.log(`Packaged ${pages.length} Rock page content directories.`);
