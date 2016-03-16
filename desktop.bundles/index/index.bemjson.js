module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' },
        { elem : 'css', url : 'https://fonts.googleapis.com/css?family=Merriweather:900italic' },
        { elem : 'css', url : 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    // mods : { theme : 'islands' },
    content : [
        {
            block : 'header',
            content : [
                {
                    block : 'row',
                    content : [
                        {
                            elem : 'col',
                            elemMods : { sw : 12, mw : 12, lw : 12, xl : 12, xxl : 12 },
                            content : [
                                {
                                    block : 'logo',
                                    content : 'take'
                                },
                            ]
                        },
                        {
                            elem : 'col',
                            elemMods : { sw : 12, mw : 8, lw : 5, xl : 5, xxl : 5 },
                            content : [
                                {
                                    block : 'caption',
                                    content : [
                                        {
                                            elem : 'header',
                                            content : 'Picture perfect'
                                        },
                                        {
                                            elem : 'text',
                                            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
