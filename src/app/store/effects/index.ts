import { NUEVOSLANZAMIENTOS_EFFECTS } from "./nuevos-lanzamientos";
import { BUSCARARTISTAS_EFFECTS } from "./buscar-artistas";
import { CONSEGUIRARTISTA_EFFECTS } from "./artista";

export const ROOT_EFFECTS = [
  ...NUEVOSLANZAMIENTOS_EFFECTS,
  ...BUSCARARTISTAS_EFFECTS,
  ...CONSEGUIRARTISTA_EFFECTS,
];
