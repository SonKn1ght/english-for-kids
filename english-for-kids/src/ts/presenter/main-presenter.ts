import {
  RenderPosition,
  MODE_GAME,
  MODE_TRAIN,
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
} from '../view';
import { TCardItem } from "../const";

const PAUSE_FOR_SIGNAL: number = 600;
const PAUSE_FOR_END_GAME: number = 4000;
const ROUTE_FOR_END_GAME: string = `main/game`;

export class MainPresenter {
  private categoriesComponent: CategoriesView;

  private categoryItemComponent: CategoryItemView;

  private controlComponent: ControlView;

  private mixResourceGame: Array<TCardItem>;

  private currentGameAudio: string;

  private countErrorsCurrentGame: number = 0;

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
  ) {
    // this.cardsModel.addObserver(this._handleModelEvent);
  }

  // public init(mode: string) {
  //   this.currentRoute.mode = mode;
  //
  //   this.clearMainContainer();
  //   if (!this.controlComponent) this.renderControlView();
  //   this.renderCategoriesView();
  // }

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

  private clearMainContainer(): void {
    if (this.categoriesComponent) remove(this.categoriesComponent);
    if (this.categoryItemComponent) remove(this.categoryItemComponent);
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

  private handleCardAudioClick = (evt: MouseEvent): void => {
    const targetClick = evt.target as HTMLElement;
    const BUTTON_FLIP_CARD = `category__rotate-button`;

    if (targetClick.classList.contains(BUTTON_FLIP_CARD)) return;

    const audioSrc = targetClick.closest(`a`);

    if (audioSrc === null) return;

    const audio = new Audio(`./assets/audio/${audioSrc.dataset.audio}`);
    audio.play();
  };

  private handleFlipButtonClick = (evt: MouseEvent): void => {
    const targetClick = evt.target as HTMLElement;

    const FLIP_BUTTON = `category__rotate-button`;
    if (!targetClick.classList.contains(FLIP_BUTTON)) return;

    const WRAPPER_CARD = `.category-current__wrapper-item`;
    const wrapperCard: HTMLElement = targetClick.closest(WRAPPER_CARD);
    wrapperCard.classList.toggle(`category-current_flip`);

    const leaveCardCallback = (): void => {
      wrapperCard.classList.toggle(`category-current_flip`);
      wrapperCard.removeEventListener(`mouseleave`, leaveCardCallback);
    };

    wrapperCard.addEventListener(`mouseleave`, leaveCardCallback);
  };

  private handleCategoriesClick = (evt: MouseEvent): void => {
    const link = (evt.target as HTMLElement).closest(`a`);
    if (link === null) return;
    window.location.hash = link.hash;

    // this._handleViewAction(UserAction.NEW_GAME, UpdateType.RESTART, this._optionGame);
  };

  private handleControlGameClick = (evt: MouseEvent): void => {
    if (!this.mixResourceGame) {
      const targetClick = evt.target as HTMLElement;
      targetClick.classList.add(`btn__game_repeat`);

      this.categoryItemComponent.setGameCardsClickHandler(this.handleGameCardsClick);

      const resourceGame: Array<TCardItem> = this.cardsModel
        .getCardsChosenCategory(this.currentRoute.category);

      this.mixResourceGame = shuffleArray(resourceGame);
    }
    this.playAudioGame();
  };

  private handleGameCardsClick = (evt: MouseEvent): void => {
    // this.categoryItemComponent.completeGame(0);
    const targetClick = evt.target as HTMLElement;
    const audioSrc = targetClick.closest(`a`);
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
        return;
      }
      setTimeout(this.playAudioGame, PAUSE_FOR_SIGNAL);
    } else {
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

  public switchRoute(route: string): void {
    [this.currentRoute.category, this.currentRoute.mode] = route.split(`/`);

    if (!this.controlComponent) this.renderControlView();
    this.controlComponent.updateMenuItem(this.currentRoute.category);

    if (this.categoryItemComponent || this.categoriesComponent) {
      this.clearMainContainer();
    }

    if (this.currentRoute.category === `main`) {
      this.renderCategoriesView();
      return;
    }

    if (this.cardsModel.getCardsCategory().includes(this.currentRoute.category)) {
      this.renderCategoryItemView();
    }
  }

  // public handleViewAction(actionType, updateType, update) {
  //   switch (actionType) {
  //     case UserAction.SWAP_BONE:
  //       break;
  //     default:
  //       throw new Error(`something broke in handleViewAction`);
  //   }
  // }
  //
  // _handleModelEvent(updateType, data) {
  //   switch (updateType) {
  //     case UpdateType.MOVING:
  //       this._gameComponent.swapBone(data.numberBone);
  //       this._controlPanelComponent.updateCounter(data);
  //       this._controlPanelComponent.playSoundPressBone();
  //       break;
  //     default:
  //       throw new Error(`something broke in handleModelEvent`);
  //   }
  // }
}
