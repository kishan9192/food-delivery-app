import {createStore} from 'redux';
import themeReducer from './reducer/themeReducer';

const store = createStore(themeReducer)
export default store