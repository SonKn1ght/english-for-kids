import AbstractView from './absctract-view';

const getTemplateCategory = (category: Array<string>): string => {
  return category.reduce((acc, current) => {
    acc += `<a href="#${current}" class="category__item">
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

  constructor(
    private category: Array<string>,
  ) {
    super();
  }

  getTemplate(): string {
    return `<div class="category">
              ${getTemplateCategory(this.category)}
            </div>`;
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
