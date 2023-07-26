import {  Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import {selectValue} from "./state.selector";
import {toSignal} from "@angular/core/rxjs-interop";
import {Observable} from "rxjs";


@Injectable({
	providedIn: 'root'
})
export class StoreService  {
	private readonly value: Signal<string | undefined>;
	constructor(store: Store) {
    this.value = toSignal(store.select(selectValue) as Observable<string>)
	}
	// getters
	getValue = (): Signal<string|undefined> => this.value;
}
