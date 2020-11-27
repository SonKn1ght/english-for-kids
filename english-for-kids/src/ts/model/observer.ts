interface Subject {
  addObserver(observer: SubsrFunnc): void;

  removeObserver(observer: Observer): void;

  notify: SubsrFunnc;
}

type SubsrFunnc = (event: any, payload: any) => void;

const NUMBER_HANDLERS_REMOVE: number = 1;

export default class Observer implements Subject {
  private observer: Array<SubsrFunnc> = [];
  // subscribes подписчики

  addObserver(o: SubsrFunnc): void {
    this.observer.push(o);
  }

  removeObserver(o: Observer): void {
    // обкаст (o as any as SubsrFunnc)
    const index = this.observer.indexOf(o as any as SubsrFunnc);
    this.observer.splice(index, NUMBER_HANDLERS_REMOVE);
    this.notify(`load`, 123);
  }

  notify = <T>(event: string, payload: T): void => {
    this.observer.forEach((observer: SubsrFunnc) => {
      observer(event, payload);
    });
  };
}
