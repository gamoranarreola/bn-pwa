/* eslint-disable no-underscore-dangle */
import { Observable, BehaviorSubject } from 'rxjs';

export class BaseStore<T> {

  state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {

    this._state$ = new BehaviorSubject(initialState);
    this.state$ = this._state$.asObservable();
  }

  get state(): T {
    return this._state$.getValue();
  }

  setState(nextState: T): void {
    this._state$.next(nextState);
  }

}
