import { combineReducers } from 'redux';

import hares from './HareReducer'
import selectedHare from './selectedHareReducer'

const rootReducer = combineReducers({
    hares,
    selectedHare
});

export default rootReducer;
