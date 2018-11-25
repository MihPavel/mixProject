import {createStore, applyMiddleware} from 'redux';
import reduser from '../reducer';
import logger from '../middlewares/logger';
import randomId from '../middlewares/randomId';
import api from '../middlewares/api';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk, randomId, api, logger);
//миделвары вызываются на каждый экшен. через запятую. 
//в таком порядке будут вызыв
const store = createStore(reduser, {}, enhancer);
//start только для dev
window.store = store;
//end только для dev
export default store;