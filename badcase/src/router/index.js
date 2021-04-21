import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login/login.vue'
import Home from '@/views/home/home.vue'
import Files from '@/views/files/files.vue'
import Website from '@/views/website/Website.vue'
import Policy from '@/views/policy/Policy.vue'
import AddWebsite from '@/views/website/AddWebsite.vue'
import BaseUplode from '@/views/policy/baseUplode.vue'
import FaceRepeat from '@/views/policy/faceRepeat.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name:'home',
      path: '/',
      redirect: '/policy',
      component: Home,
      children:[{
        name:'website',
        path:'website',
        component:Website
      },{
        name:'policy',
        path:'policy',
        component:Policy
      },
      {
        name:'baseUplode',
        path:'baseUplode',
        component:BaseUplode
      },
      {
        name:'faceRepeat',
        path:'faceRepeat',
        component:FaceRepeat
      },
      {
        name:'addWebsite',
        path:'addWebsite',
        component:AddWebsite,
      },
      {
        name:'files',
        path: 'files',
        component: Files
       
      },
    ]
    },
    // {
    //   name:'login',
    //   path: '/login',
    //   component: Login
     
    // },
    
    
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = sessionStorage.getItem('token');
      console.log('全局守卫token：'+token)
    if (token === null || token === '') {
    
      //console.log('验证失败token：')
      alert('请先登录');
      next('/login');
      
    } else {
      next();
    }
  }
});
 
export default router;
