/**
 * Created by Nilutpal on 03-12-2015.
 */
//console.log('Online!!!') ;
function placeAnOrder(ordernumber){
   console.log("Customer Order:",ordernumber) ;
   cookAndDeliverFood(function (){
      console.log("Delivered Food order : ", ordernumber) ;
   }) ;
}
// simulate a 5 sec operation
function cookAndDeliverFood(callback){
        setTimeout(callback,3000) ;
}
//simulate user web request
placeAnOrder(1) ;
placeAnOrder(2) ;
placeAnOrder(3) ;
placeAnOrder(4) ;
placeAnOrder(5) ;
placeAnOrder(6) ;
// I love products of jetbrains !!!
console.log(20 == "20") ;
console.log(20 === "20") ;
var Bucky = {
	printFirstName : function(){
		console.log("My name is Bucky") ;
		console.log(this === Bucky) ;
	} 
	
} ;
Bucky.printFirstName() ;
function doSomethingWorthless(){
	console.log("\nI am worthless!!!") ;
	console.log(this === global) ;

}

doSomethingWorthless() ;




