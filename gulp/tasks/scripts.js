const gulp = require("gulp");
const webpack = require("webpack");

gulp.task("scripts", callback => {
  webpack(require("../../webpack.config"), (err, stats) => {
    if (err) {
      console.error(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
