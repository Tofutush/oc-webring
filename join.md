---
layout: layout.vto
title: Join!
---

# Join

I'm so glad you wanna join! Please read the rules before doing so:

## Rules

- Your website has to be hand-made to a certain degree. If you're actually here though I suppose it already fits the criteria! Site builders like Carrd, Wix, etc. do not count. Feel free to include them as your personal URL or additional URLs though.
- Have at least 1 OC on your website.
  - If you have exactly 1 OC, please make sure it's not just a self-introduction of yourself.
- Both original characters and fan characters are welcome. [See here](/en/about/) for my speech-like paragraph on what I consider an OC. if you're still not sure, just join anyways!
- Character info has to be hosted on your site itself. Which means, a collection of Toyhouse or Artfight links does not count. And if all you have is an art gallery with no individual character info, that doesn't count either.
- No hateful content on any part of your site (not just the character part). This is becoming some sort of internet amulet.
- If your site features artwork not made by you, make sure you have permission to use it, and properly credit the original artist according to their permissions. Same goes for AI art, mark it clearly.
- Both Chinese and English sites are welcome. All I really get are English sites LOL.
- Please add the widget first before joining!
- And finally, it should go without saying that I have the right to refuse any entry if it makes me uncomfortable. This hasn't happened yet and I hope it wont!

### NSFW sites

I accept NSFW sites, and they are:

- Listed separately. The page is accessible from the homepage, but requires JS to function.
- Not included in the main linked ring. That means you don't have to add the widget to your site; a link to this site would suffice.
- Not accessible from tag pages. This means that clicking on their tags might lead to 404 pages, but I don't really care about this problem enough to fix it.
- If you're okay with that, the signup process is the same!

## How to join

You can either straight up open a pull request in the github repo, or fill out a form.

### Open a PR

If you know JSON, you can edit [this file](https://github.com/Tofutush/oc-webring/blob/main/_data/sites.json) ([this if you're NSFW](https://github.com/Tofutush/oc-webring/blob/main/_data/nsfwsites.json)) in the Github repo. The template is in the README file.

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
