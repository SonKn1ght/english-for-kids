import { MainPresenter } from "./main-presenter";

export class Router {
  constructor(
    private presenter: MainPresenter,
  ) {
  }

  public init(): void {
    if (window.location.hash === `` || window.location.hash === `#`) window.location.hash = `main/train`;
    window.addEventListener(`hashchange`, this.handleHash);
    this.handleHash();
  }

  public handleHash = (): void => {
    const route: string = this.getURL();
    this.presenter.switchRoute(route);
  };

  public getURL = (): string => {
    return window.location.hash.replace(`#`, ``);
  };
}
