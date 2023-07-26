import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {selectValue} from "./store/state.selector";
import {StoreService} from "./store/store.service";

describe('AppComponent', () => {
  let store: MockStore;
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [AppComponent]
    })
    store = TestBed.inject<MockStore>(MockStore);
    service = TestBed.inject(StoreService);

  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should get the correct signal', (done) => {
    store.overrideSelector(selectValue, "testValue")
    store.select(selectValue).subscribe((v) => {
      expect(v).toBe("testValue")
      expect(service.getValue()()).toBe("testValue")
      done()
    })
  });
});
