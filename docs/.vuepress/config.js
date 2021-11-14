module.exports = {
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