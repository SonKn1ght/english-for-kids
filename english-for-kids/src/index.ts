import './scss/style.scss';
import CardsModel from './ts/model/cards-model';
import MainPresenter from './ts/presenter/main-presenter';
import { cards, categoryCards } from './ts/const/const-model/const-model';

const bodyElement = document.querySelector(`body`);

const cardsModel = new CardsModel(cards, categoryCards);

const mainPresenter = new MainPresenter(bodyElement, cardsModel);
mainPresenter.init();

const newString: string = `Первый прогон!`;
const twoString = `Второй прогон!`;

console.log(newString);
console.log(twoString);
