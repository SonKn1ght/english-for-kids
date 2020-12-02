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
    const name: string = this.getURL();

    if (name) {
      this.presenter.switchRoute(name);
    } else {
      this.presenter.init();
    }
  };

  public getURL = (): string => {
    const hash = window.location.hash ? window.location.hash.replace(`#`, ``) : ``;
    console.log(`hash = ${hash}`);
    return hash;
  };
}
