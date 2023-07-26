import { Record } from 'immutable';

interface StateOptions {
	readonly value: string
}

export const defaultState: StateOptions = {
	value: "aValue"
};

export class State extends Record<StateOptions>(defaultState) {

	setValue(v: string): State {
		return this.set('value', v);
	}
}
