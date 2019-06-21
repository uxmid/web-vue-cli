<template>
    <div class="v-login" @keyup.enter="onSubmit">
        <div class="v-login-box">
            <h1></h1>
            <!-- <h2>重点设备保障管理系统</h2> -->
            <i-form ref="loginForm" :model="model" :rules="rules" @submit.prevent>
                <i-form-item class="login-item" prop="username">
                    <i-icon class="icon-people" type="md-person" />
                    <i-input class="login-input" type="text" v-model="model.username" placeholder="用户名"></i-input>
                </i-form-item>
                <i-form-item class="login-item" prop="password">
                    <i-icon class="icon-lock" type="md-lock" />
                    <i-input class="login-input" :type="passwordType" v-model="model.password" placeholder="密码"></i-input>
                    <i-icon class="eye" :type="showPassword ? 'md-eye-off' : 'md-eye'" @click="showPassword = !showPassword" />
                </i-form-item>
                <i-form-item>
                    <i-button class="login-btn" :loading="isHandling" type="primary" @click="onSubmit" long>
                        <template v-if="!isHandling">登录</template>
                        <template v-else>登录中...</template>
                    </i-button>
                </i-form-item>
            </i-form>
        </div>
    </div>
</template>

<script lang="ts">
import { Form } from "iview";
import { component, View } from "flagwind-web";
import { ILoginModel } from "src/models";
import { UserService } from "services/index";
import globalConfig from "common/config/global";

import text from "utils/text";

/**
 * 登录视图。
 * @class
 * @version 1.0.0
 */
@component
export default class LoginView extends View
{
    private _userService: UserService;                      // 用户服务

    /**
     * 是否显示密码
     * @member
     * @protected
     * @returns boolean
     */
    protected showPassword: boolean = false;

    /**
     * 防止重复点击
     * @member
     * @protected
     * @returns boolean
     */
    protected isHandling: boolean = false;

    /**
     * 获取或设置视图使用的模型实例。
     * @member
     * @protected
     * @returns ILoginModel
     */
    protected model: ILoginModel =
    {
        username: "",
        password: ""
    };
    
    /**
     * 获取或设置视图使用的模型验证规则。
     * @member
     * @protected
     * @returns any
     */
    protected rules: any =
    {
        username:
        [
            {
                required: true,
                message: "请输入用户名",
                trigger: "blur"
            }
        ],
        password:
        [
            {
                required: true,
                message: "请输入密码",
                trigger: "blur"
            }
        ]
    };

    /**
     * 获取或设置密码输入框类型
     * @member
     * @protected
     * @returns string
     */
    protected get passwordType(): string
    {
        return this.showPassword ? "text" : "password";
    }
    
    /**
     * 获取或设置用户服务实例。
     * @member
     * @protected
     * @returns UserService
     */
    protected get userService(): UserService
    {
        if(!this._userService)
        {
            this._userService = this.serviceProvier.resolve<UserService>(UserService);
        }

        return this._userService;
    }

    /**
     * 当提交登录表单时调用。
     * @protected
     * @param  {MouseEvent} e 鼠标事件参数。
     * @returns void
     */
    protected onSubmit(e: MouseEvent): void
    {
        let $form = this.$refs.loginForm as Form;

        $form.validate(async(isValid: boolean) =>
        {
            if(isValid)
            {
                if(!this.isHandling)
                {
                    this.isHandling = true;
                }
                
                try
                {
                    // 调用服务开始登录
                    await this.userService.login(this.model);

                    this.$router.push({path: "/home"});
                }
                catch(error)
                {
                    // 403比较特殊，账号没有权限和账号密码错误都是这个状态码，
                    if(error && error.message)
                    {
                        if (error.message.indexOf("禁用") > -1 || error.message.indexOf("无效的身份标识。") > -1)
                        {
                            this.$message.error(text["response.unauthorized"]);
                        }
                        else if(error.message.indexOf("无效的密码。") > -1)
                        {
                            this.$message.error(text["response.invalidPwd"]);
                        }
                        else
                        {
                            this.$message.error(error.message);
                        }

                    }
                    else
                    {
                        this.$message.error(text["response.invalidPwd"]);
                    }
                }
                finally
                {
                    this.isHandling = false;
                }
            }
        });
    }
}
</script>

<style lang="less">
    @import "~styles/views/login";
</style>
