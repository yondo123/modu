import {getBoardList} from '../api/request';
const state = {
    boardList: [],
    boardCount: 8,
    boardLimitCount: 0
};
const getters = {
    getBoardList(state) {
        return state.boardList;
    }
};
const mutations = {
    setBoardList(state, data) {
        state.boardLimitCount = data.totalCount;
        state.boardList = data.items;
        return;
    }
};
const actions = {
    requestBoardList(state, boardInfo) {
        getBoardList({
            ...boardInfo,
            count: 8
        }).then(function (response) {
            state.commit('setBoardList', response.data);
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
