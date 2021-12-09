import {getMenuList} from '../api/request';

const state = {
    mobile: window.innerWidth < 1024 ? true : false,
    menuList: []
};

const getters = {
    getMenuList(state) {
        return state.menuList;
    }
};

const mutations = {
    setMenuList(state, list) {
        return (state.menuList = list);
    }
};

const actions = {
    requestMenuList(state) {
        getMenuList().then(function (response) {
            state.commit('setMenuList', response.data.items);
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
