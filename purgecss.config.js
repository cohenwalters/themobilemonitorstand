module.exports = {
content: ['./index.html', './js/script.js'],
css: ['./css/styles_original.css'],
safelist: ['modal', 'show', /^dropdown/, /^carousel/,
    /^fade/,
    /^slide/,
    /^active/,
    /^show/,
    /^collapsing/,
    /^collapse/,
    /^in$/,
    /^out$/,
    /^modal/,
    /^tooltip/,
    /^popover/],
output: './result2'
}
