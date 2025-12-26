---
layout: layout.liquid
title: Join!
lang: en
---

# Join

I'm so glad you wanna join! Please read the rules before doing so:

## Rules

- Your website has to be customizable enough for you to add the navigation links. As long as the website allows you to link your own links, you can do it! If you're not sure, just join anyways and we'll see.
- Have at least 1 OC on your website.
  - If you have exactly 1 OC, please make sure it's not just a self-introduction of yourself.
- Both original characters and fan characters are welcome. [See here](/en/about/) for my speech-like paragraph on what I consider an OC. if you're still not sure, just join anyways!
- Character info has to be hosted on your site itself. Which means, a collection of Toyhouse or Artfight links does not count. And if all you have is an art gallery that doesn't count either.
- No hateful content on any part of your site (not just the character part). This is becoming some sort of internet amulet.
- If your site features artwork not made by you, make sure you have permission to use it, and properly credit the original artist according to their permissions. Same goes for AI art, mark it clearly.
- Both Chinese and English sites are welcome. I just have to be able to understand what's written on there to make sure there's nothing against the rules. So a little bit of other languages is fine, but the main language has to be one of these two. IDK if I'm open to people speaking more languages to help though. I'll think about it.
- Please add the widget first before joining!
- And finally, it should go without saying that I have the right to refuse any entry if it makes me uncomfortable. This hasn't happened yet and I hope it wont!

## How to join

You can either straight up open a pull request in the github repo, or fill out a form.

### Open a PR

If you know JSON, you can edit [this file](https://github.com/Tofutush/oc-webring/blob/main/_data/sites.json) in the Github repo. The template is in the README file.

### Form

Fill out this form:

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScoA00ADtbuLFsfY9MOCebgei40PBo3zckfIOVyzQyjCY3-GA/viewform?embedded=true" width="800" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

After you've submitted either the PR or the form, you can add the widget to your site.

## Widget

```html
<div id="oc-webring-widget">
    <div id="oc-webring-title"><a href="https://tofutush.github.io/oc-webring">OC Webring</a></div>
    <div id="oc-webring-controls">
        <a href="https://tofutush.github.io/oc-webring/prev/?site=YOUR_SITE_NAME">Previous</a>
        <a href="https://tofutush.github.io/oc-webring/rand/?site=YOUR_SITE_NAME">Random</a>
        <a href="https://tofutush.github.io/oc-webring/next/?site=YOUR_SITE_NAME">Next</a>
    </div>
</div>
```

Replace YOUR_SITE_NAME *exactly* as you wrote it, spaces and all!

You can add the following CSS to your site too -- or customize it however you like.

```css
#oc-webring-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: fit-content;
  gap: 1em;
  border: 4px solid #e56b6f;
  padding: 1em;
  border-radius: 12px;
}
#oc-webring-title {
  font-weight: bold;
}
#oc-webring-controls {
  display: flex;
  gap: 1em;
}
```

### Links

If you can't put the widget exactly like that, then including these three links and the button works too:

```html
<a href="https://tofutush.github.io/oc-webring/prev/?site=YOUR_SITE_NAME">Previous</a>
<a href="https://tofutush.github.io/oc-webring/rand/?site=YOUR_SITE_NAME">Random</a>
<a href="https://tofutush.github.io/oc-webring/next/?site=YOUR_SITE_NAME">Next</a>
```
