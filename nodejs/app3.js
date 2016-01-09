
// core modules , while using require don't use './' . core modules are globally defined !!!

var fs = require('fs') ;
fs.writeFileSync("corn.txt" , "Corn is good , corn is life"  ) ;
console.log(fs.readFileSync("corn.txt").toString()) ;


var path = require('path') ;
var website = "Desktop/Nilutpal//index.html" ;

console.log(path.normalize(website)) ;
console.log(path.dirname(website)) ;
console.log(path.basename(website)) ;
console.log(path.extname(website)) ;




console.log(__dirname)  ;
console.log(__filename)  ;
