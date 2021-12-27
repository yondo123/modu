import {getMenuList} from '../api/request';

const state = {
    isLogin: false,
    loadingStatus: false,
    mobile: window.innerWidth < 1024 ? true : false,
    menuList: [],
    selectedMenuId: '',
    menuHeader: {
        CAT0001: 'Community',
        CAT0002: 'Recruitment for study'
    }
};

const getters = {
    getMenuList(state) {
        return state.menuList;
    }
};

const mutations = {
    startLoading(state) {
        state.loadingStatus = true;
    },
    endLoading(state) {
        state.loadingStatus = false;
    },
    setMenuList(state, list) {
        return (state.menuList = list);
    },
    setSelectedMenu(state, catId) {
        return (state.selectedMenuId = catId);
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
