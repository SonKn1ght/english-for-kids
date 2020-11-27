import { RenderPosition } from '../const/constants';
import AbstractView from '../view/absctract-view';

const createElement = (template: string) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container: HTMLElement, child: HTMLElement, place: string) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
    default:
      throw new Error(`something broke in render function`);
  }
};

const remove = (component: any) => {
  if (component === null) {
    return;
  }

  if (!(component instanceof AbstractView)) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

export { render, remove, createElement };
