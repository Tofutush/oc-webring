module.exports = async function (eleventyConfig) {
	const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");
	const { EleventyI18nPlugin } = await import("@11ty/eleventy");
	const { minify } = await import('html-minifier-terser');
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: 'en'
	});
	eleventyConfig.addPassthroughCopy('_data');
	eleventyConfig.addPassthroughCopy('fonts');
	eleventyConfig.addPassthroughCopy('img');
	eleventyConfig.addPassthroughCopy('css');
	eleventyConfig.addPassthroughCopy('js');
	eleventyConfig.addTransform("htmlmin", async function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = await minify(content, {
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true
			});
			return minified;
		}
		// If not an HTML output, return content as-is
		return content;
	});
}