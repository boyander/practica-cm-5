/**
 * Created by boyander on 25/10/16.
 */
var request = require('superagent');

var url = 'https://raw.githubusercontent.com/boyander/practica-cm-5/master/scores.json';
request.get(url).end(function(err, res){
    var scores =JSON.parse(res.text);
    var images = scores.map(function(o){
        return o.image_url;
    })
    console.log(images);
});