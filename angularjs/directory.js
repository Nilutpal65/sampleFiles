angular.module('directoryApp',[])
 .controller('directoryController' , function($ scope){
 	$scope.list = [
 	{name : 'Nilutpal'  , age : 20} ,
 	{name : 'Rahul'  , age : 26} ,
 	{name : 'Shubham'  , age : 23} ,
 	{name : 'Bikash'  , age : 20}
 	]
 }) ;