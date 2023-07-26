import {createFeatureSelector, createSelector} from "@ngrx/store";
import {State} from "./state.model";

const selectState = createFeatureSelector<State>('state');

export const selectValue = createSelector(selectState, (state: State): string => state?.value ?? "");
