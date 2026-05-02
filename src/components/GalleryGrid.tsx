import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { Artwork } from "../data/galleries";
import { resolveUrl } from "../utils/url";

interface Props {
  images: Artwork[];
}

export default function GalleryGrid({ images }: Props) {
  const [index, setIndex] = useState(-1);

  if (images.length === 0) {
    return (
      <div className="gallery-empty">
        <p>Images coming soon.</p>
      </div>
    );
  }

  const slides = images.map((img) => ({
    src: resolveUrl(img.src),
    alt: img.alt,
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
            <img src={resolveUrl(img.src)} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />

    </>
  );
}
