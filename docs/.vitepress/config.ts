import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/laravel-splade-study/",
    title: "Laravel splade 学习",
    description: "Laravel splade 学习记录",
    lastUpdated: true,
    head: [
        //
    ],
    themeConfig: {
        logo: "/images/logo.svg",
        siteTitle: "",
        outlineTitle: "章节导航",
        outline: 'deep',
        lastUpdatedText: "最后更新时间",
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: "https://github.com/curder/laravel-splade-study/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/laravel-splade-study'}
        ],
        nav: nav(),
        sidebar: {}
    }
});

function nav() {
    return [
        {text: '安装', link: '/guide/install', activeMatch: '/guide/install'},
    ];
}
