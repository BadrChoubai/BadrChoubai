module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/robots.txt", '/robots.txt')

	// Universal Shortcodes (Adds to Liquid, Nunjucks, JavaScript, Handlebars)
	eleventyConfig.addShortcode("post", function (postData) {
		return `<li class="post">
		${postData.title} - ${postData.date}
	</li>`;
	});


	return {
		templateFormats: [
			"md",
			"njk",
		],
		dir: {
			input: "src",
			output: "_site"
		}
	}
}
