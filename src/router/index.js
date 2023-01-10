import Vue from 'vue';
import Router from 'vue-router';

import AboutComponent from '../AboutComponent.vue';
import BookComponent from '../BookComponent.vue';
import AddBookFormComponent from '../AddBookFormComponent.vue';
import BookDetailsComponent from '../BookDetailsComponent.vue';


Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'About',
        component: AboutComponent,
        alias: '/ab',
    }, {
        path: '/books',
        name: 'Books',
        component: BookComponent,
    }, {
        path: '/addBook',
        name: 'AddBook',
        component: AddBookFormComponent,
    }, {
        path: '/books/:title',
        name: 'BookDetails',
        component: BookDetailsComponent,
    },
    ],
});

router.beforeEach((to, from, next) => {
    console.log('===>Before each router');
    next(true);
});

export default router;