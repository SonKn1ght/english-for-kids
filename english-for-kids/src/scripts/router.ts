import { MainPresenter } from "./presenter/main-presenter";

export class Router {
  constructor(
    private presenter: MainPresenter,
  ) {
  }

  public init(): void {
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
