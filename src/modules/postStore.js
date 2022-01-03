import {sendImage, getPost, registryComment, getComments, registryPost} from '../api/request';
const state = {
    postInfo: undefined,
    comments: []
};
const getters = {
    getPostInfo(state) {
        return state.postInfo;
    },
    getPostDate(state) {
        const date = state.postInfo.createDate;
        return `${date.substr(0, 4)}. ${date.substr(4, 2)}. ${date.substr(6, 2)}. ${date.substr(8, 2)}:${date.substr(10, 2)}`;
    },
    getComments(state) {
        return state.comments;
    }
};
const mutations = {
    setPostContent(state, data) {
        return (state.postInfo = data.item);
    },
    setComments(state, data) {
        return (state.comments = data.items);
    }
};
const actions = {
    requestPost(state, postId) {
        getPost(postId).then(function (response) {
            state.commit('setPostContent', response.data);
        });
    },
    requestComments(state, postId) {
        getComments(postId).then(function (response) {
            state.commit('setComments', response.data);
        });
    },
    sendComment(state, request) {
        registryComment({
            boardSeq: request.post,
            content: request.content,
            writer: 'test-admin'
        }).then(function (response) {
            if (response.data.success) {
                state.dispatch('requestComments', request.post);
            }
        });
    },
    sendPost(state, request) {
        registryPost({
            catId: request.boardId,
            content: request.content,
            writer: 'test-admin',
            title: request.title
        })
            .then(function (response) {
                if (response.data.success) {
                    alert('성공적으로 글을 등록하였습니다.');
                } else {
                    alert('글쓰기에 실패하였습니다.\n잠시 후 다시 시도해주세요.');
                }
            })
            .catch(function (err) {
                console.err(err);
                alert('글쓰기에 실패하였습니다.\n잠시 후 다시 시도해주세요.');
            });
    },
    requestSendImage(state, uploadImage) {
        const formData = new FormData();
        formData.append('file', uploadImage);
        sendImage(formData);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
