import axios from 'axios';

/**
 * 메뉴 리스트 조회
 * @returns {Promise}
 */
const getMenuList = function () {
    return axios.get('/category/list');
};

/**
 * 게시판 리스트 조회
 * @param {object} boardInfo : 요청 객체 (catId, count, page)
 */
const getBoardList = function (boardInfo) {
    return axios({
        url: '/board/list',
        method: 'GET',
        params: {
            catId: boardInfo.catId,
            page: boardInfo.page,
            count: boardInfo.count
        }
    });
};

/**
 * 게시글 상세 조회
 * @param {string} postId : 글 번호
 */
const getPost = function (postId) {
    return axios({
        url: `/board/detail/${postId}`,
        method: 'GET'
    });
};

/**
 * 댓글 조회
 * @param {string} postId : 글 번호
 * @returns
 */
const getComments = function (postId) {
    return axios({
        url: '/review/list',
        method: 'GET',
        params: {
            boardSeq: postId
        }
    });
};

/**
 * 댓글 등록
 * @param {object} commentInfo : 요청 객체 (boardSeq, content, writer)
 */
const registryComment = function (commentInfo) {
    return axios({
        url: '/review/insert',
        method: 'POST',
        params: commentInfo
    });
};

export {getMenuList, getBoardList, getPost, getComments, registryComment};
