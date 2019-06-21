/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Copyright (C) 2018-present O&M Cloud Inc. All rights reserved. 
 */
import consoles from "./modules/console";
import error from "./modules/error";

const login         = (resolve: any) => (<any>require).ensure([], () => resolve(require("views/login.vue")), "views");
const admin         = (resolve: any) => (<any>require).ensure([], () => resolve(require("views/admin.vue")), "views");

const routes =
[
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/home",
        redirect: "/consoles"
    },
    {
        name: "login",
        path: "/login",
        component: login
    },
    {
        name: "admin",
        path: "/admin",
        redirect: "/consoles",
        component: admin,
        children:
        [
            ...consoles
        ]
    },
    // 放在结尾是因为404监听了 ‘/*’ 路径，这个放前面会影响路由跳转
    ...error
];

export default routes;
