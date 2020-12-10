import {
  TCardItem,
  TCardItemStats,
  TCardsCollections,
} from '../const';

const KEY_LOCAL_STORAGE_STATS = `myMegaCardsSuperStatsOfThisAppOnGodModeIDDQD`;
const ERRORS_CATEGORY_LENGTH = 8;
const ERRORS_CATEGORY_START = 0;
const PERCENTAGE_FACTOR = 100;
const KEY_CARDS_CORRECT = `correct`;
const KEY_CARDS_ERRORS = `errors`;

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

  public getErrorCards(): Array<TCardItem> {
    // O(n^100500)
    const idErrorsCards: Array<string> = this.getStats()
      .filter((current: TCardItemStats) => current.errors !== 0)
      .sort((firstCard: TCardItemStats, secondCard: TCardItemStats) => {
        return secondCard.errors - firstCard.errors;
      })
      .slice(ERRORS_CATEGORY_START, ERRORS_CATEGORY_LENGTH)
      .reduce((acc: Array<string>, current: TCardItemStats) => {
        acc.push(current.word);
        return acc;
      }, []);

    return this.getCards().filter((currentCard: TCardItem) => {
      return idErrorsCards.includes(currentCard.word);
    });
  }

  public checkStorage(): void {
    if (JSON.parse(window.localStorage.getItem(KEY_LOCAL_STORAGE_STATS)) === null) {
      const newStats: Array<TCardItemStats> = this.cardsCollection
        .map((currentItem) => {
          const copyItem: TCardItem = { ...currentItem };
          const itemStats = Object.assign(copyItem, {
            clicks: 0,
            correct: 0,
            wrong: 0,
            errors: 0,
          });
          delete itemStats.image;
          delete itemStats.audioSrc;
          return itemStats;
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

    const updValue: number = updateItem[key] as number + 1;
    Object.assign(updateItem, { [key]: updValue });

    if (key === KEY_CARDS_CORRECT || key === KEY_CARDS_ERRORS) {
      if (updateItem.correct > 0 && updateItem.wrong > 0) {
        updateItem.errors = Math.floor((updateItem.wrong / (updateItem.correct + updateItem.wrong))
          * PERCENTAGE_FACTOR);
      }
    }

    this.stats = [
      ...this.stats.slice(0, index),
      updateItem,
      ...this.stats.slice(index + 1),
    ];
    window.localStorage.setItem(KEY_LOCAL_STORAGE_STATS, JSON.stringify(this.stats));
  }

  public getStats(): Array<TCardItemStats> {
    return JSON.parse(window.localStorage.getItem(KEY_LOCAL_STORAGE_STATS));
  }
}
