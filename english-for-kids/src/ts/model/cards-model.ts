import Observer from './observer';
import {
  TCardItem,
  TCardsCollections,
} from '../const';

export class CardsModel {
  // public observerCards = new Observer();

  constructor(
    private cardsCollection: TCardsCollections,
    private cardsCategory: Array<string>,
  ) {}

  public getCardsAllCollection(): Array<TCardItem> {
    return this.cardsCollection;
  }

  public getCardsChosenCategory(type: string): Array<TCardItem> {
    return this.cardsCollection.filter((currentCard) => {
      return currentCard.category === type;
    });
  }

  public getCardsCategory() {
    return this.cardsCategory;
  }

  // updateCardsCollection()(updateItem: number):void {
  //   this.storage.push(updateItem);
  // }
}
