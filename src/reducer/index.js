// чтобы объединить все редьюсеры в один будем использовать метод комбайн редьюсер
import {combineReducers} from 'redux';
// тут собираем мелкие редьюсеры в один большой, который будет управлять состоянием
//всего нашего стора
import counterReducer from './counter';
import articles from './articles';
import comments from './comments';
import filters from './filters';

export default combineReducers({
  count: counterReducer,
  articles, comments, filters
});