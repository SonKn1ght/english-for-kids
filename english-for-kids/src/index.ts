import './scss/style.scss';

import { CardsModel } from './ts/model/cards-model';
import { MainPresenter } from './ts/presenter/main-presenter';
import { Router } from "./ts/presenter/router";
import {
  cards,
  categoryCards,
} from './ts/const';

const bodyElement = document.querySelector(`body`);

const cardsModel = new CardsModel(cards, categoryCards);
cardsModel.checkStorage();

const mainPresenter = new MainPresenter(bodyElement, cardsModel);

const route = new Router(mainPresenter);
route.init();
