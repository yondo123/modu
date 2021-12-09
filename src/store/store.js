import Vuex from 'vuex';
import style from '../modules/commonStore';
import board from '../modules/boardStore';
import post from '../modules/postStore';

export const store = new Vuex.Store({
    modules: {
        style,
        board,
        post
    }
});
