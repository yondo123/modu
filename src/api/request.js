import axios from 'axios';
const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

/**
 * 메뉴 리스트 조회
 * @returns {Promise}
 */
const getMenuList = function () {
    return axios.get(`${PROXY_URL}/lecture/findAllList/?option=lectureHoneyAvg&page=1`);
};

/**
 * 게시판 리스트 조회
 * @param {object} boardInfo : 요청 객체 (catId, count, page)
 */
const getBoardList = function (boardInfo) {
    return axios({
        url: `${PROXY_URL}/board/list`,
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
        url: `${PROXY_URL}/board/detail/${postId}`,
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
        url: `${PROXY_URL}/review/list`,
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
        url: `${PROXY_URL}/review/insert`,
        method: 'POST',
        params: commentInfo
    });
};

/**
 * 게시글 등록
 * @param {object} postInfo : 요청 객체 (catId, content, title, writer)
 */
const registryPost = function (postInfo) {
    return axios({
        url: `${PROXY_URL}/board/insert`,
        method: 'POST',
        data: postInfo
    });
};

/**
 * 이미지 전송
 * @param {formdata} image : 이미지 파일
 * @returns
 */
const sendImage = function (image) {
    console.log(JSON.stringify(image));
    return axios({
        url: `${PROXY_URL}/board/upload-blob-image`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'POST',
        data: image
    });
};

/**
 * 사용자 정보 조회
 */
const getUserProfile = function () {
    return axios({
        url: `${PROXY_URL}/user/profile`,
        method: 'GET',
        headers: {'X-AUTH_TOKEN': localStorage.getItem('jwt') || ''}
    });
};

export {sendImage, getMenuList, getBoardList, getPost, getComments, registryComment, registryPost, getUserProfile};
