module.exports = {
  pages: {
    options: {
      template: "public/browser-extension.html",
      entry: "./src/options/main.js",
      title: "Options"
    },
    index: {
      entry: "./src/main.js",
      title: "Web Launcher"
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: "src/background.js"
        },
        contentScripts: {
          entries: {
            "content-script": ["src/content-scripts/content-script.js"]
          }
        }
      }
    }
  }
};
