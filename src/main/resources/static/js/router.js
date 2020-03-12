import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/auth_views/Login.vue';
import Register from './views/auth_views/Register.vue';
import Profile from "./views/auth_views/Profile.vue";
import BoardStudent from "./views/BoardStudent.vue";
import BoardTeacher from "./views/BoardTeacher.vue";
Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/student',
            name: 'student',
            component: BoardStudent
        },
        {
            path: '/teacher',
            name: 'teacher',
            component: BoardTeacher
        },
    ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home', '/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});




