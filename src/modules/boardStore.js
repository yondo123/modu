import {getBoardList, getPost} from '../api/request';
const state = {
    boardList: [],
    boardCount: 8,
    boardLimitCount: 0,
    postInfo: ''
};
const getters = {
    getBoardList(state) {
        return state.boardList;
    },
    getBoardLimit(state) {
        return state.boardLimitCount;
    },
    getPostInfo(state) {
        return state.postInfo;
    }
};
const mutations = {
    setBoardList(state, data) {
        state.boardLimitCount = data.totalCount;
        state.boardList = data.items;
        return;
    },

    setPostContent(state, data) {
        return (state.postInfo = data.item);
    }
};
const actions = {
    requestBoardList(state, boardInfo) {
        getBoardList({
            ...boardInfo,
            count: 6
        })
            .then(function (response) {
                state.commit('setBoardList', response.data);
            })
            .catch(function (err) {
                console.error(err);
            });
    },
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
