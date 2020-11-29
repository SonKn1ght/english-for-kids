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

export default class MainPresenter {
  private categoriesComponent: CategoriesView;

  private categoryItemComponent: CategoryItemView;

  constructor(
    private gameContainer: HTMLElement,
    private cardsModel: any,
  ) {
    // this.cardsModel.addObserver(this._handleModelEvent);
  }

  public init() {
    this.renderCategoriesView();
  }

  public switchRoute(route: string): void {
    if (this.cardsModel.getCardsCategory().includes(route)) {
      remove(this.categoriesComponent);
      this.renderCategoryItemView(route);
    }
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
  }

  private setHandlersCategoriesComponent() {
    this.categoriesComponent.setCategoriesClickHandler(this.handleCategoriesClick);
  }

  handleCategoriesClick = (evt: MouseEvent) => {
    evt.preventDefault();
    const EXCLUSION_INDEX_GRID = 1;
    const link = (evt.target as HTMLElement).closest(`a`);

    if (link === null) return;
    this.switchRoute(link.hash.slice(EXCLUSION_INDEX_GRID));

    // this._handleViewAction(UserAction.NEW_GAME, UpdateType.RESTART, this._optionGame);
  };

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
