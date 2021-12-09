import {getBoardList, getPost} from '../api/request';
const state = {
    boardList: [],
    boardCount: 8,
    boardLimitCount: 0,
    postInfo: undefined
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
    },
    getFormattingDate(state) {
        const date = state.postInfo.createDate;
        return `${date.substr(0, 4)}. ${date.substr(4, 2)}. ${date.substr(6, 2)}. ${date.substr(8, 2)}:${date.substr(10, 2)}`;
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
