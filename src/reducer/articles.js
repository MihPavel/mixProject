import { normalizedArticles as defaultArticles } from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS} from '../constants';
import {arrToMap} from '../lib';
import {OrderedMap, Record} from 'immutable';

const ArticleRecord = Record({
  text: undefined,
  title: '',
  id: undefined,
  loading: false,
  comments: []
});

const ReducerState = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
});

const defaultState = new ReducerState();

// нужен инструмент по работе с асинхронностью и контролем уровней вложенности
// удобство работы с имутабельными данными
export default (articlesState = defaultState, action) => {
  const {type, payload, randomId, response} = action;
  switch(type){
    case DELETE_ARTICLE: 
      return articlesState.deleteIn(['entities', payload.id]);

    case ADD_COMMENT: 
      return articlesState.updateIn(
        ['entities', payload.articleId, 'comments'], 
        comments => comments.concat(randomId)
      );
    case LOAD_ALL_ARTICLES + START:
        return articlesState.set('loading', true);
        
    case LOAD_ALL_ARTICLES + SUCCESS:
      return articlesState
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)
    
    case LOAD_ARTICLE + START:
        return articlesState.setIn(['entities', payload.id, 'loading'], true);

    case LOAD_ARTICLE + SUCCESS:
        return articlesState.setIn(['entities', payload.id], new ArticleRecord(payload.response));
  } 
  return articlesState;
}