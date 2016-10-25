var request = require('superagent');

var url = "http://pokeapi.co/api/v2/pokemon";

//var url = "http://upc.edu";
request.get(url).end(function(err,res){
    var objeto = JSON.parse(res.text);
    //console.log(objeto.sprites.front_default);
    console.log(objeto);
});