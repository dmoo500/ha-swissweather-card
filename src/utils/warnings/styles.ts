import { css } from 'lit';

export const warningSeverityStyles = css`
  .warning-section.danger,
  .warning-section.severe {
    --primary-text-color: #1f2937;
    color: var(--primary-text-color);
  }

  .warning-section.danger {
    background: linear-gradient(90deg, #f8d7da 0%, #f5c6cb 100%);
    border-color: var(--danger-border-color, #f1aeb5);
  }

  .warning-section.severe {
    background: linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 100%);
    border-color: var(--severe-border-color, #e17055);
  }
`;
