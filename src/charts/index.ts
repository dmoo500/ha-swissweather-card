import { html, TemplateResult } from 'lit';

export function showHoursChartLabel(
  hours: number,
  _t: (key: string, vars?: Record<string, any>) => string,
  startDateTime?: string
): TemplateResult {
  // If startDateTime is provided, use it as the base for hour labels
  const baseDate = startDateTime ? new Date(startDateTime) : new Date();
  return html`
    <div class="chart-labels">
      ${Array.from({ length: hours }, (_, i) => {
        const labelDate = new Date(baseDate.getTime() + i * 60 * 60 * 1000);
        const hourStr = labelDate.toLocaleTimeString([], { hour: '2-digit' });
        return html`
          <div
            style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end;"
          >
            <span>${hourStr}</span>
          </div>
        `;
      })}
    </div>
  `;
}

export function formatDateToWeekDay(dateStr: string): string {
  const date = new Date(dateStr);
  const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  return days[date.getDay()];
}
