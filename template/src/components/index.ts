/*!
 * Authors:
 *      Evan <skcy@vip.qq.com>
 * 
 * Copyright (C) 2018-present O&M Cloud Inc. All rights reserved. 
 */

// business
import * as business from "./business";

// common
import * as common from "./common";

// layout
import lHeader from "./layout/header";
import lSidebar from "./layout/sidebar";

// function components 函数式组件 参考 https://cn.vuejs.org/v2/api/#render 用来解决render的实现
import renderCell from "./render";

const components =
{
    ...business,
    ...common,
    lHeader,
    lSidebar,
    renderCell
};

// tslint:disable-next-line:variable-name
export function install(Vue: any, opts: any = {})
{
    Object.keys(components).forEach(key =>
    {
        Vue.component(key, components[key]);
    });
}

export default { ...components, install };
