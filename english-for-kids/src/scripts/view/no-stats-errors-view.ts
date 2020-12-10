import AbstractView from './absctract-view';

export class NoStatsErrorsView extends AbstractView {
  public getTemplate(): string {
    return `<div class="not-stats-errors">Difficult words not found</div>`;
  }
}
