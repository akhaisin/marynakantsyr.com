export interface Artwork {
  src: string;
  alt: string;
}

export interface Gallery {
  slug: string;
  title: string;
  images: Artwork[];
}

export const galleries: Record<string, Gallery> = {
  nature: {
    slug: "nature",
    title: "Nature",
    images: [
      { src: "/images/nature/nature-01.jpg", alt: "Nature artwork 1" },
      { src: "/images/nature/nature-02.jpg", alt: "Nature artwork 2" },
      { src: "/images/nature/nature-03.jpg", alt: "Nature artwork 3" },
      { src: "/images/nature/nature-04.jpg", alt: "Nature artwork 4" },
      { src: "/images/nature/nature-05.jpg", alt: "Nature artwork 5" },
      { src: "/images/nature/nature-06.jpg", alt: "Nature artwork 6" },
      { src: "/images/nature/nature-07.jpg", alt: "Nature artwork 7" },
      { src: "/images/nature/nature-08.jpg", alt: "Nature artwork 8" },
      { src: "/images/nature/nature-09.jpg", alt: "Nature artwork 9" },
      { src: "/images/nature/nature-10.jpg", alt: "Nature artwork 10" },
      { src: "/images/nature/nature-11.jpg", alt: "Nature artwork 11" },
      { src: "/images/nature/nature-12.jpg", alt: "Nature artwork 12" },
      { src: "/images/nature/nature-13.jpg", alt: "Nature artwork 13" },
      { src: "/images/nature/nature-14.jpg", alt: "Nature artwork 14" },
      { src: "/images/nature/nature-15.jpg", alt: "Nature artwork 15" },
      { src: "/images/nature/nature-16.jpg", alt: "Nature artwork 16" },
      { src: "/images/nature/nature-17.jpg", alt: "Nature artwork 17" },
      { src: "/images/nature/nature-18.jpg", alt: "Nature artwork 18" },
      { src: "/images/nature/nature-19.jpg", alt: "Nature artwork 19" },
    ],
  },
  people: {
    slug: "people",
    title: "People",
    images: [
      { src: "/images/people/people-01.jpg", alt: "People artwork 1" },
      { src: "/images/people/people-02.jpg", alt: "People artwork 2" },
      { src: "/images/people/people-03.jpg", alt: "People artwork 3" },
      { src: "/images/people/people-04.jpg", alt: "People artwork 4" },
      { src: "/images/people/people-05.jpg", alt: "People artwork 5" },
      { src: "/images/people/people-06.jpg", alt: "People artwork 6" },
      { src: "/images/people/people-07.jpg", alt: "People artwork 7" },
      { src: "/images/people/people-08.jpg", alt: "People artwork 8" },
      { src: "/images/people/people-09.jpg", alt: "People artwork 9" },
      { src: "/images/people/people-10.jpg", alt: "People artwork 10" },
      { src: "/images/people/people-11.jpg", alt: "People artwork 11" },
      { src: "/images/people/people-12.jpg", alt: "People artwork 12" },
      { src: "/images/people/people-13.jpg", alt: "People artwork 13" },
      { src: "/images/people/people-14.jpg", alt: "People artwork 14" },
      { src: "/images/people/people-15.jpg", alt: "People artwork 15" },
      { src: "/images/people/people-16.jpg", alt: "People artwork 16" },
      { src: "/images/people/people-17.jpg", alt: "People artwork 17" },
    ],
  },
  cubes: {
    slug: "cubes",
    title: "Cubes",
    images: [
      { src: "/images/cubes/cubes-01.jpg", alt: "Cubes artwork 1" },
      { src: "/images/cubes/cubes-02.jpg", alt: "Cubes artwork 2" },
      { src: "/images/cubes/cubes-03.jpg", alt: "Cubes artwork 3" },
      { src: "/images/cubes/cubes-04.jpg", alt: "Cubes artwork 4" },
      { src: "/images/cubes/cubes-05.jpg", alt: "Cubes artwork 5" },
      { src: "/images/cubes/cubes-06.jpg", alt: "Cubes artwork 6" },
      { src: "/images/cubes/cubes-07.jpg", alt: "Cubes artwork 7" },
      { src: "/images/cubes/cubes-08.jpg", alt: "Cubes artwork 8" },
      { src: "/images/cubes/cubes-09.jpg", alt: "Cubes artwork 9" },
      { src: "/images/cubes/cubes-10.jpg", alt: "Cubes artwork 10" },
      { src: "/images/cubes/cubes-11.jpg", alt: "Cubes artwork 11" },
    ],
  },
  before: {
    slug: "before",
    title: "Before",
    images: [
      { src: "/images/before/before-01.jpg", alt: "Before artwork 1" },
      { src: "/images/before/before-02.jpg", alt: "Before artwork 2" },
      { src: "/images/before/before-03.jpg", alt: "Before artwork 3" },
      { src: "/images/before/before-04.jpg", alt: "Before artwork 4" },
      { src: "/images/before/before-05.jpg", alt: "Before artwork 5" },
      { src: "/images/before/before-06.jpg", alt: "Before artwork 6" },
      { src: "/images/before/before-07.jpg", alt: "Before artwork 7" },
      { src: "/images/before/before-08.jpg", alt: "Before artwork 8" },
      { src: "/images/before/before-09.jpg", alt: "Before artwork 9" },
      { src: "/images/before/before-10.jpg", alt: "Before artwork 10" },
      { src: "/images/before/before-11.jpg", alt: "Before artwork 11" },
      { src: "/images/before/before-12.jpg", alt: "Before artwork 12" },
      { src: "/images/before/before-13.jpg", alt: "Before artwork 13" },
      { src: "/images/before/before-14.jpg", alt: "Before artwork 14" },
      { src: "/images/before/before-15.jpg", alt: "Before artwork 15" },
      { src: "/images/before/before-16.jpg", alt: "Before artwork 16" },
      { src: "/images/before/before-17.jpg", alt: "Before artwork 17" },
      { src: "/images/before/before-18.jpg", alt: "Before artwork 18" },
    ],
  },
};
