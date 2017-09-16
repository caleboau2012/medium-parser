/**
 * Created by kaylee on 9/16/17.
 */
var request = require('request');
var parser = require('xml2json');

module.exports.parse = function(req, res){
    if(req.body.url.indexOf("http") != -1){
        request(req.body.url, function(error, response, body){
            if(typeof response == "undefined"){
                console.log(error);
                res.json("An error occurred");
            }
            else if(error != null){
                res.json("An error occurred");
            }
            else{
                try{
                    var result = JSON.parse(parser.toJson(body));
                    res.json(result.rss.channel.item);
                }
                catch(e){
                    res.header('Content-Type','text/xml').send(body)
                }
            }
        })
    }
    else{
        res.json("An error occurred");
    }
};