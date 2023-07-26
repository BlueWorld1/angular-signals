import {State} from "./state.model";

const initialState = new State();

export const storeReducer = (state = initialState, action: unknown) => {
	switch (action.type) {
		default:
			return state;
	}
};

