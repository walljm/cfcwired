const {chromium} = require('playwright');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({viewport: {width: 1440, height: 1316}});
  const p = await ctx.newPage();
  await p.goto('https://rock.cfcwired.org/come-visit', {waitUntil:'networkidle', timeout: 30000});
  await p.waitForTimeout(1500);
  const info = await p.evaluate(() => {
    const img = document.querySelector('.join-us-row .card-img-top');
    const card = document.querySelector('.join-us-row .card');
    const r = img.getBoundingClientRect();
    const cr = card.getBoundingClientRect();
    return {
      imgRect: {w: Math.round(r.width), h: Math.round(r.height)},
      cardRect: {w: Math.round(cr.width), h: Math.round(cr.height)},
      naturalW: img.naturalWidth, naturalH: img.naturalHeight,
      classes: img.className,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  const client = await p.context().newCDPSession(p);
  await client.send('DOM.enable');
  await client.send('CSS.enable');
  const {root} = await client.send('DOM.getDocument');
  const {nodeId} = await client.send('DOM.querySelector', {nodeId: root.nodeId, selector: '.join-us-row .card-img-top'});
  const matched = await client.send('CSS.getMatchedStylesForNode', {nodeId});
  const props = ['aspect-ratio','height','width','max-width','object-fit'];
  const out = [];
  for (const m of matched.matchedCSSRules) {
    for (const prop of m.rule.style.cssProperties) {
      if (props.includes(prop.name)) {
        out.push({sel: m.rule.selectorList.text, name: prop.name, value: prop.value, important: prop.important || false});
      }
    }
  }
  console.log(JSON.stringify(out, null, 2));
  const cs = await p.evaluate(() => {
    const c = getComputedStyle(document.querySelector('.join-us-row .card-img-top'));
    return {aspectRatio: c.aspectRatio, height: c.height, width: c.width, maxWidth: c.maxWidth, objectFit: c.objectFit};
  });
  console.log('computed:', JSON.stringify(cs));
  await b.close();
})();
