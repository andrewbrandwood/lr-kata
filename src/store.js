import { createStore } from 'redux';

import { addHotels } from './reducers/reducers';

const store = createStore(addHotels, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
