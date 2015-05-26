# Tagcloud Plugin for reveal.js

Simple Tag-Cloud Plugin for [reveal.js](https://github.com/hakimel/reveal.js) (framework for easily creating beautiful presentations using HTML)  - Version 0.1.0 - (MIT-license)

![Tag Cloud](https://www.plus-innovations.com/images/tagcloud.jpg)

## Installation

Place the `tagcloud`-directory within the reveal.js `plugin` directory - that's it.

## Usage

With this plugin, you easily can create tagclouds within reveal.js - eather coloured or black&white. 

Just create a section for your next slide. Add a `tagcloud` attribute to your section. Insite the section each item gets a seperate line. In your presentation place e.g. the following code:

```html
<section tagcloud>
    Twitter Bootstrap
    jQuery
    less
    GruntJS
    JSHint
    JSLint
    markdown
    sass
    jade
    coffeescript
    codekit
    livereload
    web-build
    jQuery UI
    mustache
    emmet.io
    bower
    browserstack
    npm
    RequireJS
    socket.io
    jQuery Mobile
    node.js
    Jasmine
 </section>
```

For a black&white tag cloud you can do the same, by just adding a `bw` attribute:

![Tag Cloud](https://www.plus-innovations.com/images/tagcloud-bw.jpg)


```html
<section tagcloud bw>
    Twitter Bootstrap
    jQuery
    less
    ...
    ...
    Jasmine
 </section>
```

If you want your items to appear a little larger, add the `large` attribute:

```html
<section tagcloud large>
    Twitter Bootstrap
    jQuery
    less
    ...
    ...
    Jasmine
</section>
```

If you want to have more control over the size of the tags, you can apply a weighting to each tag. Tags with a higher weight value will appear larger than tags with a lower or no weighting at all:

```html
<section tagcloud>
    <span tagcloud-weight="10">Twitter Bootstrap</span>
    <span tagcloud-weight="3">jQuery</span>
    less
    <span tagcloud-weight="743">GruntJS</span>
    <span>Markdown</span>
</section>
```

## CSS

I personally like a little bit more space between the items of the tag-cloud, so I added


```css
/*********************************************
 * TAGCLOUD
 *********************************************/
span.clouditem {
  padding-left: 0.15em;
  padding-right: 0.15em;
  line-height: 90%;
}
```

to my template CSS

## Comments

If you have ideas or comments, please do not hesitate to contact me.


Happy presentations!

Sincerely,
Sebastian Hildebrandt
http://www.plus-innovations.com


#### Credits

Written by Sebastian Hildebrandt for [reveal.js](https://github.com/hakimel/reveal.js)

Contributers:
Matt Fairbrass(https://github.com/matt-d-rat)

#### License

>The MIT License (MIT)
>
>Copyright (c) 2014 +innovations.
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in
>all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
>THE SOFTWARE.
> 
>Further details see "LICENSE" file.


