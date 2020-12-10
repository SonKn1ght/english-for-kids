import './scss/style.scss';

import { CardsModel } from './scripts/model/cards-model';
import { MainPresenter } from './scripts/presenter/main-presenter';
import { Router } from "./scripts/router";
import {
  cards,
  categoryCards,
} from './scripts/const';

const bodyElement = document.querySelector(`body`);

const cardsModel = new CardsModel(cards, categoryCards);
cardsModel.checkStorage();

const mainPresenter = new MainPresenter(bodyElement, cardsModel);

const route = new Router(mainPresenter);
route.init();
