// 1. Делаем запрос к серверу
// 2. проанализировали ответ сервера и если устроит то возвращаем  ответ в нужном формате
// 3. этот then уже содержит полный ответ с сервера в нужном формате
import {START, SUCCESS, FAIL} from '../constants';
export default store => next => action => {
    const {callAPI, type, ...rest} = action;
    if(!callAPI) return next(action);

    next({
        ...rest, type: type + START
    });

    console.log("midelwar CALL API");
    fetch(callAPI) // 1
        .then(res => res.json()) // 2
        .then(response => next({...rest, type: type + SUCCESS, response})) // 3
        .catch(error => next({...action, type: type + FAIL, error}))
}