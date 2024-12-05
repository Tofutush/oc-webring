module.exports = async function (eleventyConfig) {
	const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPassthroughCopy('_data');
	eleventyConfig.addPassthroughCopy('css');
	eleventyConfig.addPassthroughCopy('js');
	eleventyConfig.addPassthroughCopy('fonts');
}