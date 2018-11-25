import { normalizedComments as defaultComments } from '../fixtures';
import {ADD_COMMENT, START, SUCCESS, LOAD_COMMENTS, FAIL} from '../constants'
import {arrToMap} from '../lib';
import {Map, Record} from 'immutable';

const CommentRecord = Record({
  id: undefined,
  user: undefined,
  text: undefined,
});
const ReducerState = Record({
  loading: false,
  loaded: false,
  entities: new Map({})
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
  const {type, payload, randomId, response, idArticle} = action;
  switch(type){
    case ADD_COMMENT: return {
      ...commentsState,
      [randomId]: {
        id: randomId,
        user: payload.comment.user,
        text: payload.comment.text
      }
    }
    case LOAD_COMMENTS + START:
    console.log(1);
      return commentsState.set("loading", true);
    case LOAD_COMMENTS + SUCCESS:
        console.log(2);
      commentsState.set("loading", false)
        .set("loaded", true);
      response.forEach((comment) => {
        commentsState.setIn(['entities', comment.id], new CommentRecord(comment));
      });
      return commentsState;
  }
  return commentsState;
}

// в мепе по статье можно получить