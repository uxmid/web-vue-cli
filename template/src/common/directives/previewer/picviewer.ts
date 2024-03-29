import Viewer from "viewerjs";
import "viewerjs/dist/viewer.min.css";
import "./style.css";

/**
 * 未授权处理
 * @param el dom对象
 * @return void
 */
function createViewer(el): void
{
    el.viewerInstance && el.viewerInstance.destroy();
    setTimeout(() => el.viewerInstance = new Viewer(el));
}

/**
 * 图片放大预览。
 * @param el 绑定的dom对象
 * @param binding 绑定 的值
 * @returns void
 */
const previewer =
{
    bind(el, binding): void
    {
        // 添加鼠标样式。
        el.classList.add("v-preview-cursor");
        el.title = "点击查看大图";

        createViewer(el);
    },
    
    update(el, binding): void
    {
        createViewer(el);
    },

    unbind(el): void
    {
        el.viewerInstance && el.viewerInstance.destroy();
    }
};

export default previewer;
