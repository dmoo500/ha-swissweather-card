import { css } from 'lit';

export const photoCloudStyles = css`
  .photo-clouds {
    background:
      radial-gradient(
        118% 86% at 6% 24%,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.08) 48%,
        rgba(255, 255, 255, 0) 62%
      ),
      radial-gradient(
        120% 90% at 28% 20%,
        rgba(255, 255, 255, 0.48),
        rgba(255, 255, 255, 0.08) 50%,
        rgba(255, 255, 255, 0) 64%
      ),
      radial-gradient(
        124% 92% at 50% 22%,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0) 64%
      ),
      radial-gradient(
        118% 88% at 72% 20%,
        rgba(255, 255, 255, 0.47),
        rgba(255, 255, 255, 0.08) 48%,
        rgba(255, 255, 255, 0) 62%
      ),
      radial-gradient(
        114% 84% at 95% 25%,
        rgba(255, 255, 255, 0.52),
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0) 64%
      ),
      linear-gradient(
        180deg,
        rgba(249, 253, 255, 0.42) 0%,
        rgba(233, 243, 252, 0.2) 34%,
        rgba(210, 224, 239, 0.04) 58%,
        rgba(210, 224, 239, 0) 74%
      ),
      linear-gradient(
        180deg,
        rgba(172, 194, 220, 0.18) 0%,
        rgba(172, 194, 220, 0.08) 46%,
        rgba(183, 205, 230, 0) 72%
      );
    filter: blur(5.5px) contrast(1.08) saturate(1.06) brightness(1.03);
    animation: cloud-drift 36s ease-in-out infinite alternate;
    opacity: 0;
  }

  .photo-clouds-front {
    background:
      radial-gradient(
        94% 74% at 0% 36%,
        rgba(255, 255, 255, 0.88),
        rgba(255, 255, 255, 0.16) 52%,
        rgba(255, 255, 255, 0) 66%
      ),
      radial-gradient(
        98% 76% at 22% 30%,
        rgba(255, 255, 255, 0.86),
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0) 64%
      ),
      radial-gradient(
        102% 78% at 48% 34%,
        rgba(255, 255, 255, 0.84),
        rgba(255, 255, 255, 0.16) 50%,
        rgba(255, 255, 255, 0) 66%
      ),
      radial-gradient(
        96% 74% at 74% 30%,
        rgba(255, 255, 255, 0.82),
        rgba(255, 255, 255, 0.14) 50%,
        rgba(255, 255, 255, 0) 64%
      ),
      radial-gradient(
        92% 72% at 100% 34%,
        rgba(255, 255, 255, 0.86),
        rgba(255, 255, 255, 0.16) 50%,
        rgba(255, 255, 255, 0) 66%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.34) 0%,
        rgba(242, 249, 255, 0.18) 44%,
        rgba(211, 226, 242, 0.1) 64%,
        rgba(255, 255, 255, 0) 74%
      );
    filter: blur(2.8px) contrast(1.12) saturate(1.05)
      drop-shadow(0 6px 8px rgba(122, 149, 178, 0.18));
    animation: cloud-drift-front 22s ease-in-out infinite alternate;
    mix-blend-mode: normal;
    opacity: 0;
  }

  .photo-clouds-depth {
    background:
      radial-gradient(
        118% 86% at 14% 68%,
        rgba(217, 232, 248, 0.42),
        rgba(255, 255, 255, 0.08) 52%,
        rgba(255, 255, 255, 0) 68%
      ),
      radial-gradient(
        122% 90% at 46% 62%,
        rgba(210, 226, 243, 0.36),
        rgba(255, 255, 255, 0.08) 50%,
        rgba(255, 255, 255, 0) 66%
      ),
      radial-gradient(
        118% 88% at 78% 70%,
        rgba(215, 231, 247, 0.38),
        rgba(255, 255, 255, 0.08) 50%,
        rgba(255, 255, 255, 0) 66%
      ),
      linear-gradient(
        180deg,
        rgba(193, 214, 237, 0.28) 0%,
        rgba(172, 198, 225, 0.14) 44%,
        rgba(162, 189, 217, 0) 72%
      );
    filter: blur(7.5px) saturate(1.04);
    animation: cloud-drift-depth 28s ease-in-out infinite alternate;
    opacity: 0;
  }

  .img-photo.mood-cloudy .photo-clouds {
    opacity: 0.88;
  }

  .img-photo.mood-cloudy .photo-clouds-front {
    opacity: 0.8;
  }

  .img-photo.mood-cloudy .photo-clouds-depth {
    opacity: 0.62;
  }

  .img-photo.mood-rainy .photo-clouds {
    opacity: 0.94;
  }

  .img-photo.mood-rainy .photo-clouds-front {
    opacity: 0.9;
  }

  .img-photo.mood-rainy .photo-clouds-depth {
    opacity: 0.8;
  }

  .img-photo.mood-cloudy.night .photo-clouds,
  .img-photo.mood-rainy.night .photo-clouds {
    filter: blur(7px) saturate(0.9) brightness(0.88);
  }

  .img-photo.mood-cloudy.night .photo-clouds-front,
  .img-photo.mood-rainy.night .photo-clouds-front {
    mix-blend-mode: normal;
    filter: blur(4.8px) brightness(0.8);
  }

  .img-photo.mood-cloudy.night .photo-clouds-depth,
  .img-photo.mood-rainy.night .photo-clouds-depth {
    filter: blur(9px) saturate(0.86) brightness(0.78);
    opacity: 0.7;
  }

  .img-photo.partly-cloudy .photo-clouds {
    opacity: 0.62;
    filter: blur(9px) saturate(0.95);
  }

  .img-photo.partly-cloudy .photo-clouds-front {
    opacity: 0.36;
    filter: blur(7px) brightness(0.98);
  }

  .img-photo.partly-cloudy .photo-clouds-depth {
    opacity: 0.28;
    filter: blur(13px) saturate(0.9);
  }

  .img-photo.partly-cloudy.night .photo-clouds {
    opacity: 0.54;
    filter: blur(10px) saturate(0.82) brightness(0.9);
  }

  .img-photo.partly-cloudy.night .photo-clouds-front {
    opacity: 0.3;
    filter: blur(8px) brightness(0.84);
    mix-blend-mode: normal;
  }

  .img-photo.partly-cloudy.night .photo-clouds-depth {
    opacity: 0.24;
    filter: blur(14px) saturate(0.8) brightness(0.84);
  }
`;
