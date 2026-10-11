import type { ImageMetadata } from "astro";

export interface ArtworkMeta {
  caption: string;
  year: string;
  medium: string;
  size: string;
  note: string;
}

export interface Artwork extends ArtworkMeta {
  id: string;
  src: ImageMetadata;
  alt: string;
}

export interface Gallery {
  slug: string;
  title: string;
  images: Artwork[];
}

const files = import.meta.glob<ImageMetadata>(
  "/src/assets/gallery/*/*.jpg",
  { eager: true, import: "default" },
);

const metadata = import.meta.glob<Record<string, Partial<ArtworkMeta>>>(
  "/src/data/galleries/*.json",
  { eager: true, import: "default" },
);

function build(slug: string, title: string): Gallery {
  const meta = metadata[`/src/data/galleries/${slug}.json`] ?? {};
  const images = Object.entries(files)
    .filter(([path]) => path.startsWith(`/src/assets/gallery/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src], i) => {
      const file = path.split("/").pop()!;
      const id = file.replace(/\.jpg$/, "");
      return {
        id,
        src,
        alt: `${title} artwork ${i + 1}`,
        caption: id,
        year: "",
        medium: "",
        size: "",
        note: "",
        ...meta[file],
      };
    });
  return { slug, title, images };
}

export const galleries: Record<string, Gallery> = {
  nature: build("nature", "Nature"),
  people: build("people", "People"),
  cubes: build("cubes", "Cubes"),
  before: build("before", "Before"),
};
