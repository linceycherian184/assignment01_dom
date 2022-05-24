//Examining the Document Object//
console.log(document.domain);
console.log(document.url);
console.log(document.title);
document.title="testing";
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10 ]);

//document.all[10].textContent='hello';
console.log(document.forms);
console.log(document.links);
console.log(document.images);
//console.dir(document);

//SELECTORS
var headtit = document.getElementById('header-title');
console.log(headtit);
