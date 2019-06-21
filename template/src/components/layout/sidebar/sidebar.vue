<template>
    <i-sider :width="58">
        <!-- <h1 class="layout-sidebar-logo" @click="toHome">大水坑智慧社区</h1> -->
        <!-- <h1 class="layout-header-textlogo">大水坑智慧社区</h1> -->
        <i-menu class="layout-sidebar-menu" :open-names="open" :active-name="activeName" @on-select="onMenuSelect" width="auto" :accordion="true" ref="menu">
            <i-menu-item name="consoles">
                <i class="iconfont icon-home"></i>
                首页
            </i-menu-item>
        </i-menu>
    </i-sider>
</template>

<script lang="ts">
import { component, Component, watch } from "flagwind-web";

import permissionCodes from "utils/permissions-code";
import index from "src/components";

/**
 * 表示一个公共侧边栏组件。
 * @class
 * @version 1.0.0
 */
@component
export default class Sidebar extends Component
{
    /**
     * 获取当前需要高亮的菜单路径。
     * @protected
     * @property
     * @returns string
     */
    protected get activeName(): string
    {
        let path: string = this.$route.path,
            paths: Array<string> = path.replace(/^\/\//, "").split("/");

        return paths[1];
    }

    /**
     * 获取和设置当前导航的打开窗口。
     * @protected
     * @property
     * @returns Array<string>
     */
    protected open: Array<string> = [];

    /**
     * 获取和设置展开当前菜单。
     * @protected
     * @property
     * @returns boolean
     */
    protected isCollapsed: boolean = false;
    
    /**
     * 权限集
     * @protected
     * @property
     * @returns Array<string>
     */
    protected permissionCodes: any = permissionCodes;

    /**
     * 当路由发生变化的时候操作。
     * @protected
     * @param {any} - to 当前路由实例。
     * @returns {void}
     */
    @watch("$route", {deep: true, immediate: true})
    protected updateOpen(to: any): void
    {
        let path: string = this.$route.path,
            paths: Array<string> = path.replace(/^\/waterleakage\//, "").split("/");
        
        this.open = [paths[0]];

        this.$nextTick(() => (this.$refs.menu as any).updateOpened());
    }

    /**
     * 当选择菜单项时调用。
     * @protected
     * @param  {string} path 菜单路径。
     */
    protected onMenuSelect(name: string): void
    {
        name !== this.$route.name && this.$router.push({ name });
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
    @import "./sidebar";
</style>
