export default store => next => action => {
    if(!action.randomId) return next(action);
    next({
        ...action,
        randomId: (Date.now() + Math.random()).toString()
    }); 

}