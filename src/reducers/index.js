import { combineReducers } from 'redux';
import {loadStatus} from './loadStatus'
import {pageIndex} from './pageIndex'
export default combineReducers({
    loadStatus,
    pageIndex
})