module.exports = function (eleventyConfig) {
	// Universal Shortcodes (Adds to Liquid, Nunjucks, JavaScript, Handlebars)
	eleventyConfig.addShortcode("post", function (postData) {
		return `<li class="post"><a href="${postData.url}">${postData.title}</a></li>`;
	});

	eleventyConfig.addPassthroughCopy("src/robots.txt", "/robots.txt");

	return {
		dir: {
			input: "src",
			output: "_site",
		},
		pathPrefix: "/",
		templateFormats: ["md", "njk"],
	};
};
