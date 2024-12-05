---
layout: layout.liquid
title: README
---

# crazy oc ppl assemble

ok lets get this thing rolling

what we need:

- the site
  - still using good ol' 11ty
  - a main page
  - sites page
  - how to join page
    - which includes docs towards users
  - docs of the system (towards ppl who wanna make more webrings)
- the sites
  - site info we need to collect * is required
    - name*
    - url*
    - url directly to the ch page*
    - lang* (en/zh)
    - desc
      - length limit tbd
    - button
      - remember not to hotlink
    - warnings
      - is it 18+? does it have a lot of moving & flashing things?
    - one short ch profile you like most?
      - if this is filled, then
        - picture of ch
        - url of ch
      - also would need a length limit
  - rules
    - at least 1 character profile thats not a sona
    - profiles, not directories of toyhouse links.
    - art directories dont count. if your character profiles only have art in them thats fine, but only an "art" tab on site, no.
    - be able to put widget on your site. im not sure about carrd and stuff but since under there ive decided on the no widget js approach it means you dont need to run js on your site to join so it should be easier
    - both original & fan ch welcome
    - no hate, bigotry etc. this is becoming some sort of internet amulet.
    - chinese and english sites welcome.
      - if so then i also need i18n the main site. no problem ive been meaning to learn how to i18n
      - should i allow more languages if ppl volunteer to help review?
  - how to join
    - pr. makes my life easier
    - google form
    - dm on discord, toyhouse, neocities, whatever
    - discord webhook - onsite form?
- the widget
  - simple & easily customizable
    - which means no iframe
  - js is unavoidable, where to put it
    - ok first
      - we can make each site widget do `href="previous.html?name=url"` and on `previous.html` calculate and direct to whichever site is previous
    - or
      - we can do the calculation on the widget
        - that would require fetching json file from `_data`
        - it can no js on ring site if you do this <https://theorangeone.net/posts/redirecting-static-pages/>
          - but this would require generating a page for each site that gets added
            - well, no big deal
    - how do we deal with having the widget but no json entry (not joined yet or removed)?
      - if first scenario: redirect to a "site not accepted" page on the ring site
      - if second: directly manipulate the widget
    - ummmm i think first scenario. no js on widget, js on ring site.
      - requires users to put their own url on the widget which they can. easy.
