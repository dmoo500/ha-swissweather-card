import { html, type TemplateResult } from 'lit';

export function renderRainParticles(
  count: number,
  cloudBound: boolean,
  fullHeight = false
): TemplateResult[] {
  return Array.from({ length: count }, (_, i) => {
    const base = cloudBound ? 14 : 4;
    const spread = cloudBound ? 72 : 96;
    const x = base + (((i * 31 + 17) % 100) / 100) * spread;
    const duration = (cloudBound ? 0.95 : 0.9 + (i % 5) * 0.14).toFixed(2);
    const delay = (-1 * ((i % 7) * 0.23)).toFixed(2);
    const height = (cloudBound ? 15 : 14) + (i % 4) * 5;
    const opacity = (0.46 + (i % 4) * 0.11).toFixed(2);
    const drift = (i % 2 === 0 ? 5 : -5) + ((i % 3) - 1) * 1.7;
    const width = i % 3 === 0 ? 1.6 : 2.1;
    const startY = fullHeight ? `${(-8 + ((i * 19 + 13) % 100)).toFixed(1)}%` : '-14%';

    return html`<span
      class="rain-drop"
      style="--x:${x.toFixed(
        2
      )}%; --start-y:${startY}; --duration:${duration}s; --delay:${delay}s; --h:${height}px; --opacity:${opacity}; --drift:${drift.toFixed(
        1
      )}px; --w:${width}px;"
    ></span>`;
  });
}

export function renderSnowParticles(count: number, cloudBound: boolean): TemplateResult[] {
  return Array.from({ length: count }, (_, i) => {
    const base = cloudBound ? 12 : 2;
    const spread = cloudBound ? 76 : 98;
    const x = base + (((i * 29 + 7) % 100) / 100) * spread;
    const duration = (cloudBound ? 6.1 : 5.6 + (i % 5) * 1.1).toFixed(2);
    const delay = (-1 * ((i % 9) * 0.7)).toFixed(2);
    const size = (cloudBound ? 2.8 : 2.4 + (i % 4) * 1.1).toFixed(1);
    const opacity = (0.52 + (i % 4) * 0.11).toFixed(2);
    const drift = (i % 2 === 0 ? 13 : -13) + ((i % 3) - 1) * 2.6;
    const driftBack = -drift * 0.7;

    return html`<span
      class="snow-flake"
      style="--x:${x.toFixed(
        2
      )}%; --duration:${duration}s; --delay:${delay}s; --size:${size}px; --opacity:${opacity}; --drift:${drift}px; --drift-back:${driftBack.toFixed(
        1
      )}px;"
      ><i></i><b></b
    ></span>`;
  });
}

export function renderDrizzleParticles(
  count: number,
  cloudBound: boolean,
  fullHeight = false
): TemplateResult[] {
  return Array.from({ length: count }, (_, i) => {
    const base = cloudBound ? 12 : 2;
    const spread = cloudBound ? 76 : 98;
    const x = base + (((i * 17 + 11) % 100) / 100) * spread;
    const duration = (cloudBound ? 1.25 : 1.3 + (i % 4) * 0.14).toFixed(2);
    const delay = (-1 * ((i % 8) * 0.17)).toFixed(2);
    const height = (cloudBound ? 8 : 7) + (i % 3) * 2;
    const opacity = (0.22 + (i % 4) * 0.07).toFixed(2);
    const drift = (i % 2 === 0 ? 2.5 : -2.5) + ((i % 3) - 1) * 1.1;
    const width = i % 2 === 0 ? 1 : 1.2;
    const startY = fullHeight ? `${(-8 + ((i * 23 + 5) % 100)).toFixed(1)}%` : '-12%';

    return html`<span
      class="rain-drizzle"
      style="--x:${x.toFixed(
        2
      )}%; --start-y:${startY}; --duration:${duration}s; --delay:${delay}s; --h:${height}px; --opacity:${opacity}; --drift:${drift.toFixed(
        1
      )}px; --w:${width}px;"
    ></span>`;
  });
}

export function renderHailParticles(count: number, cloudBound: boolean): TemplateResult[] {
  return Array.from({ length: count }, (_, i) => {
    const base = cloudBound ? 14 : 4;
    const spread = cloudBound ? 72 : 96;
    const x = base + (((i * 31 + 17) % 100) / 100) * spread;
    const duration = (cloudBound ? 0.73 : 0.62 + (i % 5) * 0.075).toFixed(2);
    const delay = (-1 * ((i % 7) * 0.19)).toFixed(2);
    const opacity = (0.72 + (i % 4) * 0.09).toFixed(2);
    const drift = (i % 2 === 0 ? 3.4 : -3.4) + ((i % 3) - 1) * 1.3;
    const size = i % 2 === 0 ? 4.3 : 5.1;

    return html`<span
      class="hail-stone"
      style="--x:${x.toFixed(
        2
      )}%; --duration:${duration}s; --delay:${delay}s; --opacity:${opacity}; --drift:${drift.toFixed(
        1
      )}px; --size:${size}px;"
    ></span>`;
  });
}

export function renderLightningFlashes(): TemplateResult[] {
  const flashes = [
    { x: 28, y: 22, delay: '-4s', duration: '15s' },
    { x: 72, y: 26, delay: '-11s', duration: '18s' },
  ];

  return flashes.map(
    flash =>
      html`<div
        class="photo-layer photo-lightning"
        style="--flash-x:${flash.x}%; --flash-y:${flash.y}%; --delay:${flash.delay}; --flash-duration:${flash.duration};"
      ></div>`
  );
}

export function renderLightningBolts(): TemplateResult[] {
  const bolts = [
    { left: 27, top: 7, height: 38, width: 7, rotate: '-5deg', delay: '-4s', duration: '15s' },
    { left: 69, top: 10, height: 42, width: 7, rotate: '4deg', delay: '-11s', duration: '18s' },
  ];

  return bolts.map(
    bolt =>
      html`<div
        class="photo-layer photo-lightning-bolt"
        style="--bolt-left:${bolt.left}%; --bolt-top:${bolt.top}%; --bolt-height:${bolt.height}%; --bolt-width:${bolt.width}px; --bolt-rotate:${bolt.rotate}; --delay:${bolt.delay}; --flash-duration:${bolt.duration};"
      ></div>`
  );
}
