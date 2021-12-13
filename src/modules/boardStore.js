import {getBoardList} from '../api/request';
const state = {
    boardList: [],
    boardLessCount: 10,
    boardCount: 10,
    boardLimitCount: 0
};
const getters = {
    getBoardList(state) {
        return state.boardList;
    },
    getBoardLimit(state) {
        return state.boardLimitCount;
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
            ...boardInfo
        })
            .then(function (response) {
                state.commit('setBoardList', response.data);
            })
            .catch(function (err) {
                console.error(err);
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
