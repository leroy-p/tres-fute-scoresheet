export enum RoutePath {
  ROOT = '/',
  DICES = '/dices',
}

export interface IRoutePathParams {
  [RoutePath.ROOT]: {}
  [RoutePath.DICES]: {}
}