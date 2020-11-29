import AbstractView from './absctract-view';
import { TCardItem } from '../const';

const getTemplateItem = (category: Array<TCardItem>): string => {
  return category.reduce((acc, curent) => {
    acc += `<a href="#" class="category-current__item">
              <img
              src="/assets/${curent.image}"
              alt="${curent.word}"
              class="category-current__image">
              ${curent.word}
            </a>`;
    return acc;
  }, ``);
};

export class CategoryItemView extends AbstractView {
  public callback: any = {};

  constructor(
    private item: Array<TCardItem>,
  ) {
    super();
  }

  getTemplate(): string {
    return `<div class="category-current">
              ${getTemplateItem(this.item)}
            </div>`;
  }

  // categoriesClickHandler = (evt: MouseEvent): void => {
  //   evt.preventDefault();
  //   this.callback.categoriesClick(evt);
  // };
  //
  // setCategoriesClickHandler(callback: (e: MouseEvent) => void): void {
  //   console.log(this.getElement());
  //   this.callback.categoriesClick = callback;
  //   this.getElement().addEventListener(`click`, this.categoriesClickHandler, true);
  // }
}
