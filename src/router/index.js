import {createWebHistory, createRouter} from 'vue-router';
import MDMain from '../components/MDMain.vue';
import MDCalendar from '../components/MDCalendar.vue';
import MDBoard from '../components/MDBoard.vue';
import MDPost from '../components/MDPost.vue';
import MDPostWrite from '../components/MDPostWrite.vue';

const routes = [
    {
        //메인 게시판 (스터디 모집)
        path: '/',
        redirect: '/board'
    },
    {
        //인증
        path: '/auth',
        redirect: '/board'
    },
    {
        //메인 게시판 (스터디 모집)
        path: '/board',
        component: MDMain
    },
    {
        //스터디 및 자유 게시판
        name: 'board',
        path: '/board/:id',
        component: MDBoard
    },
    {
        //게시글 작성
        name: 'write',
        path: '/board/:boardId/write',
        component: MDPostWrite
    },
    {
        //게시글 상세
        name: 'post',
        path: '/post/:postId',
        component: MDPost
    },
    {
        //스터디 일정
        path: '/calendar/:id',
        component: MDCalendar
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
