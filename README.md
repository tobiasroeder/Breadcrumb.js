# Breadcrumb.js Documentation

### Include this file
``` html
<script src="https://cdn.jsdelivr.net/gh/tobiasroeder/breadcrumb.js@1.0.0/js/breadcrumb.min.js"></script>
```

---

### Syntax ([Example](https://codepen.io/tobiasroeder/pen/agBgYO))

``` html
<div class="breadcrumb-path" data-breadcrumb></div>
```

``` javascript
breadcrumb({
	element: '.breadcrumb-path',
	home: '&#x1F3E0;',
	firstLetter: true,
	hyphen: true,
	hyphenElement: ' - ',
	info: false
});
```

---

### Parameter
 Parameter | Type | Default | Description
--|--|--|--
 element | string |  | Set the element where the breadcrumb has to be written.
 home | string | 'Home' | Replace the default 'Home' value.
 firstLetter | boolean | false | If 'true' the first letter is in uppercase.
 hyphen | boolean | false | If 'true' between the links is a slash.
 hyphenElement | string |  | If hyphen is 'true' and this one is not empty, this will be shown between the links.
 info | boolean | true | If 'false' there's no information about this file in the console.

---

Example here: [https://tobiasroeder.github.io/breadcumbjs](https://tobiasroeder.github.io/breadcrumb)  
[Try it yourself](https://codepen.io/tobiasroeder/pen/agBgYO)
