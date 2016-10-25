/**
 * Created by boyander on 25/10/16.
 */
var request = require('superagent');

var url = 'https://raw.githubusercontent.com/boyander/practica-cm-5/master/scores.json';
request.get(url).end(function(err, res){
    var scores =JSON.parse(res.text);
    console.log(scores);
});