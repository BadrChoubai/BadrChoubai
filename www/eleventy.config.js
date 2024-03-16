const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	// Universal Shortcodes (Adds to Liquid, Nunjucks, JavaScript, Handlebars)
	eleventyConfig.addShortcode("post", function (postData) {
		return `<li class="post"><a href="${postData.url}">${postData.title}</a></li>`;
	});

	eleventyConfig.addPassthroughCopy("src/robots.txt", "/robots.txt");

	eleventyConfig.addPlugin(syntaxHighlight);

	return {
		dir: {
			input: "src",
			output: "_site",
		},
		pathPrefix: "/",
		templateFormats: ["md", "njk"],
	};
};
