var _ = require('underscore');

var Quest = Parse.Object.extend('PUser');
exports.leader = function(req, res){




var Quest = Parse.Object.extend("PUser");
    var query = new Parse.Query(Quest);
   // var p = req.param('id');
    query.ascending('createdAt');
    query.descending('karmaPts');
   // query.equalTo('objectId', "p");
    query.find({
        success: function(result) {


 for (var i = 0; i < result.length; i++) {
                object = result[i];
                console.log(object.get("name"));
                console.log(object.get("karmaPts"));
              
                      
            }
        
//console.log(result.get("name"));

   

         ListItem = Parse.Object.extend("PUser");
    oquery = new Parse.Query(ListItem);
    var p = req.param('id');
     oquery.equalTo("objectId", p);
    //query.include("pUser");

    oquery.first({
        success: function(results) {

//console.log(results.get("name"));
//console.log(results.get("karmaPts"));




    res.render('leader', {
        url_id :" ",
        result:result,
        my_name:results.get("name"),
        my_rank:results.get("karmaPts")
    });

		},

		error: function(error) {
            console.log("Error: " + error.message);
            notify(standardErrorMessage, "error", standardErrorDuration);
        }
    });

    },

    error: function(error) {
            console.log("Error: " + error.message);
            notify(standardErrorMessage, "error", standardErrorDuration);
        }
        });


};
