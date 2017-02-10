var express = require('express');
var ParseServer = require('../parse-server').ParseServer;
var ParseDashboard = require('../parse-dashboard');
var app = express();

var api = new ParseServer({
  databaseURI: "mongodb://localhost:27017/dev",
  cloud: "/srv/parse-cloud/main.js",
  appId: "V_APPID",
  masterKey: "V_APIKEY",
  serverURL: "http://localhost:1337/api/parse",
});

// Serve the Parse API on the /parse URL prefix
app.use('/api/parse', api);

var allowInsecureHTTP = true;

var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "http://V_SERVER_ADDRESS:1337/api/parse",
      "appId": "V_APPID",
      "masterKey": "V_APIKEY",
      "appName": "V_APPNAME"
    }
  ],
  "users": [
    {
      "user":"admin",
      "pass":"admin",
      "apps":[{"appId":"V_APPID"}]
    }
  ]
}, allowInsecureHTTP);

app.use('/', dashboard);

app.listen(1337, function() {
  console.log('parse-server running on port 1337.');
});
