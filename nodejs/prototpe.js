function User(){
	this.name = "" ;
	this.life = 100 ;
	this.giveLife = function giveLife(targetPlayer ){
		targetPlayer.life += 1 ;
		console.log(this.name + " gave 1 life to " + targetPlayer.name ) ;
	}

}


var Nilutpal = new User() ;
var Raktim = new User() ;
Nilutpal.name = "Nilutpal" ;
Raktim.name  = "Raktim" ;
Nilutpal.giveLife(Raktim) ;
console.log(Raktim.life) ;

User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life -= 3 ;
	console.log(this.name + " just uppercutted " + targetPlayer.name  ) ;

} ;

Nilutpal.uppercut(Raktim) ;
console.log(Raktim.life ) ;

User.prototype.magic =  60 ;
console.log( Nilutpal.magic  ) ;
