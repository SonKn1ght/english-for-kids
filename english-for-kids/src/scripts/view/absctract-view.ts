import { createElement } from '../utils/utils';

export default abstract class AbstractView {
  private element: any | null = null;

  public callback: {[key: string]: (evt: MouseEvent | KeyboardEvent) => void};

  getTemplate(): string {
    return ``;
  }

  getElement(): HTMLElement {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement(): void {
    this.element = null;
  }
}
