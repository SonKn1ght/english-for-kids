import {
  render,
  remove,
  shuffleArray,
  playAudio,
} from '../utils/utils';
import { CardsModel } from "../model/cards-model";
import {
  CategoriesView,
  CategoryItemView,
  ControlView,
  StatsView,
  FooterView,
  CategoryContainerView,
  NoStatsErrorsView,
} from '../view';
import {
  RenderPosition,
  TypeCurrentRoute,
  Mode,
  TypeUpdateStats,
  TCardItem,
  TCardItemStats,
  DEFAULT_ROUTE,
  categoryCards,
} from "../const";

const validateRoute = (category: string, mode: Mode): boolean => {
  const categoryCheck = [...categoryCards, ...Object.values(TypeCurrentRoute)];
  const modeCheck = [Mode.GAME, Mode.TRAIN];
  if (!categoryCheck.includes(category) || !modeCheck.includes(mode)) {
    window.location.hash = DEFAULT_ROUTE;
    return true;
  }
  return false;
};

const PAUSE_FOR_SIGNAL: number = 600;
const PAUSE_FOR_NO_ERRORS: number = 800;
const PAUSE_FOR_END_GAME: number = 3000;
const ROUTE_FOR_END_GAME: string = `main/game`;
const WRAPPER_CARD = `.category-current__wrapper-item`;
const BUTTON_REPEAT_CLASS = `btn__game_repeat`;
const START_ERRORS_VALUE_COUNT = 0;
const IS_WORK_ON_BUGS: boolean = true;
const TYPE_SORT_DEFAULT = `word`;

export class MainPresenter {
  private categoriesComponent: CategoriesView;

  private categoryItemComponent: CategoryItemView;

  private controlComponent: ControlView;

  private statsComponent: StatsView;

  private footerComponent: FooterView;

  private categoryContainerComponent: CategoryContainerView;

  private noStatsErrorsComponent: NoStatsErrorsView;

  private mixResourceGame: Array<TCardItem>;

  private errorsCards: Array<TCardItem>;

  private currentGameAudio: string;

  private countErrorsCurrentGame: number = START_ERRORS_VALUE_COUNT;

  private stats: Array<TCardItemStats>;

  private isFirstStart: boolean = true;

  private sortOptions: {
    direction: boolean,
    type: string,
  } = {
    direction: true,
    type: TYPE_SORT_DEFAULT,
  };

  private currentRoute: {
    category: string,
    mode: string,
  } = {
    category: ``,
    mode: ``,
  };

  constructor(
    private gameContainer: HTMLElement,
    private cardsModel: CardsModel,
  ) {}

  public switchRoute(route: string): void {
    [this.currentRoute.category, this.currentRoute.mode] = route.split(`/`);
    if (validateRoute(this.currentRoute.category, this.currentRoute.mode as Mode)) return;

    if (this.isFirstStart) {
      this.renderControlView();
      this.renderCategoryContainerView();
      this.renderFooterView();

      this.isFirstStart = !this.isFirstStart;
    }
    this.controlComponent.updateStateControlView(
      this.currentRoute.category,
      this.currentRoute.mode,
    );
    this.clearMainContainer();
    if (this.cardsModel.getCardsCategory().includes(this.currentRoute.category)) {
      this.renderCategoryItemView();
      return;
    }

    switch (this.currentRoute.category) {
      case TypeCurrentRoute.MAIN:
        this.renderCategoriesView();
        break;
      case TypeCurrentRoute.STATS:
        this.renderStatsView();
        break;
      case TypeCurrentRoute.REPEAT:
        this.renderCategoryItemView(IS_WORK_ON_BUGS);
        break;
      default:
        break;
    }
  }

  private renderCategoryContainerView(): void {
    this.categoryContainerComponent = new CategoryContainerView();
    render(
      this.gameContainer,
      this.categoryContainerComponent.getElement(),
      RenderPosition.BEFOREEND,
    );
  }

  private renderCategoriesView(): void {
    const category = this.cardsModel.getCardsCategory();
    this.categoriesComponent = new CategoriesView(category, this.currentRoute.mode);
    render(
      this.categoryContainerComponent.getElement(),
      this.categoriesComponent.getElement(),
      RenderPosition.BEFOREEND,
    );
    this.setHandlersCategoriesComponent();
  }

  private renderCategoryItemView(isWorkOnBugs: boolean = false): void {
    if (!isWorkOnBugs) {
      const currentCategory = this.cardsModel.getCardsChosenCategory(this.currentRoute.category);
      this.categoryItemComponent = new CategoryItemView(currentCategory, this.currentRoute.mode);
    } else {
      this.errorsCards = this.cardsModel.getErrorCards();

      if (!this.errorsCards.length) {
        this.renderNoStatsErrorsView();
        setTimeout(() => {
          window.location.hash = DEFAULT_ROUTE;
        }, PAUSE_FOR_NO_ERRORS);
        return;
      }
      this.categoryItemComponent = new CategoryItemView(this.errorsCards, this.currentRoute.mode);
    }
    render(
      this.categoryContainerComponent.getElement(),
      this.categoryItemComponent.getElement(),
      RenderPosition.BEFOREEND,
    );
    this.setHandlersCategoryItemComponent();
  }

  private renderNoStatsErrorsView() {
    this.noStatsErrorsComponent = new NoStatsErrorsView();
    render(
      this.categoryContainerComponent.getElement(),
      this.noStatsErrorsComponent.getElement(),
      RenderPosition.BEFOREEND,
    );
  }

  private renderControlView(): void {
    this.controlComponent = new ControlView(
      this.cardsModel.getCardsCategory(),
      this.currentRoute.category,
      this.currentRoute.mode,
    );
    render(this.gameContainer, this.controlComponent.getElement(), RenderPosition.BEFOREEND);
    this.controlComponent.setInnerHandlers();
    this.setHandlersControlComponent();
  }

  private renderStatsView(sortStats: boolean = false): void {
    if (!sortStats) this.stats = this.cardsModel.getStats();

    this.statsComponent = new StatsView(this.stats);
    render(
      this.categoryContainerComponent.getElement(),
      this.statsComponent.getElement(),
      RenderPosition.BEFOREEND,
    );
    this.setHandlersStatsComponent();
  }

  private renderFooterView = (): void => {
    this.footerComponent = new FooterView();
    render(this.gameContainer, this.footerComponent.getElement(), RenderPosition.BEFOREEND);
  };

  private clearMainContainer(): void {
    if (this.categoriesComponent) remove(this.categoriesComponent);
    if (this.categoryItemComponent) remove(this.categoryItemComponent);
    if (this.statsComponent) remove(this.statsComponent);
    if (this.noStatsErrorsComponent) remove(this.noStatsErrorsComponent);
  }

  private setHandlersCategoriesComponent() {
    this.categoriesComponent.setCategoriesClickHandler(this.handleCategoriesClick);
  }

  private setHandlersCategoryItemComponent() {
    if (this.currentRoute.mode === Mode.TRAIN) {
      this.categoryItemComponent.setCardAudioClickHandler(this.handleCardAudioClick);
      this.categoryItemComponent.setFlipButtonClickHandler(this.handleFlipButtonClick);
    } else {
      this.mixResourceGame = null;
      this.categoryItemComponent.setControlGameCLickHandler(this.handleControlGameClick);
    }
  }

  private setHandlersControlComponent() {
    this.controlComponent.setModeClickHandler(this.handleModeClick);
  }

  private setHandlersStatsComponent() {
    this.statsComponent.setSortControlClickHandler(this.handleSortControlClick);
    this.statsComponent.setControlStatsClickHandler(this.handleStatsControlClick);
  }

  private handleSortControlClick = (evt: MouseEvent) => {
    const targetClick = evt.target as HTMLElement;
    if (this.sortOptions.type === targetClick.dataset.type) {
      this.sortOptions.direction = !this.sortOptions.direction;
    } else {
      this.sortOptions.direction = true;
      this.sortOptions.type = targetClick.dataset.type;
    }

    const compareSortIndex = this.sortOptions.type as keyof TCardItemStats;

    const sortIndex = this.sortOptions.direction ? 1 : -1;

    this.stats.sort((a, b) => {
      if (a[compareSortIndex] > b[compareSortIndex]) {
        return 1 * sortIndex;
      }
      if (a[compareSortIndex] < b[compareSortIndex]) {
        return -1 * sortIndex;
      }
      return 0;
    });

    remove(this.statsComponent);
    const OPTION_RENDER_STATS: boolean = true;
    this.renderStatsView(OPTION_RENDER_STATS);
  };

  private handleStatsControlClick = (evt: MouseEvent) => {
    const targetClick = evt.target as HTMLElement;
    if (targetClick.id === ``) return;

    if (targetClick.id === `reset`) {
      this.cardsModel.clearStorage();
      remove(this.statsComponent);
      this.renderStatsView();
    }
  };

  private handleCardAudioClick = (evt: MouseEvent): void => {
    const targetClick = evt.target as HTMLElement;
    const BUTTON_FLIP_CARD = `category__rotate-button`;

    if (targetClick.classList.contains(BUTTON_FLIP_CARD)) return;

    const audioSrc = targetClick.closest(`a`);

    if (audioSrc === null) return;

    const audio = new Audio(`./assets/audio/${audioSrc.dataset.audio}`);
    audio.play();

    const itemSrcStats: HTMLElement = targetClick.closest(WRAPPER_CARD);

    this.cardsModel.updateStats(itemSrcStats.dataset.word, TypeUpdateStats.CLICKS);
  };

  private handleFlipButtonClick = (evt: MouseEvent): void => {
    const targetClick = evt.target as HTMLElement;

    const FLIP_BUTTON = `category__rotate-button`;
    if (!targetClick.classList.contains(FLIP_BUTTON)) return;

    const wrapperCard: HTMLElement = targetClick.closest(WRAPPER_CARD);
    wrapperCard.classList.toggle(`category-current_flip`);

    const leaveCardCallback = (): void => {
      wrapperCard.classList.toggle(`category-current_flip`);
      wrapperCard.removeEventListener(`mouseleave`, leaveCardCallback);
    };

    this.cardsModel.updateStats(wrapperCard.dataset.word, TypeUpdateStats.CLICKS);

    wrapperCard.addEventListener(`mouseleave`, leaveCardCallback);
  };

  private handleCategoriesClick = (evt: MouseEvent): void => {
    const link = (evt.target as HTMLElement).closest(`a`);
    if (link === null) return;
    window.location.hash = link.hash;
  };

  private handleControlGameClick = (evt: MouseEvent): void => {
    if (!this.mixResourceGame) {
      const targetClick = evt.target as HTMLElement;
      targetClick.classList.add(BUTTON_REPEAT_CLASS);

      this.categoryItemComponent.setGameCardsClickHandler(this.handleGameCardsClick);

      if (this.currentRoute.category === TypeCurrentRoute.REPEAT) {
        this.mixResourceGame = shuffleArray(this.errorsCards);
      } else {
        const resourceGame: Array<TCardItem> = this.cardsModel
          .getCardsChosenCategory(this.currentRoute.category);
        this.mixResourceGame = shuffleArray(resourceGame);
      }
    }
    this.playAudioGame();
  };

  private handleGameCardsClick = (evt: MouseEvent): void => {
    const targetClick = evt.target as HTMLElement;
    const audioSrc = targetClick.closest(`a`);
    const itemSrcStats: HTMLElement = targetClick.closest(WRAPPER_CARD);

    if (audioSrc === null) return;

    if (this.currentGameAudio === audioSrc.dataset.audio) {
      this.categoryItemComponent
        .makeAnswer(targetClick, true);

      this.mixResourceGame.pop();

      if (!this.mixResourceGame.length) {
        setTimeout((): void => {
          window.location.hash = ROUTE_FOR_END_GAME;
        }, PAUSE_FOR_END_GAME);

        this.categoryItemComponent.completeGame(this.countErrorsCurrentGame);
        this.countErrorsCurrentGame = START_ERRORS_VALUE_COUNT;
        return;
      }

      this.cardsModel.updateStats(itemSrcStats.dataset.word, TypeUpdateStats.CORRECT);

      setTimeout(this.playAudioGame, PAUSE_FOR_SIGNAL);
    } else {
      this.cardsModel.updateStats(itemSrcStats.dataset.word, TypeUpdateStats.WRONG);

      // линейный рост счетчика. тут допустимо число без переменной? не магия?
      this.countErrorsCurrentGame += 1;
      this.categoryItemComponent
        .makeAnswer(targetClick, false);
    }
  };

  private handleModeClick = (): void => {
    const currentMode = window.location.hash.includes(Mode.GAME) ? Mode.TRAIN : Mode.GAME;
    this.controlComponent.switchLinks();

    if (currentMode === Mode.GAME) {
      window.location.hash = window.location.hash.replace(Mode.TRAIN, Mode.GAME);
      return;
    }
    window.location.hash = window.location.hash.replace(Mode.GAME, Mode.TRAIN);
  };

  private playAudioGame = (): void => {
    this.currentGameAudio = this.mixResourceGame[this.mixResourceGame.length - 1].audioSrc;
    playAudio(`./assets/audio/${this.currentGameAudio}`);
  };
}
