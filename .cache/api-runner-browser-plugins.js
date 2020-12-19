module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-react-redux/gatsby-browser.js'),
      options: {"plugins":[],"pathToCreateStoreModule":"./src/redux/createStore","serialize":{"space":0,"isJSON":true,"unsafe":false,"ignoreFunction":true}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
