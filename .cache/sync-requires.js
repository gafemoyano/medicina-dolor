// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/Felipe/Projects/medicina_dolor/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Felipe\\Projects\\medicina_dolor\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Felipe\\Projects\\medicina_dolor\\src\\pages\\index.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\Felipe\\Projects\\medicina_dolor\\.cache\\json\\layout-index.json"),
  "404.json": require("C:\\Users\\Felipe\\Projects\\medicina_dolor\\.cache\\json\\404.json"),
  "layout-index.json": require("C:\\Users\\Felipe\\Projects\\medicina_dolor\\.cache\\json\\layout-index.json"),
  "index.json": require("C:\\Users\\Felipe\\Projects\\medicina_dolor\\.cache\\json\\index.json"),
  "layout-index.json": require("C:\\Users\\Felipe\\Projects\\medicina_dolor\\.cache\\json\\layout-index.json"),
  "404-html.json": require("C:\\Users\\Felipe\\Projects\\medicina_dolor\\.cache\\json\\404-html.json")
}