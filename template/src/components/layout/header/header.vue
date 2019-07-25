<template>
    <!-- <i-header class="layout-header"> -->
    <i-header class="layout-header">

        <h1 class="layout-header-textlogo" @click="toHome">
            <i class="iconfont icon-wayto"></i>
            <%_ if (options.chineseName) { _%>
                <%= options.chineseName %>
            <%_ } _%>
        </h1>
        
        <aside class="layout-header-side">
            
            <!-- 消息通知隐藏 -->
            <!-- <u-tip-box></u-tip-box> -->
            
            <i-row class="layout-header-user" type="flex" justify="end" align="middle">
                <i-avatar class="user-avatar ml20" v-if="user.filePath" :src="user.filePath | imagePath" icon="person">{{surname}}</i-avatar>
                <i-avatar class="user-avatar ml20" v-else :src="require('assets/default-user.jpg')">{{surname}}</i-avatar>
                
                <i-dropdown trigger="click" placement="bottom-end" @on-click="onDropdownClick">
                    <a class="username" href="javascript:void(0)">
                        <span>{{ user.realname || user.username }} </span>
                        <i-icon type="md-arrow-dropdown @white-color" />
                        <!-- <i class="iconfont icon-arrow-down"></i> -->
                    </a>
                    <i-dropdown-menu class="user-options-dropdown" slot="list">
                        <!-- <i-dropdown-item name="update-profile">资料维护</i-dropdown-item> -->
                        <!-- <i-dropdown-item name="me-dynamic-tab">我的动态</i-dropdown-item> -->
                        <i-dropdown-item name="update-password">修改密码</i-dropdown-item>
                        <!-- <i-dropdown-item name="logout" divided>安全退出</i-dropdown-item> -->
                        <i-dropdown-item name="logout">安全退出</i-dropdown-item>
                    </i-dropdown-menu>
                </i-dropdown>
            </i-row>
        </aside>
    </i-header>
</template>

<script lang="ts">
import { IUserProfile } from "models/index";
import { component, config, Component } from "uxmid-web";

const isDebug = process.env.NODE_ENV === "development";

/**
 * 表示一个公共头部组件。
 * @class
 * @version 1.0.0
 */
@component
export default class Header extends Component
{
    /**
     * 获取或设置用户信息。
     * @public
     * @config
     * @returns IUserProfile
     */
    @config({required: true, type: Object})
    public user: IUserProfile;

    /**
     * 获取用户的姓氏。
     * @protected
     * @property
     * @returns string
     */
    protected get surname(): string
    {
        return this.user.realname && this.user.realname.substring(0, 1);
    }

    /**
     * 当点击用户下拉选项时调用。
     * @protected
     * @param  {string} name 选项名称。
     * @returns void
     */
    protected onDropdownClick(name: string): void
    {
        const eventName = `on-${name}`;

        if(name === "update-password")
        {
            this.$router.push({ name: "user-me-dynamic", query: { tabName: "userPassword" }});
        }
        else if(name === "me-dynamic-tab")
        {
            this.$router.push({ name: "user-me-dynamic", query: { tabName: "meDynamicTab" }});
        }
        else
        {
            this.$emit(eventName);
        }
    }

    /**
     * 返回Saas首页。
     * @protected
     * @returns {void}
     */
    protected toHome(): void
    {
        this.$router.push("/home");
    }
}
</script>

<style lang="less" scoped>
    @import "./header";
    .drop-arrow
    {
        width: 10px;
    }
</style>
