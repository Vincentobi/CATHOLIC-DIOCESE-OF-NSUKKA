export interface Deanary {
  _id: string;
  name: string;
  slug: string;
}

export interface Parish {
  _id: string;
  name: string;
  slug: string;
  town?: string;
  location?: string;
  image?: string;
  isCathedral: boolean;
  deanary: Deanary;
}
