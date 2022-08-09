import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue")
      
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue"),
      children: [
        {
          path: "/favor",
          redirect: "/favor/collect"
        },
        {
          path: "/favor/collect",
          component: () => import("@/views/favor/cpns/favor-collect.vue")
        },
        {
          path: "/favor/browse",
          component: () => import("@/views/favor/cpns/favor-browse.vue")
        }
      ]
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue")
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue"),
      meta: {
        hiddenTabBar: true
      }
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
      // 控制是否隐藏tab-bar
      meta: {
        hiddenTabBar: true
      }
    },
    {
      path: "/search",
      component: () => import("@/views/search/search.vue"),
      meta: {
        hiddenTabBar: true
      }
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/detail/detail.vue"),
      meta: {
        hiddenTabBar: true
      }
    }
  ]
})

export default router