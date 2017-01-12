import reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default createStoreWithMiddleware(reducers)