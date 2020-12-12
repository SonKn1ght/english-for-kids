import AbstractView from './absctract-view';
import { Mode } from "../const";

const MENU_VISIBILITY: string = `menu--active`;
const MENU: string = `menu`;
const HIDDEN_ELEMENT_CLASS = `hidden`;
const MENU_LINK_ACTIVE: string = `menu__link-active`;

const switchLinkMode = (link: HTMLElement): void => {
  const currentLink = link.getAttribute(`href`);
  if (currentLink.includes(Mode.GAME)) {
    link.setAttribute(`href`, currentLink.replace(Mode.GAME, Mode.TRAIN));
  } else {
    link.setAttribute(`href`, currentLink.replace(Mode.TRAIN, Mode.GAME));
  }
};

const getTemplateMenu = (category: Array<string>, active: string, mode: string):string => {
  return category.reduce((acc, current) => {
    acc += `<a
             href="#${current}/${mode}"
             class="menu__link ${active === current ? MENU_LINK_ACTIVE : ``}">
${current}
            </a>`;
    return acc;
  }, ``);
};

export class ControlView extends AbstractView {
  public callback: any = {};

  private menu: HTMLElement = this.getElement().querySelector(`.menu`);

  private burger: HTMLElement = this.getElement().querySelector(`.hamburger`);

  private linkLogoMain: HTMLElement = this.getElement().querySelector(`.main-header__link-logo`);

  private linksMenu: Array<HTMLElement> = Array.from(this.menu.querySelectorAll(`.menu__link `));

  private indicatorMode: HTMLElement = this.getElement().querySelector(`.indicatorModeJs`);

  constructor(
    private category: Array<string>,
    private activeMenuItem: string,
    private mode: string,
  ) {
    super();
  }

  public getTemplate(): string {
    return `<header class="main-header">
              <span class="header__hamburger hamburger">
                <span class="hamburger__line"></span>
              </span>
              <a href="#main/${this.mode}" class="main-header__link-logo">
                <img
                  src="./assets/img/logo.png"
                  width="541"
                  height="100"
                  alt="English gor kids"
                  class="main-header__logo"
                >
              </a>
              <div class="toggle">
                <label>
                    <input
                      class="visually-hidden indicatorModeJs"
                      type="checkbox"
                      ${this.mode === Mode.GAME ? `checked` : ``}
                      >
                    <span class="toggle-indicator"></span>
                  </label>
              </div>
              <nav class="menu">
                <a href="#main/${this.mode}" class="menu__link ${this.activeMenuItem === `main` ? MENU_LINK_ACTIVE : ``}">
                  Main Page
                </a>
                ${getTemplateMenu(this.category, this.activeMenuItem, this.mode)}
                <a href="#stats/${this.mode}" class="menu__link ${this.activeMenuItem === `stats` ? MENU_LINK_ACTIVE : ``}">
                  Stats
                </a>
                <svg class="menu__close" width="25" height="25" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd"
                 d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027
                 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459
                 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334
                 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148
                 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108
                 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="gray"/>
                </svg>
              </nav>
            </header>`;
  }

  public switchLinks(): void {
    this.linksMenu.forEach((current) => {
      switchLinkMode(current);
    });

    switchLinkMode(this.linkLogoMain);
  }

  public setInnerHandlers(): void {
    this.getElement().querySelector(`.hamburger`).addEventListener(`click`, this.hamburgerClickHandler);
  }

  private hamburgerClickHandler = (evt: MouseEvent): void => {
    evt.preventDefault();
    this.burger.classList.add(HIDDEN_ELEMENT_CLASS);
    this.menu.classList.add(MENU_VISIBILITY);
    evt.stopPropagation();

    document.addEventListener(`click`, this.closeMenuHandler);
  };

  private closeMenuHandler = (evt: MouseEvent): void => {
    const targetClick = evt.target as HTMLElement;

    if (!targetClick.classList.contains(MENU)) {
      this.burger.classList.remove(HIDDEN_ELEMENT_CLASS);
      this.menu.classList.remove(MENU_VISIBILITY);
      document.removeEventListener(`click`, this.closeMenuHandler);
    }
  };

  public updateStateControlView = (category: string, mode: string):void => {
    if (category !== this.activeMenuItem) {
      this.activeMenuItem = category;
      this.updateStateMenu();
    }

    if (mode !== this.mode) {
      this.mode = mode;
      this.updateStateIndicatorMode();
    }
  };

  private updateStateMenu(): void {
    this.linksMenu.forEach((current) => {
      if (current.classList.contains(MENU_LINK_ACTIVE)) {
        current.classList.remove(MENU_LINK_ACTIVE);
      }
      const linkMenu: string = current.getAttribute(`href`);
      if (linkMenu.includes(this.activeMenuItem)) {
        current.classList.add(MENU_LINK_ACTIVE);
      }
    });
  }

  private updateStateIndicatorMode(): void {
    const target = this.indicatorMode as HTMLInputElement;
    if (this.mode === Mode.GAME) {
      target.checked = true;
      return;
    }
    target.checked = false;
  }

  modeClickHandler = (evt: MouseEvent): void => {
    this.callback.modeClick(evt);
  };

  setModeClickHandler(callback: (e: MouseEvent) => void): void {
    this.callback.modeClick = callback;
    this.getElement().querySelector(`.toggle`).addEventListener(`change`, this.modeClickHandler);
  }
}
