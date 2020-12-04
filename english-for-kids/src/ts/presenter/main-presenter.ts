import {
  UserAction,
  UpdateType,
  RenderPosition,
} from '../const/constants';
import {
  render,
  remove,
} from '../utils/utils';
import {
  CategoriesView,
  CategoryItemView,
  ControlView,
} from '../view';

const MODE_GAME = `game`;

export class MainPresenter {
  private categoriesComponent: CategoriesView;

  private categoryItemComponent: CategoryItemView;

  private controlComponent: ControlView;

  private currentRoute: {
    category: string | undefined,
    mode: string | undefined,
  } = {
    category: ``,
    mode: undefined,
  };

  constructor(
    private gameContainer: HTMLElement,
    private cardsModel: any,
  ) {
    // this.cardsModel.addObserver(this._handleModelEvent);
  }

  public init(mode: string) {
    this.currentRoute.mode = mode;

    this.clearMainContainer();
    if (!this.controlComponent) this.renderControlView();
    this.renderCategoriesView();
  }

  private renderCategoriesView(): void {
    const category = this.cardsModel.getCardsCategory();
    this.categoriesComponent = new CategoriesView(category);
    render(this.gameContainer, this.categoriesComponent.getElement(), RenderPosition.BEFOREEND);
    this.setHandlersCategoriesComponent();
  }

  private renderCategoryItemView(type: string): void {
    const currentCategory = this.cardsModel.getCardsChosenCategory(type);
    this.categoryItemComponent = new CategoryItemView(currentCategory);
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
    this.categoryItemComponent.setCardAudioClickHandler(this.handleCardAudioClick);
    this.categoryItemComponent.setFlipButtonClickHandler(this.handleFlipButtonClick);
  }

  private setHandlersControlComponent() {
    this.controlComponent.setModeClickHandler(this.handleModeClick);
  }

  private handleCardAudioClick = (evt: MouseEvent): void => {
    const targetClick = evt.target as HTMLElement;
    const BUTTON_FLIP_CARD = `category__rotate-button`;

    if (targetClick.className === BUTTON_FLIP_CARD) return;

    const audioSrc = targetClick.closest(`a`);

    if (audioSrc === null) return;

    const audio = new Audio(`./assets/audio/${audioSrc.dataset.audio}`);
    audio.play();
  };

  private handleFlipButtonClick = (evt: MouseEvent): void => {
    const targetClick = evt.target as HTMLElement;

    const FLIP_BUTTON = `category__rotate-button`;
    if (targetClick.className !== FLIP_BUTTON) return;

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

  private handleModeClick = (): void => {
    const currentMode = window.location.hash.includes(MODE_GAME) ? `` : MODE_GAME;

    if (currentMode) {
      window.location.hash = `${window.location.hash.replace(`/`, ``)}/${currentMode}`;
      return;
    }
    window.location.hash = window.location.hash.replace(`/${MODE_GAME}`, ``);
  };

  public switchRoute(route: string): void {
    [this.currentRoute.category, this.currentRoute.mode] = route.split(`/`);

    if (!this.controlComponent) this.renderControlView();

    if (this.cardsModel.getCardsCategory().includes(this.currentRoute.category)) {
      this.clearMainContainer();
      this.renderCategoryItemView(this.currentRoute.category);
    }
  }

  // _handleViewAction(actionType, updateType, update) {
  //   switch (actionType) {
  //     case UserAction.SWAP_BONE:
  //       this._gameModel.updateGame(updateType, update);
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
