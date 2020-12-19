const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\costa\\portfolio2020\\.cache\\dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\costa\\portfolio2020\\src\\pages\\About.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\costa\\portfolio2020\\src\\pages\\Contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\costa\\portfolio2020\\src\\pages\\index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("C:\\Users\\costa\\portfolio2020\\src\\pages\\Projects.js")))
}

