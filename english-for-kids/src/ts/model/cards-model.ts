import Observer from './observer';
import { TCardsCollections } from '../const/const-model/const-model';

export default class CardsModel {
  public observerCards = new Observer();

  constructor(
    private cardsCollection: TCardsCollections,
    private cardsCategory: Array<string>,
  ) {}

  public getCardsCollection() {
    return this.cardsCollection;
  }

  public getCardsCategory() {
    return this.cardsCategory;
  }

  // updateCardsCollection()(updateItem: number):void {
  //   this.storage.push(updateItem);
  // }
}
