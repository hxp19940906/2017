import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import Community from '@/components/Community'
import shop from '@/components/shop'
import my from '@/components/my'
import details from '@/components/details'
import up from '@/components/up'
import zhuce from '@/components/zhuce'

Vue.use(Router)
export default new Router({
	routes:[
	{
		path:'/',
		name:'index',
		component:index

	},
	    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    	    {
      path: '/shop',
      name: 'Shop',
      component: shop
    },
    	    {
      path: '/my',
      name: 'My',
      component: my
    },
              {
      path: '/details/:sb',
      name: 'details',
      component: details
    },
                  {
      path: '/up',
      name: 'up',
      component: up
    },
                      {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    }
    ]
})