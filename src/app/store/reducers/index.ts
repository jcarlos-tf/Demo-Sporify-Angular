import * as fromRouter from "@ngrx/router-store";
import { createFeatureSelector, ActionReducerMap } from "@ngrx/store";
import * as fromNuevosLanzamietos from "./nuevos-lanzamientos";
import * as fromBuscarArtistas from "./buscar-artistas";
import { InjectionToken } from "@angular/core";
import * as fromConseguirArtista from "./artista";

export interface State {
  router: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<any>
>("router");

export const {
  selectCurrentRoute, // select the current route
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = fromRouter.getSelectors(selectRouter);

export interface AppState {
  router: fromRouter.RouterReducerState<any>;
  [fromNuevosLanzamietos.key]: fromNuevosLanzamietos.State;
  [fromBuscarArtistas.key]: fromBuscarArtistas.State;
  [fromConseguirArtista.key]: fromConseguirArtista.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState>>(
  "Root reducers token",
  {
    factory: () => ({
      router: fromRouter.routerReducer,
      nLanzamientos: fromNuevosLanzamietos.reducers,
      buscarArtistas: fromBuscarArtistas.reducers,
      conseguirArtista: fromConseguirArtista.reducers,
    }),
  }
);
