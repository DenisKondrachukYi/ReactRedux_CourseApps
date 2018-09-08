import {FETCH_POSTS}from '../actions/index'
import * as _ from 'lodash';

export default function PostsReducer(action, payload) {
    switch(action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id')
        default:
            return state;
    }
}