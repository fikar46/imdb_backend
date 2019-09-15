const imdb = require("../helpers/env");
var request = require('request');
module.exports = {
    search:(req,res)=>{
        var api = imdb.api
        var key = imdb.key
        var {movie,page} = req.query
        
       
        request(api+`?apikey=${key}&s=${movie}&page=${page}`, (error, response, body)=> {
            if(error) {
                throw error;
            }
            else if (!error && response.statusCode == 200) {
              var info = JSON.parse(body)
              if(info.Response == "True"){
                res.send(info);
              }else{
                  if(info.Error == "Something went wrong."){
                      info.Error = "You must input somthing!"
                  }
                  res.send(info);
              }
              
            }
          })

    }
}