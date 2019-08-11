import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCounter from './counter.reducer';

export const counterFeatureKey = 'counter';

export interface State {

  [fromCounter.counterFeatureKey]: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromCounter.counterFeatureKey]: fromCounter.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getCounterFeatureState = createFeatureSelector<State>('counter');
export const getCounter = createSelector(getCounterFeatureState, s => s.counter);
export const getCount = createSelector(getCounter, fromCounter.getCount);
