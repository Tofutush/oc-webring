---
layout: layout.liquid
title: Join!
lang: en
---

# Join

**THIS IS ONLY A DRAFT PAGE (THE ENTIRE WEBSITE IS A DRAFT) AND JOINING IS *NOT OPEN***

I'm so glad you wanna join! Please read the rules before doing so:

## Rules

- Your website has to be customizable enough for you to add the navigation links. As long as the website allows you to link your own links, you can do it! If you're not sure, just join anyways and we'll see.
  - That actually includes a lot of sites. MSPFA character logs are also welcome!
- Have at least 1 OC on your website.
  - If you have exactly 1 OC, please make sure it's not just a self-introduction of yourself.
- Character info has to be hosted on your site itself. Which means, a collection of Toyhouse links does not count. And if all you have is an art gallery that doesn't count either.
- Both original characters and fan characters are welcome. [See here](/about/) for my speech-like paragraph on what I consider an OC. if you're still not sure, just join anyways!
- No hateful content on any part of your site (not just the character part). This is becoming some sort of internet amulet.
- Both Chinese and English sites are welcome. I just have to be able to understand what's written on there to make sure there's nothing against the rules. So a little bit of other languages is fine, but the main language has to be one of these two. IDK if I'm open to people speaking more languages to help though. I'll think about it.

## How to join

You can either straight up open a pull request in the github repo, or fill out a form. Up to you.

### Open a PR

Edit [this file](https://github.com/Tofutush/oc-webring/blob/main/_data/sites.json) in the Github repo to include all the required info.

### Form

After you've submitted either the PR or the form, you can add the widget to your site.

## Widget

Full widget code with classes:

```html
<div id="oc-webring-widget">
    <div id="oc-webring-widget-title">OC Webring</div>
    <div>
        <a href="https://tofutush.github.io/oc-webring/prev/?site=YOUR_SITE_NAME">Previous</a>
        <a href="https://tofutush.github.io/oc-webring/rand/?site=YOUR_SITE_NAME">Random</a>
        <a href="https://tofutush.github.io/oc-webring/next/?site=YOUR_SITE_NAME">Next</a>
    </div>
</div>
```

Replace YOUR_SITE_NAME *exactly* as you wrote it, spaces and all.
