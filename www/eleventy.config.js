module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/robots.txt", "/robots.txt");

	// Universal Shortcodes (Adds to Liquid, Nunjucks, JavaScript, Handlebars)
	eleventyConfig.addShortcode("post", function (postData) {
		return `<li class="post">
		<a href="${postData.url}">${postData.title}</a>
	</li>`;
	});

	return {
		dir: {
			input: "src",
			output: "_site",
		},
		pathPrefix: "/",
		templateFormats: ["md", "njk"],
	};
};
