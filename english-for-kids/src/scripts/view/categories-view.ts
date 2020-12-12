import AbstractView from './absctract-view';
import { Mode } from "../const";

const getTemplateCategory = (category: Array<string>, mode: string): string => {
  return category.reduce((acc, current) => {
    acc += `<a
              href="#${current}/${mode}"
              class="category__item ${mode === Mode.GAME ? `category__item_active-game` : ``}">
              <img
              src="./assets/img/category/${current}.svgz"
              alt="${current}"
              class="category__image">
              ${current}
            </a>`;
    return acc;
  }, ``);
};

export class CategoriesView extends AbstractView {
  public callback: any = {};

  private links: Array<HTMLElement>;

  constructor(
    private category: Array<string>,
    private mode: string,
  ) {
    super();
  }

  getTemplate(): string {
    return `<div class="category">
              ${getTemplateCategory(this.category, this.mode)}
            </div>`;
  }

  public switchMode(): void {
    this.links = Array.from(this.getElement().querySelectorAll(`.category__item`));
    this.links.forEach((current) => {
      const currentLink = current.getAttribute(`href`);
      if (currentLink.includes(Mode.GAME)) {
        current.setAttribute(`href`, currentLink.replace(Mode.GAME, Mode.TRAIN));
      } else {
        current.setAttribute(`href`, currentLink.replace(Mode.TRAIN, Mode.GAME));
      }
    });
  }

  categoriesClickHandler = (evt: MouseEvent): void => {
    evt.preventDefault();
    this.callback.categoriesClick(evt);
  };

  setCategoriesClickHandler(callback: (e: MouseEvent) => void): void {
    this.callback.categoriesClick = callback;
    this.getElement().addEventListener(`click`, this.categoriesClickHandler, true);
  }
}
