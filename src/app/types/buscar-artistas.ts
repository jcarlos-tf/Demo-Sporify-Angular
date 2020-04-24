export type RespuestaBuscarArtistas = {
  artists: Artistas;
};

export type Artistas = {
  items: items[];
  total: number;
};

export type items = {
  id: string;
  images: images[];
  name: string;
};

export type images = {
  url: string;
};
