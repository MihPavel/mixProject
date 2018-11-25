import {CHANGE_DATA_RANGE, CHANGE_SELECTION, DELETE_ARTICLE} from '../constants'
import { articles as defaultArticles } from '../fixtures';

const defaultFilterState = {
    selected: [],
    dataRange: {
        from: null,
        to: null
    }
};

export default (filters = defaultFilterState, action) => {
    const {type, payload} = action;
        switch(type){
            case CHANGE_DATA_RANGE: 
                return {...filters, dataRange: payload.dataRange}

            case CHANGE_SELECTION:
                return {...filters, selected: payload.selected}
    
            case DELETE_ARTICLE:
                return {...filters, 
                        selected: filters.selected.filter(id => id !== payload.id)}
        };
    return filters;
}
