import { svg, type TemplateResult } from 'lit';
import { stableRandom } from './stable-random';

export const animate = (width: number): TemplateResult => {
  return svg`
${Array.from({ length: Math.ceil(width / 10) }, (v, i) => i).map(i => {
  const yOffset = Math.floor(stableRandom(i, 1) * 100);
  const xOffset = Math.floor(stableRandom(i, 2) * 10);
  const yOffsetAdj = (yOffset - 50) / 5 + i * Math.floor(stableRandom(i, 3) * 25);
  const xFinal = i * 100 + xOffset;
  const scale = Math.floor(stableRandom(i, 4) * 2) + 1;
  const opacity = 1 + stableRandom(i, 5);
  const duration = 44 + Math.floor(stableRandom(i, 6) * 90);
  return svg`
    <g>
      <use href="#icon" x="${xFinal}" y="${yOffsetAdj}" width="80" height="40" transform="scale(${scale})" opacity="0">
        <animate attributeName="opacity" values="0;${opacity};${opacity};0" dur="${duration}s" repeatCount="indefinite"/>
      </use>
      <animateTransform attributeName="transform" type="translate" values="-150,20;450,20" dur="${duration}s" repeatCount="indefinite"/>
    </g>
    `;
})}
  `;
};
