module.exports = function(webServer, config) {
  "use strict";

    var http = require("http"),
        WebSocketServer = require('ws').Server,
        wss = new WebSocketServer({ server: webServer });

    wss.on("connection", function(ws) {

        //logger.info("web sockets opened.");

        ws.on("error", function(data) {
            //logger.error("web sockets error: " + data);
        });

        ws.on("close", function(data) {
            //logger.info("web sockets closed: " + data);
        });

        ws.on("message", function(msg) {
            var data = JSON.parse(msg);
            if (data.type === "log") {
                if (data.level === "error") {
                    //logger.error(data.source);
                }
                else if (data.level === "warn") {
                    //logger.warn(data.source);
                }
                else {
                    //logger.info(data.source);
                }
            }
        });

        ws.send(JSON.stringify({
            source: "WebSocket opened successfuly."
        }));
    });

    return webServer;
};
