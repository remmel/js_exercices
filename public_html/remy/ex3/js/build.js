//3 modes: no node, r.js only require.js, r.js to build, grunt to watch.
//install:
//sudo apt-add-repository ppa:chris-lea/node.js (to get last version of node)
//apt-get install node npm
//npm config set registry http://registry.npmjs.org/
//sudo npm install -g requirejs
//use:
//r.js -o /home/remmel/wed/data/ws/js_exercices/public_html/remy/ex3/js/build.js

({
    mainConfigFile: "main.js",
    name: "main",
    paths: {
        requireLib: "lib/require"
    },
    include: "requireLib",
    out: "dist/ex3.js",
    preserveLicenseComments: false, //needed to have the sourceMap
    generateSourceMaps: true, //needed to have the sourceMap
    optimize: 'uglify2' //needed to have the sourceMap
})
