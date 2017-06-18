export interface ICarouselSlide {
  image: {
    source: string;
    alternate: string;
  };
  caption?: {
    heading: string;
    anchor?: {
    link: string;
    text: string;
    }
  }
}