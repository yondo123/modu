import axios from 'axios';

/**
 * 메뉴 리스트 조회
 * @returns {Promise}
 */
const getMenuList = function () {
    return axios.get('/category/list');
};

export {getMenuList};
