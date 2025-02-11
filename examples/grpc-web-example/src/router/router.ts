import { createRouter, createWebHistory } from 'vue-router'
import EnterAuthToken from "../components/EnterAuthToken.vue";
 ;
import Layout from "../layout/Layout.vue";

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'token', 
                component: EnterAuthToken 
            },
            {
                path: 'portfolio', 
                component: ()=> import("../components/PortfolioTable.vue")
            },
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
  })