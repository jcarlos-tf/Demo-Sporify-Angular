import * as fromRouter from "@ngrx/router-store";
import { createFeatureSelector, ActionReducerMap } from "@ngrx/store";
import * as fromNuevosLanzamietos from "./nuevos-lanzamientos";
import { InjectionToken } from "@angular/core";

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

export const selectMTCNRouteParam = selectRouteParam("mtcn");

export interface AppState {
  router: fromRouter.RouterReducerState<any>;
  [fromNuevosLanzamietos.key]: fromNuevosLanzamietos.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState>>(
  "Root reducers token",
  {
    factory: () => ({
      router: fromRouter.routerReducer,
      nLanzamientos: fromNuevosLanzamietos.reducers,
    }),
  }
);
