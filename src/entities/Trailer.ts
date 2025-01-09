export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: TrailerLink;
}

interface TrailerLink {
  480: string;
  max: string;
}
