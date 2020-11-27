enum UserAction {
  SWAP_BONE = `SWAP_BONE`,
  NEW_GAME = `NEW_GAME`,
  SHOW_HOW_WIN = `SHOW_HOW_WIN`,
  SCORING_SWAP_BONE = `SCORING_SWAP_BONE`,
}

enum UpdateType {
  MOVING = `MOVING`,
  RESTART = `RESTART`,
  MEASURING_TIME = `MEASURING_TIME`,
  WIN = `WIN`,
  SURRENDER = `SURRENDER`,
}

enum RenderPosition {
  AFTERBEGIN = `afterbegin`,
  BEFOREEND = `beforeend`,
}

export {
  UserAction,
  UpdateType,
  RenderPosition,
};
