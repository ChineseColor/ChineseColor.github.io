var cmd = require('node-cmd');
var watch = require('watch');

watch.watchTree('./style/less', function (f, curr, prev) {
    cmd.run("lessc style/less/main.less style/main.min.css -x")

    if (typeof f == "object" && prev === null && curr === null) {
        // Finished walking the tree
    } else if (prev === null) {
        // f is a new file
    } else if (curr.nlink === 0) {
        // f was removed
    } else {
        // f was changed
    }
})

console.log("Server running on http://localhost:4190 ")
cmd.run('browser-sync start --server --port 4190 --files "**/*.css" "**/*.html" "**/*.js"')
