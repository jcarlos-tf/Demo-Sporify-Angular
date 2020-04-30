export type RespuestaConseguirArtista = {
  external_urls: externalUrls;
  followers: followers;
  genres: [];
  href: string;
  id: string;
  images: images[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type externalUrls = {
  spotify: string;
};

export type followers = {
  href: string;
  total: number;
};

export type images = {
  height: number;
  url: string;
  width: number;
};

export type data = {
  external_urls: externalUrls;
  followers: followers;
  genres: [];
  href: string;
  id: string;
  images: images[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};
