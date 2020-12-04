import { MainPresenter } from "./main-presenter";

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
    let route: string = this.getURL();
    console.log(route)

    if (!route || route === `/game`) {
      route = route.replace(`/`,``)
      this.presenter.init(route);
    } else {
      this.presenter.switchRoute(route);
    }
  };

  public getURL = (): string => {
    const hash = window.location.hash ? window.location.hash.replace(`#`, ``) : ``;
    console.log(`hash = ${hash}`);
    return hash;
  };
}
