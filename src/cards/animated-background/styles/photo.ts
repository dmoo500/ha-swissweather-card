import { css } from 'lit';
import { photoAtmosphereStyles } from './photo/atmosphere';
import { photoBaseStyles } from './photo/base';
import { photoCloudStyles } from './photo/clouds';

export const backgroundPhotoStyles = css`
  ${photoBaseStyles}
  ${photoCloudStyles}
  ${photoAtmosphereStyles}
`;
