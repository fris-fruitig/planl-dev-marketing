const fs = require('fs-extra');

module.exports = {
  postBuild: function postBuild() {
    fs.copySync(
      `./assets`,
      `./public/`
    )
  }
};