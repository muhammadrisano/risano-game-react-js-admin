import { combineReducers } from 'redux';
import users from './users';
import sounds from './sounds';
import patterns from './patterns'
import leaderboards from './leaderboards'


const appReducer = combineReducers({
    users,
    sounds,
    patterns,
    leaderboards
});

export default appReducer;