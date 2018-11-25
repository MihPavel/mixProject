// функции которые создают экшен
import {INCREMENT, 
        DELETE_ARTICLE, 
        CHANGE_DATA_RANGE,
        CHANGE_SELECTION,
        ADD_COMMENT,
        LOAD_ALL_ARTICLES,
        LOAD_ARTICLE,
        LOAD_COMMENTS,
        START, SUCCESS, FAIL} from '../constants';

export function increment(){
  return {
    type: INCREMENT
  };
}
export function deleteArticle(id){
  return {
    type: DELETE_ARTICLE,
    payload: {
      id
    }
  };
}
export function changeDataRange(dataRange){
  return {
    type: CHANGE_DATA_RANGE,
    payload: {
      dataRange
    }
  };
}
export function changeSelection(selected){
  return {
    type: CHANGE_SELECTION,
    payload: {
      selected
    }
  };
}
export function addComment(comment, articleId){
  return {
    type: ADD_COMMENT,
    payload: {
      comment, articleId
    },
    randomId: true
  };
}

export function loadAllArticles(){
  console.log("AC loadAllArticles");
  return{
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}

// благодаря редакс thunk можно возвращать не только объекты, но и функции
export function loadArticle(id){
  console.log("AC loadArticle", id);
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: {id}
    });
    fetch(`/api/article/${id}`)
      .then(res => res.json())
      .then(response => dispatch({
        type: LOAD_ARTICLE + SUCCESS,
        payload: {id, response}
      }))
      .catch(error => dispatch({
        type: LOAD_ARTICLE + FAIL,
        payload: {id, error}
      }))
  }
}
export function loadComments(idArticle){
  return (dispatch) => {
    dispatch({
      type: LOAD_COMMENTS + START,
      payload: {idArticle}
    });
    fetch(`/api/comment?article=${idArticle}`)
      .then(res => res.json())
      .then(response => dispatch({
        type: LOAD_COMMENTS + SUCCESS,
        payload: {idArticle, response}
      }))
      .catch(error => dispatch({
        type: LOAD_COMMENTS + FAIL,
        payload: {idArticle, error}
      }));
  }
}

//http://localhost:3001/api/comment?article=56c782f18990ecf954f6e027