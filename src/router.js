import Vue from 'vue';
import { createRouter,createWebHashHistory, routerKey } from 'vue-router';
import main from "./components/main.vue";
import about from "./components/about.vue";
import number from "./components/number.vue";
import info from "./components/info.vue";
import errorCmp from "./components/errorCmp.vue";

// const about = resolve => {
//     require.ensure(['./components/about.vue'], () => {
//         resolve(require('./components/about.vue'))
//     })
// }
// This code for lazy loading...but do not work

    const router = createRouter({
        history: createWebHashHistory(),
        mode: 'history',
        routes: [
            {
            path: '/',
            component: main
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/number/:id',
            component: number,
            children: [
        {
            path: 'info',
            component: info,
        }
        ]
        },
        {
            path: '/none',
            redirect: '/'
        },
        {
            path: '/:pathMatch(.*)',
            component: errorCmp
        }

    ]
});
export default router


