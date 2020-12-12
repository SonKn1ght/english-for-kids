import { RenderPosition } from '../const/constants';
import AbstractView from '../view/absctract-view';

const createElement = (template: string) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container: HTMLElement, child: HTMLElement, place: RenderPosition) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
    case RenderPosition.AFTER:
      container.after(child);
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

const shuffleArray = (array: Array<any>) => {
  const mixedArray = array.slice();
  for (let i = mixedArray.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const tempValue = mixedArray[i];
    mixedArray[i] = mixedArray[randomIndex];
    mixedArray[randomIndex] = tempValue;
  }
  return mixedArray;
};

const playAudio = (data: string) => {
  const audio = new Audio(data);
  audio.play();
};

export {
  render, remove, createElement, shuffleArray, playAudio,
};
