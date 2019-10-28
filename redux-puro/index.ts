import { Store } from './store';
import { reducer } from './reducer';
import { INCREMENT, DECREMENT, PLUS } from './actions';

const appStore = new Store(reducer, 0);
console.log('Estado inicial', appStore.getState());
appStore.dispatch(INCREMENT);
console.log('Estado tras increment', appStore.getState());
appStore.dispatch(DECREMENT);
console.log('Estado tras decrement', appStore.getState());
appStore.dispatch(PLUS);
console.log('Estado tras plus10', appStore.getState());
