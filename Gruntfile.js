module.exports = function(grunt) {
    grunt.initConfig({
        compress: {
            chrome: {
                options: {
                    mode: "zip",
                    archive: "inspector-clouseau.zip",
                    pretty: true
                },
                files: [{
                    expand: true,
                    src: ["manifest.json", "icon.png", "devtools.html", "devtools.js"]
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-compress");

    grunt.registerTask("default", ["build"]);
    grunt.registerTask("build", ["compress:chrome"]);
};