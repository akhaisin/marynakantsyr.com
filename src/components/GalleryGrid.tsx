import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { Artwork } from "../data/galleries";

interface Props {
  images: Artwork[];
  title: string;
}

export default function GalleryGrid({ images, title }: Props) {
  const [index, setIndex] = useState(-1);

  if (images.length === 0) {
    return (
      <div className="gallery-empty">
        <p>Images coming soon.</p>
      </div>
    );
  }

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
  }));

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button
            key={img.src}
            className="gallery-item"
            onClick={() => setIndex(i)}
            aria-label={`View ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
          padding: 0;
        }

        .gallery-item {
          display: block;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          overflow: hidden;
          border-radius: 3px;
          aspect-ratio: 4 / 3;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.04);
          opacity: 0.9;
        }

        .gallery-empty {
          text-align: center;
          padding: 4rem 1.5rem;
          color: #999;
          font-style: italic;
        }
      `}</style>
    </>
  );
}
