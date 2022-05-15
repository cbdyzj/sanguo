import LevelExperienceTable from './components/LevelExperienceTable.js'

Object.assign(window.$docsify, {
    name: '🔥三国攻略',
    loadSidebar: 'sidebar.md',
    alias: {
        '/.*/sidebar.md': '/sidebar.md'
    },
    auto2top: true,
    executeScript: true,
    maxLevel: 3,
    subMaxLevel: 3,
    search: {
        depth: 3,
        noData: '无结果!',
        placeholder: '搜索...'
    },
    vueComponents: {
        'level-experience-table': LevelExperienceTable,
    },
})