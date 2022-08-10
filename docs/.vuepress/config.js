const { getChildren } = require('./utils/side.js');
const webMenu = [
    {
        title: 'HTTP',
        children: getChildren('./docs/web/HTTP/')
    },
    {
        title: "Vue",
        // path: '/Vue/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // sidebarDepth: 2,    // 可选的, 默认值是 1
        // collapsable: false, // 可选的, 默认值是 true,
        children: getChildren('./docs/web/Vue/')
    },
    {
        title: 'Tool',
        children: getChildren('./docs/web/Tool/')
    },
    {
        title: 'Code',
        children: getChildren('./docs/web/Code/')
    },
    {
        title: 'JS',
        children: getChildren('./docs/web/JS/')
    },
];

const serveMenu = [];

module.exports = {
    title: '不如养猪',
    description: "",
    base: '/',
    port: '5678',
    themeConfig: {
        nav: [
            { text: '前端', link: '/web/', },
            { text: '后端', link: '/serve/' },
            {
                text: '知识库',
                items: [
                    { text: 'FAQ', link: '' },
                    { text: 'HowTo', link: '' }
                ]
            }
        ],
        sidebar: {
            '/web/': webMenu,
            '/serve/': serveMenu,
        },
        smoothScroll: true,// 开启页面滚动效果
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated',// 最后更新时间 基于.git
    }
};