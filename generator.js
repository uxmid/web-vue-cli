const fs = require("fs");

module.exports = (api, options, rootOptions) =>
{
    // 安装一些基础公共库以及项目内部库, 这里声明的会被合并到package.json，在preset.json里面也可以声明依赖，但是那边的都会放到 dependencies
    api.extendPackage({
        scripts:
        {
            "lint": "vue-cli-service lint",
            "dev": "vue-cli-service serve",
            "dll:base": "webpack -p --progress --config ./webpack.dll.base.conf.ts",
            "dll:other": "webpack -p --progress --config ./webpack.dll.conf.ts",
            "dll": "npm run dll:base & npm run dll:other",
            "modern": "vue-cli-service build --modern"
        },
        dependencies:
        {
            "flagwind-core": "^1.1.0",
            "flagwind-web": "^1.0.9",
            "md5": "^2.2.1",
            "iview": "^3.4.1",
            "axios": "^0.18.0",
            "dayjs": "^1.8.14",
            "cropperjs": "^1.5.1",
            "viewerjs": "^1.3.3"
        },
        devDependencies:
        {
            "webpack-aliyun-oss-plugin": "^2.1.0",
            "tslint-config-flagwind": "^1.0.1",
            "clean-webpack-plugin": "^1.0.1",
            "add-asset-html-webpack-plugin": "^3.1.3",
            "style-resources-loader": "^1.2.1",
            "vue-cli-plugin-style-resources-loader": "^0.1.3",
            "webpack-cli": "^3.3.4"
        }
    });

    if(options.echarts)
    {
        api.extendPackage({
            dependencies:
            {
                "flagwind-echarts": '^1.0.0'
            },
            devDependencies:
            {
                "@types/echarts": "^4.1.9",
            }
        });
    }

    if(options.map === "openlayer")
    {
        api.extendPackage({
            dependencies:
            {
                "ol": "^5.3.2"
            },
            devDependencies:
            {
                "@types/ol": "^4.6.5"
            }
        });
    }
    
    if(options.map === "amap")
    {
        api.extendPackage({
            dependencies:
            {
                "flagwind-amap": "^1.0.0"
            }
        });
    }

    // render是用ejs语法渲染文件，语法参考 https://ejs.bootcss.com/
    api.render("./template");

    // 创建完成后 重命名config.ts
    api.onCreateComplete(function()
    {
        return new Promise((resolve, reject) =>
        {
            fs.rename(api.resolve("public/static/config.ts"), api.resolve("public/static/config.js"), function(error)
            {
                error ? reject(error) : resolve();
            })
        });
    });
    
    // 创建完成后 删除文件
    api.onCreateComplete(function()
    {
        try
        {
            fs.unlinkSync(api.resolve("src/components/HelloWorld.vue"));
            fs.unlinkSync(api.resolve("src/views/About.vue"));
            fs.unlinkSync(api.resolve("src/views/Home.vue"));
            fs.unlinkSync(api.resolve("src/App.vue"));
            fs.unlinkSync(api.resolve("src/router.ts"));
            fs.unlinkSync(api.resolve("src/store.ts"));
            fs.unlinkSync(api.resolve("src/shims-tsx.d.ts"));
            fs.unlinkSync(api.resolve("src/shims-vue.d.ts"));

            return Promise.resolve();
        }
        catch (error)
        {
            return Promise.reject(error);
        }
    });
}