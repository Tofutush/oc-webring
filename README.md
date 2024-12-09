---
layout: layout.liquid
title: README
---

# JSON site entry template

Make sure to delete comments and stuff since JSON throws a tantrum at them. Also remember to add a comma after the previous entry, but *not* after your own.

```json
{
  "name": "name of website",
  "author": "your name",
  "authorUrl": "(Optional) URL of your personal website, social media, linktree, or stuff",
  "mainUrl": "url of the main page",
  "chUrl": "url straight to the character page",
  "neoUrl": "(If your site is on Neocities) URL of Neocities profile so I can follow it. This will be deleted later.",
  "otherUrls": [ // Like maybe the world description page or something
    "display text": "url",
    ...
  ],
  "lang": "zh|en",
  "desc": "(Optional) Short description of your characters, world, and/or project",
  "tags": [
    "(Optional) Tags like genre and stuff"
  ],
  "icon": "(Optional) an icon, preferrably square but as long as it's not too long or too thin it should be fine. Will be changed after I downloaded it to reflect the local path instead.",
  "button": "(Optional) URL of a 88x31 button. Will be changed after I downloaded it to reflect the local path instead.",
  "cw": "(Optional) Content warnings. Like is it 18+? Does it have flashy lights? Sensitive topics?",
  "featured": { // optional: a featured character. Name and URL are required *if* you wanna fill this.
    "name": "name",
    "url": "url",
    "desc": "Short description",
    "img": "link to a picture. Will be changed after I downloaded it to reflect the local path instead"
  }
}
```
