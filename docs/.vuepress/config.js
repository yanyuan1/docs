module.exports = {

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US',
            title: 'yang  Blog ',
            description: 'this is my first blog site',
            data:'2021-11-14',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '杨远的Blog ',
            description: '这是我的第一个博客 站点',
            data:'2021-11-14',
        },
    },

    plugins: [

        [
            '@vuepress/plugin-search',
            {
                //排除首页搜索
                isSearchable: (page) => page.path !== '/',
                // 允许搜索 Frontmatter 中的 `tags`
                getExtraFields: (page) => page.frontmatter.tags ?? [],
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
            },
        ],

        [
            'vuepress-plugin-typescript',
            {
                tsLoaderOptions: {
                    // ts-loader 的所有配置项

                },
            },
        ],

        [
            'vuepress-plugin-zooming',
            {
                delay: 500,
                options: {
                    bgColor: 'black',
                    zIndex: 10000,
                },
            },
        ],

    ],


    themeConfig: {

        navbar: [
            // NavbarItem
            {
                text: 'home',
                link: '/',
            },
            // NavbarGroup
            {
                text: '功能',
                children: [{text:'about' ,link:'/about' },
                    {text:'food',link: '/food'},
                    {text:'make',link: '/make'}
                ],
            },

            { text: 'TimeLine', link: '/timeline/', icon: 'rec-date' }

        ],
        logo: 'images/logo.png',
        sidebar: [
            'about',
            'food',
            ['/page-b', 'Explicit link text']
        ],


        locales: {
            '/': {
                selectLanguageName: 'English',
            },
            '/zh/': {
                selectLanguageName: '简体中文',
            },
        },

    }

}