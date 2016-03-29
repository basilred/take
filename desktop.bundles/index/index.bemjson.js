module.exports = {
    block : 'page',
    title : 'Take',
    favicon : 'favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' },
        { elem : 'css', url : 'https://fonts.googleapis.com/css?family=Merriweather:900italic' },
        { elem : 'css', url : 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
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
        },
        {
            block : 'row',
            content : [
                {
                    block : 'description',
                    content : [
                        {
                            block : 'image',
                            mix : [ { block : 'description', elem : 'pic' } ],
                            url : '../../common.blocks/description/__pic/description__pic.png'
                        },
                        {
                            elem : 'header',
                            content : [
                                'Start something new'
                            ]
                        },
                        {
                            elem : 'text',
                            content : [
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
                                'eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
                                'sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
                                'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
                                'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'cards',
            content : [
                {
                    block : 'card',
                    color : '#f5989d',
                    content : [
                        {
                            elem : 'header',
                            content : 'Design quality'
                        },
                        {
                            elem : 'text',
                            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut adipisicing.<br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        },
                        {
                            block : 'link',
                            mods : { pseudo : true },
                            content : [
                                {
                                    block : 'card',
                                    elem : 'link',
                                    content : [
                                        'Find Out more'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'card',
                    color : '#615f7d',
                    content : [
                        {
                            elem : 'header',
                            content : 'Built to last'
                        },
                        {
                            elem : 'text',
                            content : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        },
                        {
                            block : 'link',
                            mods : { pseudo : true },
                            content : [
                                {
                                    block : 'card',
                                    elem : 'link',
                                    content : [
                                        'Find Out more'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'card',
                    url : borschik.link('../../common.blocks/card/clients.jpg'),
                    content : [
                        {
                            elem : 'header',
                            content : 'Our clients'
                        },
                        {
                            elem : 'text',
                            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut adipisicing.'
                        },
                        {
                            block : 'link',
                            mods : { pseudo : true },
                            content : [
                                {
                                    block : 'card',
                                    elem : 'link',
                                    content : [
                                        'Get insights'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'card',
                    color : '#bd8cbf',
                    content : [
                        {
                            elem : 'header',
                            content : 'How to shoo great'
                        },
                        {
                            elem : 'text',
                            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut adipisicing.'
                        },
                        {
                            block : 'link',
                            mods : { pseudo : true },
                            content : [
                                {
                                    block : 'card',
                                    elem : 'link',
                                    content : [
                                        'Find Out more'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'cards',
            content : [
                {
                    block : 'card',
                    mods : { size : 'double' },
                    url : borschik.link('../../common.blocks/card/sign.jpg'),
                    content : [
                        {
                            elem : 'header',
                            content : 'Sign up & see why'
                        },
                        {
                            elem : 'text',
                            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut adipisicing.<br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        },
                        {
                            block : 'link',
                            mods : { pseudo : true },
                            content : [
                                {
                                    block : 'card',
                                    elem : 'link',
                                    content : [
                                        'Get Started Now'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'card',
                    color : '#82ca9c',
                    content : [
                        {
                            elem : 'header',
                            content : 'Perfect pictures'
                        },
                        {
                            elem : 'text',
                            content : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        },
                        {
                            block : 'link',
                            mods : { pseudo : true },
                            content : [
                                {
                                    block : 'card',
                                    elem : 'link',
                                    content : [
                                        'Find Out more'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'card',
                    // url : '../../common.blocks/card/start.jpg',
                    color : '#f5989d',
                    content : [
                        {
                            elem : 'header',
                            content : 'Start somthing new'
                        },
                        {
                            elem : 'text',
                            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut adipisicing.'
                        },
                        {
                            block : 'link',
                            mods : { pseudo : true },
                            content : [
                                {
                                    block : 'card',
                                    elem : 'link',
                                    content : [
                                        'Get insights'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'details',
            content : [
                {
                    elem : 'caption',
                    mix : [ { block : 'row' } ],
                    content : [
                        'A look at the details'
                    ]
                },
                {
                    elem : 'items',
                    mix : [ { block : 'row' } ],
                    content : [
                        {
                            block : 'details-item',
                            content : [
                                {
                                    elem : 'caption',
                                    content : [
                                        'Web based'
                                    ]
                                },
                                {
                                    elem : 'desc',
                                    content : [
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'details-item',
                            content : [
                                {
                                    elem : 'caption',
                                    content : [
                                        'Performance'
                                    ]
                                },
                                {
                                    elem : 'desc',
                                    content : [
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'details-item',
                            content : [
                                {
                                    elem : 'caption',
                                    content : [
                                        'Clultral'
                                    ]
                                },
                                {
                                    elem : 'desc',
                                    content : [
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'details-item',
                            content : [
                                {
                                    elem : 'caption',
                                    content : [
                                        'Sustainability'
                                    ]
                                },
                                {
                                    elem : 'desc',
                                    content : [
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'power',
            content : [
                {
                    block : 'row',
                    content : [
                        {
                            elem : 'col',
                            elemMods : { sw : 12, mw : 12, lw : 6 },
                            content : [
                                {
                                    block : 'card',
                                    mods : { power : true },
                                    content : [
                                        {
                                            elem : 'header',
                                            content : 'More power<br>behind every pixel.'
                                        },
                                        {
                                            elem : 'text',
                                            content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut adipisicing.<br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                        },
                                        {
                                            block : 'link',
                                            mods : { pseudo : true },
                                            content : [
                                                {
                                                    block : 'card',
                                                    elem : 'link',
                                                    content : [
                                                        'Get Started Now'
                                                    ]
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
        },
        {
            block : 'reasons',
            content : [
                {
                    block : 'details',
                    content : [
                        {
                            elem : 'caption',
                            mix : [ { block : 'row' } ],
                            content : [
                                'A look at the details'
                            ]
                        },
                        {
                            elem : 'items',
                            mix : [ { block : 'row' } ],
                            content : [
                                {
                                    block : 'details-item',
                                    content : [
                                        {
                                            elem : 'caption',
                                            content : [
                                                'Web based'
                                            ]
                                        },
                                        {
                                            elem : 'desc',
                                            content : [
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'details-item',
                                    content : [
                                        {
                                            elem : 'caption',
                                            content : [
                                                'Performance'
                                            ]
                                        },
                                        {
                                            elem : 'desc',
                                            content : [
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'details-item',
                                    content : [
                                        {
                                            elem : 'caption',
                                            content : [
                                                'Clultral'
                                            ]
                                        },
                                        {
                                            elem : 'desc',
                                            content : [
                                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'buying',
            content : [
                {
                    block : 'row',
                    content : [
                        {
                            block : 'buying-card',
                            mix : [ { block : 'row', elem : 'col', elemMods : { l : true } } ],
                            content : [
                                {
                                    block : 'label',
                                    content : [
                                        {
                                            elem : 'text',
                                            content : [
                                                'legacy'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'caption',
                                    content : [
                                        'Go it solo'
                                    ]
                                },
                                {
                                    elem : 'text',
                                    content : [
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    ]
                                },
                                {
                                    block : 'button',
                                    text : 'buy now $9'
                                },
                                {
                                    block : 'icons',
                                    content : [
                                        'apple', 'win'
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'buying-card',
                            mix : [ { block : 'row', elem : 'col', elemMods : { l : true } } ],
                            content : [
                                {
                                    block : 'label',
                                    mods : { popular : true },
                                    content : [
                                        {
                                            elem : 'text',
                                            content : [
                                                'Most Popular'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'caption',
                                    content : [
                                        'Team Plan'
                                    ]
                                },
                                {
                                    elem : 'text',
                                    content : [
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    ]
                                },
                                {
                                    block : 'button',
                                    text : 'buy now $18'
                                },
                                {
                                    block : 'icons',
                                    content : [
                                        'apple', 'win'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'footer',
            content : [
                {
                    block : 'row',
                    content : [
                        {
                            elem : 'col',
                            elemMods : { lw : 6 },
                            content : [
                                {
                                    block : 'footer',
                                    elem : 'caption',
                                    content : [
                                        'Get in touch'
                                    ]
                                },
                                {
                                    block : 'footer',
                                    elem : 'text',
                                    content : [
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    ]
                                },
                                {
                                    block : 'row',
                                    mix : [ { block : 'footer', elem : 'menu-stack' } ],
                                    content : [
                                        {
                                            elem : 'col',
                                            elemMods : { lw : 4 },
                                            content : [
                                                {
                                                    block : 'footer',
                                                    elem : 'caption',
                                                    content : [
                                                        'Resources'
                                                    ]
                                                },
                                                {
                                                    block : 'links',
                                                    content : [
                                                        'Tour', 'Customers', 'Pricing and Plans', 'New Features', 'Education'
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'col',
                                            elemMods : { lw : 4 },
                                            content : [
                                                {
                                                    block : 'footer',
                                                    elem : 'caption',
                                                    content : [
                                                        'Features'
                                                    ]
                                                },
                                                {
                                                    block : 'links',
                                                    content : [
                                                        'Tour', 'Customers', 'Pricing and Plans', 'New Features', 'Education'
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'col',
                                            elemMods : { lw : 4 },
                                            content : [
                                                {
                                                    block : 'footer',
                                                    elem : 'caption',
                                                    content : [
                                                        'How To\'s'
                                                    ]
                                                },
                                                {
                                                    block : 'links',
                                                    content : [
                                                        'Tour', 'Customers', 'Pricing and Plans', 'New Features', 'Education'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'col',
                            elemMods : { lw : 1 },
                            content : [

                            ]
                        },
                        {
                            elem : 'col',
                            elemMods : { lw : 5 },
                            content : [
                                {
                                    block : 'footer',
                                    elem : 'caption',
                                    content : [
                                        'Stay in touch'
                                    ]
                                },
                                {
                                    block : 'subscribe',
                                    content : [
                                        {
                                            elem : 'input',
                                            content : [
                                                {
                                                    block : 'input',
                                                    mix : [ { block : 'footer', elem : 'email' } ],
                                                    mods : { width : 'available' },
                                                    placeholder : 'Type e-mail here'
                                                },
                                            ]
                                        },
                                        {
                                            elem : 'button',
                                            content : [
                                                {
                                                    block : 'button',
                                                    mix : [ { block : 'footer', elem : 'email-button' } ],
                                                    icon : {
                                                        block : 'icon',
                                                        url : borschik.link('../../common.blocks/footer/__email-button/footer__email-button.svg')
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'text',
                                            content : [
                                                'We don\'t send spam. Actually, who are we kiding, we\'ll spam the shit out of your inbox.'
                                            ]
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
