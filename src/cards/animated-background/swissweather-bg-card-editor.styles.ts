import { css } from 'lit';

export const backgroundEditorStyles = css`
  .card-config {
    padding: 16px;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--card-divider-color);
  }

  .header-title {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-text-color, #dc143c);
  }

  .header-subtitle {
    font-size: 14px;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }

  ha-form {
    display: block;
    margin-bottom: 24px;
  }

  .preview {
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 12px;
    padding: 20px;
    margin-top: 24px;
  }

  .preview-title {
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--primary-text-color);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .preview-config {
    font-family: 'SFMono-Regular', 'Monaco', 'Consolas', monospace;
    font-size: 13px;
    color: var(--secondary-text-color);
    background: var(--code-editor-background-color, #f8f8f8);
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    white-space: pre-wrap;
    line-height: 1.4;
    border: 1px solid var(--divider-color);
  }
  .group {
    margin-bottom: 24px;
    padding: 16px 0 0 0;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }
  .group-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-text-color, #dc143c);
    margin-bottom: 8px;
    margin-top: 0;
  }
  .card-config {
    padding: 16px;
  }
  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--card-divider-color);
  }
  .header-title {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-text-color, #dc143c);
  }
  .header-subtitle {
    font-size: 14px;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }
  ha-form {
    display: block;
    margin-bottom: 24px;
  }
  .preview {
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 12px;
    padding: 20px;
    margin-top: 24px;
  }
  .preview-title {
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--primary-text-color);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .preview-config {
    font-family: 'SFMono-Regular', 'Monaco', 'Consolas', monospace;
    font-size: 13px;
    color: var(--secondary-text-color);
    background: var(--code-editor-background-color, #f8f8f8);
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    white-space: pre-wrap;
    line-height: 1.4;
    border: 1px solid var(--divider-color);
  }

  @media (max-width: 768px) {
    .card-config {
      padding: 12px;
    }
  }
`;
