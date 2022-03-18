const path = require('path');

module.exports = {
    title: 'EVM Tutorial',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
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
    staticDirectories: [path.resolve(__dirname, './static')],
};