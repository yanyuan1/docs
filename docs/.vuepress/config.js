module.exports = {

    plugins: [
        [
            '@vuepress/plugin-search',
            {
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
                text: 'about',
                children: [{text:'about' ,link:'/about' },
                    {text:'food',link: '/food'}],
            },




        ],
        logo: '/assets/img/logo.png',
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ],
        search: false,
        searchMaxSuggestions: 10

    }

}