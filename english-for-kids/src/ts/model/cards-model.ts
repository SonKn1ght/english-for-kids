import {
  TCardItem,
  TCardItemStats,
  TCardsCollections,
} from '../const';

const KEY_LOCAL_STORAGE_STATS = `myMegaCardsSuperStatsOfThisAppOnGodModeIDDQD`;

export class CardsModel {
  private stats: Array<TCardItemStats>;

  constructor(
    private cardsCollection: TCardsCollections,
    private cardsCategory: Array<string>,
  ) {}

  public getCards(): Array<TCardItem> {
    return this.cardsCollection;
  }

  public getCardsChosenCategory(type: string): Array<TCardItem> {
    return this.cardsCollection.filter((currentCard) => {
      return currentCard.category === type;
    });
  }

  public getCardsCategory(): Array<string> {
    return this.cardsCategory;
  }

  public checkStorage(): void {
    if (JSON.parse(window.localStorage.getItem(KEY_LOCAL_STORAGE_STATS)) === null) {
      const newStats: Array<TCardItemStats> = this.cardsCollection
        .map((currentItem) => {
          return Object.assign(currentItem, {
            clicks: 0,
            correct: 0,
            wrong: 0,
            errors: 0,
          });
        });
      window.localStorage.setItem(KEY_LOCAL_STORAGE_STATS, JSON.stringify(newStats));
    }
    this.stats = JSON.parse(window.localStorage.getItem(KEY_LOCAL_STORAGE_STATS));
  }

  public clearStorage(): void {
    window.localStorage.setItem(KEY_LOCAL_STORAGE_STATS, null);
    this.checkStorage();
  }

  public updateStats(id: string, key: keyof TCardItemStats) {
    const index: number = this.stats.findIndex((item) => item.word === id);
    const updateItem: TCardItemStats = this.stats[index];

    // лютый обкаст просто
    const updValue: number = updateItem[key] as number + 1;
    Object.assign(updateItem, { [key]: updValue });

    if (key === `correct` || key === `errors`) {
      if (updateItem.correct > 0 && updateItem.wrong > 0) {
        updateItem.errors = Math.floor((updateItem.correct / updateItem.wrong) * 100) / 100;
      }
    }

    this.stats = [
      ...this.stats.slice(0, index),
      updateItem,
      ...this.stats.slice(index + 1),
    ];
    window.localStorage.setItem(KEY_LOCAL_STORAGE_STATS, JSON.stringify(this.stats));
  }

  public getStats(): void {
    return JSON.parse(window.localStorage.getItem(KEY_LOCAL_STORAGE_STATS));
  }
}
