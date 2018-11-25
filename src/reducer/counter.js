// тут живет вся логика по работе со счетчиком
//редьюсер принимает на вход состояние стора а на выходе получается новое состояние стора
import {INCREMENT} from '../constants'

export default (count = 0, action) => {
  const {type} = action;
  switch(type){
    case INCREMENT: return count + 1
  }
  return count;
}