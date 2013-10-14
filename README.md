

Les arguments passés en paramètres de adder() sont mis dans un tableau, on parcourt ce tableau dans le "return function(v)" , et on ajoute le résultat de la fonction a vretour que l'on retourne.

	function adder(){
		var args = Array.prototype.slice.call(arguments);
		var vretour=0;
	
		return function(v) {
			args.forEach(function(val) {
			console.log(vretour + ' ' + val(v));
			vretour += val(v);
		})
		return vretour;
	  }
	}


Utilisation d'une closure pour effectuer une multiplication.

	function mult(v){
		return function(e){
			return v*e;
		}
	}


Même principe que pour mult(v), on utilise une closure pour faire la soustraction.

	function sub(e){
		return function(r) {
			return e-r;
		}
	}

On utilise adder à laquelle on passe le nombre de paramètres souhaité.

	adder(mult(2), sub(2), mult(2))(3);
