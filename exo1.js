/**
 * TP_JS  Copyright (C) 2013 BOURGES Kevin
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it under certain conditions;
 */
 
//Les arguments passes en paramètres de adder() sont mis dans un tableau, on parcourt ce tableau dans le "return function(v)" , et on ajoute le résultat de la fonction a vretour que l'on retourne.
//Arguments in "arguments" are sliced into a array, and then we loop into this array to add the result of the function into vretour.
 
function adder(){
 
 /// <summary>Calculate the sum of the addition of the parameters</summary>
 /// <param type="Function">The function returning a result to add</param>
 /// <returns type="Number">The result of the addition.</returns>
 
    var args = Array.prototype.slice.call(arguments);
    var vretour=0;

    return function(v) {
        args.forEach(function(val) {
        console.log(vretour + ' ' + val(v));
        vretour += val(v);
    });
    return vretour;
  };
}

//Utilisation d'une closure pour effectuer une multiplication.
//Using a closure to calculate a product.

function mult(v){
 /// <summary>Calculate the product of the first group of parameters including only one number with the second group of parameters including only one number too.</summary>
 /// <param type="Number">The number to multiply</param>
 /// <returns type="Number">The result of the multiplication.</returns>
    return function(e){
        return v*e;
    };
}

//Même principe que pour mult(v), on utilise une closure pour faire la soustraction.
//Same thing than mult(v), we use a closure to calculate the difference.

function sub(e){
 /// <summary>Calculate the difference between the first group of parameters including only one number with the second group of parameters including only one number too.</summary>
 /// <param type="Number">The base number from wich the second will be substracted</param>
 /// <returns type="Number">The result of the substration.</returns>

    return function(r) {
        return e-r;
    };
}

//On utilise adder à laquelle on passe le nombre de parametres souhaite.
//We use adder(), and we give it as many numbers as we want.
adder(mult(2), sub(2), mult(2))(3);
