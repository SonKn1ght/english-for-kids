import AbstractView from './absctract-view';

export default class BaseView extends AbstractView {
  constructor() {
    super();
    this.boneClickHandler = this.boneClickHandler.bind(this);
  }

  getTemplate(): string {
    return `<div>
              <span class="counter">0</span>
              <button class="add-counter">press me please</button>
            </div>`;
  }

  boneClickHandler(evt: any): void {
    evt.preventDefault();
    this.callback.btnClick(evt);
  }

  setBoneClickHandler(callback: (e: MouseEvent) => void): void {
    this.callback.btnClick = callback;
    this.getElement().addEventListener(`click`, this.boneClickHandler);
  }
}
