const consolePage   = (resolve: any) => (<any>require).ensure([], () => resolve(require("views/consoles/consoles.vue")), "consoles");
const view          = (resolve: any) => (<any>require).ensure([], () => resolve(require("common/layouts/view.vue")), "view");

export default
[
    {
        path: "/consoles",
        redirect: "/consoles/home",
        name: "consoles",
        component: view,
        children:
        [
            {
                path: "home",
                name: "consoles-home",
                component: consolePage
            }
        ]
    }
];
