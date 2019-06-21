/*!
 * @Author: Evan <skcy@vip.qq.com>
 * @Date:  2019-06-19 18:47:13
 * @version: 1.0.0
 * Copyright (C) 2018-2019 O&M Cloud Inc. All rights reserved. 
 */

/**
 * 全局配置
 * @version 1.0.0
 */

window.waytoSetting = {};

Object.defineProperties(window.waytoSetting,
{
    // API url
    apiServer:
    {
        value: "http://zhsq.wayto.com.cn:38001",
        writable: false,            // 不可改写值
        configurable: false         // 不能重新定义配置
    },
    // geoserver url
    geoServer:
    {
        value: "http://zhsq.wayto.com.cn:8880",
        writable: false,            // 不可改写值
        configurable: false         // 不能重新定义配置
    },
    // 地图apikey
    aMapKey:
    {
        value: "a7313eca70306f96eb6a3e6341a12355",              // 支持webapi服务
        // value: "5aa5737f70781c35d6ba21f5b2c53cc6",           // 地图
        writable: false,
        configurable: false
    }
});
