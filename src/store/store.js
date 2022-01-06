import Vuex from 'vuex';
import createPrersistedState from 'vuex-persistedstate';
import style from '../modules/commonStore';
import board from '../modules/boardStore';
import post from '../modules/postStore';
import SecureLS from 'secure-ls';

const ls = new SecureLS({isCompression: true, encodingType: 'aes'});

export const store = new Vuex.Store({
    modules: {
        style,
        board,
        post
    },
    plugins: [
        createPrersistedState({
            paths: ['style'],
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ]
});
