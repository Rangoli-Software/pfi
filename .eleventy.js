const htmlmin = require("html-minifier");
const terser = require("terser");

module.exports = function(eleventyConfig) {
eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
//          removeScriptTypeAttributes: true,
//          removeStyleLinkTypeAttributes: true,
          minifyJS: (text, inline) => {return terser.minify(text,{}).code},
          minifyCSS: true
      });
      return minified;
    }
    if( outputPath.endsWith(".js") ) {
      return terser.minify(content,{}).code;
    }
    return content;
  });

return {
    templateFormats: [
        "ejs",
        "html",
        "css",
        "jpg",
        "ttf",
        "woff",
        "woff2",
        "png",
        "svg",
        "js",
        "toml"
    ],
    htmlTemplateEngine: "ejs",
    passThroughFileCopy: true
};    
}
