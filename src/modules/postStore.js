import {getPost} from '../api/request';
const state = {
    postInfo: undefined
};
const getters = {
    getPostInfo(state) {
        return state.postInfo;
    },
    getFormattingDate(state) {
        const date = state.postInfo.createDate;
        return `${date.substr(0, 4)}. ${date.substr(4, 2)}. ${date.substr(6, 2)}. ${date.substr(8, 2)}:${date.substr(10, 2)}`;
    }
};
const mutations = {
    setPostContent(state, data) {
        return (state.postInfo = data.item);
    }
};
const actions = {
    requestPost(state, postId) {
        getPost(postId).then(function (response) {
            state.commit('setPostContent', response.data);
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
