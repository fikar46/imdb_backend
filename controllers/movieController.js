const imdb = require("../helpers/env");
var request = require('request');
module.exports = {
    search:(req,res)=>{
        var api = imdb.api
        var key = imdb.key
        var {movie,page} = req.query
        
       
        request(api+`?apikey=${key}&s=${movie}&page=${page}`, (error, response, body)=> {
            if (!error && response.statusCode == 200) {
              var info = JSON.parse(body)
              // do more stuff
              res.send(info);
            }
          })

    }
}