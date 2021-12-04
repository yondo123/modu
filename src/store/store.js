import Vuex from 'vuex';
import style from '../modules/commonStore';
import board from '../modules/boardStore';

export const store = new Vuex.Store({
    modules: {
        style,
        board
    }
});
