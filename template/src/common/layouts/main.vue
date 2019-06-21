<template>
    <i-layout class="layout">
        <u-header :user="user" @on-logout="onLogout" @on-update-logs="onUpdateLogs" @on-update-profile="onUpdateProfile" @on-update-password="onUpdatePassword"></u-header>

        <b-fix-password-modal v-model="isUpdatePassword"></b-fix-password-modal>
        <div class="layout-context">
            <slot>
                <router-view></router-view>
            </slot>
        </div>
    </i-layout>
</template>

<script lang="ts">
import { component, Component } from "flagwind-web";
import flagwind from "flagwind-core";
import Broadcast = flagwind.Broadcast;
import BroadcastManager = flagwind.BroadcastManager;
import broadcasts from "config/broadcasts";
import { IUserProfile } from "models";
import Header from "components/layout/header";
/**
 * 表示一个包含头部的布局母版。
 * @class
 * @version 1.0.0
 */
@component({
    components:
    {
        "u-header": Header
    }
})
export default class MainLayout extends Component
{
    /**
     * 获取或设置一个布尔值，表示是否需要进行资料维护。
     * @protected
     * @member
     * @returns boolean
     */
    protected isUpdateProfile: boolean = false;

    /**
     * 获取或设置一个布尔值，表示是否需要进行资料维护。
     * @protected
     * @member
     * @returns boolean
     */
    protected isUpdateLogs: boolean = false;

    /**
     * 获取或设置一个布尔值，表示是否需要进行密码修改。
     * @protected
     * @member
     * @returns boolean
     */
    protected isUpdatePassword: boolean = false;

    /**
     * 获取当前用户的信息。
     * @protected
     * @property
     * @returns IUserProfile
     */
    protected get user(): IUserProfile
    {
        return this.$store.getters["user/profile"] || {};
    }

    /**
     * 当用户点击退出登录时调用。
     * @protected
     * @returns void
     */
    protected onLogout(): void
    {
        // 发送用户退出广播
        let broadcast = new Broadcast(broadcasts.USER_LOGOUT);
        // broadcast.extras.set("user", this.user);
        
        BroadcastManager.instance.send(broadcast);
    }

    /**
     * 当用户点击修改资料时调用。
     * @protected
     * @returns void
     */
    protected onUpdateProfile(): void
    {
        this.isUpdateProfile = true;
    }

    /**
     * 当用户点击修改密码时调用。
     * @protected
     * @returns void
     */
    protected onUpdatePassword(): void
    {
        this.isUpdatePassword = true;
    }

    /**
     * 当用户点击我的动态时调用。
     * @protected
     * @returns void
     */
    protected onUpdateLogs(): void
    {
        this.isUpdateLogs = true;
    }
}
</script>

<style lang="less">
    @import "~styles/index.less";
</style>
