## Documentation

Breadcrumb.js latest version [1.1.0](https://github.com/tobiasroeder/Breadcrumb.js/releases/tag/1.1.0)

***

### Include this file

```html
<script src="https://cdn.jsdelivr.net/gh/tobiasroeder/breadcrumb.js@1.1.0/js/breadcrumb.min.js"></script>
```

***

### Syntax

```html
<div class="breadcrumb-path"></div>
```
```javascript
// only the 'elmt' parameter is necessary to work
breadcrumb({
  elmt: '.breadcrumb-path',
});

// full
breadcrumb({
  elmt: '.breadcrumb-path',
  home: '&#x1F3E0;', // 🏠
  capitalFirstLetter: true,
  hyphen: ' &gt; ', // >
  lastItem: 'title',
  info: true
});
```

***

### Parameter

Parameter | Type | Default | Description
--- | --- | --- | ---
elmt | string | | Set the element/s where the breadcrumb has to be written.
home | string | 'Home' | Replace the default value
capitalFirstLetter | boolean | false | If `true` the first letter become uppercase.
hyphen | string | ' / ' | Replace the default value
lastItem | boolean/string | false | Replace last item e.g. the `h1` or the `title` ([#1](https://github.com/tobiasroeder/Breadcrumb.js/issues/1))
info | boolean | false | Displays an information in the console

***

[Try it yourself](https://codepen.io/tobiasroeder/pen/agBgYO)
