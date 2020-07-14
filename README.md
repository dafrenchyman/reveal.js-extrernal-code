# reveal.js-external-code

Let's you use code from source files instead of having to copy them into your presentation. I'm using this for a class I'll be teaching in Fall 2020 ([teaching.mrsharky.com](https://teaching.mrsharky.com/)). I was getting tired of putting code examples and then having to change them, and then also change the slides. You'll see a ton of examples of me using this there.

Note: This code uses `fetch` so you can't load code from other domains than the one you're hosting on. This also makes it incompatible with loading code if your just opening the html file on a computer and not via an http server.

My simple workaround for testing it locally:

- Install live-server: `sudo npm install -g live-server`
- Run it from your project folder: `live-server`

## Installation

Copy the `externalcode.js` file into your reveal.js plugins directory (recommended: `plugin/externalcode/externalcode.js`)

## Adding to your presentation

Before the script section that calls `Reveal.initialize({ ...` in your html add the following:

```html
<script src="plugin/externalcode/externalcode.js"></script>
```

Add the plugin to your list of plugins:
```javascript
plugins: [
    Externalcode,
    RevealHighlight,
],
```
Add a `data-code` section to `code` giving the relative location

```html
<pre class="language-python"
><code class="hljs" data-code="python/pandas_examples.py" data-line-numbers="|1|3-5|6|7-13|14|15-21|">
</code></pre>
```
