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
} from '../view';

export class MainPresenter {
  private categoriesComponent: CategoriesView;

  private categoryItemComponent: CategoryItemView;

  constructor(
    private gameContainer: HTMLElement,
    private cardsModel: any,
  ) {
    // this.cardsModel.addObserver(this._handleModelEvent);
  }

  public init() {
    this.clearMainContainer();
    this.renderCategoriesView();
  }

  private renderCategoriesView() {
    const category = this.cardsModel.getCardsCategory();
    this.categoriesComponent = new CategoriesView(category);
    render(this.gameContainer, this.categoriesComponent.getElement(), RenderPosition.BEFOREEND);
    this.setHandlersCategoriesComponent();
  }

  private renderCategoryItemView(type: string) {
    const currentCategory = this.cardsModel.getCardsChosenCategory(type);
    this.categoryItemComponent = new CategoryItemView(currentCategory);
    render(this.gameContainer, this.categoryItemComponent.getElement(), RenderPosition.BEFOREEND);
    this.setHandlersCategoryItemComponent();
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

  public switchRoute(route: string): void {
    if (this.cardsModel.getCardsCategory().includes(route)) {
      this.clearMainContainer();
      this.renderCategoryItemView(route);
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
