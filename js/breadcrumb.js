/*
	Breadcrumb.js v1.1.0
	(c) Tobias Roeder
	github.com/tobiasroeder/Breadcrumb.js
*/

function breadcrumb({
	elmt,
	home,
	capitalFirstLetter,
	hyphen,
	lastItem,
	info
}) {
	// breadcrumb info
	if (info) console.log('%cBreadcrumb v1.1.0\nhttps://tobiasroeder.github.io/Breadcrumb.js', 'color:#39c');

	// check for existing element
	if (!elmt) {
		console.error('Missing \'elmt\'');
		return;
	}

	// set defaults
	home = home ?? 'Home',
		capitalFirstLetter = capitalFirstLetter ?? false,
		hyphen = hyphen ?? ' / ',
		lastItem = lastItem ?? false,
		info = info ?? false;

	let bcElmts = document.querySelectorAll(elmt),
		aHref = '/',
		bcContent = `<a href="/">${home}</a>${hyphen}`;

	// get path items
	let bcItems = location.pathname.split('/').slice(1, -1);

	bcItems.forEach((item, i) => {
		// add path item to the anchor
		aHref += item + '/';
		// set the first letter to uppercase
		if (capitalFirstLetter) item = item.charAt(0).toUpperCase() + item.slice(1);
		// replace last item text
		if (lastItem && (bcItems.length - 1) === i) item = document.querySelector(lastItem).innerText;
		// add item with text in an anchor tag to the content
		bcContent += `<a href="${aHref}">${item}</a>`;
		// only add hyphen element if it's not the last item
		if ((bcItems.length - 1) !== i) bcContent += hyphen;
	});

	// insert into all breadcrumb elements the content
	bcElmts.forEach(elmt => elmt.innerHTML = bcContent);
}