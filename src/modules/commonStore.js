import {getMenuList, getUserProfile} from '../api/request';

const state = {
    userInfo: undefined,
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
    changeLoginState(state) {
        state.isLogin = !state.isLogin;
    },
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
    },
    setUserInfo(state, profile) {
        return (state.userInfo = profile);
    }
};

const actions = {
    requestMenuList(state) {
        getMenuList().then(function (response) {
            state.commit('setMenuList', response.data.items);
        });
    },
    requestUserProfile(state) {
        getUserProfile().then(function (response) {
            if (response.data.success) {
                state.commit('setUserInfo', response.data.item);
                state.commit('changeLoginState');
            }
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
