/* export type BuscarNuevosLanzamientos = {

}

export type BuscarNuevosLanzamientosFormValue = {
    
} */

export type RespuestaBuscarNuvosLanzamientos = {
  albums: Albums;
};

export type Albums = {
  items: items[];
  href: string;
};

export type items = {
  album_type: string;
  name: string;
  release_date: string;
  artists: artists[];
  images: images[];
};
export type artists = {
  external_urls: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};
export type images = {
  height: number;
  url: string;
  width: number;
};
