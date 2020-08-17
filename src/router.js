import Vue from 'vue'
import Router from 'vue-router'

import DefaultPage  from "@/components/DefaultPage";
import guide from "@/components/guide";
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'DefaultPage',
            component:DefaultPage
        },
        {
            path:'/guide',
            name:'guide',
            component: guide
        }
    ]
    }
)