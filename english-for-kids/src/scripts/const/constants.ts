export enum TypeCurrentRoute {
  MAIN = `main`,
  STATS = `stats`,
  REPEAT = `repeat`,
}

export enum TypeUpdateStats {
  CLICKS = `clicks`,
  CORRECT = `correct`,
  WRONG = `wrong`,
}

export enum RenderPosition {
  AFTERBEGIN = `afterbegin`,
  BEFOREEND = `beforeend`,
  AFTER = `after`,
}

export enum Mode {
  GAME = `game`,
  TRAIN = `train`,
}

export const DEFAULT_ROUTE = `main/train`;
