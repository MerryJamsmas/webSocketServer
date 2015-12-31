module.exports = function(grunt) {

  grunt.initConfig({
    httpServer: {
      port: 3000,
      callback: function () {
        grunt.log.writeln("Web server listening on port " + this.port + ".")
      }
    },
    watch: {

    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("webServer", "Start the web server", function () {
    var
      httpServer = require("./app/http-server"),
      app = require("./app/app");

    config = {
      webSockets: require("./app/web-sockets"),
      httpServer: grunt.config("httpServer")
    };

    config.app = app(config);
    httpServer(config);
  });

  grunt.registerTask("default", ["webServer", "watch"]);
}
