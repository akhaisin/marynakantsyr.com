import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  slides: { id: string; src: string; alt: string;
    caption: string;
    year: string;
    medium: string;
    note: string;
  }[];
}

const CAPTION_SPACE = 88;

export default function GalleryLightbox({ slides }: Props) {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      setIndex(slides.findIndex((s) => s.id === id));
    };
    const onClick = (e: MouseEvent) => {
      const item = (e.target as Element).closest<HTMLElement>(
        ".gallery-item[data-index]",
      );
      if (!item) return;
      const i = Number(item.dataset.index);
      history.pushState(null, "", `#${slides[i].id}`);
      setIndex(i);
    };
    fromHash();
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", fromHash);
    window.addEventListener("popstate", fromHash);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", fromHash);
      window.removeEventListener("popstate", fromHash);
    };
  }, [slides]);

  return (
    <Lightbox
      open={index >= 0}
      close={() => {
        history.replaceState(null, "", location.pathname + location.search);
        setIndex(-1);
      }}
      index={index}
      slides={slides}
      render={{
        slide: ({ slide, rect }) => {
          const { src, alt, caption, year, medium, note } = slide as Props["slides"][number];
          return (
            <figure className="lightbox-figure">
              <img
                src={src}
                alt={alt}
                style={{ maxHeight: Math.max(rect.height - CAPTION_SPACE, 0) }}
              />
              <figcaption>
                <div className="lightbox-caption">{caption}</div>
                {(year || medium) && (
                  <div className="lightbox-detail">
                    {[year, medium].filter(Boolean).join(", ")}
                  </div>
                )}
                {note && <div className="lightbox-detail">{note}</div>}
              </figcaption>
            </figure>
          );
        },
      }}
      on={{
        view: ({ index: i }) =>
          history.replaceState(null, "", `#${slides[i].id}`),
      }}
    />
  );
}
