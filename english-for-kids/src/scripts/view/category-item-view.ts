import AbstractView from './absctract-view';
import {
  TCardItem,
  MODE_GAME,
  MODE_TRAIN,
} from '../const';
import { playAudio } from "../utils/utils";

const CORRECTLY_AUDIO_SRC: string = `./assets/audio/correctly.mp3`;
const WRONG_AUDIO_SRC: string = `./assets/audio/wrong.mp3`;
const CORRECTLY_IMAGE_SRC: string = `./assets/img/star.svg`;
const WRONG_IMAGE_SRC: string = `./assets/img/noStar.svg`;

const WIN_AUDIO_SRC: string = `./assets/audio/win.mp3`;
const LOSE_AUDIO_SRC: string = `./assets/audio/lose.mp3`;
const WIN_IMAGE_SRC: string = `./assets/img/win.jpg`;
const LOSE_IMAGE_SRC: string = `./assets/img/lose.jpg`;
const PAUSE_FOR_END_GAME: number = 500;

const getTemplateItem = (category: Array<TCardItem>, mode: string): string => {
  return category.reduce((acc, current) => {
    acc += `<div
             class="category-current__wrapper-item"
             data-word="${current.word}">
              <a
               class="category-current__front-item ${mode === MODE_GAME ? `category-current__item_active` : ``}"
               data-audio="${current.audioSrc}">
                <img
                class="category-current__image"
                src="./assets/img/${current.image}"
                alt="${current.word}"
                >
                <span class="${mode === MODE_GAME ? `visually-hidden` : ``}">${current.word}</span>
                <img
                class="category__rotate-button ${mode === MODE_GAME ? `visually-hidden` : ``}"
                width="35"
                height="35"
                src="./assets/img/rotate.svg"
                alt="rotate"
                >
              </a>
              <div class="category-current__back-item">
                <img
                class="category-current__image"
                src="./assets/img/${current.image}"
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
    private mode: string,
  ) {
    super();
  }

  getTemplate(): string {
    return `<div class="category-current">
              <div class="category-current__answer-indicator"></div>
              ${getTemplateItem(this.item, this.mode)}
              <div
              class="btn__game category-current___btn__game ${this.mode === MODE_TRAIN ? `visually-hidden` : ``}">
              Start Game
              </div>
            </div>`;
  }

  public makeAnswer(item: HTMLElement, status: boolean) {
    const answerIndicator: HTMLElement = this.getElement()
      .querySelector(`.category-current__answer-indicator`);
    if (status) {
      item.closest(`a`).classList.add(`category-current__image_right-answer`);
      answerIndicator.innerHTML += `<img
                                    src="${CORRECTLY_IMAGE_SRC}"
                                    width="40" height="40"
                                    alt="star">`;
      playAudio(CORRECTLY_AUDIO_SRC);
    } else {
      answerIndicator.innerHTML += `<img
                                    src="${WRONG_IMAGE_SRC}"
                                    width="40" height="40"
                                    alt="star">`;
      playAudio(WRONG_AUDIO_SRC);
    }
  }

  public completeGame(countErrors: number): void {
    if (countErrors) {
      this.getElement().innerHTML = `<div class="category-current__end-game">
                                        <p>Errors: ${countErrors}</p>
                                        <img src="${LOSE_IMAGE_SRC}" alt="">
                                     </div>`;
      setTimeout((): void => playAudio(LOSE_AUDIO_SRC), PAUSE_FOR_END_GAME);
      return;
    }
    this.getElement().innerHTML = `<div class="category-current__end-game">
                                        <p>You won!</p>
                                        <img src="${WIN_IMAGE_SRC}" alt="">
                                     </div>`;
    setTimeout((): void => playAudio(WIN_AUDIO_SRC), PAUSE_FOR_END_GAME);
  }

  private cardAudioClickHandler = (evt: MouseEvent): void => {
    evt.preventDefault();
    this.callback.cardAudioClick(evt);
  };

  public setCardAudioClickHandler(callback: (e: MouseEvent) => void): void {
    this.callback.cardAudioClick = callback;
    this.getElement().addEventListener(`click`, this.cardAudioClickHandler, true);
  }

  private flipButtonClickHandler = (evt: MouseEvent): void => {
    evt.preventDefault();
    this.callback.flipButtonClick(evt);
  };

  public setFlipButtonClickHandler(callback: (e: MouseEvent) => void): void {
    this.callback.flipButtonClick = callback;
    this.getElement().addEventListener(`click`, this.flipButtonClickHandler, true);
  }

  private controlGameClickHandler = (evt: MouseEvent): void => {
    evt.preventDefault();
    this.callback.controlGameClick(evt);
  };

  public setControlGameCLickHandler(callback: (e: MouseEvent) => void): void {
    this.callback.controlGameClick = callback;
    this.getElement()
      .querySelector(`.category-current___btn__game`)
      .addEventListener(`click`, this.controlGameClickHandler);
  }

  private gameCardsClickClickHandler = (evt: MouseEvent): void => {
    evt.preventDefault();
    this.callback.gameCardsClick(evt);
  };

  public setGameCardsClickHandler(callback: (e: MouseEvent) => void): void {
    this.callback.gameCardsClick = callback;
    this.getElement().addEventListener(`click`, this.gameCardsClickClickHandler);
  }
}
