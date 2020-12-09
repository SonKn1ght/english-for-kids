import AbstractView from './absctract-view';
import {
  TCardItemStats,
} from "../const";

const getTemplateStatsItem = (statsInfo: Array<TCardItemStats>):string => {
  return statsInfo.reduce((acc, current) => {
    acc += `<tr class="stats__table-row">
                  <td>${current.word}</td>
                  <td>${current.translation}</td>
                  <td>${current.category}</td>
                  <td>${current.clicks}</td>
                  <td>${current.correct}</td>
                  <td>${current.wrong}</td>
                  <td>${current.errors}</td>
                </tr>`;
    return acc;
  }, ``);
};

export class StatsView extends AbstractView {
  public callback: any = {};

  constructor(
    private statsInfo: Array<TCardItemStats>,
  ) {
    super();
  }

  public getTemplate(): string {
    return `<div class="stats">
              <div class="stats__btn-wrapper">
                <div class="btn__stats" id="reset">Reset</div>
                <a href="#repeat/game" class="btn__stats" id="repeat">Repeat difficult words</a>
              </div>
              <table class="stats__table">
                <tr class="stats__table-row stats__table-row-title">
                  <td
                  class="stats__sort-control"
                  data-type="word">
                  Word</td>
                  <td
                  class="stats__sort-control"
                  data-type="translation">
                  Translation</td>
                  <td
                  class="stats__sort-control"
                  data-type="category">
                  Category</td>
                  <td
                  class="stats__sort-control"
                  data-type="clicks">
                  Clicks</td>
                  <td
                  class="stats__sort-control"
                  data-type="correct">
                  Correct</td>
                  <td
                  class="stats__sort-control"
                  data-type="wrong">
                  Wrong</td>
                  <td
                  class="stats__sort-control"
                  data-type="errors">
                  Errors</td>
                </tr>
                ${getTemplateStatsItem(this.statsInfo)}
              </table>
            </div>`;
  }

  private sortControlClickHandler = (evt: MouseEvent): void => {
    evt.preventDefault();
    this.callback.sortControlClick(evt);
  };

  public setSortControlClickHandler(callback: (e: MouseEvent) => void): void {
    this.callback.sortControlClick = callback;
    this.getElement().querySelector(`.stats__table-row-title`)
      .addEventListener(`click`, this.sortControlClickHandler);
  }

  private controlStatClickHandler = (evt: MouseEvent): void => {
    this.callback.controlStatsClick(evt);
  };

  public setControlStatsClickHandler(callback: (e: MouseEvent) => void): void {
    this.callback.controlStatsClick = callback;
    this.getElement().querySelector(`.stats__btn-wrapper`)
      .addEventListener(`click`, this.controlStatClickHandler);
  }
}
