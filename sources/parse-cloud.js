Parse.Cloud.define("hello", function(req, res) {
  console.log("Hello my dear");
});

Parse.Cloud.job("HelloJob", function(req, status) {
  status.message("Hello My Dear Job!");
});
