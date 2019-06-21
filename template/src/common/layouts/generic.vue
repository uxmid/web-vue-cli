<template>
    <i-layout class="layout-generic ivu-layout-has-sider">
        <u-sidebar class="layout-sidebar"></u-sidebar>
        
        <i-content class="layout-generic-content">
            <slot>
                <!-- <transition name="fade" mode="out-in"> -->
                    <router-view></router-view>
                <!-- </transition> -->
            </slot>
        </i-content>
    </i-layout>
</template>

<script lang="ts">
import { component, Component } from "flagwind-web";
import Sidebar from "components/layout/sidebar";

/**
 * 表示一个包含头部和侧边条的布局母版。
 * @class
 * @version 1.0.0
 */
@component({components: {"u-sidebar": Sidebar}})
export default class GenericLayout extends Component
{
    
}
</script>