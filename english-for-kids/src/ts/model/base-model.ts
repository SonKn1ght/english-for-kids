import Observer from "./observer";

export default class BaseModel extends Observer {
  constructor(
    private storage: Array<number> = [],
  ) {
    super();
  }

  set appStorage(storage: Array<number>) {
    this.storage = storage;
  }

  get appStorage(): Array<number> {
    return this.storage;
  }

  updateAppStorage(updateItem: number):void {
    this.storage.push(updateItem);
  }
}
