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
    })
    store = TestBed.inject<MockStore>(MockStore);
    service = TestBed.inject(StoreService);

  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should get the correct signal override in IT', (done) => {
    // overrideSelector in beforeEach make the test failling
    store.overrideSelector(selectValue, "testValue")
    store.select(selectValue).subscribe((v) => {
      expect(v).toBe("testValue")
      expect(service.getValue()()).toBe("testValue")
      done()
    })
  });
});
describe('AppComponent', () => {
  let store: MockStore;
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    })
    store = TestBed.inject<MockStore>(MockStore);
    service = TestBed.inject(StoreService);
    // overrideSelector in beforeEach make the test passing
    store.overrideSelector(selectValue, "testValue")
  });
  it('should get the correct signal override before each', (done) => {
    store.select(selectValue).subscribe((v) => {
      expect(v).toBe("testValue")
      expect(service.getValue()()).toBe("testValue")
      done()
    })
  });
});
