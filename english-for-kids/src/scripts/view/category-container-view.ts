import AbstractView from './absctract-view';

export class CategoryContainerView extends AbstractView {
  public getTemplate(): string {
    return `<div class="category-container"></div>`;
  }
}
