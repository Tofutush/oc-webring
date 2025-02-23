import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { EleventyI18nPlugin } from "@11ty/eleventy";
import { minify } from 'html-minifier-terser';
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from "markdown-it-anchor";
import pinyin from 'chinese-to-pinyin';

export default function (eleventyConfig) {
    eleventyConfig.setQuietMode(true);
    const slug = s => pinyin(s.toString().trim().toLowerCase(), { removeTone: true, keepRest: true }).replace(/\s+/g, '-').replace(/-+/g, '-');
    const mdIt = MarkdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(MarkdownItAnchor, { slugify: slug });
    eleventyConfig.setLibrary("md", mdIt);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: 'en'
    });
    eleventyConfig.addPassthroughCopy('_data');
    eleventyConfig.addPassthroughCopy('fonts');
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addFilter('slug', slug);
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