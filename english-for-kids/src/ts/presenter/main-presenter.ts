import {
  RenderPosition,
  MODE_GAME,
  MODE_TRAIN,
  TypeUpdateStats,
} from '../const/constants';
import {
  render,
  remove,
  shuffleArray,
} from '../utils/utils';
import {
  CategoriesView,
  CategoryItemView,
  ControlView,
  StatsView,
  FooterView,
} from '../view';
import {
  TCardItem,
  TCardItemStats,
} from "../const";

const PAUSE_FOR_SIGNAL: number = 600;
const PAUSE_FOR_END_GAME: number = 4000;
const ROUTE_FOR_END_GAME: string = `main/game`;
const WRAPPER_CARD = `.category-current__wrapper-item`;

export class MainPresenter {
  private categoriesComponent: CategoriesView;

  private categoryItemComponent: CategoryItemView;

  private controlComponent: ControlView;

  private statsComponent: StatsView;

  private footerComponent: FooterView;

  private mixResourceGame: Array<TCardItem>;

  private errorsCards: Array<TCardItem>;

  private currentGameAudio: string;

  private countErrorsCurrentGame: number = 0;

  private stats: Array<any> = this.cardsModel.getStats();

  private sortOptions: {
    direction: boolean,
    type: string,
  } = {
    direction: true,
    type: `word`,
  };

  private currentRoute: {
    category: string | undefined,
    mode: string | undefined,
  } = {
    category: ``,
    mode: ``,
  };

  constructor(
    private gameContainer: HTMLElement,
    private cardsModel: any,
  ) {}

  public switchRoute(route: string): void {
    [this.currentRoute.category, this.currentRoute.mode] = route.split(`/`);
    console.log(this.currentRoute)

    if (!this.footerComponent) this.renderFooterView();

    if (!this.controlComponent) this.renderControlView();
    this.controlComponent.updateMenuItem(this.currentRoute.category);

    if (this.categoryItemComponent || this.categoriesComponent || this.statsComponent) {
      this.clearMainContainer();
    }

    if (this.currentRoute.category === `main`) {
      this.renderCategoriesView();
      return;
    }

    if (this.currentRoute.category === `stats`) {
      this.renderStatsView();
      return;
    }

    if (this.currentRoute.category === `repeat`) {
      this.categoryItemComponent = new CategoryItemView(this.errorsCards, this.currentRoute.mode);
      render(this.gameContainer, this.categoryItemComponent.getElement(), RenderPosition.BEFOREEND);
      this.setHandlersCategoryItemComponent();
      return;
    }

    if (this.cardsModel.getCardsCategory().includes(this.currentRoute.category)) {
      this.renderCategoryItemView();
    }
  }

  private renderCategoriesView(): void {
    const category = this.cardsModel.getCardsCategory();
    this.categoriesComponent = new CategoriesView(category, this.currentRoute.mode);
    render(this.gameContainer, this.categoriesComponent.getElement(), RenderPosition.BEFOREEND);
    this.setHandlersCategoriesComponent();
  }

  private renderCategoryItemView(): void {
    const currentCategory = this.cardsModel.getCardsChosenCategory(this.currentRoute.category);
    this.categoryItemComponent = new CategoryItemView(currentCategory, this.currentRoute.mode);
    render(this.gameContainer, this.categoryItemComponent.getElement(), RenderPosition.BEFOREEND);
    this.setHandlersCategoryItemComponent();
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

  private renderStatsView(): void {
    this.stats = this.cardsModel.getStats();
    this.statsComponent = new StatsView(this.stats);
    render(this.gameContainer, this.statsComponent.getElement(), RenderPosition.BEFOREEND);
    this.setHandlersStatsComponent();
  }

  private renderFooterView = (): void => {
    this.footerComponent = new FooterView();
    render(this.gameContainer, this.footerComponent.getElement(), RenderPosition.AFTER);
  };

  private clearMainContainer(): void {
    if (this.categoriesComponent) remove(this.categoriesComponent);
    if (this.categoryItemComponent) remove(this.categoryItemComponent);
    if (this.statsComponent) remove(this.statsComponent);
  }

  private setHandlersCategoriesComponent() {
    this.categoriesComponent.setCategoriesClickHandler(this.handleCategoriesClick);
  }

  private setHandlersCategoryItemComponent() {
    if (this.currentRoute.mode === MODE_TRAIN) {
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

    if (this.sortOptions.direction) {
      this.stats.sort((a, b) => {
        if (a[this.sortOptions.type] > b[this.sortOptions.type]) {
          return 1;
        }
        if (a[this.sortOptions.type] < b[this.sortOptions.type]) {
          return -1;
        }
        return 0;
      });
    } else {
      this.stats.sort((a, b) => {
        if (a[this.sortOptions.type] < b[this.sortOptions.type]) {
          return 1;
        }
        if (a[this.sortOptions.type] > b[this.sortOptions.type]) {
          return -1;
        }
        return 0;
      });
    }

    remove(this.statsComponent);
    // дубляж пофиксить
    this.statsComponent = new StatsView(this.stats);
    render(this.gameContainer, this.statsComponent.getElement(), RenderPosition.BEFOREEND);
    this.setHandlersStatsComponent();
  };

  private handleStatsControlClick = (evt: MouseEvent) => {
    const targetClick = evt.target as HTMLElement;
    if (targetClick.id === ``) return;

    if (targetClick.id === `reset`) {
      this.cardsModel.clearStorage();
      remove(this.statsComponent);
      this.renderStatsView();
    }

    if (targetClick.id === `repeat`) {
      const idErrorsCards = this.cardsModel.getStats()
        .filter((current: TCardItemStats) => current.errors !== 0)
        .sort((a: TCardItemStats, b: TCardItemStats) => {
          return b.errors - a.errors;
        }).slice(0, 8)
        .reduce((acc: Array<string>, current: TCardItemStats) => {
          acc.push(current.word);
          return acc;
        }, []);

      this.errorsCards = this.cardsModel.getCards().filter((currentCard: TCardItem) => {
        return idErrorsCards.includes(currentCard.word);
      });
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
      targetClick.classList.add(`btn__game_repeat`);

      this.categoryItemComponent.setGameCardsClickHandler(this.handleGameCardsClick);

      // костыли
      if (this.currentRoute.category === `repeat`) {
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

      if (this.mixResourceGame.length === 0) {
        setTimeout((): void => {
          window.location.hash = ROUTE_FOR_END_GAME;
        }, PAUSE_FOR_END_GAME);

        this.categoryItemComponent.completeGame(this.countErrorsCurrentGame);
        this.countErrorsCurrentGame = 0;
        return;
      }

      this.cardsModel.updateStats(itemSrcStats.dataset.word, TypeUpdateStats.CORRECT);

      setTimeout(this.playAudioGame, PAUSE_FOR_SIGNAL);
    } else {
      this.cardsModel.updateStats(itemSrcStats.dataset.word, TypeUpdateStats.WRONG);

      this.countErrorsCurrentGame += 1;
      this.categoryItemComponent
        .makeAnswer(targetClick, false);
    }
  };

  private handleModeClick = (): void => {
    const currentMode = window.location.hash.includes(MODE_GAME) ? MODE_TRAIN : MODE_GAME;
    this.controlComponent.switchLinks();

    if (currentMode === MODE_GAME) {
      window.location.hash = window.location.hash.replace(MODE_TRAIN, MODE_GAME);
      return;
    }
    window.location.hash = window.location.hash.replace(MODE_GAME, MODE_TRAIN);
  };

  private playAudioGame = () => {
    this.currentGameAudio = this.mixResourceGame[this.mixResourceGame.length - 1].audioSrc;
    const audio = new Audio(`./assets/audio/${this.currentGameAudio}`);
    audio.play();
  };
}
