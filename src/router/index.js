import {createWebHistory, createRouter} from 'vue-router'

import Login from '../views/Login.vue'
import MessagePage from '../views/messagepage/MessagePage.vue'
import Register from '../views/messagepage/Register.vue'
import FindPassword from '../views/messagepage/FindPassword.vue'
import ChangeMail from '../views/messagepage/ChangeMail.vue'
import ChangePhone from '../views/messagepage/ChangePhone.vue'
import PhoneReg from '../components/messagepage/PhoneReg.vue'
import MailReg from '../components/messagepage/MailReg.vue'
import RoomEntrance from '../views/RoomEntrance.vue'

const history = createWebHistory()

const router = new createRouter({
    history,
    routes:[
        {
            path:'/',
            redirect:'/login',
        },
        {
            path:'/login',
            name:'Login',
            component:Login,
            meta: { title:'登录一下', }
        },
        {
            path:'/messagepage',
            name:'MessagePage',
            component:MessagePage,
            meta: { title:'注册', },
            redirect:'/messagepage/register',
            children:[
                {
                    path:'register',
                    name:'Register',
                    component:Register,
                    meta: { title:'账号注册', },
                    redirect:'/messagepage/register/phonereg',
                    children:[
                        {
                            path:'phonereg',
                            name:'PhoneReg',
                            component:PhoneReg,
                        },
                        {
                            path:'mailreg',
                            name:'MailReg',
                            component:MailReg
                        }
                    ],
                },
                {
                    path:'findpassword',
                    name:'FindPassword',
                    component:FindPassword,
                    meta: {title:'找回密码'},
                },
                {
                    path:'changemail',
                    name:'ChangeMail',
                    component:ChangeMail,
                    meta: {title:'邮箱改绑'}
                },
                {
                    path:'changephone',
                    name:'ChangePhone',
                    component:ChangePhone,
                    meta: {title:'手机改绑'}
                }
            ],
        },
        {
            path:'/roomentrance',
            name:'RoomEntrance',
            component:RoomEntrance,
            meta: {title:'选择聊天的房间吧!'}
        }
    ],
})

router.beforeResolve((to, from, next) => {
    window.document.title = to.meta.title
    next()
})

export default router