const path = require('path');

module.exports = {
    title: 'EVM Tutorial',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    tutorial: {
        title: 'EVM Tutorial',
        description: 'In this tutorial, you will learn how to use the EVM in IOTA.',
        preview: 'evm-tutorial.png',
        website: 'evm-tutorial/intro',
        source: 'https://github.com/dr-electron/tutorial-template',
        tags: ['text'],
    },
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'evm-tutorial',
                path: path.resolve(__dirname, './docs'),
                routeBasePath: 'evm-tutorial',
                sidebarPath: path.resolve(__dirname, './sidebars.js'),
                editUrl: 'https://github.com/Dr-Electron/tutorial-template/edit/main/',
            },
        ],
    ],
    staticDirectories: [path.resolve(__dirname, './images')],
};