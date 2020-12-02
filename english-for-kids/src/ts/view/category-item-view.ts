import AbstractView from './absctract-view';
import { TCardItem } from '../const';

const getTemplateItem = (category: Array<TCardItem>): string => {
  return category.reduce((acc, current) => {
    acc += `<div class="category-current__wrapper-item">
              <a href="#"
               class="category-current__front-item"
               data-audio="${current.audioSrc}">
                <img
                class="category-current__image"
                src="/assets/img/${current.image}"
                alt="${current.word}"
                >
                <span>${current.word}</span>
                <img
                class="category__rotate-button"
                width="35"
                height="35"
                src="./assets/img/rotate.svg"
                alt="rotate"
                >
              </a>
              <div class="category-current__back-item">
                <img
                class="category-current__image"
                src="/assets/img/${current.image}"
                alt="${current.word}"
                >
                <span>${current.translation}</span>
              </div>
            </div>`;
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

  cardAudioClickHandler = (evt: MouseEvent): void => {
    evt.preventDefault();
    this.callback.cardAudioClick(evt);
  };

  setCardAudioClickHandler(callback: (e: MouseEvent) => void): void {
    this.callback.cardAudioClick = callback;
    this.getElement().addEventListener(`click`, this.cardAudioClickHandler, true);
  }

  flipButtonClickHandler = (evt: MouseEvent): void => {
    evt.preventDefault();
    this.callback.flipButtonClick(evt);
  };

  setFlipButtonClickHandler(callback: (e: MouseEvent) => void): void {
    this.callback.flipButtonClick = callback;
    this.getElement().addEventListener(`click`, this.flipButtonClickHandler, true);
  }
}
