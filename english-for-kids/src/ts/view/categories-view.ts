import AbstractView from './absctract-view';

const getTemplateCategory = (category: Array<string>): string => {
  return category.reduce((acc, curent) => {
    acc += `<a href="#${curent}" class="category__item">
              <img
              src="/assets/img/category/${curent}.svgz"
              alt="${curent}"
              class="category__image">
              ${curent}
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
    // this.categoriesClickHandler = this.categoriesClickHandler.bind(this);
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
